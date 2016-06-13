
interface String {
    /** Prepend string to a string multi times, until reached the specific length */
    leftPad(el: string, length: number): string;

    /** Append string to a string multi times, until reached the specific length */
    rightPad(el: string, length: number): string;

    /** Judge if a string is in format of E-Mail */
    isEMail() : boolean;

    /** Judge if a string is in format of Hex */
    isHex() : boolean;

    /** Judge if a string is in format of IP address version 4 */
    isIPv4() : boolean;
}

interface StringConstructor {
    /** Create a random by specific length and seed. */
    random(length: number, seed?: string) : string;
}

interface DateConstructor {
    /** Get the unix timestamp of current time. */
    timeNow(): number;

    /** Get the date string in format of yyyy-mm-dd hh:MM:ss of current time. */
    dateNow(): string;
}

interface Date {
    /** Get the date string in format of yyyy-mm-dd hh:MM:ss of object. */
    getSimpleDate(): string;
}

interface NumberFormatSizeResult {
    "num": string;
    "unit": string;
}

interface Number {
    /** Format a number into size */
    formatSize (ac?: number) : NumberFormatSizeResult;
}
