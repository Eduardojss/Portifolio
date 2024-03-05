export const keys = {
    UP : {
        pressed: false,
    },
    DOWN : {
        pressed: false,
    },
    RIGHT : {
        pressed: false,
    },
    LEFT : {
        pressed: false
    }
}

export class Input {
    constructor() {
        this.heldDirections = [];
    }

    get direction(){
        return this.heldDirections[0];
    }

    onKeyPressed(direction) {
        if (this.heldDirections.indexOf(direction) === -1) {
            this.heldDirections.unshift(direction);
        }
    }

    onKeyReleased(direction) { 
        if (this.heldDirections.indexOf(direction) === -1) {
            return;
        }
        this.heldDirections.splice(this.heldDirections.indexOf(direction), 1)
    }
}