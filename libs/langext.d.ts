
interface String {

    /**
     * Prepend string to a string multi times, until reached 
     * the specific length.
     */
    leftPad(el: string, length: number): string;

    /**
     * Append string to a string multi times, until reached
     * the specific length.
     */
    rightPad(el: string, length: number): string;

    /**
     * Judge if a string is in format of E-Mail
     */
    isEMail() : boolean;

    /**
     * Judge if a string is in format of Hex
     */
    isHex() : boolean;

    /**
     * Judge if a string is in format of IP address version 4
     */
    isIPv4() : boolean;

    /**
     * Format data by this format into a string.
     */
    format(target: { [key: string]: string | number; }): string;

    /**
     * Replace all EOL into LF.
     */
    toEndLineOfLF(): string;

    /**
     * Replace all EOL into CR.
     */
    toEndLineOfCR(): string;

    /**
     * Replace all EOL into CRLF.
     */
    toEndLineOfCRLF(): string;
}

interface StringConstructor {

    /**
     * Format data by specific format into a string.
     */
    format(fmt: string, target: { [key: string]: string | number; }): string;

    /**
     * Create a random by specific length and seed.
     */
    random(length: number, seed?: string) : string;
}

interface Buffer {

    writeBuffer(bf: Buffer, pos: number, length?: number): number;

    read(pos: number, length: number): Buffer;
}

interface DateConstructor {

    /**
     * Get the unix timestamp of current time.
     */
    timeNow(): number;

    /**
     * Get the date string in format of yyyy-mm-dd hh:MM:ss
     * of current time.
     */
    dateNow(): string;
}

interface Date {

    /**
     * Get the date string in format of yyyy-mm-dd hh:MM:ss
     * of object.
     */
    getSimpleDate(): string;

    /**
     * Judge if a date is of leap year.
     */
    isLeapYear(): boolean;

    /**
     * Tells how many days in a month (0 ~ 11), in year of this date.
     */
    getDaysInMonth(month: number): number;

    /**
     * Get the Date object of the next month from this Date on.
     */
    nextMonth(): Date;

    /**
     * Get the Date object of the next day from this Date on.
     */
    nextDay(): Date;
}

interface NumberFormatSizeResult {

    "num": string;

    "unit": string;
}

interface Number {

    /**
     * Format a number into size
     */
    formatSize (ac?: number) : NumberFormatSizeResult;
}

interface MatchSubGroup {
    "index": number;
    "value": string;
}

interface MatchResultItem {
    "index": number;
    "value": string;
    "groups": MatchSubGroup[];
}

interface RegExp {

    /**
     * Return all matchable results, with the position of
     * all matched sub item.
     */
    matches(str: string): MatchResultItem[];
}
