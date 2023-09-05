
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;


// function created for start timer
function start() {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        document.getElementById('start').innerText = 'Start';
        function changeColor() {
        };
        isRunning = true;
    }
}

// function created for stop timer
function stop() {
    clearInterval(timer);
    document.getElementById('stop').innerText = 'Stop';
    isRunning = false;
}

// function for update time 
function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    document.getElementById('stopwatch').innerText = formattedTime;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('stopwatch').innerText = '00:00:00';

}