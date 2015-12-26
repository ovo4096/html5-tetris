(function () {
    using(Cosco.Game, this);
    namespace("Cosco.Demo", {
        TetrisGame: {
            new: function (settings) {
                var self = Game.new(settings);

                self.init = function () {
                    console.log("[DEBUG]:Tetris Game init");
                };

                self.destroy = function () {
                    console.log("[DEBUG]:Tetris Game destroy");

                    self.clear("#fff");
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
        }
    });
}());
