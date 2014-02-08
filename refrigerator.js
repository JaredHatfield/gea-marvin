var gea = require("gea-sdk");
var adapter = require("gea-adapter-usb");
var push2speech = require("./push2speech");

// configure your application
var app = gea.configure({
    address: 0xcb
});

// we are using a refrigerator
app.plugin(require("gea-plugin-refrigerator"));

// bind to the adapter to access the bus
app.bind(adapter, function (bus) {
    console.log("bind");

    bus.on("refrigerator", function (refrigerator) {
        console.log("address:", refrigerator.address);
        console.log("version:", refrigerator.version.join("."));

        refrigerator.doorState.subscribe(function (value) {
            console.log("subscribe:", value);
            
            var doorbits = (value.doorState).toString(2);

            if(doorbits[1] == 1){
              talk('Freezer door open');
            }
            
            if(doorbits[3] == 1){
              talk('Freezer bottom door open');
            }
            
            if(doorbits[4] == 1){
              talk('Fresh food left door open');
            }
            
            if(doorbits[5] == 1){
              talk('Fresh food right door open');
            }
        });
    });
});
