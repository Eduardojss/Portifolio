import {resources} from './Resource.js';
import { Sprite } from './Sprite.js';
import { Vector2 } from './Vector2.js';
import { characterIdleSprite } from './resources/CharResources.js';

const canvas = document.querySelector("#port-canvas");

const ctx = canvas.getContext("2d");

const gravity = 0.2;
export class DrawChar{
    constructor(sprite, frameDelay){
        this.sprite = sprite;
        this.frameDelay = frameDelay;
        this.frameCounter = this.sprite.vFrames * this.sprite.hFrames;
        this.characterPos = {
            x: 100,
            y: 100
        };
        this.velocity = {
            x: 0,
            y: 0
        },
        this.idle = false;
    }

    update(){        
        this.characterPos.y += this.velocity.y;
        this.characterPos.x += this.velocity.x;
        if(this.characterPos.y + 48 + this.velocity.y <= canvas.height - 10){
            this.velocity.y += gravity;
        }else{
            this.characterPos.y = canvas.height - 48 - 10;
            this.velocity.y = 0;
        }
    }

    animate(){
        this.frameCounter++;
        if (this.idle == false && this.frameCounter >= this.frameDelay) {
            this.sprite.frame = (this.sprite.frame + 1) % 4;
            this.frameCounter = 0;
        }else if (this.idle == true){
            this.sprite == characterIdleSprite
        }
    }

    drawChar(){
        this.sprite.drawImage(ctx, this.characterPos.x, this.characterPos.y);
    }
}
