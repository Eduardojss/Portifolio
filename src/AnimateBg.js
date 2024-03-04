
import {resources} from './Resource.js';
import { Sprite } from './Sprite.js';
import { Vector2 } from './Vector2.js';

const canvas = document.querySelector("#port-canvas");

const ctx = canvas.getContext("2d");

const gameSpeed = 5;

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
    draw(){
        this.sprite.drawImage(ctx, this.x, 0);
        this.sprite.drawImage(ctx, this.x + this.width, 0);
    }
}

const layer0 = new Layer(background0Sprite, 0);
const layer1 = new Layer(background1Sprite, 0.1);
const layer2 = new Layer(background2Sprite, 0.3);
const layer3 = new Layer(background3Sprite, 0.5);
const layer4 = new Layer(background4Sprite, 0.8);

const bgLayers = [layer0, layer1, layer2, layer3, layer4];

function animate () {
    ctx.clearRect(0, 0, 576, 324);
    bgLayers.forEach(layer => {
        layer.update();
        layer.draw();
    })
    requestAnimationFrame(animate);    
}

animate();

export {animate};