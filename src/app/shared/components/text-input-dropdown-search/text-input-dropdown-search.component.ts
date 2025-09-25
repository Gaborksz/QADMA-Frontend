import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { normalize } from '../../../core/helper-classes/string-util';


type Primitive = number | string | boolean;

@Component({
  selector: 'app-text-input-dropdown-search',
  templateUrl: './text-input-dropdown-search.component.html',
  styleUrl: './text-input-dropdown-search.component.css'
})
export class TextInputDropdownSearchComponent {

  private destroy$ = new Subject<void>();

  @Input() controlToSet!: FormControl;
  @Input() dataSourceFn!: (searchTerm: string) => Observable<any[]>;
  @Input() valueColumnName!: string;
  @Input() displayColumnName!: string;
  @Input() displayLabel!: string;

  searchControl = new FormControl();
  table: any[] = [];
  columnHeaders: string[] = [];
  displayValue = '';
  noResultsFound = false;



  ngOnInit() {
    this.subscribeToControl();
  }

  subscribeToControl() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),                                            // Wait for 300ms of silence before firing
        tap((searchTerm: string) => {
          if (searchTerm.length <= 3) {
            this.table = [];
            this.columnHeaders = [];
            this.noResultsFound = false;
            this.controlToSet.setValue('');
          }
        }),
        distinctUntilChanged(),                                       // Only emit if the value has changed
        filter((searchTerm: string) => searchTerm.length > 3 &&
          searchTerm.trim().toLowerCase() !== normalize(this.displayValue)),
        switchMap((searchTerm) => {                                   // Cancels previous request
          return this.dataSourceFn(searchTerm);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(data => {
        this.displayValue = '';
        this.table = data;
        this.generateTableColumnHeaders();
        this.noResultsFound = this.table.length === 0;
      });
  }


  generateTableColumnHeaders() {
    if (this.table != null && this.table.length > 0) {
      const firstEntry = this.table[0];

      if (this.isRecord(firstEntry)) {
        this.columnHeaders = Object.keys(firstEntry);
      }
    }
  }


  setValues(chosenValue: string, displayValue: string) {
    this.displayValue = String(displayValue);
    this.controlToSet.setValue(chosenValue);
    this.searchControl.setValue(displayValue);
    this.table = [];
  }




  onBlur() {
    const userInput = normalize(this.searchControl.value);
    const tableValue = this.table.length === 1 ? normalize(this.table[0][this.displayColumnName]) : null;

    if (tableValue !== null && userInput === tableValue) {
      this.controlToSet.setValue(this.table[0][this.valueColumnName]);
      this.displayValue = tableValue;
      this.table = [];
    } else if (userInput !== this.displayValue) {
      this.searchControl.setValue('');
      this.controlToSet.setValue('');
    }

    this.noResultsFound = false;
  }


  isRecord(value: unknown): value is Record<string, Primitive> {

    if (value != null && typeof value === 'object' && !Array.isArray(value)) {
      return true;
    }
    return false;
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  getControlToSet = (): AbstractControl => {
    return this.controlToSet;
  }

  getValueColumnName = (): string => {
    return this.valueColumnName;
  }

  getDisplayColumnName = (): string => {
    return this.displayColumnName;
  }
}
