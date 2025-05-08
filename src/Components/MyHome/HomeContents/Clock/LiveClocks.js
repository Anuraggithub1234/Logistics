// LiveClocks.js
import React, { useEffect, useRef, useCallback } from 'react';
import './LiveClocks.scss';

const timeZones = [
  { name: 'Los Angeles', offset: -7 },
  { name: 'Arizona', offset: -7 },
  { name: 'Houston', offset: -5 },
  { name: 'New York', offset: -4 }
];

const Clock = ({ offset, name }) => {
  const hourRef = useRef();
  const minuteRef = useRef();
  const secondRef = useRef();

  const updateClock = useCallback(() => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const local = new Date(utc + 3600000 * offset);

    const seconds = local.getSeconds() + local.getMilliseconds() / 1000;
    const minutes = local.getMinutes() + seconds / 60;
    const hours = local.getHours() + minutes / 60;

    const secDeg = seconds * 6;
    const minDeg = minutes * 6;
    const hourDeg = ((hours % 12) / 12) * 360;

    if (secondRef.current) secondRef.current.style.transform = `rotate(${secDeg}deg)`;
    if (minuteRef.current) minuteRef.current.style.transform = `rotate(${minDeg}deg)`;
    if (hourRef.current) hourRef.current.style.transform = `rotate(${hourDeg}deg)`;
  }, [offset]);

  useEffect(() => {
    const animate = () => {
      updateClock();
      requestAnimationFrame(animate);
    };
    animate();
  }, [updateClock]);

  return (
    <div className="clock-container">
      <div className="clock">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="number" style={{ transform: `rotate(${i * 30}deg)` }}>
            <span style={{ transform: `rotate(-${i * 30}deg)` }}>{i === 0 ? 12 : i}</span>
          </div>
        ))}
        <div ref={hourRef} className="hand hour"></div>
        <div ref={minuteRef} className="hand minute"></div>
        <div ref={secondRef} className="hand second"></div>
        <div className="center"></div>
      </div>
      <div className="label clcock1">{name}</div>
    </div>
  );
};

const LiveClocks = () => {
  return (
    <div className="clocks-wrapper"   style={{
        backgroundImage: "url('/images/Clock1.jpg')" // move with scroll but slower
      }}>
      {timeZones.map((tz) => (
        <Clock key={tz.name} offset={tz.offset} name={tz.name} />
      ))}
    </div>
  );
};

export default LiveClocks;