"use client";
import React from 'react'
import styles from './hreobanner.module.css';
import Image from 'next/image';
import MarqueeComponent from '../feature/marquee/Marquee';
import ErrorBoundary from '../errorboundary/ErrorBoundary';

const HeroBanner = () => {
  return (
    <ErrorBoundary>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerContainer__content}>
          <h1 className="text-4xl md:max-w-[420px]">Lorem Ipsum is simply dummy text of the</h1>

          <div>
            <Image src={"/herobanner.png"} alt="hero banner image" width={"300"} height={"300"} />
          </div>
        </div>
        <div className={styles.bannerContainer__bannerBottom}>
          <p>Trusted by over 100+ Executives who worked previously with,</p>
        </div>
          <MarqueeComponent />
      </div>
    </ErrorBoundary>

  )
}

export default HeroBanner