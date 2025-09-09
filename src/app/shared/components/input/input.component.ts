import { Component, ElementRef, EventEmitter, Input, Optional, Output, SkipSelf } from '@angular/core';
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

  constructor(){}


  onBlur() {
    this.blur.emit();
  }  
}
