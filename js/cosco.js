function using(namespace, self) {
    for (var _class in namespace) {
        if (typeof self[_class] === "undefined") {
            self[_class] = namespace[_class];
        }
    }
}

function namespace(namespace, self) {
    namespace = typeof namespace === "undefined" ? {} : namespace;
    using(self, namespace);
}

Cosco = typeof Cosco === "undefined" ? {} : Cosco;
namespace(Cosco);

(function () {
    Cosco.Game = typeof Cosco.Game === "undefined" ? {} : Cosco.Game;
    namespace(Cosco.Game, {
        Game: {
            new: function (settings) {
                var self = {}; // ~= this

                var ctx;
                var updateAnimationFrame;

                self.start = function () {
                    console.log("[DEBUG]:Cosco start");
                    init();
                    updateAnimationFrame = window.requestAnimationFrame(update);
                };

                self.exit = function () {
                    console.log("[DEBUG]:Cosco exit");
                    window.cancelAnimationFrame(updateAnimationFrame);
                    destroy();
                };

                self.clear = function (color) {
                    ctx.clearRect(0, 0, settings.width, settings.height);
                    ctx.fillStyle = color;
                    ctx.fillRect(0, 0, settings.width, settings.height);
                };

                function init() {
                    console.log("[DEBUG]:Cosco init");
                    ctx = settings.canvas.getContext("2d");
                    settings.canvas.width = settings.width;
                    settings.canvas.height = settings.height;

                    if (typeof self.init !== "undefined") {
                        self.init();
                    }
                }

                function destroy() {
                    console.log("[DEBUG]:Cosco destroy");

                    if (typeof self.destroy !== "undefined") {
                        self.destroy();
                    }
                }

                function update(timestamp) {
                    console.log("[DEBUG]:Cosco update " + timestamp);

                    if (typeof self.update !== "undefined") {
                        self.update(timestamp);
                    }

                    draw(timestamp, ctx);
                    updateAnimationFrame = window.requestAnimationFrame(update);
                }

                function draw(timestamp, ctx) {
                    console.log("[DEBUG]:Cosco updateDraw");
                    self.clear("#66CCFF");

                    if (typeof self.draw !== "undefined") {
                        self.draw(timestamp, ctx);
                    }
                }

                return self;
            }
        }
    });
}());