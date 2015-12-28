(function () {
    using(Cosco.Framework, this);
    namespace("GitHub.ovo4096.Game", {
        TetrisGame: {
            new: function (settings) {
                var self = Game.new(settings);

                var base = self.protected.init;
                self.protected.init = function () {
                    base.init();
                    console.log("[DEBUG]:Tetris Game init");
                };


                //function destroy() {
                //    console.log("[DEBUG]:Tetris Game destroy");
                //    clear("#fff");
                //}
                //
                //function update(timestamp) {
                //    console.log("[DEBUG]:Tetris Game update " + timestamp);
                //}
                //
                //function draw(timestamp, ctx) {
                //    console.log("[DEBUG]:Tetris Game draw " + timestamp);
                //    ctx.fillStyle = "#fff";
                //    ctx.font = "12px Arial";
                //    datetime = new Date(timestamp);
                //    ctx.fillText("Time: " + datetime.getTime(), 0, 16);
                //}

                return self;
            }
        }
    });
}());
