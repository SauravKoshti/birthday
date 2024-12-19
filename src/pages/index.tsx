import Image from "next/image"

import Logo from "../assets/images/b_day.JPG";

export default function Home() {
  return (
    <div className="birthdayCard">
    <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
        <div className="balloons">
            <div className="balloonOne" />
            <div className="balloonTwo" />
            <div className="balloonThree" />
            <div className="balloonFour" />
        </div>
    </div>
    <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY kishang!</h3>
  <div className="mx-auto">
  <Image src={Logo} height={80} width={80} alt="Birthday" />

  </div>
        <p>Dear Friend,</p>
        <p>
            Happy birthday!! I hope your day is filled with lots of love and
            laughter! May all of your birthday wishes come true.
        </p>
        <p className="name">Pawan</p>
    </div>
</div>
  );
}
