
var shootinggamegame = {
    willshootinggamemove: false,
    objects: {
        shootinggame: document.getElementById("naration"),
        yongjang: document.getElementById("yongjang"),
        weapon: document.getElementById("pistol_bg"),
        newweapon: document.getElementById("pistol_0"),
    },
    points: 0,
    start(callback) {
        if (this.willshootinggamemove == false) {
            this.willshootinggamemove = true;
            document.getElementById("startBtn").innerHTML = "게임 끝내기";
            this.objects.shootinggame.src = './files/img/mr_naration.png';
            window.setTimeout(function () {
                if (!shootinggamegame.gameoverv) {
                    shootinggamegame.gameover(false);
                    var next000 = (shootinggamegame.levelnow < 6) ? ` onclick="document.getElementById('startBtn').click();document.getElementById('closemodal').click()"` : ``;
                    shootinggamegame.alimchang(shootinggamegame.msgs["yongjang"] + "..." + `<p class="gameover"><span>You lost...</span><br><span ${next000}>play again | your level:${shootinggamegame.levels[shootinggamegame.levelnow].levelname}</span></p>`);
                }
            }, 18750);
        } else {
            this.willshootinggamemove = false;
            document.getElementById("startBtn").innerHTML = "플레이하기";
        }
        if (this.gameoverv == false) {
            this.gameoverv = true;
        } else {
            this.gameoverv = false;
        }
        callback(this);
    },
    shootinggamemovepr(to, speed) {
        this.objects.shootinggame.style.top = (`calc(var(--displaywidth) * ${to.y * speed})`);
    },
    msgs: {
        yongjang: `<p><span style="font-size: 200%;">메롱 날 맞힐수 있냐 병☆신아 조까라 으하하하하</span><span>-목표물-</span></p>`,
        pok4: `<p><img src="./files/img/fuckednaration.png" width="300" style="background:url('./files/img/pokpal.gif')"><br> <span style="font-size:250%;">목표물 총맞고 폭☆4</span></p>`,
    },
    shootinggamemove2(from, plus) {
        if (this.willshootinggamemove == true) {
            if (from.x + plus.x < 0 || from.y + plus.y < 0) {
                if (from.x + plus.x < 0 && from.y + plus.y >= 0) {

                    function myfunction(timestamp) { shootinggamegame.shootinggamemovepr({ x: 0, y: from.y + plus.y }) }
                    requestAnimationFrame(myfunction);
                } else if (from.x + plus.x < 0 && from.y + plus.y < 0) {

                    function myfunction(timestamp) { shootinggamegame.shootinggamemovepr({ x: 0, y: 0 }) }
                    requestAnimationFrame(myfunction);
                } if (from.x + plus.x >= 0 && from.y + plus.y < 0) {

                    function myfunction(timestamp) { shootinggamegame.shootinggamemovepr({ x: from.x + plus.x, y: 0 }) }
                    requestAnimationFrame(myfunction);
                }
            } if (from.x + plus.x > window.innerWidth || from.y + plus.y > window.innerHeight) {
                if (from.x + plus.x > window.innerWidth && from.y + plus.y <= window.innerHeight) {

                    function myfunction(timestamp) { shootinggamegame.shootinggamemovepr({ x: 0, y: from.y + plus.y }) };

                    requestAnimationFrame(myfunction);
                } else if (from.x + plus.x > window.innerWidth && from.y + plus.y > window.innerHeight) {

                    function myfunction(timestamp) { shootinggamegame.shootinggamemovepr({ x: 0, y: 0 }) };
                    requestAnimationFrame(myfunction);
                } if (from.x + plus.x <= window.innerWidth && from.y + plus.y > window.innerHeight) {

                    function myfunction(timestamp) { shootinggamegame.shootinggamemovepr({ x: from.x + plus.x, y: 0 }) }
                    requestAnimationFrame(myfunction);
                }
            } else {
                function myfunction(timestamp) { shootinggamegame.shootinggamemovepr({ x: from.x + plus.x, y: from.x + plus.y }) };
                requestAnimationFrame(myfunction);
            }
            return true;
        } else {
            return false;
        }
    },
    panghyang: -1,
    numbers: {
        x: 0,
        y: 0,
    },
    returnposnumber(timestamp, xy) {
        this.numbers.x += this.panghyang;
        this.numbers.y += this.panghyang;
        return { x: (xy.x + this.panghyang - 20), y: (xy.y + this.panghyang - 20) };
    },
    levels: {
        0: {
            levelname: "난이도0",
            desc: `속도는 css스타일로 목표물 위치가 바뀔때 원래 정해진 값의 10분의1만큼 바뀌는 속도로, 매우 느림. 이 난이도는 정말정말 쉽게 깰수 있다.`,
            speed: 4 / 15,
        },
        1: {
            levelname: "난이도1",
            desc: `속도는 css스타일로 목표물 위치가 바뀔때 원래 정해진 값의 8분의1만큼 바뀌는 속도로, 느림. 이 난이도는 정말 쉽게 깰수 있다.`,
            speed: 2 / 6,
        },
        2: {
            levelname: "난이도2",
            desc: `속도는 css스타일로 목표물 위치가 바뀔때 원래 정해진 값의 5분의1만큼 바뀌는 속도로,약간 느림.  이 난이도는 꽤 쉽게 깰수 있다.`,
            speed: 15 / 4,
        },
        3: {
            levelname: "난이도3",
            desc: `속도는 css스타일로 목표물 위치가 바뀔때 원래 정해진 값의 4분의1만큼 바뀌는 속도로, 보통. 이 난이도는 대충 쉽게 깰수 있을것이다.`,
            speed: 2 / 3,
        },
        4: {
            levelname: "난이도4",
            desc: `속도는 css스타일로 목표물 위치가 바뀔때 원래 정해진 값의 2분의1만큼 바뀌는 속도로, 약간 빠름. 이 난이도는 그래도 깨는데 아무리 늦어도 2분이상의 노력이 필요하지 않을것이다..`,
            speed: 4 / 3,
        },
        5: {
            levelname: "난이도5",
            desc: `속도는 css스타일로 목표물 위치가 바뀔때 원래 정해진 값만큼 바뀌는 속도로, 빠름. 아주 어렵다. 이 난이도는 힘들게 깰수 있다.`,
            speed: 8 / 3,
        },
        6: {
            levelname: "난이도 목표물이 우사인볼트가 된 난이도",
            desc: `속도는 css스타일로 목표물 위치가 바뀔때 원래 정해진 값의 2배만큼 바뀌는 속도로, 매우 빠름. 이 난이도까지 깨고 누구나 만렙을 달성할수 있다는건 보장 못하지만,우사인볼트의 속도를 체감할수 있다는건 믿을수 있게 보장한다.`,
            speed: 3,
        }
    },
    levelnow: 0,
    timeslll: 0,
    shootinggamemove(from, plus) {
        function myfunction(timestamp) {
            if (shootinggamegame.willshootinggamemove) {

                if (shootinggamegame.objects.shootinggame.offsetTop <= 0) {
                    shootinggamegame.panghyang = 1;
                }
                if (shootinggamegame.objects.shootinggame.offsetTop + shootinggamegame.objects.shootinggame.offsetHeight >= 1500) {
                    shootinggamegame.panghyang = -1;
                }
                shootinggamegame.shootinggamemovepr(shootinggamegame.returnposnumber(timestamp, { x: shootinggamegame.numbers.x, y: shootinggamegame.numbers.y }), shootinggamegame.levels[shootinggamegame.levelnow].speed);
                requestAnimationFrame(myfunction);
            }
            shootinggamegame.timeslll += 1;
        }
        requestAnimationFrame(myfunction);

    },
    rounds: 7,
    play() {
        shootinggamegame.shootinggamemove({ x: this.objects.shootinggame.style.left.replace(/calc\(var\(--displaywidth\) \* (.*)\)/gi, Number((/$1/ + "").replace(`/`, ``).replace(`/`, ``))), y: this.objects.shootinggame.style.top.replace(/calc\(var\(--displaywidth\) \* (.*)\)/gi, Number((/$1/ + "").replace(`/`, ``).replace(`/`, ``))), }, { x: 5, y: 5 });
    },
    kutkonpok4(param1) {
        this.alimchang(this.msgs["pok4"] + param1);
    },
    alimchang(msg) {
        document.getElementsByClassName("gameovermodalbg")[0].style.display = "block";
        document.getElementById("yongjang").innerHTML = msg;
    },
    gameoverv: true,
    firing() {
        if (this.gameoverv == false) {

            if (this.objects.weapon.offsetTop >= (this.objects.shootinggame.offsetTop) && (this.objects.shootinggame.offsetTop + (this.objects.shootinggame.offsetHeight)) >= (this.objects.weapon.offsetTop + (this.objects.weapon.offsetHeight))) {
                console.log(this.objects.shootinggame.offsetTop);
                shootinggamegame.objects.shootinggame.src = './files/img/fuckednaration.png';
                shootinggamegame.objects.shootinggame.style.backgroundImage = `url('./files/img/pokpal.gif')`;
                this.gameover(true);
                if (this.levelnow < 6) this.levelnow += 1;
                document.getElementById("leveldiv").innerHTML = shootinggamegame.levels[shootinggamegame.levelnow].levelname;
                document.getElementById("leveldescdiv").innerHTML = shootinggamegame.levels[shootinggamegame.levelnow].desc;
            } else {
                var next000 = (this.levelnow < 6) ? ` onclick="document.getElementById('startBtn').click();document.getElementById('closemodal').click()"` : ``;
                this.alimchang(this.msgs["yongjang"] + "..." + `<p class="gameover"><span>You lost...</span><br><span ${next000}>play again | your level:${this.levels[this.levelnow].levelname}</span></p>`);
                this.gameover(false);
            }
            document.getElementById("startBtn").innerHTML = "게임 시작하기";

        }



    },
    updatepoints() {
        document.getElementById('showpoints').innerHTML = this.points;
    },
    gameover(youwon) {
        if (!youwon) {
            this.points -= 5;
        }
        else {
            if (youwon == true) {
                this.points += 10;
                var gameovertext = (this.levelnow < 6) ? "NEXT" : "GAME OVER";
                var next000 = (this.levelnow < 6) ? ` onclick="document.getElementById('startBtn').click();document.getElementById('closemodal').click()"` : ``;
                this.kutkonpok4(`<p class="gameover"><span>You won!!! | your level:${this.levels[this.levelnow].levelname}</span><br><span ${next000}>${gameovertext}</span></p>`);
                document.getElementById('kim_tu_han_death').pause();
                document.getElementById('kim_tu_han_death').currentTime = 0;
            } else {
            }

            document.getElementsByClassName("gameovermodalbg")[0].style.display = "block";
        }
        this.updatepoints();
        this.gameoverv = true;
    },
    inloadingtomagazine: false,
    weaponloading(callback) {
        this.inloadingtomagazine = true;
        window.setTimeout(function () {
            callback();
            shootinggamegame.inloadingtomagazine = false;
        }, 200);
    },

}
window.addEventListener("resize", function (e) {
    document.querySelector(':root').style.setProperty("--displaywidth", window.innerWidth / 10 * 0.75 + "px");
});
window.addEventListener("load", function (e) {

    document.querySelector(':root').style.setProperty("--displaywidth", window.innerWidth / 10 * 0.75 + "px");
    document.getElementById("leveldiv").innerHTML = shootinggamegame.levels[shootinggamegame.levelnow].levelname;
    document.getElementById("leveldescdiv").innerHTML = shootinggamegame.levels[shootinggamegame.levelnow].desc;
});
shootinggamegame.objects.newweapon.addEventListener("focus", function (e0) {
    document.activeElement.addEventListener("keyup", function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
            e.target.click();
        }
    });
});
$("closingmodal").click(function (e) {
    $("#yongjang").html("");
});
function selectanel(el) {

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);
}
document.getElementById("pistol_0").onclick = function (e) {
    if (shootinggamegame.inloadingtomagazine == false) {

        if (shootinggamegame.rounds > 0) {
            shootinggamegame.rounds -= 1;
            shootinggamegame.inloadingtomagazine = true;
            shootinggamegame.willshootinggamemove = false;
            window.setTimeout(function () {
                shootinggamegame.firing();
                shootinggamegame.inloadingtomagazine = false;
            }, 1000);
            shootinggamegame.objects.weapon.focus();

        } else {
            shootinggamegame.objects.weapon.blur();
            var reloadingrounds = confirm("콜트 1911의 7발탄창 안에 든 총알을 다 썼습니다. 재장전하시겠습니까?");
            if (reloadingrounds == true) {
                shootinggamegame.weaponloading(function (param1) { param1.rounds = 7; });
            }
            shootinggamegame.objects.weapon.blur();
        }
    }

}