import { QadmaUser } from "../../../../../core/model/qadma-user";

export class InspectionPlan {

    constructor(
        public id: number = 0,
        public revision: number = 1,
        public dateCreated: Date = new Date(),
        public createdBy: QadmaUser = new QadmaUser(),
        public dateModified: Date = new Date(),
        public modifiedBy: QadmaUser = new QadmaUser()
    ) { }
}
