function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("clock").textContent = `${h}:${m}:${s}`;

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedDate = `${dayNames[now.getDay()]}, ${now.getDate()} ${
    monthNames[now.getMonth()]
  } ${now.getFullYear()}`;
  document.getElementById("date").textContent = formattedDate;

  const percent = (now.getSeconds() / 60) * 100 + "%";
  document.getElementById("box").style.setProperty("--progress", percent);
}

setInterval(updateClock, 1000);
updateClock();
