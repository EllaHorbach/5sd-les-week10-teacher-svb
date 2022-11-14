class Snake extends Game {
    #currentFood = null;
    #player = null;

    #timer = 0;

    constructor() {
        super();

        this.#player = new SnakePlayer();
    }

    Update() {
        // Add the difference in time to the timer
        this.#timer += deltaTime;
        // if the timer is less than 1 second, stop
        if (this.#timer < 1000) {
            return;
        }

        // reset the timer
        this.#timer = 0;

        // if necessary, generate new food
        if (this.#currentFood === null) {
            this.#currentFood = this.GenerateFood();
        }

        // move the player
        this.#player.Move();
    }

    /**
     * Generates a new piece of food
     */
    GenerateFood() {
        let gridSizeX = Settings.GameWidth / Settings.GridSize;
        let gridSizeY = Settings.GameHeight / Settings.GridSize;

        let gridLocationX = random(0, gridSizeX);
        gridLocationX = Math.floor(gridLocationX);

        let gridLocationY = random(0, gridSizeY);
        gridLocationY = Math.floor(gridLocationY);

        let food = new Food(
            (Settings.GridSize / 2) + (gridLocationX * Settings.GridSize),
            (Settings.GridSize / 2) + (gridLocationY * Settings.GridSize));

        return food;
    }
}