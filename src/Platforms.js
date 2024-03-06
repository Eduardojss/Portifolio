const canvas = document.querySelector("#port-canvas");

const ctx = canvas.getContext("2d");
const gameSpeed = 3;

export class Platform{
    constructor(sprite, x, y, width, heigth, speed){
        this.sprite = sprite;
        this.position = {
            x,
            y
        }
        this.width = width;
        this.heigth = heigth;
        this.replyTimes =  this.width/ this.size;
        this.speed = speed;
        this.velocity = {
            x: 0,
            y: 0
        };
    }

    update(){
        if(!this.position.x == -10){
            this.velocity.x = 0;
        }else{
            this.position.x += this.velocity.x ;
        }
    }
    draw(){
        this.sprite.drawImage(ctx, this.position.x + (this.size), this.position.y);
    }
}

export class Floor{
    constructor(image, x, y, width, heigth, speed){
        this.image = image;
        this.position = {
            x,
            y
        }
        this.width = width;
        this.heigth = heigth;
        this.speed = speed;
        this.velocity = {
            x: 0,
            y: 0
        };
        this.start = false;
    }

    draw(){
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
}