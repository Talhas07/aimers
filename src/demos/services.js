import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import defaultCardImage from "images/shield-icon.svg";
import Footer from "components/footers/FiveColumnWithBackground.js";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import Header from "../components/headers/light.js";
const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex  flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/2 max-w-sm mx-8`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({
  roundedHeaderButton,
  cards = null,
  heading = "Amazing Features",
  subheading = "Features",
  description = "To be the leading provider of innovative andcomprehensive consultancy and development solutions in the real estate sector, empowering clients to achieve their goals and build sustainable communities.",
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      number: "01",
      imageSrc: ShieldIconImage,
      title: "Market Analysis",
      description:
        "In-depth research and analysis of market trends, properties, and investment opportunities to guide strategic decision-making",
    },
    {
      number: "02",
      imageSrc: SupportIconImage,
      title: "Feasibility Studies",
      description:
        "Comprehensive assessments to determine the viability of proposed real estate projects, covering financial, environmental, and regulatory considerations",
    },
    {
      number: "03",
      imageSrc: CustomizeIconImage,
      title: "Project Management",
      discription:
        "Expert oversight of development processes, ensuring projects are delivered on time, within budget, and to the highest standards",
    },
    {
      number: "04",
      imageSrc: ReliableIconImage,
      title: "Investment Advisory",
      discription:
        "Tailored advice to investors seeking to maximize returns through careful asset selection and portfolio management",
    },
  ];
  const cards2 = [
    {
      number: "01",
      imageSrc: FastIconImage,
      title: "Residential Projects",
      discription:
        "Creating high-quality ousing solutions that meet the needs of diverse communities, from luxury apartments to affordable housing",
    },
    {
      number: "02",
      imageSrc: SimpleIconImage,
      title: "Commercial",
      discription:
        "Designing and constructing modern commercial spaces that enhance business operations and drive economic growth",
    },
    {
      number: "03",
      imageSrc: FastIconImage,
      title: "Sustainable Practices",
      discription:
        "Committing to environmentally responsible development through sustainable materials, green building practices, and innovative designs that reduce our carbon footprint",
    },
    {
      number: "04",
      imageSrc: SimpleIconImage,
      title: "Redevelopment Projects",
      discription:
        "Transforming existing properties to optimize use and enhance value, adapting to changing market demands",
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <>
      <AnimationRevealPage>
        <Header roundedHeaderButton={roundedHeaderButton} />
        <Container>
          <ThreeColumnContainer>
            {/* {subheading && <Subheading>{subheading}</Subheading>} */}
            <Heading>CONSULTANCY SERVICES</Heading>
            {/* {description && <Description>{description}</Description>} */}
            <VerticalSpacer />
            {cards.map((card, i) => (
              <Column key={i}>
                <Card>
                  <span className="imageContainer">
                    {/* <img src={card.imageSrc || defaultCardImage} alt="" />
                     */}
                    <span tw="font-bold text-2xl sm:text-2xl my-1 text-gold-800">
                      {card.number}
                    </span>
                  </span>
                  <span className="textContainer">
                    <span className="title">
                      {card.title || "Fully Secure"}
                    </span>
                    <p className="description">
                      {card.description ||
                        "To be the leading provider of innovative and comprehensive consultancy and development solutions in the real estate sector, empowering clients to achieve their goals and build sustainable communities."}
                    </p>
                  </span>
                </Card>
              </Column>
            ))}
          </ThreeColumnContainer>
          <br />
          <hr
            style={{
              width: "100%",

              color: "black",
            }}
          ></hr>
          <br />
          <ThreeColumnContainer>
            {/* {subheading && <Subheading>{subheading}</Subheading>} */}
            <Heading>DEVELOPMENT SERVICES</Heading>
            {/* {description && <Description>{description}</Description>} */}
            <VerticalSpacer />
            {cards2.map((card, i) => (
              <Column key={i}>
                <Card>
                  <span className="imageContainer">
                    {/* <img src={card.imageSrc || defaultCardImage} alt="" />
                     */}
                    <span tw="font-bold text-2xl sm:text-2xl my-1 text-gold-800">
                      {card.number}
                    </span>
                  </span>
                  <span className="textContainer">
                    <span className="title">
                      {card.title || "Fully Secure"}
                    </span>
                    <p className="description">
                      {card.description ||
                        "To be the leading provider of innovative and comprehensive consultancy and development solutions in the real estate sector, empowering clients to achieve their goals and build sustainable communities."}
                    </p>
                  </span>
                </Card>
              </Column>
            ))}
          </ThreeColumnContainer>
          <DecoratorBlob />
        </Container>
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
