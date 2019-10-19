import clock from "clock";
import document from "document";

// Update the clock every second
clock.granularity = "minutes";

const Hand = id => {
  const el = document.getElementById( id );
  
  return angle => {
    el.groupTransform.rotate.angle = angle;
  }
}

const Watchface = () => {
  const hoursHand = Hand( 'hours' ),
    minutesHand = Hand( 'minutes' );

  clock.ontick = () => {
    const today = new Date(),
      hours = today.getHours() % 12,
      minutes = today.getMinutes();

    const minsAngle = minutes * 360 / 60;
    minutesHand( minsAngle );
    hoursHand( hours * 360 / 12 + minsAngle / 12 );
  }  
}

Watchface();