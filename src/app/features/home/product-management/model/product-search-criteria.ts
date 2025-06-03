export interface ProductSearchCriteria {
      id: number
      partNumber: number
      productName: string
      revision: number
      dateCreatedSelector: string
      dateCreatedFrom: Date
      dateCreatedTo: Date
      dateModifiedSelector: string
      dateModifiedFrom: Date
      dateModifiedTo: Date
      createdBy: number
      modifiedBy: number
}