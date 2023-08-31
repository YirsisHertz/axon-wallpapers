const date = new Date().toDateString();

document.getElementById("date").innerHTML = date;

const getCurrentTime = () => {
  let time = new Date();
  let hrs = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  let en = "AM";

  if (hrs > 12) {
    en = "PM";
  }

  if (hrs > 13) {
    hrs = hrs - 12;
  }

  if (hrs == 0) {
    hrs = 12;
  }

  if (hrs < 10) {
    hrs = "0" + hrs;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  return `${hrs}:${min}:${sec} ${en}`;
};

setInterval(() => {
  document.getElementById("clock").innerHTML = getCurrentTime();
}, 250);
