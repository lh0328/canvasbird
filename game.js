var imgFig = new Image();
imgFig.src = "bird/figure.png";
var img5 = new Image();
img5.src = "bird/start.png";
var imgS6 = new Image();
imgS6.src = "bird/score.png";
var imgS7 = new Image();
imgS7.src = "bird/silver.png";
var imgS8 = new Image();
imgS8.src = "bird/gold.png";
var imgExit = new Image();
imgExit.src = "bird/back.png";

//历史分数
var historyScore = [];

function score(score) {
    var arr = [0,3,-1,0,2,4,5,8,10,11];
    var x = 70,y = 40,imgX1,imgX2,imgX3;
    if(score < 10) {
        imgX1 = score * (imgFig.width / 10 - 1) + arr[score];
        if(score === 1) {
            ctx.drawImage(imgFig,imgX1,0,imgFig.width / 10 - 7,imgFig.height,x + 18,y,imgFig.width / 10,imgFig.height * 2);
        }else if(score === 2) {
            ctx.drawImage(imgFig,imgX1,0,imgFig.width / 10 - 2,imgFig.height,x,y,imgFig.width / 10 * 2,imgFig.height * 2);
        }else {
            ctx.drawImage(imgFig,imgX1,0,imgFig.width / 10 - 1,imgFig.height,x,y,imgFig.width / 10 * 2,imgFig.height * 2);
        }
    }
    if(score >= 10 && score < 100) {
        imgX1 = Math.floor(score / 10) * (imgFig.width / 10 - 1) + arr[Math.floor(score / 10)];
        imgX2 = (score % 10) * (imgFig.width / 10 - 1) + arr[score % 10];
        if(Math.floor(score / 10) === 1) {
            ctx.drawImage(imgFig,imgX1,0,imgFig.width / 10 - 7,imgFig.height,x + 18,y,imgFig.width / 10,imgFig.height * 2);
        }else if(Math.floor(score / 10) === 2) {
            ctx.drawImage(imgFig,imgX1,0,imgFig.width / 10 - 2,imgFig.height,x,y,imgFig.width / 10 * 2,imgFig.height * 2);
        }else {
            ctx.drawImage(imgFig,imgX1,0,imgFig.width / 10 - 1,imgFig.height,x,y,imgFig.width / 10 * 2,imgFig.height * 2);
        }
        if(score % 10 === 1) {
            ctx.drawImage(imgFig,imgX2,0,imgFig.width / 10 - 7,imgFig.height,x + 18 + 40,y,imgFig.width / 10,imgFig.height * 2);
        }else if(score % 10 === 2) {
            ctx.drawImage(imgFig,imgX2,0,imgFig.width / 10 - 2,imgFig.height,x + 40,y,imgFig.width / 10 * 2,imgFig.height * 2);
        }else {
            ctx.drawImage(imgFig,imgX2,0,imgFig.width / 10 - 1,imgFig.height,x + 40,y,imgFig.width / 10 * 2,imgFig.height * 2);
        }
    }
    if(score >= 100 && score < 1000) {
        imgX1 = Math.floor(score / 100) * (imgFig.width / 10 - 1) + arr[Math.floor(score / 100)];
        imgX2 = Math.floor(score % 100 / 10) * (imgFig.width / 10 - 1) + arr[Math.floor(score % 100 / 10)];
        imgX3 = (score % 10) * (imgFig.width / 10 - 1) + arr[score % 10];
        if(Math.floor(score / 100) === 1) {
            ctx.drawImage(imgFig,imgX1,0,imgFig.width / 10 - 7,imgFig.height,x + 18,y,imgFig.width / 10,imgFig.height * 2);
        }else if(Math.floor(score / 100) === 2) {
            ctx.drawImage(imgFig,imgX1,0,imgFig.width / 10 - 2,imgFig.height,x,y,imgFig.width / 10 * 2,imgFig.height * 2);
        }else {
            ctx.drawImage(imgFig,imgX1,0,imgFig.width / 10 - 1,imgFig.height,x,y,imgFig.width / 10 * 2,imgFig.height * 2);
        }
        if(Math.floor(score % 100 / 10) === 1) {
            ctx.drawImage(imgFig,imgX2,0,imgFig.width / 10 - 7,imgFig.height,x + 18 + 40,y,imgFig.width / 10,imgFig.height * 2);
        }else if(Math.floor(score % 100 / 10) === 2) {
            ctx.drawImage(imgFig,imgX2,0,imgFig.width / 10 - 2,imgFig.height,x + 40,y,imgFig.width / 10 * 2,imgFig.height * 2);
        }else {
            ctx.drawImage(imgFig,imgX2,0,imgFig.width / 10 - 1,imgFig.height,x + 40,y,imgFig.width / 10 * 2,imgFig.height * 2);
        }
        if(score % 10 === 1) {
            ctx.drawImage(imgFig,imgX3,0,imgFig.width / 10 - 7,imgFig.height,x + 18 + 40 + 40,y,imgFig.width / 10,imgFig.height * 2);
        }else if(score % 10 === 2) {
            ctx.drawImage(imgFig,imgX3,0,imgFig.width / 10 - 2,imgFig.height,x + 40 + 40,y,imgFig.width / 10 * 2,imgFig.height * 2);
        }else {
            ctx.drawImage(imgFig,imgX3,0,imgFig.width / 10 - 1,imgFig.height,x + 40 + 40,y,imgFig.width / 10 * 2,imgFig.height * 2);
        }
    }
}

