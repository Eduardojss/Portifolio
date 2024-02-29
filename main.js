import './style.css';
import {resources} from './src/Resource.js';
import { Sprite } from './src/Sprite.js';
import { Vector2 } from './src/Vector2.js';

const canvas = document.querySelector("#port-canvas");

const ctx = canvas.getContext("2d");

const backgroundSprite = new Sprite({
    resource: resources.images.background,
    frameSize: new Vector2(320,180)
});

const characterIdle = new Sprite({
    resource: resources.images.characterIdle,
    frameSize: new Vector2(48, 56),
    hFrames: 4,
    vFrames: 1,
    frame: 4,
})

const characterWalk = new Sprite({
    resource: resources.images.characterWalk,
    frameSize: new Vector2(48, 48),
    hFrames: 4,
    vFrames: 1,
    frame: 0,
})

const charPos = new Vector2(48 * 2, 48 * 2);

const draw = () => {
   backgroundSprite.drawImage(ctx, 0, 0); 

   characterWalk.drawImage(ctx, charPos.x, charPos.y);
}

setInterval (() => {
    draw();
}, 1000)