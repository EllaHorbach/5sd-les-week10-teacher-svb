class Settings {
    static GameClass = Snake;
    
    static Layers = {
        PLAYER: 0,
        GROUND: 1
    };

    static LayerInteractions = {
        [Settings.Layers.PLAYER]: [Settings.Layers.GROUND]
    };

    static BackgroundColor = "#FFF";

    static GameWidth = 800;
    static GameHeight = 600;

    static Debug = true;
    static ShowStats = true;
    static ShowGrid = true;
    static GridSize = 40;
}
