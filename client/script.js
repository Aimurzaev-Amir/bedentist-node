// Setting the viewport height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
// on viewport height change
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

// mobile main menu
let burger = document.getElementById("burger");
let nav = document.getElementById("main-nav");
let body = document.querySelector("body");
let navLink = document.getElementsByClassName("navLink");

burger.addEventListener("click", function (e) {
  this.classList.toggle("is-open");
  nav.classList.toggle("is-open");
  body.classList.toggle("bodyFixed");
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function (e) {
    body.classList.remove("bodyFixed");
    burger.classList.remove("is-open");
    nav.classList.remove("is-open");
  });
}
// CALENDAR MEETING SETTINGS

// popup
let popup = document.querySelector(".popup");
let popupText = document.querySelector(".popupText");
let popupFunction = (text) => {
  popupText.innerHTML = text;
  popup.style.display = "block";
  setTimeout(function () {
    popup.style.display = "none";
  }, 1000);
};


// calendar window positioning
let registrationCalendar = document.querySelector(".registrationCalendar");
let calendarBackgroundBlock = document.querySelector(".calendarBackgroundBlock");
let timetableButton = document.querySelectorAll(".timetable");
for (let i = 0; i < timetableButton.length; i++) {
  timetableButton[i].addEventListener("click", function () {
    registrationCalendar.style.display = "block";
    let positionInfo = registrationCalendar.getBoundingClientRect();
    let height = positionInfo.height;
    let width = positionInfo.width;
    // Setting the viewport height
    let halfCvh = (window.innerHeight / 2 - height / 2) * 0.01;
    let halfCvw = (window.innerWidth / 2 - width / 2) * 0.01;
    document.documentElement.style.setProperty("--halfCvw", `${halfCvw}px`);
    document.documentElement.style.setProperty("--halfCvh", `${halfCvh}px`);
    body.classList.add("bodyFixed");
    // on viewport height change
    window.addEventListener("resize", () => {
      let halfCvh = (window.innerHeight / 2 - height / 2) * 0.01;
      let halfCvw = (window.innerWidth / 2 - width / 2) * 0.01;
      document.documentElement.style.setProperty("--halfCvw", `${halfCvw}px`);
      document.documentElement.style.setProperty("--halfCvh", `${halfCvh}px`);
    });
  });
}

let closeCalendar = document.querySelector(".close");
closeCalendar.addEventListener("click", function () {
  registrationCalendar.style.display = "none";
  body.classList.remove("bodyFixed");
});

//get current date and set
let getCalendarDates = document.querySelector(".getCalendarDates");
let currentDate = document.getElementById("currentDate");
let currentMonthDay = new Date().getDate();
currentDate.innerHTML = currentMonthDay;
// get current year and set
let currentYear = document.getElementById("currentYear");
let currentYearDate = new Date().getFullYear();
let currentYearPrivacy = document.getElementById("currentYearPrivacy");
currentYearPrivacy.innerHTML = `© BEDENTIST, ${currentYearDate}. Все права защищены`;
currentYear.innerHTML = currentYearDate;
// get current month
let currentMonth = document.getElementById("currentMonth");
let currentMonthNumberDate = new Date().getMonth() + 1;
let currentMonthDate;

// converting month numver to month name
if (currentMonthNumberDate === 1) {
  currentMonthDate = "Январь";
} else if (currentMonthNumberDate === 2) {
  currentMonthDate = "Февраль";
} else if (currentMonthNumberDate === 3) {
  currentMonthDate = "Март";
} else if (currentMonthNumberDate === 4) {
  currentMonthDate = "Апрель";
} else if (currentMonthNumberDate === 5) {
  currentMonthDate = "Май";
} else if (currentMonthNumberDate === 6) {
  currentMonthDate = "Июнь";
} else if (currentMonthNumberDate === 7) {
  currentMonthDate = "Июль";
} else if (currentMonthNumberDate === 8) {
  currentMonthDate = "Август";
} else if (currentMonthNumberDate === 9) {
  currentMonthDate = "Сентябрь";
} else if (currentMonthNumberDate === 10) {
  currentMonthDate = "Октябрь";
} else if (currentMonthNumberDate === 11) {
  currentMonthDate = "Ноябрь";
} else if (currentMonthNumberDate === 12) {
  currentMonthDate = "Декабрь";
}
// set month name
currentMonth.innerHTML = currentMonthDate;

