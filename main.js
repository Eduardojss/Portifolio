import './style.css';
import  { GameLoop}  from './src/GameLoop.js';
import { DrawChar } from './src/DrawChar.js';
import { Layer }   from './src/AnimateBg.js';
import { 
    background0Sprite,
    background1Sprite,
    background2Sprite,
    background3Sprite,
    background4Sprite,
    platformSprite,
    floorSprite
}  
from './src/resources/BackgroundResources.js';

import {
    characterIdleSprite,
    characterWalkSprite,
    characterJumpSprite,
    characterCrouchSprite
}
from './src/resources/CharResources.js';
import { Input, keys} from './src/Input.js';
import { Platform, Floor } from './src/Platforms.js';
import imageFloor from './src/floor/ground1.png';
const canvas = document.querySelector("#port-canvas");

const ctx = canvas.getContext("2d");

const bgLayer0 = new Layer(background0Sprite, 0);
const bgLayer1 = new Layer(background1Sprite, 0.1);
const bgLayer2 = new Layer(background2Sprite, 0.3);
const bgLayer3 = new Layer(background3Sprite, 0.5);
const bgLayer4 = new Layer(background4Sprite, 0.8);

const bgLayers = [bgLayer0, bgLayer1, bgLayer2, bgLayer3, bgLayer4];

const char = new DrawChar(characterWalkSprite, 10); ///(charSprite, delay in frames)

const platform = new Platform(platformSprite ,300, Math.floor(Math.random() * (250 - 100 + 1)) + 100, 100, 100, 0.8);

const floorImage = new Image();
floorImage.src = imageFloor;

const floor = new Floor(floorImage, 0, 313, 1600, 32, 0.8);

addEventListener("keydown", (event) => {
    if (event.code === "KeyW") {
        char.jumping = true 
        keys.UP.pressed = true;
    }
    if (event.code === "KeyD") {
        keys.RIGHT.pressed = true;
    }
    if (event.code === "KeyA") {
        keys.LEFT.pressed = true;
    }

});

addEventListener("keyup", (event) => {
    if (event.code === "KeyW") {
        keys.UP.pressed = false;
    }
    if (event.code === "KeyD") {
        keys.RIGHT.pressed = false;
    }
    if (event.code === "KeyA") {
        keys.LEFT.pressed = false;
    }
});

const update = () => {
    bgLayers.forEach(layer => {
        layer.update();
    })
    char.update();
    if(char.characterPos.y <= canvas.height - 10){
        char.jumping = false;

    }
    if (keys.UP.pressed == true) {
        char.characterPos.y -= 8;
        char.sprite = characterCrouchSprite
        char.animate();
        char.jumping = true 
        if(keys.RIGHT.pressed && char.characterPos.x < 576 - 28){
            char.velocity.x = 2;
        }else if(keys.LEFT.pressed && char.characterPos.x > 0){
            char.velocity.x = -2;
        }else{
            char.velocity.x = 0;
        }
    }
     else if(keys.RIGHT.pressed && char.characterPos.x < 576 - 28){
        char.velocity.x = 2;
        char.sprite = characterWalkSprite;
        char.animate();
    }
    else if ((keys.LEFT.pressed && char.characterPos.x > 100) ||(keys.LEFT.pressed && char.characterPos.x > 0)){
        char.velocity.x = -2;
        char.sprite = characterWalkSprite;
        char.animate();
    }else {
        char.velocity.x = 0;
        char.sprite = characterIdleSprite;
        char.animate(); 
    }

    platform.update();
}

const draw = () => {
    bgLayers.forEach(layer => {
        layer.draw();
    })
    platform.draw();
    floor.draw();
    char.drawChar();
}   

function animate(){
    update();
    draw();
    requestAnimationFrame(animate);
}

animate();

// const gameLoop = new GameLoop(update, draw); 
// gameLoop.start();
