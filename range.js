var gea = require("gea-sdk");
var adapter = require("gea-adapter-usb");
var push2speech = require("./push2speech");

// configure your application
var app = gea.configure({
    address: 0xcb
});

// we are using a range
app.plugin(require("gea-plugin-range"));

app.bind(adapter, function (bus) {
    console.log("bind");

    bus.on("range", function (range) {
        console.log("address:", range.address);
        console.log("version:", range.version.join("."));
        push2speech.talk('Range connected.');

        range.upperOven.displayTimer.read(function (value) {
            console.log("read:", value);
        });

        range.upperOven.displayTimer.subscribe(function (value) {
            console.log("subscribe:", value);
        });

        range.lowerOven.displayTimer.subscribe(function (value) {
            console.log("subscribe:", value);
        });
    });
});

