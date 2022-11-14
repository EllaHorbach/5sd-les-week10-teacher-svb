class Food extends GameObject { 
    constructor(x, y) { 
        super(x, y, Settings.GridSize / 2, Settings.GridSize / 2);
        this.SetDefaultCollider();
    }

    Update() { 
        fill("red");
        circle(0, 0, this.Width);
    }
}