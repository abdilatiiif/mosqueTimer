const bigTimeOutput = document.getElementById("time");
const fajrTid = document.getElementById("fajr-tid");
const duhurTid = document.getElementById("duhur-tid");
const asrTid = document.getElementById("asr-tid");
const maghribTid = document.getElementById("maghrib-tid");
const ishaTid = document.getElementById("isha-tid");

const fajrJamat = document.getElementById("fajr-jamat-tid");
const soloppgang = document.getElementById("soloppgang-tid");
const duhurJamat = document.getElementById("duhur-jamat-tid");
const asrJamat = document.getElementById("Asr-jamat-tid");
const maghribJamat = document.getElementById("maghrib-jamat-tid");
const ishaJamat = document.getElementById("isha-jamat-tid");
const jummaJamat = document.getElementById("Jummah-jamat-tid");

const nextPrayer = document.querySelector(".next-prayer");
const countdown = document.getElementById("countDowntime");

const bønnetider = {
  1: {
    Fajr: "6:45",
    Soloppgang: "8:30",
    Duhur: "12:35",
    Asr: "14:04",
    Maghrib: "16:30",
    Isha: "18:26",
  },
  2: {
    Fajr: "6:42",
    Soloppgang: "8:27",
    Duhur: "13:00",
    Asr: "14:06",
    Maghrib: "16:33",
    Isha: "18:29",
  },
  3: {
    Fajr: "6:39",
    Soloppgang: "8:25",
    Duhur: "12:35",
    Asr: "14:08",
    Maghrib: "16:36",
    Isha: "18:32",
  },
  4: {
    Fajr: "6:37",
    Soloppgang: "8:23",
    Duhur: "12:35",
    Asr: "14:10",
    Maghrib: "16:38",
    Isha: "18:34",
  },
  5: {
    Fajr: "6:34",
    Soloppgang: "8:20",
    Duhur: "12:35",
    Asr: "14:12",
    Maghrib: "16:41",
    Isha: "18:37",
  },
  6: {
    Fajr: "6:31",
    Soloppgang: "8:18",
    Duhur: "12:35",
    Asr: "14:14",
    Maghrib: "16:44",
    Isha: "18:40",
  },
  7: {
    Fajr: "6:28",
    Soloppgang: "8:15",
    Duhur: "12:35",
    Asr: "14:16",
    Maghrib: "16:46",
    Isha: "18:42",
  },
  8: {
    Fajr: "6:25",
    Soloppgang: "8:13",
    Duhur: "12:35",
    Asr: "14:18",
    Maghrib: "16:49",
    Isha: "18:45",
  },
  9: {
    Fajr: "6:22",
    Soloppgang: "8:10",
    Duhur: "13:00",
    Asr: "14:20",
    Maghrib: "16:52",
    Isha: "18:48",
  },
  10: {
    Fajr: "6:19",
    Soloppgang: "8:08",
    Duhur: "12:35",
    Asr: "14:22",
    Maghrib: "16:54",
    Isha: "18:50",
  },
  11: {
    Fajr: "6:16",
    Soloppgang: "8:05",
    Duhur: "12:35",
    Asr: "14:24",
    Maghrib: "16:57",
    Isha: "18:53",
  },
  12: {
    Fajr: "6:13",
    Soloppgang: "8:02",
    Duhur: "12:35",
    Asr: "14:26",
    Maghrib: "17:00",
    Isha: "18:56",
  },
  13: {
    Fajr: "6:10",
    Soloppgang: "7:59",
    Duhur: "12:35",
    Asr: "14:27",
    Maghrib: "17:03",
    Isha: "18:59",
  },
  14: {
    Fajr: "6:08",
    Soloppgang: "7:57",
    Duhur: "12:35",
    Asr: "14:29",
    Maghrib: "17:06",
    Isha: "19:02",
  },
  15: {
    Fajr: "6:06",
    Soloppgang: "7:54",
    Duhur: "12:35",
    Asr: "14:31",
    Maghrib: "17:08",
    Isha: "19:04",
  },
  16: {
    Fajr: "6:03",
    Soloppgang: "7:52",
    Duhur: "13:00",
    Asr: "14:33",
    Maghrib: "17:11",
    Isha: "19:07",
  },
  17: {
    Fajr: "6:01",
    Soloppgang: "7:49",
    Duhur: "12:35",
    Asr: "14:35",
    Maghrib: "17:14",
    Isha: "19:10",
  },
  18: {
    Fajr: "5:58",
    Soloppgang: "7:46",
    Duhur: "12:35",
    Asr: "14:37",
    Maghrib: "17:16",
    Isha: "19:12",
  },
  19: {
    Fajr: "5:55",
    Soloppgang: "7:43",
    Duhur: "12:35",
    Asr: "14:39",
    Maghrib: "17:19",
    Isha: "19:15",
  },
  20: {
    Fajr: "5:52",
    Soloppgang: "7:41",
    Duhur: "12:35",
    Asr: "14:41",
    Maghrib: "17:21",
    Isha: "19:17",
  },
  21: {
    Fajr: "5:50",
    Soloppgang: "7:38",
    Duhur: "12:35",
    Asr: "14:43",
    Maghrib: "17:24",
    Isha: "19:20",
  },
  22: {
    Fajr: "5:47",
    Soloppgang: "7:35",
    Duhur: "12:35",
    Asr: "14:45",
    Maghrib: "17:27",
    Isha: "19:23",
  },
  23: {
    Fajr: "5:44",
    Soloppgang: "7:32",
    Duhur: "13:00",
    Asr: "14:46",
    Maghrib: "17:29",
    Isha: "19:25",
  },
  24: {
    Fajr: "5:41",
    Soloppgang: "7:29",
    Duhur: "12:35",
    Asr: "14:48",
    Maghrib: "17:32",
    Isha: "19:28",
  },
  25: {
    Fajr: "5:38",
    Soloppgang: "7:26",
    Duhur: "12:35",
    Asr: "14:50",
    Maghrib: "17:34",
    Isha: "19:30",
  },
  26: {
    Fajr: "5:35",
    Soloppgang: "7:24",
    Duhur: "12:35",
    Asr: "14:52",
    Maghrib: "17:37",
    Isha: "19:33",
  },
  27: {
    Fajr: "5:32",
    Soloppgang: "7:21",
    Duhur: "12:35",
    Asr: "14:54",
    Maghrib: "17:39",
    Isha: "19:35",
  },
  28: {
    Fajr: "5:28",
    Soloppgang: "7:18",
    Duhur: "12:35",
    Asr: "14:56",
    Maghrib: "17:42",
    Isha: "19:38",
  },
  29: {
    Fajr: "5:25",
    Soloppgang: "7:16",
    Duhur: "12:35",
    Asr: "14:58",
    Maghrib: "17:45",
    Isha: "19:41",
  },
};

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let day = now.getDate(); // endre for å vise eksempel dag

  // legg til null foran enkeltstående tall
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeText = `${hours} : ${minutes} : ${seconds}`;

  // Klokka nå
  bigTimeOutput.textContent = timeText;

  // oppdater klokke Tabbell
  updateParyerTime(day, "Fajr");
  updateParyerTime(day, "Duhur");
  updateParyerTime(day, "Asr");
  updateParyerTime(day, "Maghrib");
  updateParyerTime(day, "Isha");
  updateParyerTime(day, "Soloppgang");
}

