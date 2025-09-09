import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { UserSelectInputComponent } from './components/user-select-input/user-select-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicDateFilterComponent } from './components/dynamic-date-filter/dynamic-date-filter.component';
import { TextInputDropdownSearchComponent } from './components/text-input-dropdown-search/text-input-dropdown-search.component';
import { DateUtil } from './helper-classes/date-util';



@NgModule({
  declarations: [
    InputComponent, UserSelectInputComponent, DynamicDateFilterComponent, TextInputDropdownSearchComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule],
  exports: [InputComponent, DynamicDateFilterComponent,TextInputDropdownSearchComponent]
})
export class SharedModule { }
