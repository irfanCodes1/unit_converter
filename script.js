const valueInput = document.getElementById('valueInput');
const convertBtn = document.getElementById('convertBtn');
const metersToFeet = document.getElementById('metersToFeet');
const feetToMeters = document.getElementById('feetToMeters');
const litersToGallons = document.getElementById('litersToGallons');
const gallonsToLiters = document.getElementById('gallonsToLiters');
const kilosToPounds = document.getElementById('kilosToPounds');
const poundsToKilos = document.getElementById('poundsToKilos');


const METER_TO_FEET = 3.28084;
const FEET_TO_METER = 0.3048;
const LITER_TO_GALLON = 0.264172;
const GALLON_TO_LITER = 3.78541;
const KILO_TO_POUND = 2.20462;
const POUND_TO_KILO = 0.453592;

function convert() {
    const value = parseFloat(valueInput.value);
    
    if (isNaN(value) || value === '') {
        alert('Please enter a valid number');
        return;
    }
    

    const mToF = (value * METER_TO_FEET).toFixed(3);
    const fToM = (value * FEET_TO_METER).toFixed(3);
    metersToFeet.textContent = `${value} meters = ${mToF} feet`;
    feetToMeters.textContent = `${value} feet = ${fToM} meters`;
    

    const lToG = (value * LITER_TO_GALLON).toFixed(3);
    const gToL = (value * GALLON_TO_LITER).toFixed(3);
    litersToGallons.textContent = `${value} liters = ${lToG} gallons`;
    gallonsToLiters.textContent = `${value} gallons = ${gToL} liters`;

    const kToP = (value * KILO_TO_POUND).toFixed(3);
    const pToK = (value * POUND_TO_KILO).toFixed(3);
    kilosToPounds.textContent = `${value} kilos = ${kToP} pounds`;
    poundsToKilos.textContent = `${value} pounds = ${pToK} kilos`;
}


convertBtn.addEventListener('click', convert);


valueInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        convert();
    }
});