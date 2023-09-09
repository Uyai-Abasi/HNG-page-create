const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
const slackImageElement = document.querySelector('[data-testid="slackDisplayImage"]');
const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
const trackElement = document.querySelector('[data-testid="myTrack"]');
const githubLinkElement = document.querySelector('[data-testid="githubURL"]');

if (slackNameElement && slackImageElement && dayOfWeekElement && utcTimeElement && trackElement && githubLinkElement) {
    console.log("All elements with data-testid attributes are present.");
} else {
    console.error("One or more elements are missing.");
}


function updateCurrentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day of the Week: ${currentDay}`;
}

function updateCurrentUTCTime() {
    const currentDate = new Date();
    const currentUTCTime = currentDate.toISOString().substr(11, 8);
    const currentUTCTimeMillis = currentDate.getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time in milliseconds: ${currentUTCTimeMillis}`;
}

updateCurrentDay();
updateCurrentUTCTime();

setInterval(updateCurrentUTCTime, 1);