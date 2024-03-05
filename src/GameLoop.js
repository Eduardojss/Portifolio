export class GameLoop {
     constructor(update, render) {
        
        this.update = update;
        this.render = render;

        this.lastTime = 0;
        this.accumulatedTime = 0;
        this.step = 1000 / 60;

        this.rafId = null;
        this.isRunning = false;
     }

     mainLoop = (timestamp) => {
        if(!this.isRunning)
            return;

        let deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;

        this.accumulatedTime += deltaTime;

        while(this.accumulatedTime >= this.step){
            this.update(this.step);
            this.accumulatedTime -= this.step;
        }

        this.render();

        this.rafId = requestAnimationFrame(this.mainLoop);
     }

     start(){
        if(!this.isRunning){
            this.isRunning = true;
            this.rafId = requestAnimationFrame(this.mainLoop);
        }
     }

     stop(){
        if(this.rafId){
            cancelAnimationFrame(this.rafId);
        }
        this.isRunning = false;
     }
}