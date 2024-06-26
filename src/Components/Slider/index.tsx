import React, { FC, useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { MdArrowBack, MdArrowForward, MdFullscreen } from "react-icons/md";

import { useLockedBody } from "@/Hooks/useLockedBody";
import { SlideCaption, SlideContainer } from "./SliderElements";

const ButtonContentLeft = <MdArrowBack />;

const ButtonContentRight = <MdArrowForward />;

export type TSlide = {
  type: "video" | "image";
  text: string;
  src: string;
};

export type TSlider = {
  slides?: TSlide[];
};

export const Slider: FC<TSlider> = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [captions, setCaptions] = useState<string[]>([]);
  const { setIsLocked } = useLockedBody(false);

  useEffect(() => setCaptions(slides.map((slide) => slide.text)), [slides]);

  const toggleFullscreen = () => {
    setIsLocked((isLocked) => !isLocked);
    setFullscreen(!fullscreen);
  };

  return (
    <SlideContainer $fullscreen={fullscreen}>
      <button
        className="slide-control is-fullscreen"
        onClick={toggleFullscreen}
      >
        <MdFullscreen />
      </button>

      <AwesomeSlider
        bullets={false}
        organicArrows={false}
        buttonContentLeft={ButtonContentLeft}
        buttonContentRight={ButtonContentRight}
        onTransitionStart={(slide) => {
          setCurrent(slide.nextIndex);
        }}
        infinite={false}
      >
        {slides.map((data) => {
          return (
            <div key={data.text}>
              {data.type === "image" && (
                <img
                  src={data.src}
                  alt={data.text}
                />
              )}
              {data.type === "video" && (
                <video
                  src={data.src}
                  muted
                  autoPlay={false}
                  controls={true}
                />
              )}
            </div>
          );
        })}
      </AwesomeSlider>
      {!fullscreen && (
        <Caption
          selected={current}
          captions={captions}
        />
      )}
    </SlideContainer>
  );
};

const Caption = React.memo(({ selected = 0, captions = [] }: { selected: number; captions: TSlide["text"][] }) => {
  const formattedIndex = selected + 1;

  return (
    <SlideCaption>
      <div className="slide-caption-text">{captions[selected]}</div>
      <div className="slide-caption-count">
        {formattedIndex} / {captions.length}
      </div>
    </SlideCaption>
  );
});

Caption.displayName = "Caption";
