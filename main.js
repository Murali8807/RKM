let totalEarnings = 0;
let balance = 0;
let heartCount = 0;

function incrementHearts() {
    heartCount++;
    document.getElementById('heartCount').innerText = heartCount;
}

function startTaskTimer(taskId) {
    alert("You must spend at least 1 minute on this task to earn a reward.");
    let taskUrl = "https://readyketmoney.blogspot.com/2024/09/rkm.html"; // Task URL

    window.open(taskUrl, "_blank");

    setTimeout(() => {
        addReward();
    }, 60000); // 60 seconds (1 minute)
}

function startVideoTimer(videoId) {
    alert("You must spend at least 1 minute watching this video to earn a reward.");
    let videoUrl = "https://your-video-url.com"; // Video URL

    window.open(videoUrl, "_blank");

    setTimeout(() => {
        addReward();
    }, 60000); // 60 seconds (1 minute)
}

function addReward() {
    totalEarnings += 2;
    balance += 2;
    document.getElementById('totalEarnings').innerText = totalEarnings;
    document.getElementById('balance').innerText = balance;

    alert('You have earned ₹2!');
}

function openGift(giftId) {
    let giftUrl = "https://your-gift-url.com"; // Gift URL
    window.open(giftUrl, "_blank");
    alert('You opened Gift ' + giftId + '!');
}

function openWallet() {
    hideAllSections();
    document.getElementById('wallet').classList.remove('hidden');
    document.getElementById('wallet').style.display = 'block';
}

function openTasks() {
    hideAllSections();
    document.getElementById('tasks').classList.remove('hidden');
}

function openVideoTasks() {
    hideAllSections();
    document.getElementById('videoTasks').classList.remove('hidden');
}

function openLuckyGifts() {
    hideAllSections();
    document.getElementById('luckyGifts').classList.remove('hidden');
}

function openReferrals() {
    hideAllSections();
    document.getElementById('referrals').classList.remove('hidden');
}

function hideAllSections() {
    document.getElementById('wallet').classList.add('hidden');
    document.getElementById('tasks').classList.add('hidden');
    document.getElementById('videoTasks').classList.add('hidden');
    document.getElementById('luckyGifts').classList.add('hidden');
    document.getElementById('referrals').classList.add('hidden');
}

function loadMainPage() {
    hideAllSections();
}