// set current month days by weeks
let monthDays = document.getElementById("monthDays");
let monthName = document.getElementById("monthName");
let chosenDate = document.querySelector(".chosenDate");
let chosenDoc = document.querySelector(".chosenDoc");
let docName = document.getElementById("docName");
let clickedDay;
let clickedMonth;
let clickedTime;
let clickedDoc;


//on change doc name select element
docName.addEventListener("change", function () {
  clickedDoc = docName.options[docName.selectedIndex].value;
});

function setMonthDays() {
  //clear array of previous month days
  arr = [];
  // clear previous clicked day
  clickedDay = "";
  // clear month days before set new month days
  monthDays.innerHTML = "";

  // get days or week for clicked month
  let month = monthName.value === "Выберите месяц" ? "September" : monthName.value;
  let year = new Date().getFullYear();
  let dayOfWeek = new Date(month + "1," + year).getDay();

  // convert moth name to number
  let numberMonth;
  if (month === "January") {
    numberMonth = 0;
  }
  if (month === "February") {
    numberMonth = 1;
  }
  if (month === "March") {
    numberMonth = 2;
  }
  if (month === "April") {
    numberMonth = 3;
  }
  if (month === "May") {
    numberMonth = 4;
  }
  if (month === "June") {
    numberMonth = 5;
  }
  if (month === "July") {
    numberMonth = 6;
  }
  if (month === "August") {
    numberMonth = 7;
  }
  if (month === "September") {
    numberMonth = 8;
  }
  if (month === "October") {
    numberMonth = 9;
  }
  if (month === "November") {
    numberMonth = 10;
  }
  if (month === "December") {
    numberMonth = 11;
  }

  // change month on select changing
  clickedMonth = monthName.options[monthName.selectedIndex].value;
  currentMonth.innerHTML = monthName.options[monthName.selectedIndex].text;

  // get last day of month to create array of days for clicked month
  let fullLastDateArray = new Date(year, numberMonth + 1, 0).toString().split(" ");
  for (let i = 1; i <= fullLastDateArray[2]; i++) {
    arr.push(i);
  }

  // set beginning of the week from correct week day
  if (dayOfWeek === 2) {
    arr.unshift(0);
  } else if (dayOfWeek === 3) {
    arr.unshift(0, 0);
  } else if (dayOfWeek === 4) {
    arr.unshift(0, 0, 0);
  } else if (dayOfWeek === 5) {
    arr.unshift(0, 0, 0, 0);
  } else if (dayOfWeek === 6) {
    arr.unshift(0, 0, 0, 0, 0);
  } else if (dayOfWeek === 0) {
    arr.unshift(0, 0, 0, 0, 0, 0);
  }

  //create for each day from array block and paragraph
  arr.forEach((day) => {
    let newP = document.createElement("div");
    newP.classList.add("monthDayBlock");
    let dayNum = document.createAttribute("dayNum");
    dayNum.value = day;
    newP.setAttributeNode(dayNum);
    if (day === 0) {
      newP.innerHTML = "";
    } else {
      newP.innerHTML = `<p class="day">${day}</p>`;
    }
    monthDays.appendChild(newP);

    // on day number click action
    newP.addEventListener("click", function (e) {
      if (
        e.currentTarget.innerText !== "" &&
        docName.options[docName.selectedIndex].text !== "Выберите стоматолога" &&
        monthName.options[monthName.selectedIndex].value !== "Выберите месяц"
      ) {
        clickedDay = e.currentTarget.innerText;
        currentDate.innerHTML = e.currentTarget.innerText;
        let selectedDay = document.getElementsByClassName("selectedDay");
        for (let i = 0; i < selectedDay.length; i++) {
          selectedDay[i].classList.remove("selectedDay");
        }
        newP.classList.add("selectedDay");
        chosenDate.innerHTML =
          e.currentTarget.innerText + " " + monthName.options[monthName.selectedIndex].text;
        chosenDoc.innerHTML = docName.options[docName.selectedIndex].text;
      } else {
        popupFunction("Пожалуйста, выберите нужного стоматолога из списка и месяц!");
      }
    });
  });
}
setMonthDays()
// on change month select element
monthName.addEventListener("change", setMonthDays);

