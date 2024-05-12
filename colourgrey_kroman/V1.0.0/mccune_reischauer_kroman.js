/*
* https://github.com/victorteokw/kroman-js/blob/master/kroman.js 에게 감사드립니다.
*/
function kroman_for_client(data) {
    this.data = (data instanceof dataclass) ? data : new dataclass({ ga: null, hih: null, headi: null, bodyi: null, taili: null, headj: null, bodyj: null, tailj: null, });
}
function dataclass({ ga, hih, headi, bodyi, taili, headj, bodyj, tailj }) {
    this.ga = (typeof ga === 'number') ? ga : 0xac00;
    this.hih = (typeof hih === 'number') ? hih : 0xd7a3;
    this.headi = (typeof headi === 'number') ? headi : 588;
    this.bodyi = (typeof bodyi === 'number') ? bodyi : 28;
    this.taili = (typeof taili === 'number') ? taili : 1;
    this.headj = (typeof headj === 'object' && headj !== null) ? headj : {
        0: `g`,
        1: `kk`,
        2: `n`,
        3: `d`,
        4: `tt`,
        5: `r`,
        6: `m`,
        7: `b`,
        8: `pp`,
        9: `s`,
        10: `ss`,
        11: ``,
        12: `j`,
        13: `tch`,
        14: `ch'`,
        15: `k'`,
        16: `t'`,
        17: `p'`,
        18: `h`,
    };
    this.bodyj = (typeof bodyj === 'object' && bodyj !== null) ? bodyj : {
        0: `a`,
        1: `ae`,
        2: `ya`,
        3: `yae`,
        4: `ŏ`,
        5: `e`,
        6: `yŏ`,
        7: `ye`,
        8: `o`,
        9: `wa`,
        10: `wae`,
        11: `oe`,
        12: `yo`,
        13: `u`,
        14: `wŏ`,
        15: `we`,
        16: `wi`,
        17: `yu`,
        18: `ŭ`,
        19: `ŭi`,
        20: `i`,
    };
    this.tailj = (typeof tailj === 'object' && tailj !== null) ? tailj : {
        0: ``,
        1: `k`,
        2: `k`,
        3: `ks`,
        4: `n`,
        5: `nj`,
        6: `nh`,
        7: `t`,
        8: `l`,
        9: `lg`,
        10: `lm`,
        11: `lp`,
        12: `ls`,
        13: `lt`,
        14: `lp`,
        15: `lh`,
        16: `m`,
        17: `p`,
        18: `ps`,
        19: `t`,
        20: `t`,
        21: `ng`,
        22: `t`,
        23: `t`,
        24: `k'`,
        25: `t`,
        26: `p`,
        27: `h`,
    };
}
var kromanData = {
    ga: 0xac00,
    hih: 0xd7a3,
    headi: 588,
    bodyi: 28,
    taili: 1,
    headj: {
        0: `g`,
        1: `kk`,
        2: `n`,
        3: `d`,
        4: `tt`,
        5: `r`,
        6: `m`,
        7: `b`,
        8: `pp`,
        9: `s`,
        10: `ss`,
        11: ``,
        12: `j`,
        13: `tch`,
        14: `ch'`,
        15: `k'`,
        16: `t'`,
        17: `p'`,
        18: `h`,
    },
    bodyj: {
        0: `a`,
        1: `ae`,
        2: `ya`,
        3: `yae`,
        4: `ŏ`,
        5: `e`,
        6: `yŏ`,
        7: `ye`,
        8: `o`,
        9: `wa`,
        10: `wae`,
        11: `oe`,
        12: `yo`,
        13: `u`,
        14: `wŏ`,
        15: `we`,
        16: `wi`,
        17: `yu`,
        18: `ŭ`,
        19: `ŭi`,
        20: `i`,
    },
    tailj: {
        0: ``,
        1: `k`,
        2: `k`,
        3: `ks`,
        4: `n`,
        5: `nj`,
        6: `nh`,
        7: `t`,
        8: `l`,
        9: `lg`,
        10: `lm`,
        11: `lp`,
        12: `ls`,
        13: `lt`,
        14: `lp`,
        15: `lh`,
        16: `m`,
        17: `p`,
        18: `ps`,
        19: `t`,
        20: `t`,
        21: `ng`,
        22: `t`,
        23: `t`,
        24: `k'`,
        25: `t`,
        26: `p`,
        27: `h`,
    }
};
dataclass.prototype = {
    setdata(where, idx, newdata) {
        if (typeof where !== 'string' || typeof idx !== 'number') {
            return false;
        }
        this[where][idx] = newdata;
        return true;
    },
    getdata(where, idx) {
        if (typeof where !== 'string') {
            return;
        } else {
            if (where === 'ga' || where === 'hih' || where === 'headi' || where === 'bodyi' || where === 'taili') {
                return this[where];
            } else if (typeof this[where] === 'object' && this[where] !== null) {
                if (typeof idx !== 'number') {
                    return;
                }
                return this[where][idx];
            }
            return;
        }
    },
};
kroman_for_client.prototype = {
    parse: function (text) {
        var thisdata = this.data;
        var retval = "";
        var lastCharIsHangul = false;
        var headofWord = true;
        var lastChar = '';
        var currFirstChar = '';
        var last_char_is_o_a = false;
        var thereWasLastChar = false;
        var last_char_is_l = false;
        var next_is_vowel = false;
        for (var i = 0; i < text.length; i++) {
            var charCode = text.charCodeAt(i);
            if ((charCode >= thisdata.ga) && (charCode <= thisdata.hih)) {
                var head = Math.floor((charCode - thisdata.ga) / thisdata.headi);
                var headl = Math.floor((charCode - thisdata.ga) % thisdata.headi);
                var body = Math.floor(headl / thisdata.bodyi);
                var tail = Math.floor(headl % thisdata.bodyi);
                next_is_vowel = false;
                var nexthead = (function () {
                    var charCode2 = text.charCodeAt(i + 1); if ((charCode2 >= thisdata.ga) && (charCode2 <= thisdata.hih)) {
                        var head2 = Math.floor((charCode2 - thisdata.ga) / thisdata.headi);
                        var headl2 = Math.floor((charCode2 - thisdata.ga) % thisdata.headi);
                        var body2 = Math.floor(headl2 / thisdata.bodyi);
                        var tail2 = Math.floor(headl2 % thisdata.bodyi);
                        console.log(thisdata.headj[head2]);
                        return thisdata.headj[head2];
                    }
                    return 'X';
                })();
                if (nexthead == '') {
                    console.log(nexthead);
                    next_is_vowel = true;
                }
                currFirstChar = thisdata.headj[head];
                var specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                    + thisdata.tailj[tail]);
                console.log(thisdata.tailj[tail]);
                if (next_is_vowel) {
                    if (tail === 1) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 'g');
                    }
                    if (tail === 7) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 'd');
                    }
                    if (tail === 17) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 'b');
                    }
                    if (tail === 19) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 's');
                    }
                    if (tail === 20) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 'ss');
                    }
                    if (tail === 22) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 'j');
                    }
                    if (tail === 23) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + `ch'`);
                    }
                    if (tail === 24) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + `k'`);
                    }
                    if (tail === 25) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + `t'`);
                        console.log(specialretval);
                    }
                    if (tail === 26) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + `p'`);
                    }
                    if (tail === 27) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + ``);
                    }
                    if (tail === 8) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + `r`);
                    }
                } else {
                    if (tail === 3) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 'k');
                    }
                    /*if (tail === 1) {
                        if (nexthead === 'j') {
                            specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                                + 'kQ');
                        }
                    }
                    if (tail === 4) {
                        if (nexthead === 'b') {
                            specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                                + 'nQ');
                        }
                    }
                    * 위는 숙종, 문법 등을 변환할때 sukjong, munbŏp이 아닌 sukchong, munpŏp이 되도록 열심히 조정했으나, 언제나 예외는 있는 법이라 그냥 주석처리로 취소함.
                    */
                    if (nexthead == 'r') {
                        if (tail == 1) {
                            specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                                + 'ng');
                        }
                    }
                    if (tail === 5) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 'nh');
                    }
                    if (tail === 9) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 'k');
                    }
                    if (tail === 10) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 'm');
                    }
                    if (tail === 11) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 'lh');
                    }
                    if (tail === 12) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 'l');
                        /* 돐 등의 단어를 위해 */
                    }
                    if (tail === 13) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 'lh');
                    }
                    if (tail === 14) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 'ph');
                    }
                    if (nexthead == 's') {
                        if (tail === 20) {
                            specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                                + 's');
                        }
                    }
                    if (tail === 18) {
                        specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                            + 'ph');
                    }
                    if (tail === 4) {
                        if (nexthead === 'r') {
                            specialretval = (thisdata.headj[head] + thisdata.bodyj[body]
                                + 'l');
                        }
                    }
                }
                if (lastChar == 'ng') {
                    if (thisdata.headj[head] == 'r') {
                        specialretval = specialretval.replace('r', 'n');
                    }
                }
                if (thereWasLastChar) {
                    if (lastChar === 'n' && thisdata.headj[head] === 'g') {
                        specialretval = `'` + specialretval;
                    }
                }
                if (headofWord) {
                    console.log(currFirstChar);
                    if (currFirstChar == 'g') {
                        specialretval = specialretval.replace('g', 'k');
                        console.log(specialretval);
                    } else if (currFirstChar == 'd') {
                        specialretval = specialretval.replace('d', 't');
                    } else if (currFirstChar == 'b') {
                        specialretval = specialretval.replace('b', 'p');
                    } else if (currFirstChar == 'j') {
                        specialretval = specialretval.replace('j', 'ch');
                    }
                }
                if (last_char_is_o_a) {
                    if (currFirstChar == '' && thisdata.bodyj[body] == 'e') {
                        specialretval = specialretval.replace('e', 'ë');
                    }
                }
                if (last_char_is_l) {
                    if (currFirstChar == 'r') {
                        specialretval = specialretval.replace('r', 'l');
                    }
                }
                if (currFirstChar == 'ch' || currFirstChar == 'j' || currFirstChar == `ch'`) {
                    specialretval = specialretval.replace('y', '');
                }
                if (lastChar == 't') {
                    if (head == 3) {
                        specialretval = specialretval.replace('d', 't');
                    }
                }
                retval += specialretval;
                lastCharIsHangul = true;
                headofWord = false;
                thereWasLastChar = false;
                last_char_is_o_a = false;
                last_char_is_l = false;
                if (thisdata.tailj[tail] !== '') {
                    thereWasLastChar = true;
                    if (thisdata.tailj[tail] === 'l') {
                        last_char_is_l = true;
                    }
                } else {
                    if (thisdata.bodyj[body] === 'o' || thisdata.bodyj[body] === 'a') {
                        last_char_is_o_a = true;
                    }
                }
                lastChar = thisdata.tailj[tail];
                if (tail === 4) {
                    if (nexthead === 'r') {
                        last_char_is_l = true;
                    }
                }
                if (nexthead == 'r') {
                    if (tail == 1) {
                        lastChar = 'ng';
                    }
                }
                if (nexthead != '') {
                    if (tail == 20) {
                        lastChar = 't';
                    }
                }
            } else {
                lastCharIsHangul = false;
                lastChar = text[i];
                if (text[i] == ' ') {
                    headofWord = true;
                }
                retval += text[i];
            }
        }
        retval = retval.replaceAll(`Qd`, `t`).replaceAll(`Qg`, `k`).replaceAll(`Qb`, `p`).replaceAll(`Qj`, `ch`)
            .replaceAll(`hd`, `t'`).replaceAll(`hg`, `k'`).replaceAll(`hb`, `p'`).replaceAll(`hj`, `ch'`)
            .replaceAll(`tm`, `nm`).replaceAll(`tn`, `nn`).replaceAll(`pm`, `mm`).replaceAll(`pn`, `mn`).replaceAll(`km`, `ngm`).replaceAll(`kn`, `ngn`)
            .replaceAll(`Xg`, `kk`).replaceAll(`Xd`, `tt`).replaceAll(`Xb`, `pp`).replaceAll(`Xs`, `ss`).replaceAll(`Xj`, `tch`)
            .replaceAll(`th`, `t'`)
            .replaceAll(`swi`, `shwi`);
        return retval;
    }
}