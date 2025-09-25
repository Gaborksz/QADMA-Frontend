import { QadmaUser } from "../../../../../core/model/qadma-user";
import { IInspectionPlan } from "./iinspection-plan";

export class InspectionPlan implements IInspectionPlan {

    constructor(
        public id: number = 0,
        public revision: number = 1,
        public dateCreated: Date = new Date(),
        public createdBy: QadmaUser = new QadmaUser(),
        public dateModified: Date = new Date(),
        public modifiedBy: QadmaUser = new QadmaUser()
    ) { }
}
