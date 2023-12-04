import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

function Section({ img, h, p, reverse }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const imgAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-100%)',
  });

  const textAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(100%)',
  });

  return (
    <section ref={ref} className={"section"}>
      <animated.div style={reverse?textAnimation:imgAnimation} className="section-img">
        <img src={img} alt="" />
      </animated.div>
      <animated.div style={reverse?imgAnimation:textAnimation} className="section-text">
        <h1>{h}</h1>
        <p>{p}</p>
      </animated.div>
    </section>
  );
}

export default Section;
