const cron = require('node-cron');

let times = 0;

cron.schedule('1-59/5 * * * * *', () => {
    times++;
  console.log('tiks every 5 seconds updt', times);
});

console.log("start");
