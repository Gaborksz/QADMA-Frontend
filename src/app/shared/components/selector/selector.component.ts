import { Component, Input } from '@angular/core';
import { BasicFormControl } from '../../../core/model/basic-form-control';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent {

  @Input() label!: string;
  @Input() selectors!: string[];
  @Input() inputControl!: BasicFormControl;
}
