let currentDate = new Date(),
    dir = 0;

// full day functionality
function date(now) {
  let monthNames = [
        "января", "февраля", "марта",
        "апреля", "мая", "июня", "июля",
        "августа", "сентября", "октября",
        "ноября", "декабря"
      ],
      dayNames = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'],
      monthIndex = now.getMonth(),
      dayIndex = now.getDay() - 1,
      day = now.getDate(),
      year = now.getFullYear();

      let finalDate = dayNames[dayIndex] + ', ' + day + ' ' + monthNames[monthIndex] + ' ' + year + ' г.';

      let date = document.querySelector('.date');
	  	date.innerHTML = finalDate;

}

// currecnt visible month functionality
function chosenDate(now) {
  let monthNames = [
        "январь", "февраль", "март",
        "апрель", "май", "июнь", "июль",
        "август", "сентябрь", "октябрь",
        "ноябрь", "декабрь"
      ],
      monthIndex = now.getMonth(),
      year = now.getFullYear();

      let finalDate = monthNames[monthIndex] + ' ' + year + ' г.';

      let date = document.querySelector('.cal_month');
	  	date.innerHTML = finalDate;

}

// clock functionality
function clock(){
  window.setInterval(function(){
    let now = new Date();
    let clock = document.querySelector('.clock');
    clock.innerHTML = now.toLocaleTimeString();
  }, 1000);
}

// calendar builder
function genCalendar(date) {
  let calendarBody = document.querySelector('.cal_body'),
      dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      today = new Date();
      curDay = today.getDate();
  date.setDate(1);
  let startDay = date.getDay();
  let daysTotal = !(date.getFullYear() % 4) && date.getMonth() === 1 ? 29 : dayInMonth[date.getMonth()];
  let content = '',
      count = 0,
      prevMonthDays = dayInMonth[date.getMonth() - 1] - (startDay - 1),
      nextMonthDays = 1;
  for(let i = 0; i < startDay - 1; i++) {
    content += '<span class="disabled prevMonth">' + prevMonthDays + '</span>';
    prevMonthDays++;
    count++;
  }
  for(let i = 1; i <= daysTotal; i++) {
    if(i === curDay && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear()) {
      content += '<span class="clickable cur-day">' + i + '</span>';
      count++;
    } else {
      content += '<span class="clickable">' + i + '</span>';
      count++;
    }
  }
  for(let i = 0; i < 42 - count; i++) {
    content += '<span class="disabled nextMonth">' + nextMonthDays + '</span>';
    nextMonthDays++;
  }
  calendarBody.innerHTML = content;
}

// month switcher
document.querySelector('.month_back').onclick = function(){
  dir = -1;
  currentDate.setMonth(currentDate.getMonth() - 1);
  rebuildCalendar(currentDate);
}
document.querySelector('.month_forward').onclick = function(){
  dir = 1;
  currentDate.setMonth(currentDate.getMonth() + 1);
  rebuildCalendar(currentDate);
}
// re-builder of the calendar
function rebuildCalendar(currentDate) {
  if (dir !== 0) {
    genCalendar(new Date(currentDate));
    chosenDate(new Date(currentDate));
    dir = 0;
  }
}

// day switcher
document.body.addEventListener("click", function(e){
  let elem = e.target;
  cleanCheckedDay();
  if(elem.classList.contains("clickable")) elem.classList.toggle("checked");
});

// checked day cleaner
function cleanCheckedDay() {
  let chEll = document.getElementsByClassName('checked');
  if (chEll.length !== 0) {
    for (let i = 0; i < chEll.length; i++) {
      chEll[i].classList.remove("checked");
      break;
    }
  }
}


document.querySelector('.day_forward').onclick = function(){
  checkDayByBtnForward();
}


function checkDayByBtnForward() {
  let checkedEll = document.getElementsByClassName('checked'),
      checkedDayValue,
      clickableElls = document.getElementsByClassName('clickable');

  dir = 1;
  if (checkedEll.length !== 0) {
    checkedDayValue = checkedEll[0].innerText;
    for (let i = 0; i < clickableElls.length; i++) {
      if (checkedDayValue == clickableElls[i].innerText) {
        //clickableElls[i].classList.remove('checked');
        clickableElls[i+1].classList.toggle('checked');
      }
      
      /*if (checkedDayValue == clickableElls[clickableElls.length - 1]) {
        currentDate.setMonth(currentDate.getMonth() + 1);
        rebuildCalendar(currentDate);
        checkDayByBtnForward();
      }*/
    }
  } else {
    clickableElls[0].classList.toggle('checked');
  }

}