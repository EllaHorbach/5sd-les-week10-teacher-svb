class SnakePlayer extends GameObject { 

    #head = null;
    #movement = null;

    constructor() {
        super(0, 0, 0, 0);
        this.SetDefaultCollider();
        this.#head = new SnakeBodypart(380, 300);
        this.#head.AddBodypart();
        this.#head.AddBodypart();
        this.#head.AddBodypart();
        this.#head.AddBodypart();
        this.#head.AddBodypart();
        this.#head.AddBodypart();

        this.#movement = createVector(1, 0);
    }

    Update() { 
        if (keyIsDown(UP_ARROW) === true) { 
            this.#movement = createVector(0, -1);
        }
        if (keyIsDown(DOWN_ARROW) === true) { 
            this.#movement = createVector(0, 1);
        }
        if (keyIsDown(LEFT_ARROW) === true) { 
            this.#movement = createVector(-1, 0);
        }
        if (keyIsDown(RIGHT_ARROW) === true) { 
            this.#movement = createVector(1, 0);
        }
    }

    Move() { 
        this.#head.Move(this.#movement.x, this.#movement.y);
    }
}