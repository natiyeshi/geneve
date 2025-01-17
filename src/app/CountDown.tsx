"use client";
import { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    // Calculate the target date (30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft(0);
        clearInterval(timer); // Stop the timer if the countdown ends
      } else {
        setTimeLeft(difference);
      }
    };

    const timer = setInterval(updateCountdown, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Convert timeLeft into days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex w-full mx-auto gap-5 max-md:gap-2 justify-center mt-12">
      {timeLeft > 0 ? (
        <>
          <div className="flex  flex-col gap-1 w-28  max-md:w-[4rem] max-md:h-[4rem] rounded bg-black/20 h-28 justify-center items-center border-2 border-white">
            <div className="text-3xl max-md:text-xl">{days}</div>
            <div>Days</div>
          </div>
          <div className="flex  flex-col gap-1 w-28  max-md:w-[4rem] max-md:h-[4rem] rounded bg-black/20 h-28 justify-center items-center border-2 border-white">
            <div className="text-3xl max-md:text-xl">{hours}</div>
            <div>Hr</div>
          </div>
          <div className="flex  flex-col gap-1 w-28  max-md:w-[4rem] max-md:h-[4rem] rounded bg-black/20 h-28 justify-center items-center border-2 border-white">
            <div className="text-3xl max-md:text-xl">{minutes}</div>
            <div>Min</div>
          </div>
          <div className="flex  flex-col gap-1 w-28  max-md:w-[4rem] max-md:h-[4rem] rounded bg-black/20 h-28 justify-center items-center border-2 border-white">
            <div className="text-3xl max-md:text-xl">{seconds}</div>
            <div>sec</div>
          </div>
        </>
      ) : (
        <h1></h1>
      )}
    </div>
  );
};

export default Countdown;
