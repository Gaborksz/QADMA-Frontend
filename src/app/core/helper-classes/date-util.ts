
export class DateUtil {

    static dateAsString(date: Date | null): string {

        if (date && date instanceof Date) {
            return date.toISOString().substring(0, 10);
        }

        return '';
    }
}