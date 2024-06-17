document.getElementById('car-type').addEventListener('change', updateLeasingDetails);
document.getElementById('car-value-slider').addEventListener('input', syncCarValue);
document.getElementById('car-value').addEventListener('input', syncCarValueSlider);
document.getElementById('lease-period').addEventListener('change', updateLeasingDetails);
document.getElementById('down-payment-slider').addEventListener('input', syncDownPayment);
document.getElementById('down-payment').addEventListener('input', syncDownPaymentSlider);

function calculateLeasingDetails() {
    const carValue = parseFloat(document.getElementById('car-value').value);
    const leasePeriod = parseInt(document.getElementById('lease-period').value);
    const downPaymentPercent = parseFloat(document.getElementById('down-payment').value);
    const carType = document.getElementById('car-type').value;

    const downPayment = carValue * (downPaymentPercent / 100);
    const financedAmount = carValue - downPayment;
    
    let interestRate = 0.0299;
    if (carType === 'used') {
        interestRate = 0.037;
    }
    
    const monthlyRate = interestRate / 12;
    const monthlyInstallment = financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, leasePeriod)) / (Math.pow(1 + monthlyRate, leasePeriod) - 1);
    const totalLeasingCost = downPayment + (monthlyInstallment * leasePeriod);

    document.getElementById('down-payment-amount').textContent = downPayment.toFixed(2);
    document.getElementById('monthly-installment').textContent = monthlyInstallment.toFixed(2);
    document.getElementById('total-leasing-cost').textContent = totalLeasingCost.toFixed(2);
    document.getElementById('interest-rate').textContent = (carType === 'new' ? '2.99%' : '3.7');
}

function updateLeasingDetails() {
    const carType = document.getElementById('car-type').value;
    let interestRate = 0.0299;
    if (carType === 'used') {
        interestRate = 0.037;
    }
    document.getElementById('interest-rate').textContent = (carType === 'new' ? '2.99%' : '3.7');

    calculateLeasingDetails();
}

function syncCarValue() {
    const carValueSlider = document.getElementById('car-value-slider');
    const carValueInput = document.getElementById('car-value');
    carValueInput.value = carValueSlider.value;
    calculateLeasingDetails();
}

function syncCarValueSlider() {
    const carValueSlider = document.getElementById('car-value-slider');
    const carValueInput = document.getElementById('car-value');
    carValueSlider.value = carValueInput.value;
    calculateLeasingDetails();
}

function syncDownPayment() {
    const downPaymentSlider = document.getElementById('down-payment-slider');
    const downPaymentInput = document.getElementById('down-payment');
    downPaymentInput.value = downPaymentSlider.value;
    calculateLeasingDetails();
}

function syncDownPaymentSlider() {
    const downPaymentSlider = document.getElementById('down-payment-slider');
    const downPaymentInput = document.getElementById('down-payment');
    downPaymentSlider.value = downPaymentInput.value;
    calculateLeasingDetails();
}

calculateLeasingDetails();
