class SnakePlayer extends GameObject { 

    #head = null;

    constructor() {
        super(0, 0, 0, 0);

        this.#head = new SnakeBodypart(380, 300);
    }

    Move() { 
        this.#head.Move(1, 0);
    }
}