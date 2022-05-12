import {BackgroundCanvas} from "./Drawable/BackgroundCanvas";
import {ActorsCanvas} from "./Drawable/ActorsCanvas";
import {Animation} from "./Animation";
import {GameController} from "./GameController";

class Main {
    private readonly backgroundCanvas: BackgroundCanvas;
    private readonly actorsCanvas: ActorsCanvas;
    private animation: Animation;
    private game: GameController;

    constructor() {
        this.backgroundCanvas = new BackgroundCanvas();
        this.actorsCanvas = new ActorsCanvas();

        this.animation = new Animation(this.backgroundCanvas);
        this.game = new GameController();
    }
}
new Main();
