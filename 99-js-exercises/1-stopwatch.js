function StopWatch() {

    let startTime, stopTime, timeDiff = 0, isRunning;
    this.start = function () {
        if (isRunning)
            throw new Error('Stopwatch is already started');
        startTime = new Date();
        isRunning = true;
    };
    this.stop = function () {
        if (!isRunning)
            throw new Error('Stopwatch is already stopped');
        stopTime = new Date();
        isRunning = false;
        timeDiff += (stopTime.getTime() - startTime.getTime())/1000;
    };
    this.reset = function () {
        timeDiff = 0;
        startTime = null;
        stopTime = null;
        isRunning = false;
    };
    Object.defineProperty(this, 'duration', {
        get: function () { return timeDiff; }
    });
}