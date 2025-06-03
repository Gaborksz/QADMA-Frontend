import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-create-form',
  templateUrl: './product-create-form.component.html',
  styleUrl: './product-create-form.component.css'
})
export class ProductCreateFormComponent {

  productFrom!: FormGroup;
  @Input() product!: Product | null;


  constructor() {

    this.productFrom = new FormGroup({
      id: new FormControl(0),
      partNumber: new FormControl(0),
      productName: new FormControl(''),
      revision: new FormControl(1),
      dateCreated: new FormControl(new Date()),
      dateModified: new FormControl(new Date()),
      creatorId: new FormControl(0),
      creatorName: new FormControl(''),
      modifierId: new FormControl(0),
      modifierName: new FormControl(''),
      inspectionPlanId: new FormControl(0),
    })
  }

  ngOnInit() {
    if (this.product != null) {
      this.productFrom.get('id')?.setValue(this.product.id);
      this.productFrom.get('partNumber')?.setValue(this.product.partNumber);
      this.productFrom.get('productName')?.setValue(this.product.productName);
      this.productFrom.get('revision')?.setValue(this.product.revision);
      this.productFrom.get('dateCreated')?.setValue(this.product.dateCreated);
      this.productFrom.get('dateModified')?.setValue(this.product.dateModified);
      this.productFrom.get('creatorId')?.setValue(this.product.creatorId);
      this.productFrom.get('creatorName')?.setValue(this.product.creatorName);
      this.productFrom.get('modifierId')?.setValue(this.product.modifierId);
      this.productFrom.get('modifierName')?.setValue(this.product.modifierName);
      this.productFrom.get('inspectionPlanId')?.setValue(this.product.inspectionPlanId);
    }
  }

  getPartNumberControl() {
    return this.productFrom.get('partNumber') as FormControl;
  }

  get ProductName() {
    return this.productFrom.get('productName') as FormControl;
  }

  getRevision() {
    this.productFrom.get('revision') as FormControl;
  }

  getDateCreated() {
    this.productFrom.get('dateCreated') as FormControl;
  }

  getDateModified() {
    this.productFrom.get('dateModified') as FormControl;

  }
  getCreatorId() {
    this.productFrom.get('creatorId') as FormControl;
  }

  getCreatorName() {
    this.productFrom.get('creatorName') as FormControl;
  }

  getModifierId() {
    this.productFrom.get('modifierId') as FormControl;
  }

  getModifierName() {
    this.productFrom.get('modifierName') as FormControl;
  }

  getInspectionPlanId() {
    this.productFrom.get('inspectionPlanId') as FormControl;
  }
}
