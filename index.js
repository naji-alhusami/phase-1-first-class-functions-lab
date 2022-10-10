// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = () => {
    return function (num) {
        return num*num;
    }
}

const fareDoubler = (num) => {
 return num*2;
}


const fareTripler = (num) => {
    return num*3;
}

const selectDifferentDrivers = (drivers, function_drivers) => {
    return function_drivers(drivers);
}