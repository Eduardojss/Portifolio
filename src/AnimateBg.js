
import {resources} from './Resource.js';
import { Sprite } from './Sprite.js';
import { Vector2 } from './Vector2.js';

const canvas = document.querySelector("#port-canvas");

const ctx = canvas.getContext("2d");

const gameSpeed = 3;

class Layer {
    constructor(sprite, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width= 576;
        this.height= 324;
        this.sprite = sprite;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }

    update(){
        this.speed = gameSpeed * this.speedModifier;
        if(this.x <= - this.width){
            this.x = 0;
        }
        this.x = Math.floor(this.x - this.speed);
    }
    moveRight(){
        this.x = Math.floor(this.x - this.speed);
    }
    moveLeft(){
        if(this.x <= 0){
            this.x = Math.ceil(this.x + this.speed);
        }
    }
    draw(){
        this.sprite.drawImage(ctx, this.x, 0);
        this.sprite.drawImage(ctx, this.x + this.width, 0);
    }
}

export {Layer};