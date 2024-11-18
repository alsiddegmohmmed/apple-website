import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger only on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const heroAnimation = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: "#page",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: true,
    },
  }).fromTo(
    "#page>video",
    { opacity: 0 },
    {
      opacity: 1,
      onStart: () => {
        const video = document.querySelector("#page>video") as HTMLVideoElement;
        video?.play();
      },
      onReverseComplete: () => {
        const video = document.querySelector("#page>video") as HTMLVideoElement;
        video?.pause();
      },
    }
  );
};

export const spatialComputingAnimation = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: "#page1",
      start: "top center",
      end: "bottom top",
      scrub: 1,
      pin: true,
    },
  }).fromTo(
    "#page1 h1 span",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 }
  );
};

export const digitalContentAnimation = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: true,
    },
  }).to("#page2 h1", { scale: 0.65 });
};

export const canvas360Animation = () => {
  const canvas = document.querySelector("#page7>canvas") as HTMLCanvasElement;
  const context = canvas?.getContext("2d");

  if (!canvas || !context) return;

  const frameCount = 198;
  const images: HTMLImageElement[] = [];
  const imageSeq = { frame: 0 };

  const loadImage = (index: number) =>
    `https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/${String(
      index
    ).padStart(4, "0")}.jpg`;

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = loadImage(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    scrollTrigger: {
      trigger: "#page7",
      scrub: 0.5,
      start: "top top",
      end: "600% top",
      pin: true,
    },
    onUpdate: () => {
      const img = images[imageSeq.frame];
      if (img) renderImage(img, context, canvas);
    },
  });

  const renderImage = (img: HTMLImageElement, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const { width, height } = canvas;
    const hRatio = width / img.width;
    const vRatio = height / img.height;
    const ratio = Math.min(hRatio, vRatio);
    const centerShiftX = (width - img.width * ratio) / 2;
    const centerShiftY = (height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, img.width, img.height, centerShiftX, centerShiftY, img.width * ratio, img.height * ratio);
  };
};
