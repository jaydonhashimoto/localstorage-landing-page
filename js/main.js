//dom elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//show time
function showTime() {
    //night time test
    // let today = new Date(2019, 06, 10, 20, 33, 30),
    //get current time
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr format
    hour = hour % 12 || 12;

    //output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showTime, 1000);
}

//add zero
function addZero(n) {
    //return '0'+n if param < 10, else return ''+n 
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set background and greeting
function setBgGreet() {
    //night time test
    // let today = new Date(2019, 06, 10, 20, 33, 30),
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        //evening
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        //night
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

//get name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//set name
function setName(e) {
    if (e.type === 'keypress') {
        //make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            //make sure there is no line break after pressing enter
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

//get focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//set focus
function setFocus(e) {
    if (e.type === 'keypress') {
        //make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            //make sure there is no line break after pressing enter
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

//event listeners that set values after enter key press or click off text
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


//run
showTime();
setBgGreet();
getName();
getFocus();

