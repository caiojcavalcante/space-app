import styled from "styled-components";
import Image from "next/image";

//use typescript to pass isNonMobileScreen as a prop
const Banner = () => {
  const imagePath = "/banner.jpg";
  const textPath = "/banner-text.png";
  return (
    <Wrapper>
      <Image
        priority
        quality={75}
        src={imagePath}
        alt="banner"
        width={1300}
        height={920}
        style={{ objectFit: "cover" }}
      />
      <Flex>
        <SkewedOverlay />
        <Image
          src={textPath}
          width={600}
          height={100}
          style={{ objectFit: "fill" }}
          alt="banner-text"
        />
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
  height: 920px;
  flex-direction: row-reverse;
  justify-content: end;
  align-items: center;
  background-color: #000;
`;

const Button = styled.button`
  z-index: 1;
  background-color: #fd5d00;
  border: 0.3rem solid #000;
  border-radius: 10rem;
  width: 48rem;
  max-width: 95%;
  height: 9rem;
  max-height: 13%;
  h1 {
    color: #000;
    font-family: "Akira Expanded", sans-serif;
    font-size: 3rem;
  }
`;
const Flex = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 920px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;
const SkewedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 150%;
  height: 100%;
  background-color: #000;
  transform: skew(-10deg);
  z-index: -1;
`;
export default Banner;
