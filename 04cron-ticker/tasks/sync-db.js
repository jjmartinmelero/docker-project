
let times = 0;

const syncDB = () => {
    times++;
    console.log('tiks every 5 seconds updt', times);
    
    return times;
}

module.exports = {
    syncDB
}