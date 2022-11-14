class SnakeBodypart extends GameObject { 
    constructor(x, y) { 
        super(x, y, Settings.GridSize, Settings.GridSize);
    }

    Update() { 
        fill("blue");

        rect(0, 0, this.Width, this.Height);
    }

    Move(x, y) { 
        this.Position.x += x * Settings.GridSize;
        this.Position.y += y * Settings.GridSize;
    }
}