const quarterOf = (month) => {
    if (month <= 3 ) {
        return 1;
    } else if (month <= 6 && month >= 4) {
        return 2;
    } else if (month <= 9 && month >= 7) {
        return 3;
    } else if (month <= 12 && month >= 10) {
        return 4
    }

}