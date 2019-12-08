import { GameView } from "./GameView";

export class CombatGameView implements GameView {
    
    constructor() {

    }

    renderView(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.fillRect(20, 20, 150, 100);
        context.stroke();
    }
}