Cosco = (function () {
    var Cosco = {
        new: function (settings) {
            var self = {}; // ~= this

            var context;
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
                context.clearRect(0, 0, settings.width, settings.height);
                context.fillStyle = color;
                context.fillRect(0, 0, settings.width, settings.height);
            };

            function init() {
                console.log("[DEBUG]:Cosco init");
                context = settings.canvas.getContext("2d");
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
                //updateKeyboard(timestamp);

                if (typeof self.update !== "undefined") {
                    self.update(timestamp);
                }

                draw(timestamp);
                updateAnimationFrame = window.requestAnimationFrame(update);
            }

            //function updateKeyboard(timestamp) {
            //    console.log("[DEBUG]:Cosco updateKeyboard");
            //}

            function draw(timestamp) {
                console.log("[DEBUG]:Cosco updateDraw");
                self.clear("#66CCFF");

                if (typeof self.draw !== "undefined") {
                    self.draw(timestamp, context);
                }
            }

            return self;
        },

        Game: {}
    };

    return Cosco;
}());