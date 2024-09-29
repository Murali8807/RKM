let totalEarnings = 0;
let referralCount = 0;

function loadMainPage() {
    hideAllSections();
    document.getElementById('wallet').classList.remove('hidden'); // Show wallet
}

function hideAllSections() {
    const sections = [
        'walletOptions',
        'tasks', 
        'videos', 
        'luckyGifts', 
        'referrals', 
        'upiSection', 
        'bankSection', 
        'googlePaySection'
    ];
    sections.forEach(section => {
        document.getElementById(section).classList.add('hidden');
    });
}

function showWalletOptions() {
    hideAllSections();
    document.getElementById('walletOptions').classList.remove('hidden');
}

function showSection(sectionName) {
    hideAllSections();
    document.getElementById(sectionName).classList.remove('hidden');
}

function showMessage() {
    alert("Have a nice day!");
}

function showUPISection() {
    showSection('upiSection');
}

function showBankSection() {
    showSection('bankSection');
}

function showGooglePaySection() {
    showSection('googlePaySection');
}

function submitUPI() {
    const upiId = document.getElementById('upiNumber').value;
    alert(`UPI ID ${upiId} submitted successfully!`);
    document.getElementById('upiNumber').value = '';
}

function submitBankDetails() {
    const bankName = document.getElementById('bankName').value;
    const ifscCode = document.getElementById('ifscCode').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const accountHolder = document.getElementById('accountHolder').value;
    alert(`Bank Details submitted for ${accountHolder} successfully!`);
    document.getElementById('bankName').value = '';
    document.getElementById('ifscCode').value = '';
    document.getElementById('accountNumber').value = '';
    document.getElementById('accountHolder').value = '';
}

function submitGooglePay() {
    const googlePayNumber = document.getElementById('googlePayNumber').value;
    alert(`Google Pay Number ${googlePayNumber} submitted successfully!`);
    document.getElementById('googlePayNumber').value = '';
}

function startTask(taskNumber) {
    const taskUrls = [
        "https://readyketmoney.blogspot.com/2024/09/rkm.html",
        "https://readyketmoney.blogspot.com/2024/09/task2.html",
        "https://readyketmoney.blogspot.com/2024/09/task3.html"
    ];
    const taskUrl = taskUrls[taskNumber - 1];
    alert(`Please spend a minimum of 1 minute on this website to complete the task.`);
    window.open(taskUrl, '_blank');
}

function startVideo(videoNumber) {
    const videoUrls = [
        "https://your-video-url1.com",
        "https://your-video-url2.com",
        "https://your-video-url3.com"
    ];
    const videoUrl = videoUrls[videoNumber - 1];
    alert(`Please spend a minimum of 1 minute on this video to complete the task.`);
    window.open(videoUrl, '_blank');
}

function participateLuckyGift() {
    alert("Participate in the Lucky Gift!");
}

// Update the total earnings and referral count as needed
