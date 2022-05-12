import {BackgroundCanvas} from "./Drawable/BackgroundCanvas";
import {Animation} from "./Animation";

class Main {
    private readonly backgroundCanvas: BackgroundCanvas;
    private backgroundAnimation: Animation;

    // private actorsCanvas: BackgroundCanvas;
    // private actorsAnimation: Animation;

    constructor() {
        this.backgroundCanvas = new BackgroundCanvas();
        this.backgroundAnimation = new Animation(this.backgroundCanvas);

        // this.actorsCanvas = new BackgroundCanvas();
        // this.actorsAnimation = new Animation(this.actorsCanvas);
    }
}
new Main();
