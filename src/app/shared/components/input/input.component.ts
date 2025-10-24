import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Input() label = '';
  @Input() inputControl!: FormControl;
  @Input() controlType = '';
  @Input() textarea = false;

  @Output() blur = new EventEmitter();
  @Output() valueChange = new EventEmitter<string>()


  ngOnInit() {
    this.inputControl.valueChanges.subscribe(value => {
      this.valueChange.emit(value)
    });
  }


  onBlur() {
    this.blur.emit();
  }
}

