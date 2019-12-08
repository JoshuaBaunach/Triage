import {GameView} from "GameView"
import { CombatGameView } from "./CombatGameView"

export class Game {

    gameView: GameView
    canvas: any
    context: CanvasRenderingContext2D
    interval: number

    constructor() {
        console.log("Initializing game")

        this.gameView = new CombatGameView()

        this.canvas = document.createElement("canvas")
        this.context = this.canvas.getContext("2d")
        this.canvas.width = 480
        this.canvas.height = 270
        document.body.insertBefore(this.canvas, document.body.childNodes[0])

        var thisGame = this
        this.interval = setInterval(function() { thisGame.update(thisGame) }, 20)
    }

    update(game: Game) {
        game.gameView.renderView(this.context)
    }
}