function Game() {
    var _this = this;
    this.bird = new Bird();
    this.pipes = [];
    this.pipeCD = 420;
    this.CD = 400;
    this.flag = true;
    this.score = 0;
    var img = new Image();
    img.src = "bird/bg.png";

    this.draw = function () {
        ctx.drawImage(img,0,0,cvs.width,cvs.height);
    };
    this.update = function () {
        ctx.clearRect(0,0,cvs.width,cvs.height);

        _this.draw();

        if(_this.flag) {
            ++_this.pipeCD;
            if(_this.pipeCD >= _this.CD) {
                _this.pipes.push(new Pipe());
                _this.pipeCD = 0;
            }
            if(_this.pipes.length % 18 === 0) {
                if(Math.floor(_this.pipes.length / 18) % 2 === 1) {
                    img.src = "bird/night.png";
                }else{
                    img.src = "bird/bg.png";
                }
            }
            switch (_this.pipes.length) {
                case 6:
                    _this.CD = 350;
                    break;
                case 20:
                    _this.CD = 250;
                    break;
                case 45:
                    _this.CD = 190;
                    break;
                case 60:
                    _this.CD = 150;
                    pipeFlag = true;
                    break;
                case 80:
                    _this.CD = 190;
                    pipeFlag = false;
                    break;
                case 100:
                    _this.CD = 300;
                    distance = 2;
                    break;
            }
        }
        if(_this.pipes.length >= 1) {
            _this.pipes.forEach(function (item,index) {
                item.draw();
                item.updateStatus();
                if(_this.flag) {
                    item.updateMove();
                }
                if(_this.bird.y >= item.boty - 100 && _this.bird.y + _this.bird.height <= item.boty) {
                    if(item.topx + item.width > _this.bird.x - distance && item.topx + item.width <= _this.bird.x) {
                        _this.score += 1;
                    }
                }
            })
        }

        score(_this.score);

        _this.bird.draw();
        _this.bird.isCollision();
        if(!_this.bird.flag) {
            _this.flag = false;
            historyScore.push(_this.score);
            showScore();
            best();
            medal();
            restartAndExit();
        }else {
            _this.bird.dt += 0.01;
            if(_this.bird.y <= _this.bird.y + _this.bird.birdSpeed * _this.bird.birdSpeed / (2 * _this.bird.g)) {
                _this.bird.i = Math.floor(Math.random() * 3);
            }
            _this.bird.updateMove();
        }

        if(_this.flag) {
            cvs.onclick = function () {
                _this.bird.birdSpeed = 3;
                _this.bird.dt = 0;
            };
            cvs.ondblclick = function () {
                _this.bird.birdSpeed = 8;
                _this.bird.dt = 0;
            };

            window.requestAnimationFrame(_this.update);
        }
    };
}

function Bird() {
    var _this = this;
    this.x = 180;
    this.y = cvs.height/2;
    this.g = 10;
    this.birdSpeed = 0;
    this.dt = 0;
    this.i = 0;
    this.flag = true;
    var img1 = new Image();
    img1.src = "bird/bird.png";
    this.width = img1.width;
    this.height = img1.height / 3;
    var img2 = new Image();
    img2.src = "bird/game-over.png";

    this.draw = function () {
        ctx.drawImage(img1,0,img1.height/3 * _this.i,img1.width,img1.height/3,_this.x,_this.y,img1.width,img1.height/3);
    };
    this.updateMove = function () {
        _this.y -= _this.birdSpeed*_this.dt - 0.5 * _this.g * _this.dt * _this.dt;
    };
    this.isCollision = function () {
        //掉落地面
        if(_this.y >= cvs.height - img1.height/3) {
            _this.i = 0;
            _this.y = cvs.height - img1.height/3;
            cvs.onclick = null;
            _this.flag = false;
            ctx.drawImage(img2,cvs.width/2 - img2.width,cvs.height/2 - img2.height * 4.5,img2.width * 2,img2.height);
            ctx.drawImage(imgS6,cvs.width/2 - imgS6.width,cvs.height/2 - imgS6.height,imgS6.width * 2,imgS6.height * 2);
            ctx.drawImage(img5,cvs.width/2 - img5.width,380,img5.width * 2,img5.height * 1.5);
        }
        //和障碍物碰撞
        for(var j=0;j<gGame.pipes.length;j++) {
            //上管道
            if(_this.y <= gGame.pipes[j].boty - 100) {
                if(_this.x >= gGame.pipes[j].topx - img1.width && _this.x <= gGame.pipes[j].topx + gGame.pipes[j].width) {
                    var top = _this.y;
                    _this.i = 0;
                    _this.y = top;
                    cvs.onclick = null;
                    _this.flag = false;
                    ctx.drawImage(img2,cvs.width/2 - img2.width,cvs.height/2 - img2.height * 4.5,img2.width * 2,img2.height);
                    ctx.drawImage(imgS6,cvs.width/2 - imgS6.width,cvs.height/2 - imgS6.height,imgS6.width * 2,imgS6.height * 2);
                    ctx.drawImage(img5,cvs.width/2 - img5.width,380,img5.width * 2,img5.height * 1.5);
                    break;
                }
            }
            //下管道
            if(_this.y + img1.height / 3 >= gGame.pipes[j].boty) {
                if(_this.x >= gGame.pipes[j].topx - img1.width && _this.x <= gGame.pipes[j].topx + gGame.pipes[j].width) {
                    var top2 = _this.y;
                    _this.i = 0;
                    _this.y = top2;
                    cvs.onclick = null;
                    _this.flag = false;
                    ctx.drawImage(img2,cvs.width/2 - img2.width,cvs.height/2 - img2.height * 4.5,img2.width * 2,img2.height);
                    ctx.drawImage(imgS6,cvs.width/2 - imgS6.width,cvs.height/2 - imgS6.height,imgS6.width * 2,imgS6.height * 2);
                    ctx.drawImage(img5,cvs.width/2 - img5.width,380,img5.width * 2,img5.height * 1.5);
                    break;
                }
            }
        }
    };
}

