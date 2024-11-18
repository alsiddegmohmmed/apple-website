// components/HomePage.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import useLocoScroll from "../../utils/locoScroll";
import {
  canvas360Animation,
  digitalContentAnimation,
  heroAnimation,
  spatialComputingAnimation,
} from "../../utils/gsapAnimations";
import Section from "./Section";
import "../../styles/style.css";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Locomotive Scroll (initialized only after hydration)
  const locoScroll = useLocoScroll(containerRef);

  // Ensure hydration is complete
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Trigger animations after hydration is complete
  useEffect(() => {
    if (isMounted) {
      heroAnimation();
      spatialComputingAnimation();
      digitalContentAnimation();
      canvas360Animation();
    }
  }, [isMounted]);

  // Loading placeholder during hydration
  if (!isMounted) {
    return <div style={{ height: "100vh", width: "100vw", background: "#000" }} />;
  }

  return (
    <main>
      <div ref={containerRef} data-scroll-container>
        {/* Hero Section */}
        <Section id="hero">
          <video
            src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/hero/large_2x.mp4"
            muted
            playsInline
            autoPlay
          />
          <nav>
            <h3>Vision Pro</h3>
            <button>Notify me</button>
          </nav>
          <div id="page-bottom">
            <h3>Introduction</h3>
            <img
              src="https://www.apple.com/v/apple-vision-pro/a/images/overview/hero/apple_vision_pro_logo__ux94yix23r6y_large.png"
              alt="Vision Pro Logo"
            />
          </div>
        </Section>

        {/* Spatial Computing Section */}
        <Section id="page1">
          <h1>
            <span>Welcome</span> <span>to</span> <span>the</span> <span>era</span>{" "}
            <span>of</span> <span>spatial</span>
            <span>computing</span>
          </h1>
          <video
            src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-spatial-computing/large.mp4"
            muted
            autoPlay
            loop
          />
        </Section>

      {/* Digital Content Section */}
      <Section id="page2">
        <h1>
          Apple Vision Pro seamlessly blends <br /> digital content with your
          physical space.
        </h1>
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-digital-canvas/large.mp4"
          muted
          autoPlay
          loop
        />
      </Section>
      {/* Apps Section */}
      <Section id="page4">
        <div id="center-page4">
          <h5>Apps</h5>
          <h1>
            Free your desktop.
            <br />
            And your apps will follow.
          </h1>
        </div>
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/visionos/large.mp4"
          muted
          autoPlay
          loop
        />
      </Section>

      {/* Canvas Section */}
      <Section id="page7">
        <canvas></canvas>
      </Section>

      {/* Design Section */}
      <Section id="page6">
        <h3>Design</h3>
        <h1>Designed by Apple.</h1>
        <p>
          Apple Vision Pro is the result of decades of experience designing
          high‑performance, mobile, and wearable devices — culminating in the
          most ambitious product Apple has ever created.
        </p>
      </Section>

      {/* Details Section */}
      <Section id="page16">
        <h2>
          A singular piece of{" "}
          <span>three-dimensionally formed laminated glass</span> acts as an
          optical surface for the cameras and sensors that view the world.
        </h2>
        <img
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/design/light_seal__fo87cv0zkcmm_large.jpg"
          alt="Light Seal"
        />
        <button>+ Learn more about design</button>
      </Section>
      </div>
    </main>
  );
}