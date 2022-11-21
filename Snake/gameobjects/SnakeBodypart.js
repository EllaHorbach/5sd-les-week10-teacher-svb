class SnakeBodypart extends GameObject { 

    #previousBodypart = null; 
    #nextBodyPart = null;

    constructor(x, y) { 
        super(x, y, Settings.GridSize, Settings.GridSize);
    }

    Update() { 
        fill("blue");

        rect(0, 0, this.Width, this.Height);
    }

    Move(x, y) { 
        this.MoveTo(
            this.Position.x + (x * Settings.GridSize),
            this.Position.y + (y * Settings.GridSize)
        );
    }

    MoveTo(x, y) { 
        let oldPosition = this.Position.copy();

        this.Position.x = x;
        this.Position.y = y;

        if (this.#nextBodyPart === null) { 
            return;
        }

        let distance = p5.Vector.dist(oldPosition, this.#nextBodyPart.Position);

        if (distance < 1) { 
            return;
        }
        
        this.#nextBodyPart.MoveTo(oldPosition.x, oldPosition.y);
    }

    AddBodypart() { 

        let newBodypart = new SnakeBodypart(this.Position.x, this.Position.y);

        this.#nextBodyPart = newBodypart;
    }
}