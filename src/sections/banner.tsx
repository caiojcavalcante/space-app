import styled from "styled-components";
import Image from "next/image";

//use typescript to pass isNonMobileScreen as a prop
const Banner = () => {
  return (
    <Wrapper>
      <div className="logo">
        <Image src="/logo.svg" alt="logo" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="banner">
        <Image
          priority
          quality={100}
          src={"/atronautacores.jpg"}
          alt="banner"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <Flex>
        <div className="textWrapper">
          <Image
            src={"/banner-text.png"}
            fill
            style={{ objectFit: "fill" }}
            alt="banner-text"
          />
        </div>
        <SkewedOverlay />
        <Button>
          <h1>discover</h1>
        </Button>
      </Flex>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  overflow: hidden;
  display: flex;
  height: 90rem;
  max-height: 60vw;
  flex-direction: row-reverse;
  justify-content: end;
  align-items: center;
  background-color: #000;

  .banner {
    position: relative;
    min-width: 50vw;
    width: 55rem;
    max-width: 60vw;
    height: 90rem;
    max-height: 60vw;
  }

  .logo {
    position: absolute;
    top: 2rem;
    left: 50%;
    z-index: 100;
    width: 5vw;
    height: 2.89vw;
  }

  .textWrapper {
    position: relative;
    display: flex;
    width: 34vw;
    max-width: 95%;
    height: 9rem;
    max-height: 13%;
  }
`;

const Button = styled.button`
  z-index: 1;
  background-color: #fd5d00;
  border: 0.3rem solid #000;
  border-radius: 10rem;
  width: 34vw;
  max-width: 95%;
  height: 9rem;
  max-height: 13%;
  color: #000;
  font-family: "Akira Expanded", sans-serif;
  font-size: 2vw;
`;
const Flex = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: calc(50%);
  height: 90rem;
  max-height: 60vw;
  background-color: #000;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vw;
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
