import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/Aimers1.png";
import CustomersLogoStripImage from "../../images/customers-logo-strip.png";

const Container = tw.div`relative `;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-20 md:px-10`;
const LeftColumn = tw.div`relative  lg:w-6/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-3xl xl:text-4xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0   `}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-gold-950 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-gold-950 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-orange-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center `;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

export default ({ roundedHeaderButton }) => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/contact");
  };
  return (
    <>
      {/* <Header roundedHeaderButton={roundedHeaderButton} /> */}
      <Container>
        <TwoColumn
        // style={{ border: "5px solid red" }}
        >
          <LeftColumn
          // style={{ border: "" }}
          >
            <Heading>
              WELCOME TO OUR COMPANY{" "}
              <p tw="text-gold-950">AIMER`S ENTERPRISES</p>
            </Heading>
            <p
              style={{
                fontSize: "1.25rem ",
                color: "rgb(21, 23, 24)",
                fontWeight: "bold",
              }}
            >
              BUILDER’S AND DEVELOPING CONSULTANTS
            </p>
            <Paragraph>
              We Specialize in Delivering Top-Tier Consultancy Services for Real
              Estate Projects, Alongside Our Expertise as Developers in The Real
              Estate Sector. Our Dual Approach Enables Us to Offer Comprehensive
              Solutions Tailored to Meet the Diverse Needs of Our Clients,
              Whether They Are Looking to Invest, Develop, Or Manage Properties.
            </Paragraph>
            {/* <Actions>
              <input type="text" placeholder="Your E-mail Address" />
              <button onClick={navigateTo}>Get Started</button>
            </Actions> */}
            {/* <CustomersLogoStrip */}
            {/* // style={{ border: "1px solid red" }} */}
            <hr></hr>
            <br></br>
            <p
              style={{
                fontSize: "1.75rem ",
                color: "rgb(21, 23, 24)",
              }}
            >
              CEO
            </p>
            <Heading tw="text-3xl sm:text-4xl font-black tracking-wide ">
              CHAUDHARY FAHAD AHMAD AMJAD
            </Heading>
            <Heading tw=" font-bold text-gold-950  text-xl lg:text-2xl ">
              Civil Engineer & Advocate
            </Heading>
            <br></br>
            <hr></hr>
            {/* <img src={CustomersLogoStripImage} alt="Our Customers" /> */}
            {/* </CustomersLogoStrip> */}
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img
                tw="min-w-0 w-full max-w-sm xl:max-w-md "
                src={DesignIllustration}
                alt="Design Illustration"
              />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 tw="min-w-0 w-full max-w-sm xl:max-w-md"></DecoratorBlob1>
      </Container>
    </>
  );
};
