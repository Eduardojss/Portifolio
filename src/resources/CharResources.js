import { Sprite } from '../Sprite.js';
import { Vector2 } from '../Vector2.js';
import { resources } from '../Resource.js';

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
    hFrames: 6,
    vFrames: 1,
    frame: 0,
});
const characterJumpSprite = new Sprite({
    resource: resources.images.characterJump,
    frameSize: new Vector2(32,32),
    hFrames: 1,
    vFrames: 1,
    frame: 0,
});

export {characterIdleSprite, characterWalkSprite, characterJumpSprite};