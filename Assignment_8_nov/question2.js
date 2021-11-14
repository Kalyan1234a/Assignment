// find the Power, input as voltage and current

function power(voltage, current){
    return(voltage * current);
}
let voltage = 15;
let current = 6;

var Power = power(voltage, current);
console.log( "value of power is " + Power);