var chatting000 = class {
    constructor() { }
    sentencesregexp = {
        /*regexp: /(.*?)[은는이가](.*?)다/gmi,
        interpret:function(){},*/
        savefunc: function (strparam) {
            if (typeof strparam !== 'string') {
                strparam = new String(strparam);
            }
            var data1 = '';
            var data2 = '';
            if (strparam.match(/(.*?)[은는이가] (.*?)[을를] (.*?)([한는])(다|이다)\./gmi) !== null) {
                data1 = strparam.replace(/(.*?)[은는이가] (.*?)[을를] (.*?)([한는])(다|이다)\./gmi, `$1`);
                data2 = strparam.replace(/(.*?)[은는이가] (.*?)[을를] (.*?)([한는])(다|이다)\./gmi, `$3$4`);
                var data3 = strparam.replace(/(.*?)[은는이가] (.*?)[을를] (.*?)([한는])(다|이다)\./gmi, `$2`);
                if (data1 !== '' && data2 !== '') {
                    chatting000.datasobj.save2(data1, data2, '현', data3);
                }
            } else if (strparam.match(/(.*?)[은는이가] (.*?)[을를] (.*?)(.[었였했])다\./gmi) !== null) {
                data1 = strparam.replace(/(.*?)[은는이가] (.*?)[을를] (.*?)(.[었였했])다\./gmi, `$1`);
                data2 = strparam.replace(/(.*?)[은는이가] (.*?)[을를] (.*?)(.[었였했])다\./gmi, `$3$4`);
                var data3 = strparam.replace(/(.*?)[은는이가] (.*?)[을를] (.*?)(.[었였했])다\./gmi, `$2`);
                if (data1 !== '' && data2 !== '') {
                    chatting000.datasobj.save2(data1, data2, '과', data3);
                }
            } else if (strparam.match(/(.*?)[은는이가] (.*?)(.[었였했])다\./gmi) !== null) {
                data1 = strparam.replace(/(.*?)[은는이가] (.*?)(.[었였했])다\./gmi, `$1`);
                data2 = strparam.replace(/(.*?)[은는이가] (.*?)(.[었였했])다\./gmi, `$2$3`);
                if (data1 !== '' && data2 !== '') {
                    chatting000.datasobj.save2(data1, data2, '과');
                }
            } else if (strparam.match(/(.*?)[은는이가] (.*?)([한는])다\./gmi) !== null) {
                data1 = strparam.replace(/(.*?)[은는이가] (.*?)([한는])다\./gmi, `$1`);
                data2 = strparam.replace(/(.*?)[은는이가] (.*?)([한는])다\./gmi, `$2$3`);
                if (data1 !== '' && data2 !== '') {
                    chatting000.datasobj.save2(data1, data2, '현');
                }
            } else if (strparam.match(/(.*?)[은는이가] (.*?)(다|이다)\./gmi) !== null) {
                data1 = strparam.replace(/(.*?)[은는이가] (.*?)(다|이다)\./gmi, `$1`);
                data2 = strparam.replace(/(.*?)[은는이가] (.*?)(다|이다)\./gmi, `$2`);
                if (data1 !== '' && data2 !== '') {
                    chatting000.datasobj.save(data1, data2);
                }
            }
        },
        answerfunc: function (question) {
            var rtv = '';
            if (typeof question !== 'string') {
                question = new String(question);
            }
            var questiontype = (question.match(/(.*?)[은는이가] (누구|무엇)(입니까|이야|야|임|일까|예요|이에요)\?/gmi) !== null);
            if (!questiontype && question.match(/(.*?)[은는이가] (.*?)(입니까|이야|야|임|일까|예요|이에요)\?/gmi) !== null) {
                data1 = question.replace(/(.*?)[은는이가] (.*?)(입니까|이야|야|임|일까|예요|이에요)\?/gmi, `$1`);
                data2 = question.replace(/(.*?)[은는이가] (.*?)(입니까|이야|야|임|일까|예요|이에요)\?/gmi, `$2`);
                rtv = chatting000.datasobj.yes_no(data1, data2);
            } else {
                if (question.match(/(.*?)[은는이가] 누구(입니까|예요|이에요|임|이야|야|일까|)\?/gmi) !== null) {
                    data1 = question.replace(/(.*?)[은는이가] 누구(입니까|예요|이에요|임|이야|야|일까|)\?/gmi, `$1`);
                    data2 = '누구';
                    rtv = chatting000.datasobj.answer(data1, data2);
                }
            }
            return rtv;
        },
        similarword: function (word) {
            var rtv = '';
            chatting000.datasobj.data2s.similarwords.forEach(function (val, idx, arr) {
                if (val.indexOf(word) !== -1) {
                    rtv = (val.indexOf(word) == 0) ? val[1] : val[0];
                    console.log(rtv);
                    return;
                }
            });
            return rtv;
        },
        oppositeword: function (word) {
            var rtv = '';
            chatting000.datasobj.data2s.oppositewords.forEach(function (val, idx, arr) {
                if (val.indexOf(word) !== -1) {
                    rtv = (val.indexOf(word) == 0) ? val[1] : val[0];
                    console.log(rtv);
                    return;
                }
            });
            return rtv;
        },
        oppositewords: function (word) {
            var rtv = [];
            chatting000.datasobj.data2s.oppositewords.forEach(function (val, idx, arr) {
                if (val.indexOf(word) !== -1) {
                    rtv[rtv.length] = (val.indexOf(word) == 0) ? val[1] : val[0];
                    console.log(rtv);
                }
            });
            return rtv;
        },
        similarwords: function (word) {
            var rtv = [];
            chatting000.datasobj.data2s.similarwords.forEach(function (val, idx, arr) {
                if (val.indexOf(word) !== -1) {
                    rtv[rtv.length] = (val.indexOf(word) == 0) ? val[1] : val[0];
                    console.log(rtv);
                }
            });
            return rtv;
        },
        bustrain: function (dataparam) {
            if (!Array.isArray(dataparam)) {
                dataparam = [dataparam];
            }
            dataparam.forEach(function (val, idx, arr) {
                if (typeof val === 'string') {
                    if (val.match(/(.*?)[은는이가] (.*?)[와과] 비슷하다\./gmi) !== null) {
                        chatting000.datasobj.data2s.similarwords.push([val.replace(/(.*?)[은는이가] (.*?)[와과] 비슷하다\./gmi, '$1'), val.replace(/(.*?)[은는이가] (.*?)[와과] 비슷하다\./gmi, '$2')]);
                    }
                    if (val.match(/(.*?)[은는이가] (.*?)[와과] 반대된다\./gmi) !== null) {
                        chatting000.datasobj.data2s.oppositewords.push([val.replace(/(.*?)[은는이가] (.*?)[와과] 반대된다\./gmi, '$1'), val.replace(/(.*?)[은는이가] (.*?)[와과] 반대된다\./gmi, '$2')]);
                    }
                }
            });
        },
    }
    datasobj = {
        datas: {},
        data2s: {
            oppositewords: [['바보', '천재'], ['똑똑한', '멍청한'], ['착한', '나쁜'], ['선한', '악한'], ['독일인', '프랑스인'], ['독일인', '영국인'], ['프랑스인', '영국인'], ['독일인', '스웨덴인'], ['독일인', '오스트리아인'], ['프랑스인', '스웨덴인'], ['영국인', '스웨덴인'], ['오스트리아인', '스웨덴인'], ['프랑스인', '오스트리아인'], ['영국인', '오스트리아인']],
            similarwords: [['바보', '멍청'], ['천재한', '똑똑한'], ['선한', '착한'], ['악한', '나쁜']],
        },
        datas3: ['사람', '물건', '동물', '식물'],
        save: function (data1, data2) {
            if (typeof data1 !== 'string' || data1.length < 1) {
                return;
            }
            if (typeof this.datas[data1] !== 'object' || this.datas[data1] === null) {
                this.datas[data1] = { 1: [], 0: [] };
            }
            if (!Array.isArray(this.datas[data1][1]) || !Array.isArray(this.datas[data1][0])) {
                this.datas[data1] = { 1: [], 0: [] };
            }
            this.datas[data1][1].push(data2);
        },
        save2(data1, data2, data3, data4) {
            if (typeof data1 !== 'string' || data1.length < 1) {
                return;
            }
            if (typeof this.datas[data1] !== 'object' || this.datas[data1] === null) {
                this.datas[data1] = { 1: [], 0: [] };
            }
            if (!Array.isArray(this.datas[data1][1]) || !Array.isArray(this.datas[data1][0])) {
                this.datas[data1] = { 1: [], 0: [] };
            }
            var newobj = [data2, data3];
            if (typeof data4 === 'string') {
                newobj.push(data4);
            }
            this.datas[data1][0].push(newobj);
        },
        yes_no: function (qw1, qw2) {
            if (typeof qw1 !== 'string' || qw1.length < 1) {
                return '';
            }
            if (typeof qw2 !== 'string' || qw2.length < 1) {
                return '';
            }
            if ((typeof this.datas[qw1] !== 'object' || this.datas[qw1] === null) || !Array.isArray(this.datas[qw1][1])) {
                return '이 질문에 대한 데이터가 없습니다.';
            }
            var qw2n = 0;
            var oppositewordsofqw2 = chatting000.sentencesregexp.oppositewords(qw2);
            var similarwordsofqw2 = chatting000.sentencesregexp.similarwords(qw2);
            var qw2oppn = 0;
            this.datas[qw1][1].forEach(function (val, idx, arr) {
                if (val == qw2) {
                    qw2n++
                }
                if (similarwordsofqw2.includes(val)) {
                    qw2n++
                }
                if (oppositewordsofqw2.includes(val)) {
                    qw2oppn++
                }
            });
            if (qw2n < qw2oppn) {
                return '아니오' || false;
            } else if (qw2n == qw2oppn) {
                console.log(similarwordsofqw2 + '|' + qw2n);
                return '아마도 아닐거예요' || true || false;
            } else {
                return '맞습니다' || true;
            }
        },
        answer: function (qw1, qw2) {
            if (typeof qw1 !== 'string' || qw1.length < 1) {
                return '';
            }
            if (typeof qw2 !== 'string' || qw2.length < 1) {
                return '';
            }
            if ((typeof this.datas[qw1] !== 'object' || this.datas[qw1] === null) || !Array.isArray(this.datas[qw1][1]) || !Array.isArray(this.datas[qw1][0])) {
                return '이 질문에 대한 데이터가 없습니다.';
            }
            if (qw2 !== '누구') {
                return '애초에 올바르지 못하거나, 아직 해석하는 기능이 기술적으로 만들어지지 못한 문장입니다.';
            }
            var rtv = '';
            var answerv = this.datas[qw1][1][0] || '';
            var specialarr0 = [];
            var specialidx0 = 0;
            this.datas[qw1][1].forEach(function (val, idx, arr) {
                if (!chatting000.datasobj.datas3.includes(val)) {
                    answerv = val;
                    specialidx0 = idx;
                    specialarr0 = arr;
                    return;
                }
            });
            specialarr0.forEach(function (val1, idx1, arr1) {
                if (idx1 != specialidx0) {

                    answerv = val1 + '인' + answerv;
                }
            });
            rtv = answerv + '입니다.';
            return rtv;
        },
    }
}
var test = {
    bot: new chatting000(),
    test: function () {
        this.bot.sentencesregexp.bustrain(["M자 탈모는 빡빡이와 비슷하다.", "미친 새끼는 봐라 인간이 쓰레기같구나와 비슷하다.", "킹은 킹이 아닌 기물과 반대된다.", "똑똑한 사람은 병신새끼와 비슷하다."]);
        this.bot.sentencesregexp.savefunc("유로봇은 똑똑한 사람이다.");
        this.bot.sentencesregexp.savefunc("유로봇으로 쓰고 무슨유로봇인지 안밝힌것은 개인정보 보호이다.");
    },
    askandanswer: function (question, cbfunc) {
        cbfunc(this.bot.sentencesregexp.answerfunc(question));
    },
}