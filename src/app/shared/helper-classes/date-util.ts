import { formatDate } from "@angular/common";

export class DateUtil {

    static dateAsString(date: Date): string {
        return date.toISOString().substring(0,10);
    }
}