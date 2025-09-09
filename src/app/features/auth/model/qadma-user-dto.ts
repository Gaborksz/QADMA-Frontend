import { QadmaUserAuthority } from "./qadma-user-authority";

export interface QadmaUserDTO {

    "id" : number
    "username" : string
    "authorities" : QadmaUserAuthority[]
}
