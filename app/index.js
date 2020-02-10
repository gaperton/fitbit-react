import clock from "clock";
import document from "document";

import { GRotate } from './tools'

// Update the clock every second
clock.granularity = "minutes";

const Watchface = () => {
  const hoursHand = GRotate( 'hours' ),
    minutesHand = GRotate( 'minutes' );

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