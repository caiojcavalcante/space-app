import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

const Trajectory = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:1200px)");
  return (
    <Section isNonMobileScreen={isNonMobileScreen}>
      <CardWrapper>
        <ImageWrapper>
          <Image src="/card-astronaut-paint.jpg" alt="astronaut-paint" fill />
        </ImageWrapper>
        <h2>Space</h2>
        <h3>So lonely and so immense</h3>
      </CardWrapper>
      <TextWrapper isNonMobileScreen={isNonMobileScreen}>
        <h1>Trajectory</h1>
        <p>
          {
            "My programming journey started in 2018 with Python on a basic laptop. Despite limited resources, I remained determined to grow my skills and push myself to new heights. In 2022, I embarked on a Computer Engineering degree and have since amassed a significant portfolio of achievements. My passion for coding has led me to constantly seek out new challenges and expand my knowledge base. With hard work and dedication, I've proven that anything is possible in the world of programming."
          }
        </p>
        <div>
          <div>
            <h1>+10</h1>
            <h2>Projects concluded</h2>
          </div>
          <div>
            <h1>+5</h1>
            <h2>Years programming</h2>
          </div>
          <div>
            <h1>+30</h1>
            <h2>Certificates and courses</h2>
          </div>
        </div>
      </TextWrapper>
    </Section>
  );
};

const Section = styled.section<{ isNonMobileScreen: boolean }>`
  background-image: linear-gradient(120deg, #fd5d00 0%, #ff9a00 100%);
  display: flex;
  flex-direction: ${({ isNonMobileScreen }) =>
    isNonMobileScreen ? "row" : "column"};
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 2rem;
  height: ${({ isNonMobileScreen }) => (isNonMobileScreen ? "900px" : "auto")};
`;
const CardWrapper = styled.div`
  background-color: #fff;
  height: 35rem;
  width: 30rem;
  max-width: 90vw;
  max-height: calc(90vw + 5rem);
  overflow: hidden;
  border-radius: 1.7rem;
  h2 {
    margin: 3% 1% 0 5%;
    font-family: "Akira Expanded", sans-serif;
    font-size: 1.5rem;
    color: #000;
  }
  h3 {
    margin: 0 1% 0 5%;
    font-family: "Akira Expanded", sans-serif;
    font-size: 0.5rem;
    color: #222;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  height: calc(600% / 7);
  width: 100%;
`;
const TextWrapper = styled.div<{ isNonMobileScreen: boolean }>`
  display: flex;
  /* background-color: #f00; */
  margin: 2rem 0;
  flex-direction: column;
  align-items: center;
  width: ${({ isNonMobileScreen }) => (isNonMobileScreen ? "40%" : "100%")};
  h1 {
    font-family: "Akira Expanded", sans-serif;
    font-size: ${({ isNonMobileScreen }) =>
      isNonMobileScreen ? "3.5rem" : "2rem"};
    transform: scaleY(0.7);
  }
  div {
    font-family: "Poppins";
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      text-align: center;
      font-weight: 00;
      width: 100%;
      h1 {
        font-family: "Poppins";
        font-size: ${({ isNonMobileScreen }) =>
          isNonMobileScreen ? "3.5rem" : "3.5rem"};
      }
      h2 {
        font-size: ${({ isNonMobileScreen }) =>
          isNonMobileScreen ? "1.5rem" : ".5rem"};
      }
    }
  }
  p {
    width: 100%;
    font-family: "Poppins";
    font-weight: 500;
    font-size: ${({ isNonMobileScreen }) =>
      isNonMobileScreen ? "1.5rem" : "1rem"};
  }
`;
export default Trajectory;
