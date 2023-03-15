import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

//use typescript to pass isNonMobileScreen as a prop
const Banner = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:1200px)");
  return (
    <Wrapper isNonMobileScreen={isNonMobileScreen}>
      <div className="logo">
        <Image src="/logo.svg" alt="logo" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="flex">
        <div className="textWrapper">
          <Image
            src={"/banner-text.png"}
            fill
            style={{ objectFit: "fill" }}
            alt="banner-text"
            sizes={"min-width: 768px 50vw, 100vw"}
          />
        </div>
        <Button
          onClick={() => {
            window.scrollTo({
              top: 1000,
              behavior: "smooth",
            });
          }}
        >
          <h1>discover</h1>
        </Button>
      </div>
      <div className="banner">
        <Image
          priority
          quality={100}
          src={"/banner.jpg"}
          alt="banner"
          fill
          style={{ objectFit: "cover" }}
          sizes={"min-width: 768px 25vw, 50vw"}
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section<{ isNonMobileScreen: boolean }>`
  position: relative;
  overflow: hidden;
  display: flex;
  padding: ${({ isNonMobileScreen }) =>
    isNonMobileScreen ? "0 10vw" : "10rem 0 0 0"};
  width: 100%;
  gap: 2vw;
  height: 100vh;
  min-height: calc(1865px / 2);
  overflow: hidden;
  flex-direction: ${({ isNonMobileScreen }) =>
    isNonMobileScreen ? "row" : "column"};
  justify-content: center;
  align-items: center;
  div {
    padding: 0;
  }
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${({ isNonMobileScreen }) => (isNonMobileScreen ? "34vw" : "90%")};
    max-width: 45rem;
    height: 21rem;
    max-height: 40vw;
    gap: 1rem;
  }
  .banner {
    position: relative;
    width: calc(1322vw / 30);
    height: calc(1865vw / 30);
    max-height: calc(1865px / 2.5);
    max-width: calc(1322px / 2.5);
    min-height: calc(1865px / 3);
    min-width: calc(1322px / 3);
    ${({ isNonMobileScreen }) => (!isNonMobileScreen && "will-change: transform")};
    ${({ isNonMobileScreen }) => (!isNonMobileScreen && "transform: translateY(7rem)")};
  }

  .logo {
    position: absolute;
    top: 2rem;
    left: calc(50vw - 2.5rem);
    z-index: 100;
    width: calc(5vw / 1.5);
    height: calc(2.89vw / 1.5);
    min-width: 5rem;
    min-height: 2.89rem;
  }

  .textWrapper {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.button`
  background-color: #fd5d00;
  border-radius: 10rem;
  border: none;
  width: 100%;
  height: 100%;
  color: #000;
  font-family: "Akira Expanded", sans-serif;
  font-size: 1.5rem;
`;
const SkewedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 110%;
  height: 100%;
  /* background-color: #000; */
  background-image: linear-gradient(
    90deg,
    #000 70%,
    #000 99%,
    #fd5d00 99%,
    #fd5d00 100%
  );
  transform: skew(-10deg);
  z-index: -1;
`;
export default Banner;
