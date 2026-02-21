'use strict'

const dayOfWeek = {
    Mon: 'Понедельник',
    Tue: 'Вторник',
    Wed: 'Среда',
    Thu: 'Четверг',
    Fri: 'Пятница',
    Sat: 'Суббота',
    Sun: 'Воскресенье',
}

const addZero = (num) => {
    let strNum = String(num);
    if (strNum.length < 2) {
        strNum = '0' + strNum;
    }
    return strNum;
}

const getInfo = (dateNow) => {
    const output = {};

    let hours = dateNow.getHours();
    if (4 <= hours && hours < 12)
        output.greetings = 'Доброе утро';
    else if (12 <= hours && hours < 16)
        output.greetings = 'Добрый день';
    else if (16 <= hours && hours < 22)
        output.greetings = 'Добрый вечер';
    else output.greetings = 'Доброй ночи';

    output.dayOfWeek = dayOfWeek[String(dateNow).slice(0, 3)];

    output.time = dateNow.toLocaleTimeString('ru');
    if (hours >= 12 && hours <= 23) {
        output.time = addZero(hours - 12) + output.time.slice(2) + ' PM';
    } else {
        if (hours == 0) {
            output.time = 12 + output.time.slice(2);
        }
        output.time += ' AM';
    }

    output.untilNewYear =
        Math.floor((new Date(dateNow.getFullYear() + 1, 0, 1) - dateNow)
            / 1000 / 60 / 60 / 24);
    if ([0, 5, 6, 7, 8, 9].includes(+String(output.untilNewYear).slice(-1)) ||
        [11, 12, 13, 14].includes(+String(output.untilNewYear).slice(-2))) {
        output.untilNewYear += ' дней';
    } else if (String(output.untilNewYear).slice(-1) == 1 &&
        output.untilNewYear != 11) {
        output.untilNewYear += ' день';
    } else {
        output.untilNewYear += ' дня';
    }

    return output;
}

const info = getInfo(new Date);
document.body.innerHTML = info.greetings + '<br>';
document.body.innerHTML += 'Сегодня: ' + info.dayOfWeek + '<br>';
document.body.innerHTML += 'Текущее время: ' + info.time + '<br>';
document.body.innerHTML += 'До нового года осталось ' + info.untilNewYear;
