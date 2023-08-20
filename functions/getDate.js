// get date
const getDate = function() {
    // create a new date object
    const dateObj = new Date();

    // get current day
    let day = dateObj.getDate();

    switch(day) {
        case 1:
            day += 'st';
            break;
        case 2:
            day += 'nd';
            break;
        case 3:
            day += 'rd';
            break;
        default:
            day += 'th';
            break;
    };

    // get current month
    let month = dateObj.getMonth();

    switch(month) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
    };

    // put it together with current year
    const date = `${day} of ${month}, ${dateObj.getFullYear()}`;
    return date;
};

// get time
const getTime = function() {
    // create new date object
    const dateObj = new Date();
    // hour
    let hour = dateObj.getHours() + 2;

    hour = hour % 24;

    if (hour.toString().length == 1) {
        let temp = '0';
        temp += hour;
        hour = temp;
    };

    // minute
    let minute = dateObj.getMinutes();

    if (minute.toString().length == 1) {
        let temp = '0';
        temp += minute;
        minute = temp;
    };

    // second
    let second = dateObj.getSeconds();

    if (second.toString().length == 1) {
        let temp = '0';
        temp += second;
        second = temp;
    };

    // put it together
    const time = `${hour}:${minute}:${second}`;
    return time;
};

module.exports = { getDate, getTime };