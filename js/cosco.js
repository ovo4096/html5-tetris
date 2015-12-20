Cosco = {
    new: function (settings) {
        var self = {}; // ~= this

        var context;
        var updateTimer;

        self.init = function () {
            console.log("[DEBUG]:Cosco init");
            context = settings.canvas.getContext("2d");
            settings.canvas.width = settings.width;
            settings.canvas.height = settings.height;
        };

        self.start = function () {
            console.log("[DEBUG]:Cosco start");
            self.init();
            updateTimer = setInterval(self.update, 1000);
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
            context.clearRect(0,0, settings.width, settings.height);
            context.fillStyle = "#66CCFF";
            context.fillRect(0, 0, settings.width, settings.height);

            context.font = "30px Arial";
            context.fillStyle = "#333";
            context.fillText("Hello World", 0, 30);

            context.fillStyle = "#666";
            context.fillText("Hello World", 0, 60);
        };

        return self;
    }
};