const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) =>{
    console.log(`${user}: ${message}`)
})