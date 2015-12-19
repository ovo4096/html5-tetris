(function () {
    Cosco = {
        //settings: {
        //    width: 0,
        //    height: 0,
        //    fullScreenMode: false,
        //    canvas: document
        //},
        new: function (settings) {
            var context = canvas.getContext("2d");

            var self = {};
            var updateTimer;

            self.init = function () {
                console.log("[DEBUG]:Cosco init");
                canvas.width = settings.width;
                canvas.height = settings.height;
            };

            self.start = function () {
                console.log("[DEBUG]:Cosco start");
                self.init();
                updateTimer = setInterval(self.update, 3000);
            };

            self.exit = function () {
                console.log("[DEBUG]:Cosco exit");
                clearInterval(updateTimer);
            };

            self.update = function () {
                console.log("[DEBUG]:Cosco update");
                self.updateKeyboard();
                self.updateDraw();
            };

            self.updateKeyboard = function () {
                console.log("[DEBUG]:Cosco updateKeyboard");
            };

            self.updateDraw = function () {
                console.log("[DEBUG]:Cosco updateDraw");
            };

            return self;
        }
    };
}());