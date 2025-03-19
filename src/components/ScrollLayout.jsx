"use client";
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

const ScrollLayout = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {

    if (!scrollRef.current) return;

    const locoScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
 
    });

    // Clean up on unmount
    return () => locoScroll.destroy();
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default ScrollLayout;
