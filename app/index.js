import clock from "clock";
import document from "document";

// Update the clock every second
clock.granularity = "minutes";

let hourHand = document.getElementById("hours");
let minHand = document.getElementById("minutes");

// Returns an angle (0-360) for the current hour in the day, including minutes
function hoursToAngle(hours, minutes) {
  let hourAngle = (360 / 12) * hours;
  let minAngle = (360 / 12 / 60) * minutes;
  return hourAngle + minAngle;
}

// Returns an angle (0-360) for minutes
function minutesToAngle(minutes) {
  return (360 / 60) * minutes;
}

// Update the clock every tick event
clock.ontick = () => {
  let today = new Date();
  let hours = today.getHours() % 12;
  let mins = today.getMinutes();

  hourHand.groupTransform.rotate.angle = hoursToAngle(hours, mins);
  minHand.groupTransform.rotate.angle = minutesToAngle(mins);
}
