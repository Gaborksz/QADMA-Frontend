export interface Product {
    id: number
    partNumber: number
    productName: string
    revision: number
    dateCreated: Date
    dateModified: Date
    creatorId: number
    creatorName: string
    modifierId: number
    modifierName: string
    inspectionPlanId: number
}