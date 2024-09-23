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
        const noakhaliMainBalance = getTheElementId('noakhali-donate-balance');
        const totalNoakhalibalance = noakhaliDonateInput + noakhaliMainBalance
        document.getElementById('noakhali-donate-balance').innerText = totalNoakhalibalance;

        // history 
        const createElement = document.createElement('div');
        createElement.className = "bg-white m-5 rounded-xl p-2 border-2 border-gray-300";
        createElement.innerHTML = `
        <p class="text-xl  text-gray-700">Income: ${noakhaliDonateInput} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
        <p class="text-lg text-gray-500">${new Date().toLocaleDateString()}</p>
        `
        const historyContainer = document.getElementById("history-container");
        historyContainer.insertBefore(createElement, historyContainer.firstChild);
    }
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
        const feniMainBalance = getTheElementId('feni-donate-balance');
        const totalFenibalance = feniDonateInput + feniMainBalance
        document.getElementById('feni-donate-balance').innerText = totalFenibalance;
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
        const quataMainBalance = getTheElementId('feni-donate-balance');
        const totalQuatabalance = quataDonateInput + quataMainBalance
        document.getElementById('quata-donate-balance').innerText = totalQuatabalance;
    }

})

// get the donation-tab 
const donationtab = document.getElementById('donation-tab');
donationtab.addEventListener('click', function () {
    getIdForChangeClassName('history-tab').classList.remove('bg-lime-400');
    getIdForChangeClassName('history-tab').classList.add('bg-white');
    getIdForChangeClassName('donation-tab').classList.add('bg-lime-400');
    getIdForChangeClassName('hero-section').classList.remove('hidden');
    getIdForChangeClassName('history-section').classList.add('hidden');
})
// get the history-tab

const historytab = document.getElementById('history-tab');
historytab.addEventListener('click', function () {
    getIdForChangeClassName('history-tab').classList.add('bg-lime-400');
    getIdForChangeClassName('history-tab').classList.remove('bg-white');
    getIdForChangeClassName('donation-tab').classList.remove('bg-lime-400');
    getIdForChangeClassName('hero-section').classList.add('hidden');
    getIdForChangeClassName('history-section').classList.remove('hidden');
})