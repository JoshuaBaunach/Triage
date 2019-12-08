define(["require", "exports", "./CombatGameView"], function (require, exports, CombatGameView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = /** @class */ (function () {
        function Game() {
            console.log("Initializing game");
            this.gameView = new CombatGameView_1.CombatGameView();
            this.canvas = document.createElement("canvas");
            this.context = this.canvas.getContext("2d");
            this.canvas.width = 480;
            this.canvas.height = 270;
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            var thisGame = this;
            this.interval = setInterval(function () { thisGame.update(thisGame); }, 20);
        }
        Game.prototype.update = function (game) {
            game.gameView.renderView(this.context);
        };
        return Game;
    }());
    exports.Game = Game;
});