updateClock();
setInterval(updateClock, 1000);

function updateParyerTime(day, name) {
  switch (name) {
    case "Fajr":
      fajrTid.textContent = bønnetider[day].Fajr;
      break;
    case "Duhur":
      duhurTid.textContent = bønnetider[day].Duhur;
      break;
    case "Asr":
      asrTid.textContent = bønnetider[day].Asr;
      break;
    case "Maghrib":
      maghribTid.textContent = bønnetider[day].Maghrib;
      break;
    case "Isha":
      ishaTid.textContent = bønnetider[day].Isha;
      break;
    case "Soloppgang":
      soloppgang.textContent = bønnetider[day].Soloppgang;
      break;
  }
}

// oppdater jamat tabbell
function updateJamatTime() {
  const timeValues = document.querySelectorAll(".time-value");
  let jamat = [];

  timeValues.forEach((time) => {
    const timeText = time.textContent;

    const currentTime = new Date();
    const timeComponents = timeText.split(":");
    const currentHour = parseInt(timeComponents[0]);
    const currentMinutes = parseInt(timeComponents[1]);

    currentTime.setHours(currentHour);
    currentTime.setMinutes(currentMinutes);

    // Add 10 minutes
    currentTime.setMinutes(currentTime.getMinutes() + 10);

    // Check if the new minute value is beyond 59
    if (currentTime.getMinutes() >= 60) {
      // If yes, increment the hour and set the minutes accordingly
      currentTime.setHours(currentTime.getHours() + 1);
      currentTime.setMinutes(currentTime.getMinutes() % 60);
    }

    // Format the result
    const updatedTime = `${currentTime.getHours()}:${currentTime
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    jamat.push(updatedTime);
  });

  console.log(jamat);
  getNextPrayerTime(jamat);

  fajrJamat.textContent = jamat[0];
  duhurJamat.textContent = jamat[1];
  asrJamat.textContent = jamat[2];
  // maghribJamat.textContent = jamat[3];
  ishaJamat.textContent = jamat[4];
  jummaJamat.textContent = "13:00";
}

updateJamatTime();

////////////////////////////////////////////////////////////////////////////

function getNextPrayerTime(prayerTimes) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentTimeStamp = currentHour * 60 + currentMinutes;

  let nextPrayerIndex = -1;
  let timeDiff;

  for (let i = 0; i < prayerTimes.length; i++) {
    const [prayerHours, prayerMinutes] = prayerTimes[i].split(":");
    const prayerTimestamp =
      parseInt(prayerHours) * 60 + parseInt(prayerMinutes);

    if (prayerTimestamp > currentTimeStamp) {
      timeDiff = prayerTimestamp - currentTimeStamp;
      nextPrayerIndex = i;
      break;
    }
  }

  if (nextPrayerIndex !== -1) {
    const nextPrayerTime = prayerTimes[nextPrayerIndex];

    countdown.textContent = `Neste bønn er kl. ${nextPrayerTime}`;
  } else {
    countdown.textContent = "Kom tilbake imorgen, in sha Allah 😃";
  }
}

// Example usage: Get countdown to the next prayer time
// const prayerTimes = ["5:35", "12:45", "11:53", "3:55", "11:51", "00:00"];
// getNextPrayerTime(prayerTimes);
