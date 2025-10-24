import { Comparable } from "./comparable";
import { QadmaUserAuthority } from "./qadma-user-authority";
import { QadmaUserDTO } from "./qadma-user-dto";


export class QadmaUser implements Comparable<QadmaUser> {

    constructor(
        public id: number = 0,
        public username: string = '',
        public authorities: QadmaUserAuthority[] = []
    ) { }


    equalTo(other: QadmaUser): boolean {

        if (!other) return false;

        if (this.id !== other.id || this.username !== other.username) return false;

        const auth1 = this.authorities ?? [];
        const auth2 = other.authorities ?? [];

        if (auth1.length !== auth2.length) return false;

        if (auth1.length === 0) return true;

        const sorted1 = [...auth1].sort();
        const sorted2 = [...auth2].sort();

        return sorted1.every((val, i) => val === sorted2[i]);
    };


    static fromDTO(userDTO: QadmaUserDTO): QadmaUser {

        const user = new QadmaUser();
        Object.assign(user, userDTO);
        return user;
    }

    static toDTO(user: QadmaUser): QadmaUserDTO {

        const userDTO = new QadmaUser();
        Object.assign(userDTO, user);
        return user;
    }
}