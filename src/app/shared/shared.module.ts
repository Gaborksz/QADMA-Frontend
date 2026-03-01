import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { TextInputDropdownSearchComponent } from './components/text-input-dropdown-search/text-input-dropdown-search.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { DynamicDateFilterComponent } from './components/dynamic-date-filter/dynamic-date-filter.component';
import { NumberSearchComponent } from './components/number-search/number-search.component';
import { SelectorComponent } from './components/selector/selector.component';


@NgModule({
  declarations: [
    InputComponent, DynamicDateFilterComponent, TextInputDropdownSearchComponent, UserInputComponent, NumberSearchComponent, SelectorComponent],
  imports: [
    CommonModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    DynamicDateFilterComponent,
    TextInputDropdownSearchComponent,
    UserInputComponent, NumberSearchComponent, SelectorComponent]
})
export class SharedModule {
}
