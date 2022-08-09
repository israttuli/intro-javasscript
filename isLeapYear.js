function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const isMyYearLeapYear = isLeapYear(2000);
console.log('My year is leap year:',isMyYearLeapYear);
const isHisYearLeapYear = isLeapYear(1995);
console.log('His year is leap year:',isHisYearLeapYear);