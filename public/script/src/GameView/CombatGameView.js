define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CombatGameView = /** @class */ (function () {
        function CombatGameView() {
        }
        CombatGameView.prototype.renderView = function (context) {
            context.beginPath();
            context.fillRect(20, 20, 150, 100);
            context.stroke();
        };
        return CombatGameView;
    }());
    exports.CombatGameView = CombatGameView;
});
