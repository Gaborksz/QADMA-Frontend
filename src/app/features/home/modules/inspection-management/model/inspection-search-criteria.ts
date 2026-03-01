import { QadmaUser } from "../../../../../core/model/qadma-user";
import { NumberSearchSelectorOption } from "../../../../../shared/model/number-search-selector";

export class InspectionSearchCriteria {

    public idSearch = {
        from: 0,
        to: 0,
        selector: '' as NumberSearchSelectorOption
    };

    public revisionSearch = {
        from: 0,
        to: 0,
        selector: '' as NumberSearchSelectorOption
    };

    public title? = '';
    public specificationDescription? = '';

    public dateCreatedFrom?: Date | null = null;
    public dateCreatedTo?: Date | null = null;
    public dateCreatedSelector? = '';
    public dateModifiedFrom?: Date | null = null;
    public dateModifiedTo?: Date | null = null;
    public dateModifiedSelector? = '';

    public createdBy?: QadmaUser | null = null;
    public modifiedBy?: QadmaUser | null = null;

    public specificationValueSearch = {
        from: 0,
        to: 0,
        selector: '' as NumberSearchSelectorOption
    };

    public plusToleranceSearch = {
        from: 0,
        to: 0,
        selector: '' as NumberSearchSelectorOption
    };

    public minusToleranceSearch = {
        from: 0,
        to: 0,
        selector: '' as NumberSearchSelectorOption
    }


    static fromFormValue(formValue: any): InspectionSearchCriteria {

        if (!formValue) {
            return new InspectionSearchCriteria();
        };

        const criteria: InspectionSearchCriteria = new InspectionSearchCriteria();

        if (formValue.idSearch) {
            this.setNumberSearchValues(formValue.idSearch, criteria.idSearch);
        }

        criteria.title = formValue.title;

        if (formValue.revisionSearch) {
            this.setNumberSearchValues(formValue.revisionSearch, criteria.revisionSearch);
        }


        if (formValue.dateCreatedFrom) {
            criteria.dateCreatedFrom = new Date(formValue.dateCreatedFrom);
        }
        if (formValue.dateCreatedTo) {
            criteria.dateCreatedTo = new Date(formValue.dateCreatedTo);
        }

        criteria.dateCreatedSelector = formValue.dateCreatedSelector;


        if (formValue.dateModifiedFrom) {
            criteria.dateModifiedFrom = new Date(formValue.dateModifiedFrom);
        }
        if (formValue.dateModifiedTo) {
            criteria.dateModifiedTo = new Date(formValue.dateModifiedTo);
        }

        criteria.dateModifiedSelector = formValue.dateModifiedSelector;


        if (formValue.createdBy) {
            criteria.createdBy = formValue.createdBy;
        }

        if (formValue.modifiedBy) {
            criteria.modifiedBy = formValue.modifiedBy;
        }


        criteria.specificationDescription = formValue.specificationDescription;

        if (formValue.specificationValueSearch) {
            this.setNumberSearchValues(formValue.specificationValueSearch, criteria.specificationValueSearch);
        }

        if (formValue.plusToleranceSearch) {
            this.setNumberSearchValues(formValue.plusToleranceSearch, criteria.plusToleranceSearch);
        }

        if (formValue.minusToleranceSearch) {
            this.setNumberSearchValues(formValue.minusToleranceSearch, criteria.minusToleranceSearch);
        }

        return criteria;
    }


    private static setNumberSearchValues(formValueNumberSearch: any, criteriaNumberSearch: any) {

        if (formValueNumberSearch) {

            const { fromNumber, toNumber, selector } = formValueNumberSearch;

            criteriaNumberSearch.from = fromNumber !== null && fromNumber !== '' ? Number(fromNumber) : 0;
            criteriaNumberSearch.to = toNumber !== null && fromNumber !== '' ? Number.parseInt(toNumber) : 0;
            criteriaNumberSearch.selector = selector !== null ? selector : '' as NumberSearchSelectorOption;
        }
    }
}