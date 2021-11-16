var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");
var img = new Image();
img.src = "bird/bg.png";
var introduce = document.getElementById("introduce");
var gGame = null;

function onLoad() {
    ctx.drawImage(img,0,0,cvs.width,cvs.height);
    start();
    startClick();
}

var img1 = new Image();
img1.src = "bird/title.png";
var img2 = new Image();
img2.src = "bird/ready.png";
var img0 = new Image();
img0.src = "bird/bird-1.png";
var img3 = new Image();
img3.src = "bird/method.png";
var img4 = new Image();
img4.src = "bird/start.png";
var img6 = new Image();
img6.src = "bird/introduce.png";
var flag2 = false;

function start() {
    ctx.drawImage(img1,cvs.width/2 - img1.width,100,img1.width * 2,img1.height);
    ctx.drawImage(img2,cvs.width/2 - img2.width,200,img2.width * 2,img2.height);
    ctx.drawImage(img0,cvs.width/2 - img0.width * 4,280,img0.width * 1.5,img0.height * 1.5);
    ctx.drawImage(img3,cvs.width/2 - img3.width,260,img3.width * 2,img3.height * 1.5);
    ctx.drawImage(img4,cvs.width/2 - img4.width,380,img4.width * 2,img4.height * 1.5);
    ctx.drawImage(img6,cvs.width - img6.width / 2 - 2,2,img6.width / 2,img6.height /2);
}

function startClick() {
    cvs.onclick = function (e) {
        var x = e.pageX - cvs.offsetLeft;
        var y = e.pageY - cvs.offsetTop;

        ctx.beginPath();
        ctx.rect(cvs.width - img6.width / 2 - 2,2,img6.width / 2,img6.height / 2);
        if(ctx.isPointInPath(x,y)) {
            return (function () {
                if(!flag2) {
                    introduce.style.display = "block";
                    flag2 = true;
                }else {
                    introduce.style.display = "none";
                    flag2 = false;
                }
            })();
        }

        ctx.beginPath();
        ctx.rect(cvs.width/2 - img4.width,380,img4.width * 2,img4.height * 1.5);
        if(ctx.isPointInPath(x,y)) {
            return (function () {
                cvs.onclick = null;
                gGame = new Game();
                gGame.update();
            })();
        }
    };
}






