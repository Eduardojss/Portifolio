class Resources {
    constructor() {
        this.toLoad = {
            background_0: "/sprites/Background/1.png",
            background_1: "/sprites/Background/2.png",
            background_2: "/sprites/Background/3.png",
            background_3: "/sprites/Background/4.png",
            background_4: "/sprites/Background/5.png",
            characterIdle: "/sprites/Character/Idle.png",
            characterWalk: "/sprites/Character/Walk.png",
        };

        this.images = {};

        Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
            img.src = this.toLoad[key];
            this.images[key] = {
                image: img,
                isLoaded: false
            }

            img.onload = () => {
                this.images[key].isLoaded = true;
            }
        })
    }
}

export const resources = new Resources();