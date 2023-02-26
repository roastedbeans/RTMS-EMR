// SIDEBAR TOGGLE
var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var maincontainer = document.getElementById("main-container");
var mainsearchbar = document.getElementById("main-searchbar");
var logout = document.getElementById("logout");
var backButton = document.getElementById("backButtonIcon");

if(backButton != null)
{
    backButton.addEventListener('click', (e) => {
        window.location.href = "list-patient.html";
    });
    
}

maincontainer.addEventListener('click', (e) => {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebar.classList.remove("w3-animate-left");
        sidebarOpen = false;
    }
});

mainsearchbar.addEventListener('click', (e) => {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebar.classList.remove("w3-animate-left");
        sidebarOpen = false;
    }
});

function openSidebar() {
    sidebar.classList.add("w3-animate-left");
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebar.classList.remove("w3-animate-left");
        sidebarOpen = false;
    }
}


//Time
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */

function formatTime(date) {
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const isAm = date.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
    const DAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()}`;
}

setInterval(() => {
    const now = new Date();

    timeElement.textContent = formatTime(now);
    dateElement.textContent = formatDate(now);
}, 200);
