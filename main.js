import './style.css';
import  { GameLoop}  from './src/GameLoop.js';
import { DrawChar } from './src/DrawChar.js';
import { Layer }   from './src/AnimateBg.js';
import { 
    background0Sprite,
    background1Sprite,
    background2Sprite,
    background3Sprite,
    background4Sprite
}  
from './src/resources/BackgroundResources.js';

import {
    characterIdleSprite,
    characterWalkSprite
}
from './src/resources/CharResources.js';

const canvas = document.querySelector("#port-canvas");

const ctx = canvas.getContext("2d");

// const bgLayer0 = new Layer(background0Sprite, 0);
// const bgLayer1 = new Layer(background1Sprite, 0.1);
// const bgLayer2 = new Layer(background2Sprite, 0.3);
// const bgLayer3 = new Layer(background3Sprite, 0.5);
// const bgLayer4 = new Layer(background4Sprite, 0.8);

const bgLayers = [bgLayer0, bgLayer1, bgLayer2, bgLayer3, bgLayer4];

// const walkChar = new DrawChar(characterWalkSprite, 10); ///(charSprite, delay in frames)

const update = () => {
    ctx.clearRect(0, 0, 576, 324);
    bgLayers.forEach(layer => {
        layer.update();
    })

    walkChar.update();
}

const draw = () => {
    ctx.clearRect(0, 0, 576, 324);
    bgLayers.forEach(layer => {
        layer.draw();
    })

    walkChar.drawChar();
    requestAnimationFrame(draw);
}   


const gameLoop = new GameLoop(update, draw); 
gameLoop.start();


