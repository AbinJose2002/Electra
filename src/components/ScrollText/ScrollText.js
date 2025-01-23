import React from 'react';
// import ScrollBaseAnimation from '../../../../components/core/scroll-text-marque';
import ScrollBaseAnimation from './ScrollBaseAnimation';

function ScrollText() {
  return (
    <>
      <div className="h-[500px] grid place-content-center">
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={-3}
          className="font-bold tracking-[-0.07em] leading-[90%]">
          Star the repo if you like it
        </ScrollBaseAnimation>
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={3}
          className="font-bold tracking-[-0.07em] leading-[90%]">
          Share it if you like it
        </ScrollBaseAnimation>
      </div>
    </>
  );
}

export default ScrollText;