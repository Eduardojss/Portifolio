import { Sprite } from '../Sprite.js';
import { Vector2 } from '../Vector2.js';
import { resources } from '../Resource.js';

const background0Sprite = new Sprite({
    resource: resources.images.background_0,
    frameSize: new Vector2(576,324),
});
const background1Sprite = new Sprite({
    resource: resources.images.background_1,
    frameSize: new Vector2(576,324),
});
const background2Sprite = new Sprite({
    resource: resources.images.background_2,
    frameSize: new Vector2(576,324),
});
const background3Sprite = new Sprite({
    resource: resources.images.background_3,
    frameSize: new Vector2(576,324),
});
const background4Sprite = new Sprite({
    resource: resources.images.background_4,
    frameSize: new Vector2(576,324),
});

export { 
    background0Sprite,
    background1Sprite,
    background2Sprite,
    background3Sprite,
    background4Sprite,
};