let usersTimetable = document.querySelector(".usersTimetable");
let timetable = () => {
  usersTimetable.innerHTML = "";
  timeArr.map((time) => {
    let userTimeBlock = document.createElement("div");
    let userTimeButton = document.createElement("button");
    userTimeButton.innerHTML = time.hour;
    userTimeButton.classList.add("usersTimetableBlock");
    usersTimetable.appendChild(userTimeBlock);
    userTimeBlock.appendChild(userTimeButton);
    userTimeButton.addEventListener("click", function (e) {
      clickedTime = e.currentTarget.innerHTML;
      let choosedTime = document.getElementsByClassName("choosedTime");
      for (let i = 0; i < choosedTime.length; i++) {
        choosedTime[i].classList.remove("choosedTime");
      }
      userTimeButton.classList.add("choosedTime");
    });
  });
  usersArr.map((user) => {
    let usersTimetableBlocks = document.querySelectorAll(".usersTimetableBlock");
    for (let i = 0; i < usersTimetableBlocks.length; i++) {
      if (usersTimetableBlocks[i].innerText === user.time) {
        usersTimetableBlocks[i].classList.add("userClosedTime");
        usersTimetableBlocks[i].setAttribute("disabled", "disabled");
        usersTimetableBlocks[i].style.cursor = "url('img/notAllowed.png'), auto";
      }
    }
  });
};

let calendarDates = document.querySelector(".calendarDates");
let meetingTimeTable = document.querySelector(".meetingTimeTable");
let getBack = document.querySelector(".getBack");
// go button to the next page (day timetable)
getCalendarDates.addEventListener("click", async function () {
  if (
    docName.options[docName.selectedIndex].text === "Выберите стоматолога" ||
    monthName.options[monthName.selectedIndex].text === "Выберите месяц" ||
    !clickedDay
  ) {
    popupFunction("Пожалуйста, выберите нужного стоматолога из списка, месяц и дату!");
  } else {
    calendarDates.style.display = "none";
    meetingTimeTable.style.display = "block";
    let data = await MeetingsAPI.getMeetingsData(clickedDoc, clickedDay, clickedMonth);
    usersArr = data;
    timetable();
  }
});

// second page (day timetable) get back button
getBack.addEventListener("click", function () {
  calendarDates.style.display = "block";
  meetingTimeTable.style.display = "none";
});

let usersDataForm = document.querySelector(".usersDataForm");
usersDataForm.addEventListener("submit", handleForm);

async function handleForm(e) {
  if (clickedTime !== undefined) {
    e.preventDefault();
    let formData = new FormData(usersDataForm);
    await MeetingsAPI.createMeeting(
      formData.get("name"),
      clickedDay,
      clickedMonth,
      clickedTime,
      clickedDoc,
      formData.get("number"),
      formData.get("info")
    );
    let data = await MeetingsAPI.getMeetingsData(clickedDoc, clickedDay, clickedMonth);
    usersArr = data;
    timetable();
    usersDataForm.reset();
    popupFunction(
      "Спасибо за доверие! Ваша консультация зарегистрирована! Для изменения данных регистрации пройдите в личный кабинет!"
    );
    clickedTime = undefined;
  } else {
    e.preventDefault();
    popupFunction("Пожалуйста, выберите свободное время приема!");
  }
}
