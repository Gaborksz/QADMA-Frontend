import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasicFormControl } from '../../../../core/model/basic-form-control';
import { InspectionSearchCriteria } from '../../../../features/home/modules/inspection-management/model/inspection-search-criteria';
import { InspectionTemplateService } from '../../../../core/services/inspection-template.service';

@Component({
  selector: 'app-inspection-template-search',
  templateUrl: './inspection-template-search.component.html',
  styleUrl: './inspection-template-search.component.css'
})
export class InspectionTemplateSearchComponent {


  searchForm!: FormGroup;
  searchFormValid: boolean = false;


  constructor(private inspectionTemplateService: InspectionTemplateService) {

    this.searchForm = new FormGroup({
      idSearch: new FormGroup({}),
      title: new BasicFormControl(''),
      revisionSearch: new FormGroup({}),
      dateCreatedFrom: new BasicFormControl(),
      dateCreatedTo: new BasicFormControl(),
      dateCreatedSelector: new BasicFormControl(),
      dateModifiedFrom: new BasicFormControl(),
      dateModifiedTo: new BasicFormControl(),
      dateModifiedSelector: new BasicFormControl(),
      createdBy: new BasicFormControl(""),
      modifiedBy: new BasicFormControl(""),
      specificationDescription: new BasicFormControl(),
      specificationValueSearch: new FormGroup({}),
      plusToleranceSearch: new FormGroup({}),
      minusToleranceSearch: new FormGroup({})
    })

    this.searchForm.statusChanges.subscribe(status => {
      this.searchFormValid = status === 'VALID';
    });
  }


  search() {

    const raw = this.searchForm.getRawValue();
    const searchCriteria = InspectionSearchCriteria.fromFormValue(raw);

    console.log('Searching with criteria:', searchCriteria);

    this.inspectionTemplateService
      .searchInspectionTemplates(searchCriteria).subscribe(response => {
        console.log('Search results:', response);
      });
  }


  getFormControl(controlName: string): BasicFormControl {
    return this.searchForm.get(controlName) as BasicFormControl;
  }


  getFormGroup(groupName: string): FormGroup {
    return this.searchForm.get(groupName) as FormGroup;
  }
}
