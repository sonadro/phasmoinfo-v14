const wait = function(ms) {
    const startTime = Date.now();
    let newTime = Date.now();

    while(newTime - startTime < ms) {
        newTime = Date.now();
    };
};

module.exports = wait;