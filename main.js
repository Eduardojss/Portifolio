import './style.css';
import  { GameLoop}  from './src/GameLoop.js';
import './src/AnimateBg.js';
import DrawChar from './src/DrawChar.js';

const canvas = document.querySelector("#port-canvas");

const ctx = canvas.getContext("2d");

const char = new DrawChar(ctx);

const draw = () => {
    char.drawChar();    
}   

const update = () => {
    char.update();
}

function animate () {
    char.drawChar();
    char.update();
    requestAnimationFrame(animate);    
}

animate();

const gameLoop = new GameLoop(update, draw); 
gameLoop.start();


