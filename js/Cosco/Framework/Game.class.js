(function () {
    using(Cosco, this);
    namespace("Cosco.Framework", {
        Game: {
            new: function (settings) {
                var self = Object2.new(); // ~= this

                var ctx;
                var updateAnimationFrame;

                self.start = function () {
                    console.log("[DEBUG]:Cosco start");
                    self.protected.init();
                    updateAnimationFrame = window.requestAnimationFrame(self.protected.update);
                };

                self.exit = function () {
                    console.log("[DEBUG]:Cosco exit");
                    window.cancelAnimationFrame(updateAnimationFrame);
                    self.protected.destroy();
                };

                self.protected.clear = function (color) {
                    ctx.clearRect(0, 0, settings.width, settings.height);
                    ctx.fillStyle = color;
                    ctx.fillRect(0, 0, settings.width, settings.height);
                };

                self.protected.init = function () {
                    console.log("[DEBUG]:Cosco init");
                    ctx = settings.canvas.getContext("2d");
                    settings.canvas.width = settings.width;
                    settings.canvas.height = settings.height;
                };

                self.protected.destroy = function () {
                    console.log("[DEBUG]:Cosco destroy");
                };

                self.protected.draw = function (timestamp, ctx) {
                    console.log("[DEBUG]:Cosco updateDraw");
                    self.protected.clear("#66CCFF");
                };

                self.protected.update = function (timestamp) {
                    console.log("[DEBUG]:Cosco update " + timestamp);
                    self.protected.draw(timestamp, ctx);
                    updateAnimationFrame = window.requestAnimationFrame(self.protected.update);
                };

                return self;
            }
        }
    });
}());