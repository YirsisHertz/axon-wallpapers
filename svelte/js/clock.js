const formatDate = () => {
  const date = new Date().toDateString().split(" ");
  return `${date[2]} ${date[1].toUpperCase()} ${date[3].slice(2)}`;
};

const setDate = () => {
  document.getElementById("date").innerHTML = formatDate();
};

const formatTime = (hrs = 0, min = 0, sec) => {
  return `${hrs.toString().padStart(2, 0)}:${min.toString().padStart(2, 0)}`;
};

const setEn = (en = "PM") => {
  document.getElementById("en").innerHTML = en;
};

const setTime = () => {
  setDate();

  document.getElementById("clock").innerHTML = getCurrentTime();
};

const getCurrentTime = () => {
  let time = new Date();

  let hrs = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  let en = "AM";

  if (hrs > 12) {
    en = "PM";
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  if (hrs == 0) {
    hrs = 12;
  }

  setEn(en);

  return formatTime(hrs, min, sec);
};

setTime();

setTimeout(() => {
  setTime();

  setInterval(() => {
    setTime();
  }, 1000);
}, 1000 - new Date().getMilliseconds());
