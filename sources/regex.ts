interface RegExp {
    matches(str: string): MatchCollection;
}

type Group = {
    index: number, value: string
};
type GroupCollection = Array<Group>;
type Match = {
    index: number, value: string, groups: GroupCollection
};
type MatchCollection = Array<Match>;

RegExp.prototype.matches = function(str: string): MatchCollection {
    let mc: MatchCollection = [];
    // --- 遍历一条条（行）的结果 ---
    let rea: RegExpExecArray;
    while (rea = this.exec(str)) {
        let gc: GroupCollection = [];
        // --- 遍历列 ---
        let i: number = 0;
        let ot: string = rea[0];
        let baseIndex: number = rea.index;
        for (let val of rea) {
            let g: Group;
            if (i === 0) {
                g = {index: rea.index, value: val};
            } else {
                let index: number = ot.indexOf(val);
                g = {index: index + baseIndex, value: val};
                ot = ot.substr(index + val.length);
                baseIndex += index + val.length;
            }
            gc.push(g);
            ++i;
        }
        let m: Match = {index: rea.index, value: rea[0], groups: gc};
        mc.push(m);
    }
    return mc;
};

