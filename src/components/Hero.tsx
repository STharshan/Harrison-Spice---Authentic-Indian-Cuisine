import {
  motion,
  useSpring,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { imageCdn } from '../data/imageCdn';

interface HeroProps {
  onOpenMenu: () => void;
}

const HeroSection = ({ onOpenMenu }: HeroProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isScrollReady, setIsScrollReady] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    let raf1 = 0;
    let raf2 = 0;

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setIsScrollReady(true);
        window.dispatchEvent(new Event('resize'));
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const smoothScrollYProgress = useSpring(
    scrollYProgress,
    shouldReduceMotion
      ? undefined
      : {
          stiffness: 90,
          damping: 24,
          mass: 0.35,
          restDelta: 0.0005,
        }
  );

  const progress = shouldReduceMotion ? scrollYProgress : smoothScrollYProgress;

  // --- REVERSED TRANSFORMS FOR VIDEO PARALLAX EFFECT ---

  // Top Heading: Hidden/faded at start (fullscreen media mode), appears as media shrinks
  const topHeadingOpacity = useTransform(progress, [0.65, 0.85], [0, 1]);
  const topHeadingY = useTransform(progress, [0.65, 0.85], ['40px', '0px']);

  // Media Container: Starts Fullscreen (100% width, 100vh, 0px radius) and shrinks down to card shape
  const mediaWidth = useTransform(progress, [0, 0.65], ['100%', '86%']);
  const mediaHeight = useTransform(progress, [0, 0.65], ['100vh', '42vh']);
  const mediaRadius = useTransform(progress, [0, 0.65], ['0px', '180px']);
  const mediaY = useTransform(progress, [0.65, 1], ['0px', '0px']);

  // Overlay text sequences inside fullscreen media (Fade in -> Fade out sequentially)
  const text1Opacity = useTransform(progress, [0, 0.12, 0.22], [1, 1, 0]);
  const text1Y = useTransform(progress, [0, 0.12, 0.22], ['0px', '0px', '-40px']);

  const text2Opacity = useTransform(progress, [0.22, 0.32, 0.42], [0, 1, 0]);
  const text2Y = useTransform(progress, [0.22, 0.32, 0.42], ['40px', '0px', '-40px']);

  const text3Opacity = useTransform(progress, [0.42, 0.52, 0.62], [0, 1, 0]);
  const text3Y = useTransform(progress, [0.42, 0.52, 0.62], ['40px', '0px', '-40px']);

  // Initial SSR / Hydration Fallback Styles
  const topHeadingStyle = isScrollReady
    ? { opacity: topHeadingOpacity, y: topHeadingY }
    : { opacity: 0, y: '40px' };

  const mediaStyle = isScrollReady
    ? {
        width: mediaWidth,
        height: mediaHeight,
        borderRadius: mediaRadius,
        y: mediaY,
      }
    : {
        width: '100%',
        height: '100vh',
        borderRadius: '0px',
      };

  const text1Style = isScrollReady
    ? { y: text1Y, opacity: text1Opacity }
    : { y: '0px', opacity: 1 };

  const text2Style = isScrollReady
    ? { y: text2Y, opacity: text2Opacity }
    : { y: '40px', opacity: 0 };

  const text3Style = isScrollReady
    ? { y: text3Y, opacity: text3Opacity }
    : { y: '40px', opacity: 0 };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[280vh] md:h-[320vh]"
      style={{ background: '#FFF5E6' }}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4">
        {/* Top Heading (reveals after video shrinks) */}
        <motion.div
          style={topHeadingStyle}
          className="relative z-20 mx-auto max-w-5xl select-none text-center"
        >
          <span
            className="absolute left-[4%] top-0 rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] sm:left-[10%] sm:px-4 sm:text-[11px]"
            style={{
              background:
                'linear-gradient(135deg, var(--brand-primary, #C9A84C), var(--brand-deep, #A7862C))',
              color: 'var(--surface, #FCFAF5)',
            }}
          >
            Crafted Beyond Ordinary
          </span>

          <h1
            className="font-serif text-[38px] leading-[0.97] tracking-tighter text-[#2E5443] sm:text-[52px] md:text-[68px] lg:text-[80px]"
            style={{
              color: 'var(--forest, #2E5443)',
              textWrap: 'balance',
            }}
          >
            Harrison Spice
            <br />
            Taste the Difference
          </h1>

          <span
            className="absolute right-[4%] top-12 rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] sm:top-16 sm:right-[8%] sm:px-4 sm:text-[11px]"
            style={{
              background:
                'linear-gradient(135deg, var(--brand-primary, #C9A84C), var(--brand-deep, #A7862C))',
              color: 'var(--surface, #FCFAF5)',
            }}
          >
            Sourced With Intention
          </span>

          <span
            className="absolute -bottom-7 left-[4%] rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] shadow-sm sm:-bottom-8 sm:left-[4%] sm:px-4 sm:text-[11px] md:-bottom-4"
            style={{
              background: 'var(--surface-alt, #F4EDDD)',
              color: 'var(--brand-deep, #A7862C)',
            }}
          >
            Built To Elevate
          </span>

          <span
            className="mt-6 inline-flex rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] backdrop-blur-md sm:text-xs"
            style={{
              background: 'rgba(244, 237, 221, 0.92)',
              color: 'var(--brand-deep, #A7862C)',
            }}
          >
            Where Every Meal Begins
          </span>
        </motion.div>

        {/* Media Container (Starts fullscreen, shrinks as user scrolls) */}
        <motion.div
          style={mediaStyle}
          className="relative z-10 origin-center overflow-hidden shadow-md will-change-transform"
        >
          <img
            src={imageCdn.hero}
            alt="Authentic Indian cuisine"
            className="h-full w-full object-cover object-center"
            referrerPolicy="no-referrer"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(26,26,26,0.2) 0%, rgba(26,26,26,0.4) 50%, rgba(26,26,26,0.6) 100%)',
            }}
          />

          {/* Text Step 1 */}
          <motion.div
            style={text1Style}
            className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center will-change-transform"
          >
            <span
              className="mb-4 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] backdrop-blur-md sm:mb-5 sm:text-xs"
              style={{
                background: 'rgba(252,250,245,0.88)',
                color: 'var(--brand-deep, #A7862C)',
              }}
            >
              Shaped by Mastery
            </span>
            <p
              className="max-w-4xl font-serif text-[28px] leading-[1.05] text-white sm:text-[42px] md:text-[60px] lg:text-[76px]"
              style={{
                color: 'var(--surface, #FCFAF5)',
                textShadow: '0 10px 30px rgba(26,26,26,0.3)',
                textWrap: 'balance',
              }}
            >
              Fresh spices and slow-cooked flavour in every bite.
            </p>
          </motion.div>

          {/* Text Step 2 */}
          <motion.div
            style={text2Style}
            className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center will-change-transform"
          >
            <span
              className="mb-4 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] backdrop-blur-md sm:mb-5 sm:text-xs"
              style={{
                background: 'rgba(252,250,245,0.88)',
                color: 'var(--brand-deep, #A7862C)',
              }}
            >
              What We Know
            </span>
            <p
              className="max-w-4xl font-serif text-[28px] leading-[1.05] text-white sm:text-[42px] md:text-[60px] lg:text-[76px]"
              style={{
                color: 'var(--surface, #FCFAF5)',
                textShadow: '0 10px 30px rgba(26,26,26,0.3)',
                textWrap: 'balance',
              }}
            >
              Authentic recipes, warm hospitality, and food that feels like home.
            </p>
          </motion.div>

          {/* Text Step 3 */}
          <motion.div
            style={text3Style}
            className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center will-change-transform"
          >
            <span
              className="mb-4 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] backdrop-blur-md sm:mb-5 sm:text-xs"
              style={{
                background: 'rgba(252,250,245,0.88)',
                color: 'var(--brand-deep, #A7862C)',
              }}
            >
              Why This Matters
            </span>
            <p
              className="max-w-4xl font-serif text-[28px] leading-[1.05] text-white sm:text-[42px] md:text-[60px] lg:text-[76px]"
              style={{
                color: 'var(--surface, #FCFAF5)',
                textShadow: '0 10px 30px rgba(26,26,26,0.3)',
                textWrap: 'balance',
              }}
            >
              Because every table deserves something memorable.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const Hero = HeroSection;
export default HeroSection;