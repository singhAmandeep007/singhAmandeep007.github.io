import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import React, { useState, useEffect } from 'react';
import { MdFullscreen, MdArrowForward, MdArrowBack } from 'react-icons/md';
import { SlideContainer, SlideCaption } from './SliderElements';
import useLockedBody from './../../Hooks/lockedBody';

const ButtonContentLeft = <MdArrowBack />;

const ButtonContentRight = <MdArrowForward />;

const Slider = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [captions, setCaptions] = useState([]);
  const [locked, setLocked] = useLockedBody();

  useEffect(() => setCaptions(slides.map((slide) => slide.text)), [slides]);

  const toggleFullscreen = () => {
    setLocked(!locked);
    setFullscreen(!fullscreen);
  };

  return (
    <SlideContainer $fullscreen={fullscreen}>
      <span className="slide-control is-fullscreen" onClick={toggleFullscreen}>
        <MdFullscreen />
      </span>

      <AwesomeSlider
        bullets={false}
        organicArrows={false}
        buttonContentLeft={ButtonContentLeft}
        buttonContentRight={ButtonContentRight}
        onTransitionStart={(slide) => setCurrent(slide.nextIndex)}
      >
        {slides.map(({ image, text }) => {
          return (
            <div key={text}>
              <img src={image} alt={text} />
            </div>
          );
        })}
      </AwesomeSlider>
      {!fullscreen && <Caption selected={current} captions={captions} />}
    </SlideContainer>
  );
};

export default React.memo(Slider);

const Caption = React.memo(({ selected = 0, captions = [] }) => {
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
