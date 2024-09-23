// get the Noakhali donationBtn 
const noakhaliDonationBtn = document.getElementById('noakhali-donate-btn');
noakhaliDonationBtn.addEventListener('click', function () {
    // get the main balance 
    const mainBalance = getTheElementId('balance');
    const noakhaliDonateInput = getInputFieldById('noakhali-donate-input');

    if (mainBalance < noakhaliDonateInput || isNaN(noakhaliDonateInput) || noakhaliDonateInput == 0) {
        document.getElementById('my_modal_3').classList.add('hidden')
        return alert('invalid Input')
    } else {
        const newBalance = mainBalance - noakhaliDonateInput;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('noakhali-donate-balance').innerText = noakhaliDonateInput;
    }
    // // get the noakhaliDonateInput 

})
// get the feni donationBtn 
const feniDonationBtn = document.getElementById('feni-donate-btn');
feniDonationBtn.addEventListener('click', function () {
    // get the main balane 
    const mainBalance = getTheElementId('balance');
    const feniDonateInput = getInputFieldById('feni-donate-input');

    if (mainBalance < feniDonateInput || isNaN(feniDonateInput) || feniDonateInput == 0) {
        document.getElementById('my_modal_3').classList.add('hidden')
        return alert('invalid Input')
    } else {
        const newBalance = mainBalance - feniDonateInput;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('feni-donate-balance').innerText = feniDonateInput;
    }

})
// get the Quata donationBtn 
const quataDonationBtn = document.getElementById('quata-donate-btn');
quataDonationBtn.addEventListener('click', function () {
    // get the main balane 
    const mainBalance = getTheElementId('balance');
    const quataDonateInput = getInputFieldById('quata-donate-input');

    if (mainBalance < quataDonateInput || isNaN(quataDonateInput) || quataDonateInput == 0) {
        document.getElementById('my_modal_3').classList.add('hidden')
        return alert('invalid Input')
    } else {
        const newBalance = mainBalance - quataDonateInput;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('quata-donate-balance').innerText = quataDonateInput;
    }

})

// get the history-tab

const historytab = document.getElementById('history-tab');
historytab.addEventListener('click', function () {
    getIdForChangeClassName('history-tab').classList.add('bg-lime-400');
    getIdForChangeClassName('history-tab').classList.remove('bg-white');
    getIdForChangeClassName('donation-tab').classList.remove('bg-lime-400');
    getIdForChangeClassName('hero-section').classList.add('hidden')
})
// get the donation-tab 
const donationtab = document.getElementById('donation-tab');
donationtab.addEventListener('click', function () {
    getIdForChangeClassName('history-tab').classList.remove('bg-lime-400');
    getIdForChangeClassName('history-tab').classList.add('bg-white');
    getIdForChangeClassName('donation-tab').classList.add('bg-lime-400');
    getIdForChangeClassName('hero-section').classList.remove('hidden')
})