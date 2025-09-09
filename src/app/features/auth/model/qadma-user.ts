import { QadmaUserAuthority } from "./qadma-user-authority";
import { QadmaUserDTO } from "./qadma-user-dto";

export class QadmaUser {

    id : number = 0;
    username : string = '';
    authorities : QadmaUserAuthority[] = [];


    constructor () {};


    static fromDTO(userDTO: QadmaUserDTO): QadmaUser {
        
        const user = new QadmaUser();        
        Object.assign(user, userDTO);
        return user;
    }
}