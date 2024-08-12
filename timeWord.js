function timeWord(time) {
    const [hourStr, minuteStr] = time.split(':');
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    const hourNames = [
        "twelve", "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten", "eleven"
    ];

    const minuteNames = [
        "oh", "one", "two", "three", "four", "five", "six",
        "seven", "eight", "nine", "ten", "eleven", "twelve",
        "thirteen", "fourteen", "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen", "twenty",
        "twenty one", "twenty two", "twenty three",
        "twenty four", "twenty five", "twenty six",
        "twenty seven", "twenty eight", "twenty nine",
        "thirty", "thirty one", "thirty two", "thirty three",
        "thirty four", "thirty five", "thirty six", "thirty seven",
        "thirty eight", "thirty nine", "forty", "forty one",
        "forty two", "forty three", "forty four", "forty five",
        "forty six", "forty seven", "forty eight", "forty nine",
        "fifty", "fifty one", "fifty two", "fifty three",
        "fifty four", "fifty five", "fifty six", "fifty seven",
        "fifty eight", "fifty nine"
    ];

    if (hour === 0 && minute === 0) {
        return "midnight";
    } else if (hour === 12 && minute === 0) {
        return "noon";
    }

    const hourName = hourNames[hour % 12];
    const minuteName = minute === 0 ? "o’clock" : `${minute < 10 ? minuteNames[0] : ''} ${minuteNames[minute]}`.trim();
    const period = hour < 12 ? "am" : "pm";

    return `${hourName} ${minuteName} ${period}`.trim();
}

module.exports = timeWord;