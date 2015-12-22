Cosco.Game.Tetris = (function (Cosco) {
    var TetrisGame = {
        new: function (settings) {
            var self = Cosco.new(settings);

            self.init = function () {
                console.log("[DEBUG]:Tetris Game init");
            };

            self.destroy = function () {
                console.log("[DEBUG]:Tetris Game destroy");
            };

            self.update = function (timestamp) {
                console.log("[DEBUG]:Tetris Game update " + timestamp);
            };

            self.draw = function (timestamp, ctx) {
                console.log("[DEBUG]:Tetris Game draw " + timestamp);
                ctx.fillStyle = "#fff";
                ctx.font = "16px Arial";
                ctx.fillText("Hello World", 0, 16);
            };

            return self;
        }
    };
    return TetrisGame;
}(Cosco));
