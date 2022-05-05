import {Ground} from "./Ground";
import {Grass} from "./Grass";
import {Tree} from "./Tree";
import {SmallTree} from "./SmallTree";
import {settings} from "../settings";

export class Canvas {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    public ground: Ground;
    public grass: Grass;
    public sprite: HTMLImageElement;
    private tree: Tree;
    private smallTrees: SmallTree[];

    constructor() {
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;

        this.ground = new Ground(this.canvasElement, this.ctx);
        this.grass = new Grass(this.canvasElement, this.ctx);
        this.tree = new Tree(this.canvasElement, this.ctx);
        this.smallTrees = [new SmallTree(this.canvasElement, this.ctx, this.smallTrees), new SmallTree(this.canvasElement, this.ctx, this.smallTrees)];

        this.sprite = new Image();
        this.sprite.src = settings.sprite;
        this.sprite.addEventListener("load", () => {
            this.tree.init();
            this.smallTrees.forEach((smallTree: SmallTree) => {
                smallTree.init();
            })
            this.draw();
        })
    }

    draw() {
        this.grass.draw();
        this.ground.draw();
        this.tree.draw();
        this.smallTrees.forEach((smallTree: SmallTree) => {
            smallTree.draw();
        });
    }

    animate() {
        this.ctx.clearRect(0,0, this.canvasElement.width, this.canvasElement.height);
        this.grass.animate();
        console.log(this.smallTrees)
        this.smallTrees.forEach((smallTree: SmallTree) => {
            smallTree.animate();
        });
        this.tree.animate();
        this.ground.animate();

    }
}