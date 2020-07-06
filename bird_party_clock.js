var wakeUpTime = 7, noon = 12, lunchTime = 12, napTime = lunchTime + 2, partyTime, evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function() {
    //Display the string on the webpage
    var clock = document.getElementById("clock");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    //Set hours
    if (hours >= noon) {
        var meridian = "PM";
        hours = hours - 12;
    }

    //Set minutes
    else if (minutes < 10) {
        minutes =  "0" + minutes;
    }

    else if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() {
    var time = new Date().getHours();
    var messageText;
    var image = "https://nas-national-prod.s3.amazonaws.com/styles/hero_image/s3/web_groombaltimoreoriole-and-a-male-red-breasted-grosbeak.jpg?itok=mGKiNpgF";
    var timeEvent = document.getElementById("timeEvent");
    var birdImage = document.getElementById("birdImage");

    if (time == partyTime){
        image = "https://i.redd.it/7n2nabhia9201.jpg";
        messageText = "Party Time";
    }

    else if (time == wakeUpTime) {
        image = "https://i.pinimg.com/236x/1f/c3/a0/1fc3a077f98d4bb3f4ba670f11ec95e9--choir-singers.jpg";
        messageText = "Wake up!"
    }

    else if (time == lunchTime) {
        image = "https://nas-national-prod.s3.amazonaws.com/styles/hero_image/s3/web_groombaltimoreoriole-and-a-male-red-breasted-grosbeak.jpg?itok=mGKiNpgF";
        messageText = "Let's have some lunch";
    }

    else if (time == napTime) {
        image = "https://petcentral.chewy.com/wp-content/uploads/sleeping-bird-1.jpg";
        messageText = "Sleep tight!";
    }

    else if (time < noon) {
        image = "https://i.pinimg.com/236x/1f/c3/a0/1fc3a077f98d4bb3f4ba670f11ec95e9--choir-singers.jpg";
        messageText = "Good morning!";
    }

    else if (time >= evening) {
        image = "https://i.ytimg.com/vi/QKZ7lSCJg9Q/maxresdefault.jpg";
        messageText = "Good evening!";
    }

    else {
        image = "https://nas-national-prod.s3.amazonaws.com/styles/hero_image/s3/web_groombaltimoreoriole-and-a-male-red-breasted-grosbeak.jpg?itok=mGKiNpgF";
        messageText = "Good afternoon!";
    }

    console.log(messageText);

    timeEvent.innerText = messageText;
    birdImage.src = image;

    showCurrentTime();
};

updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the Party Time Button ToWork
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function() {
    if (partyTime < 0) {
        partyTime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgrounColor = "#0A8DAB";
    }
    else {
        partyTime = -1;
        partyTimeButton.innerText = "Party On!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

//Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function() {
    wakeUpTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

//Activates lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

//Activates nap-time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function() {
    napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);