import React, { useState, useRef, useEffect } from "react";
import {
  ArrowButtons,
  BackArrow,
  BannerArrow,
  BannerContainer,
  BannerContent,
  BannerImage,
  BannerSlide,
  BannerSlider,
  BannerWrapper,
  NextArrow,
  BannerButton,
} from "./BannerElement";

import { BannerData } from "../../data/bannerData";

const Banner = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;
  const timeout = useRef(null);

  useEffect (() => {
      const nextPicture = () => {
          setCurrent(current => (current === length - 1 ? 0 : current + 1))
      }

      timeout.current = setTimeout(nextPicture, 4000)

      return function() {
          if(timeout.current) {
              clearTimeout(timeout.current)
          }
      }
  }, [current, length])
  const nextPicture = () => {
    if(timeout.current) {
        clearTimeout(timeout.current)
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevPicture = () => {
    if(timeout.current) {
        clearTimeout(timeout.current)
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
      return null
  }
  return (
    <div>
      <BannerContainer>
        <BannerWrapper>
          {BannerData.map((picture, index) => {
            return (
              <BannerSlide key={index}>
                {index === current && (
                  <BannerSlider>
                    <BannerImage src={picture.image} alt={picture.alt} />
                    <BannerContent>
                      <h1>{picture.title}</h1>
                      <BannerButton to={picture.path} primary="false">
                        {picture.label}

                        <BannerArrow />
                      </BannerButton>
                    </BannerContent>
                  </BannerSlider>
                )}
              </BannerSlide>
            );
          })}

          <ArrowButtons>
            <BackArrow onClick={prevPicture} />
            <NextArrow onClick={nextPicture} />
          </ArrowButtons>
        </BannerWrapper>
      </BannerContainer>
    </div>
  );
};

export default Banner;
