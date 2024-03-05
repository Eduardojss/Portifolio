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
import { Input, keys} from './src/Input.js';

const canvas = document.querySelector("#port-canvas");

const ctx = canvas.getContext("2d");

const bgLayer0 = new Layer(background0Sprite, 0);
const bgLayer1 = new Layer(background1Sprite, 0.1);
const bgLayer2 = new Layer(background2Sprite, 0.3);
const bgLayer3 = new Layer(background3Sprite, 0.5);
const bgLayer4 = new Layer(background4Sprite, 0.8);

const bgLayers = [bgLayer0, bgLayer1, bgLayer2, bgLayer3, bgLayer4];
const char = new DrawChar(characterWalkSprite, 5); ///(charSprite, delay in frames)

const input = new Input();

const gravity = 1;
addEventListener("keydown", (event) => {
    if (event.code === "KeyW") {
        keys.UP.pressed = true;
    } else if (event.code === "KeyD") {
        keys.RIGHT.pressed = true;
    } else if (event.code === "KeyS") {
        keys.DOWN.pressed = true;
    } else if (event.code === "KeyA") {
        keys.LEFT.pressed = true;
    }

});

addEventListener("keyup", (event) => {
    if (event.code === "KeyW") {
        keys.UP.pressed = false;
    } else if (event.code === "KeyA") {
        keys.RIGHT.pressed = false;
    } else if (event.code === "KeyS") {
        keys.DOWN.pressed = false;
    } else if (event.code === "KeyD") {
        keys.LEFT.pressed = false;
    }
});


const update = () => {
    ctx.clearRect(0, 0, 576, 324);
    bgLayers.forEach(layer => {
        layer.update();
    })
    
    if(char.characterPos.y + 48 + char.velocity.y <= canvas.height - 10){
        char.velocity.y += gravity;
    }else{
        char.velocity.y = 0;
    }

    // if (keys.UP.pressed == true && char.characterPos.y  == 100) {
    //     char.velocity.y = -15; 
    // }else {char.velocity.y = 0}

    
    // if (keys.RIGHT.pressed == true) {
    //     if(char.characterPos.x <= 100){
    //         bgLayers.forEach(layer => {
    //             layer.moveRight();
    //         })
    //     }else{
    //         char.velocity.x += 5;
    //     }
    // } else char.velocity.x = 0;


    // if (keys.LEFT.pressed == true && char.characterPos.x != 237) {
    //     // if (char.characterPos.x <= 237){
    //     //     char.characterPos.x -= 5;
    //     // }else if (char.characterPos.x > 237){
    //     //     bgLayers.forEach(layer => {
    //     //         layer.moveLeft();
    //     //     })
    //     // }
    // }

    char.update();
}

const draw = () => {
    ctx.clearRect(0, 0, 576, 324);
    bgLayers.forEach(layer => {
        layer.draw();
    })

    char.drawChar();
    requestAnimationFrame(draw);
}   


const gameLoop = new GameLoop(update, draw); 
gameLoop.start();
