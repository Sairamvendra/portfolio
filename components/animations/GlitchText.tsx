'use client';

import { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
}

export function GlitchText({
  children,
  speed = 1,
  enableShadows = true,
  enableOnHover = true,
  className = ''
}: GlitchTextProps) {
  const inlineStyles = {
    '--after-duration': `${speed * 3}s`,
    '--before-duration': `${speed * 2}s`,
    '--after-shadow': enableShadows ? '-5px 0 red' : 'none',
    '--before-shadow': enableShadows ? '5px 0 cyan' : 'none'
  } as React.CSSProperties;

  const hoverClass = enableOnHover ? 'enable-on-hover' : '';

  return (
    <>
      <div
        className={`glitch-container ${hoverClass} ${className}`}
        style={inlineStyles}
        data-text={children}
      >
        {children}
      </div>
      <style jsx>{`
        .glitch-container {
          position: relative;
          font-weight: 900;
          animation: glitch-skew 1s infinite linear alternate-reverse;
        }

        .glitch-container::before,
        .glitch-container::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-container::before {
          left: 2px;
          text-shadow: var(--before-shadow);
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim var(--before-duration) infinite linear alternate-reverse;
        }

        .glitch-container::after {
          left: -2px;
          text-shadow: var(--after-shadow);
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim var(--after-duration) infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% {
            clip: rect(31px, 9999px, 94px, 0);
            transform: skew(0.88deg);
          }
          5% {
            clip: rect(52px, 9999px, 8px, 0);
            transform: skew(0.42deg);
          }
          10% {
            clip: rect(79px, 9999px, 31px, 0);
            transform: skew(0.19deg);
          }
          15% {
            clip: rect(65px, 9999px, 90px, 0);
            transform: skew(0.95deg);
          }
          20% {
            clip: rect(6px, 9999px, 55px, 0);
            transform: skew(0.31deg);
          }
          25% {
            clip: rect(84px, 9999px, 72px, 0);
            transform: skew(0.67deg);
          }
          30% {
            clip: rect(41px, 9999px, 11px, 0);
            transform: skew(0.52deg);
          }
          35% {
            clip: rect(23px, 9999px, 47px, 0);
            transform: skew(0.88deg);
          }
          40% {
            clip: rect(92px, 9999px, 35px, 0);
            transform: skew(0.14deg);
          }
          45% {
            clip: rect(58px, 9999px, 19px, 0);
            transform: skew(0.76deg);
          }
          50% {
            clip: rect(15px, 9999px, 66px, 0);
            transform: skew(0.38deg);
          }
          55% {
            clip: rect(71px, 9999px, 28px, 0);
            transform: skew(0.91deg);
          }
          60% {
            clip: rect(37px, 9999px, 83px, 0);
            transform: skew(0.23deg);
          }
          65% {
            clip: rect(49px, 9999px, 5px, 0);
            transform: skew(0.59deg);
          }
          70% {
            clip: rect(88px, 9999px, 44px, 0);
            transform: skew(0.82deg);
          }
          75% {
            clip: rect(12px, 9999px, 77px, 0);
            transform: skew(0.46deg);
          }
          80% {
            clip: rect(63px, 9999px, 21px, 0);
            transform: skew(0.71deg);
          }
          85% {
            clip: rect(34px, 9999px, 96px, 0);
            transform: skew(0.28deg);
          }
          90% {
            clip: rect(76px, 9999px, 39px, 0);
            transform: skew(0.84deg);
          }
          95% {
            clip: rect(18px, 9999px, 62px, 0);
            transform: skew(0.53deg);
          }
          100% {
            clip: rect(54px, 9999px, 7px, 0);
            transform: skew(0.95deg);
          }
        }

        @keyframes glitch-skew {
          0% {
            transform: skew(2deg);
          }
          10% {
            transform: skew(-1deg);
          }
          20% {
            transform: skew(1deg);
          }
          30% {
            transform: skew(-2deg);
          }
          40% {
            transform: skew(1deg);
          }
          50% {
            transform: skew(-1deg);
          }
          60% {
            transform: skew(2deg);
          }
          70% {
            transform: skew(-1deg);
          }
          80% {
            transform: skew(0deg);
          }
          90% {
            transform: skew(1deg);
          }
          100% {
            transform: skew(-2deg);
          }
        }

        .enable-on-hover .glitch-container::before,
        .enable-on-hover .glitch-container::after {
          animation-play-state: paused;
        }

        .enable-on-hover:hover .glitch-container::before,
        .enable-on-hover:hover .glitch-container::after {
          animation-play-state: running;
        }
      `}</style>
    </>
  );
}
