function using(namespace, self) {
    for (var _class in namespace) {
        if (typeof self[_class] === "undefined") {
            self[_class] = namespace[_class];
        }
    }
}

function namespace(namespace, self) {
    var nps = namespace.split(".");
    var np = "";

    for (var i in nps) {
        np += nps[i];
        eval(np + ' = typeof ' + np + ' === "undefined" ? {} : ' + np + ';');
        np += ".";
    }

    using(self, eval(namespace));
}