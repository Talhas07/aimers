import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
// import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithBackground.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-xl sm:text-3xl lg:text-4xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const imageCount = 66;
const images = Array.from(
  { length: imageCount },
  (_, index) => `/fahadweb/${index + 1}.jpg`
);
export default ({
  //   // imageSrc = loveIllustrationImageSrc,
  //   imageRounded = true,
  //   imageBorder = true,
  //   imageShadow = true,
  subheading = "Portfolio",
  heading = "Our Clients Love Us.",
  description = "",
  //   textOnLeft = false,
}) => {
  return (
    <>
      <AnimationRevealPage>
        <Header />
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
        {/* <Container tw=""> */}
        <div tw="py-2 ">
          {/* Grid container */}
          <div tw="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full max-w-5xl mx-auto">
            {images.map((src, index) => (
              <div key={index} tw="w-full h-auto overflow-hidden">
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  tw="object-cover w-full rounded-lg"
                  style={{
                    maxWidth: "100%",
                    aspectRatio: "4 / 5",
                    // height: "auto",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* </Container> */}
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
