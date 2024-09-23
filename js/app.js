// get the Noakhali donationBtn 
const noakhaliDonationBtn = document.getElementById('noakhali-donate-btn');
noakhaliDonationBtn.addEventListener('click', function () {
    // get the main balance 
    const mainBalance = getTheElementId('balance');
    // // get the noakhaliDonateInput 
    const noakhaliDonateInput = getInputFieldById('noakhali-donate-input');
    const newBalance = mainBalance - noakhaliDonateInput;
    document.getElementById('balance').innerText = newBalance;
    document.getElementById('noakhali-donate-balance').innerText = noakhaliDonateInput;
})

// get the feni donationBtn 
const feniDonationBtn = document.getElementById('feni-donate-btn');
feniDonationBtn.addEventListener('click', function () {
    // get the main balane 
    const mainBalance = getTheElementId('balance');
    const feniDonateInput = getInputFieldById('feni-donate-input');
    const newBalance = mainBalance - feniDonateInput;
    // added the new balance 
    document.getElementById('balance').innerText = newBalance;
    // // get the  noakhali-donate-balance 
    document.getElementById('feni-donate-balance').innerText = feniDonateInput;
})
// get the Quata donationBtn 
const quataDonationBtn = document.getElementById('quata-donate-btn');
quataDonationBtn.addEventListener('click', function () {
    // get the main balane 
    const mainBalance = getTheElementId('balance');
    const quataDonateInput = getInputFieldById('quata-donate-input');
    const newBalance = mainBalance - quataDonateInput;
    // added the new balance 
    document.getElementById('balance').innerText = newBalance;
    // // get the  noakhali-donate-balance 
    document.getElementById('quata-donate-balance').innerText = quataDonateInput;
})