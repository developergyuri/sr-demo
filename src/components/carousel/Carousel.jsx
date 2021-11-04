import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

/* Styles */
import styles from "./Carousel.module.css";

/* Own Component */
import { ReactComponent as LeftArrow } from "../../assets/carousel_arrow_left.svg";
import { ReactComponent as RightArrow } from "../../assets/carousel_arrow_right.svg";
import { ReactComponent as DetailsArrow } from "../../assets/carousel_details_arrow.svg";
import { useRecursiveTimeout } from "../../helper/useRecursiveTimeout";

/* Data */
import BgImg from "../../assets/carousel_image.png";
import Dots from "../ui/dots/Dots";

const PARALLAX_FACTOR = 1.5;
const AUTOPLAY_INTERVAL = 4000;

const Carousel = () => {
  const [parallaxValues, setParallaxValues] = useState([]);
  const [selectedDot, setSelectedDot] = useState(2);

  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    startIndex: 2,
    speed: 3,
    skipSnaps: false,
    draggable: true,
    dragFree: false,
  });

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    stop();
  }, [embla, stop]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    stop();
  }, [embla, stop]);

  const scrollTo = useCallback(
    (index) => {
      if (!embla) return;
      embla.scrollTo(index);
      stop();
    },
    [embla, stop]
  );

  const onScrollHandler = useCallback(() => {
    if (!embla) return;

    const engine = embla.dangerouslyGetEngine();
    const scrollProgress = embla.scrollProgress();

    const styles = embla.scrollSnapList().map((scrollSnap, index) => {
      if (!embla.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.getTarget();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      return diffToTarget * (-1 / PARALLAX_FACTOR) * 100;
    });
    setParallaxValues(styles);
  }, [embla, setParallaxValues]);

  const onSelectHandler = useCallback(() => {
    if (!embla) return;
    setSelectedDot(embla.selectedScrollSnap());
  }, [embla, setSelectedDot]);

  useEffect(() => {
    if (embla) {
      onScrollHandler();
      embla.on("scroll", onScrollHandler);
      embla.on("resize", onScrollHandler);
      embla.on("select", onSelectHandler);
      embla.on("pointerDown", stop);

      return () => {
        embla.off("scroll", onScrollHandler);
        embla.off("resize", onScrollHandler);
        embla.off("select", onSelectHandler);
        embla.off("pointerDown", stop);
      };
    }
  }, [embla, onScrollHandler, onSelectHandler, stop]);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className={styles.embla}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <div className={styles.emblaSlide} key={index}>
              <div
                className={styles.emblaSlideParallax}
                style={{ transform: `translateX(${parallaxValues[index]}%)` }}
              >
                <div className={styles.slideLabels}>
                  <p className={styles.labelsTitle}>Lorem</p>
                  <p className={styles.labelsText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                  <a href="/" className={styles.labelsButton}>
                    Részletek
                    <DetailsArrow />
                  </a>
                </div>
                <div className={styles.slideCover}>
                  <img src={BgImg} alt="Cover Background" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Dots
        numOfDots={parallaxValues.length}
        numOfActive={selectedDot}
        callableFn={scrollTo}
        className={styles.emblaDots}
      />
      <LeftArrow className={styles.emblaButtonPrev} onClick={scrollPrev} />
      <RightArrow className={styles.emblaButtonNext} onClick={scrollNext} />
    </div>
  );
};

export default Carousel;
