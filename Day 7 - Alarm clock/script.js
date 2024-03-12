
const currentTime = document.querySelectorAll("h1");
const content = document.querySelector(".content");
const selectMenu = document.querySelectorAll("select");
const option = document.querySelectorAll("option");
const setAlarmbtn = document.querySelector("button");

option.innerHTML = "00:00:00";

let alarmTime, isAlarmSet = false;
const ringtone = new Audio("./files/ringtone.mp3");

// Clear select menus before populating
selectMenu.forEach(select => {
    select.innerHTML = '';
});

for (let i = 12; i > 0; i--) {
    let hour = i < 10 ? "0" + i : i;
    let option = `<option value="${hour}">${hour}</option>`;
    selectMenu[0].insertAdjacentHTML("beforeend", option);
}

for (let i = 59; i >= 0; i--) {
    let minute = i < 10 ? "0" + i : i;
    let option = `<option value="${minute}">${minute}</option>`;
    selectMenu[1].insertAdjacentHTML("beforeend", option);
}

// Populate AM/PM
selectMenu[2].insertAdjacentHTML("beforeend", '<option value="AM">AM</option>');
selectMenu[2].insertAdjacentHTML("beforeend", '<option value="PM">PM</option>');

setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let mins = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    hour = hour < 10 ? "0" + hour : hour;
    mins = mins < 10 ? "0" + mins : mins;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    currentTime[0].textContent = `${hour}:${mins}:${seconds} ${ampm}`;

    if (alarmTime === `${hour}:${mins} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
}, 1000);

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmbtn.innerText = "Set Alarm";
        isAlarmSet = false;
    } else {
        let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
        if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
            alert("Please select a valid time");
            return;
        }
        isAlarmSet = true;
        alarmTime = time;
        content.classList.add("disable");
        
    }
}

setAlarmbtn.addEventListener("click", setAlarm);