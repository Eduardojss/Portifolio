import {resources} from './Resource.js';
import { Sprite } from './Sprite.js';
import { Vector2 } from './Vector2.js';

const canvas = document.querySelector("#port-canvas");

const ctx = canvas.getContext("2d");

export class DrawChar{
    constructor(sprite, frameDelay){
        this.sprite = sprite;
        this.frameDelay = frameDelay;
        this.frameCounter = this.sprite.vFrames * this.sprite.hFrames;  
    }

    update(){
        this.frameCounter++;
        if (this.frameCounter >= this.frameDelay) {
            this.sprite.frame = (this.sprite.frame + 1) % 4;
            this.frameCounter = 0;
        }
    }
    drawChar(){
        const characterPos = new Vector2(48 * 2, 48 * 5);

        const charOffSet = new Vector2(-10, 20);

        const charPosX = characterPos.x + charOffSet.x;
        const charPosY = characterPos.y + 1+ charOffSet.y;
        
        this.sprite.drawImage(ctx, charPosX, charPosY);
    }
}
