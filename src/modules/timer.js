
const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    let idInterval;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor((timeRemaining / 60 / 60));
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        if (timeRemaining <= 1) {
            clearInterval(idInterval);
            return { timeRemaining: 0, hours: 0, minutes: 0, seconds: 0 }
        }
        return { timeRemaining, hours, minutes, seconds }
    }

    const addZero = (num) => {
        let strNum = String(num);
        if (strNum.length < 2) {
            strNum = `0${strNum}`;
        }
        return strNum;
    }

    const updateClock = () => {
        let getTime = getTimeRemaining();

        timerHours.textContent = addZero(getTime.hours);
        timerMinutes.textContent = addZero(getTime.minutes);
        timerSeconds.textContent = addZero(getTime.seconds);
    }

    idInterval = setInterval(updateClock, 1000);
}

module.exports = timer;