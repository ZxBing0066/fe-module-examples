const { v } = require('./cjsDep');
require('./esDep');

setInterval(() => {
    console.log(v);
}, 1000);