var distance = 1;
var pipeFlag = false;

function Pipe() {
    var _this = this;
    var img3 = new Image();
    img3.src = "bird/pipe-2.png";
    var img4 = new Image();
    img4.src = "bird/pipe-1.png";
    var pipeHeight;
    if(pipeFlag) {
        pipeHeight = Math.floor(Math.random() * 200) + 100;
    }else {
        pipeHeight = Math.floor(Math.random() * (cvs.height - 100));
    }
    this.topx = cvs.width;
    this.topy = 0;
    this.status = false;
    this.width = img3.width;
    this.botx = cvs.width;
    this.boty = pipeHeight + 100;


    this.draw = function () {
        ctx.drawImage(img3,_this.topx,_this.topy,img3.width,pipeHeight);
        ctx.drawImage(img4,_this.botx,_this.boty,img4.width,cvs.height - _this.boty);
};
    this.updateMove = function () {
          _this.topx -= distance;
          _this.botx -= distance;
    };
    this.updateStatus = function () {
        if(_this.topx <= -_this.width) {
            _this.status = true;
        }

    };
}

function showScore() {
    var shScore = historyScore[historyScore.length - 1];
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.font = "bold 30px Arial";
    var w = ctx.measureText(shScore).width;
    ctx.fillText(shScore,440 - w / 4,239);
}

function best() {
    var bestScore = Math.max.apply(null,historyScore);
    ctx.beginPath();
    ctx.fillStyle = "#F0ED60";
    ctx.font = "bold 30px Arial";
    var w = ctx.measureText(bestScore).width;
    ctx.fillText(bestScore,440 - w / 4,299);
}

function medal() {
    var past = historyScore[historyScore.length - 1];
    var now = Math.max.apply(null,historyScore);
    if(past < now) {
        ctx.drawImage(imgS7,cvs.width/2 - imgS7.width * 4,cvs.height/2 - imgS7.height * 0.7,imgS7.width * 2,imgS7.height * 2);
    }else {
        if(now !== 0) {
            ctx.drawImage(imgS8,cvs.width/2 - imgS8.width * 4,cvs.height/2 - imgS8.height * 0.7,imgS8.width * 2,imgS8.height * 2);
        }
    }
}

function restartAndExit() {
    ctx.drawImage(imgExit,cvs.width - imgExit.width * 0.8,12,imgExit.width * 0.6,imgExit.height * 0.6);

    cvs.onclick = function (e) {
        var x = e.pageX - cvs.offsetLeft;
        var y = e.pageY - cvs.offsetTop;

        ctx.beginPath();
        ctx.rect(cvs.width - imgExit.width * 0.8,12,imgExit.width * 0.6,imgExit.height * 0.6);
        if(ctx.isPointInPath(x,y)) {
            return (function () {
                cvs.onclick = null;
                ctx.clearRect(0,0,cvs.width,cvs.height);
                ctx.drawImage(img,0,0,cvs.width,cvs.height);
                start();
                startClick();
            })();
        }

        ctx.beginPath();
        ctx.rect(cvs.width/2 - img5.width,380,img5.width * 2,img5.height * 1.5);
        if(ctx.isPointInPath(x,y)) {
            return (function () {
                cvs.onclick = null;
                ctx.clearRect(cvs.width/2 - img5.width,380,img5.width * 2,img5.height * 1.5);
                distance = 1;
                gGame = new Game();
                gGame.update();
            })();
        }
    };
}


