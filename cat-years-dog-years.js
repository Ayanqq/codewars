var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;
    if (humanYears == 1) {
        catYears = 15
        dogYears = 15

    } else if (humanYears == 2) {

        catYears = 15 + 9
        dogYears = 15 + 9

    } else if (humanYears >= 3) {

        catYears = 24
        dogYears = 24

        for (let i = 3; i <= humanYears; i++) {

            catYears = catYears + 4
            dogYears = dogYears + 5

        }
    }
    return [humanYears,catYears,dogYears];
}