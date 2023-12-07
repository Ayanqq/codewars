function century(year) {
    if (year % 100 == 0) {
        return (year / 100);
    } else {
        year = (year / 100) + 1;
        year = (Math.trunc(year));
        return year;
    }
}

console.log(century(2015))