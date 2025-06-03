import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Input() inputControl = new FormControl();
  @Input() label = '';
  @Input() controlType = '';
  @Output() blur = new EventEmitter();


  onBlur() {
    this.blur.emit();
  }  
}
