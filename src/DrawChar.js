import {resources} from './Resource.js';
import { Sprite } from './Sprite.js';
import { Vector2 } from './Vector2.js';

const characterIdleSprite = new Sprite({
    resource: resources.images.characterIdle,
    frameSize: new Vector2(48,48),
    hFrames: 4,
    vFrames: 1,
    frame: 0,
});

const characterWalkSprite = new Sprite({
    resource: resources.images.characterWalk,
    frameSize: new Vector2(48,48),
    hFrames: 4,
    vFrames: 1,
    frame: 0,
});

class DrawChar{
    constructor(ctx){
        this.ctx = ctx;
    }
    drawChar(){
        const characterPos = new Vector2(48 * 2, 48 * 5);

        const charOffSet = new Vector2(-10, 20);

        const charPosX = characterPos.x + charOffSet.x;
        const charPosY = characterPos.y + 1+ charOffSet.y;
        
        characterWalkSprite.drawImage(this.ctx, charPosX, charPosY);
    }
        
    update(){
        setInterval(characterWalkSprite.frame = (characterWalkSprite.frame + 1) % 4, 1000);
    }
}


export default DrawChar;