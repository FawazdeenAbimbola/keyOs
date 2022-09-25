function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let AM = 'AM';
    
    if(hour > 12){
      hour = hour - 12;
    }
    if(hour < 10) {
      hour = '0' + hour;
  }
  if(minutes < 10) {
      minutes = '0' + minutes;
  }
    document.getElementById('time').innerHTML = `${hour}:${minutes}${AM}`;

    }

function showDate(){
let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let dayNumber = date.getDay();

if(month == 1){
month = 'January';
}
if(month == 2){
month = 'February';
}
if(month == 3){
month = 'March';
}
if(month == 4){
month = 'April';
}
if(month == 5){
month = 'May';
}
if(month == 6){
month = 'June';
}
if(month == 7){
month = 'July';
}
if(month == 8){
month = 'August';
}
if(month == 9){
month = 'September';
}
if(month == 10){
month = 'October';
}
if(month == 11){
month = 'November';
}
if(month == 12){
month = 'December';
}

switch (dayNumber) {
    case 0:
      dayNumber = "Sunday";
      break;
    case 1:
      dayNumber = "Monday";
      break;
    case 2:
       dayNumber = "Tuesday";
      break;
    case 3:
      dayNumber = "Wednesday";
      break;
    case 4:
      dayNumber = "Thursday";
      break;
    case 5:
      dayNumber = "Friday";
      break;
    case 6:
      dayNumber = "Saturday";
  }
document.getElementById('date').innerHTML = `${day}, ${month} ${dayNumber}`;
}
setInterval(showTime, 1000);
setInterval(showDate, 1000);

