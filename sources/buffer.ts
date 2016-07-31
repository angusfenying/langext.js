/// <reference path="../typings/langext.d.ts"/>
/// <reference path="../typings/tsd.d.ts"/>

if (typeof(Buffer) != 'undefined') {

    Buffer.prototype.writeBuffer = function(bf: Buffer, pos: number, length?: number): number {
        return bf.copy(this, pos, 0, length);
    };

    Buffer.prototype.read = function(pos: number, length: number): Buffer {
        return this.slice(pos, pos + length);
    };
}
