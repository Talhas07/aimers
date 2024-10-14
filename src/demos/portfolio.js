import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithBackground.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import loveIllustrationImageSrc from "images/love-illustration.svg";
import { ReactComponent as StarIconBase } from "images/star-icon.svg";
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

const Row = tw.div`flex flex-row md:flex-row justify-between items-center `;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 xl:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`w-full mt-5 md:mt-0`,
  props.textOnLeft
    ? tw`md:pr-12 lg:pr-16 md:order-first`
    : tw`md:pl-12 lg:pl-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);
const RightColumn = tw.div`
  flex mt-5 justify-center items-center h-full 
`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-xl sm:text-3xl lg:text-4xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const TestimonialSlider = styled(Slider)`
  ${tw`flex w-full text-center md:text-left`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex  justify-center mb-1`}
  }
`;

const Testimonial = tw.div`outline-none h-full flex! flex-row border-2 border-red-700`;
const StarsContainer = styled.div``;
const StarIcon = tw(
  StarIconBase
)`inline-block w-5 h-5 text-orange-400 fill-current mr-1 last:mr-0`;

const Controls = styled.div`
  ${tw`flex flex-row mt-1 sm:mt-0 justify-center`}
  .divider {
    ${tw`my-3 border-r`}
  }
`;
const ControlButton = styled.button`
  ${tw`mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-gold-950 hover:text-orange-700 focus:outline-none focus:shadow-outline `}
  svg {
    ${tw`w-4 h-4 stroke-3`}
  }
`;
// Adjust as needed
const settings = {
  // dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default ({
  // imageSrc = loveIllustrationImageSrc,
  imageRounded = true,
  imageBorder = true,
  imageShadow = true,
  subheading = "Portfolio",
  heading = "Our Clients Love Us.",
  description = "",
  textOnLeft = false,
}) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <AnimationRevealPage>
        <Header />
        <Container tw="">
          {/* <ContentWithPaddingXl> */}
          <Row>
            <TextColumn textOnLeft={textOnLeft}>
              {/* <Subheading>{subheading}</Subheading> */}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "1rem",
                }}
              >
                <Controls>
                  <ControlButton onClick={sliderRef?.slickPrev}>
                    <ArrowLeftIcon />
                  </ControlButton>
                  <ControlButton onClick={sliderRef?.slickNext}>
                    <ArrowRightIcon />
                  </ControlButton>
                </Controls>
                <TestimonialSlider {...settings} ref={setSliderRef}>
                  {[...Array(26)].map((_, i) => (
                    <RightColumn>
                      {/* <div style={{ border: "2px solid red" }}>hello</div> */}
                      <Image
                        src={`/fahadweb/${i + 1}.jpg`}
                        imageBorder={imageBorder}
                        imageShadow={imageShadow}
                        imageRounded={imageRounded}
                        tw="min-w-0 w-full md:mx-6 max-w-sm xl:max-w-md rounded-lg"
                      />
                    </RightColumn>
                  ))}
                </TestimonialSlider>
              </div>
            </TextColumn>
          </Row>
          {/* </ContentWithPaddingXl> */}
        </Container>
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
