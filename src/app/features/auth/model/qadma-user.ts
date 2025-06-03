import { QadmaUserAuthority } from "./qadma-user-authority";

export interface QadmaUser {

    "id" : number
    "username" : string
    "authorities" : QadmaUserAuthority[]
}
