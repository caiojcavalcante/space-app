import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

const Projects = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:1200px)");
  return (
    <Section>
      <h1>Projects</h1>
      <Wrapper>
        <Project isNonMobileScreen={isNonMobileScreen}>
          <button
            onClick={() => {
              window.open("https://midasltda.co");
            }}
          >
            <Image
              src="/midas-preview.jpg"
              fill
              alt="Midas Landing page"
              sizes="100%"
            />
          </button>
          <div className="textWrap">
            <h1>Midas Landing page</h1>
            <h3>Project 1 description</h3>
          </div>
        </Project>
        <Project isNonMobileScreen={isNonMobileScreen}>
          <button
            onClick={() => {
              window.open("https://midasltda.co");
            }}
          >
            <Image
              src="/tellus-preview.jpg"
              fill
              alt="Midas Landing page"
              sizes="100%"
            />
          </button>
          <div className="textWrap">
            <h1>Tellus social media</h1>
            <h3>Project 1 description</h3>
          </div>
        </Project>
        <Project isNonMobileScreen={isNonMobileScreen}>
          <button
            onClick={() => {
              window.open("https://realestate-app-silk.vercel.app/");
            }}
          >
            <Image
              src="/realestate-preview.jpg"
              fill
              alt="Midas Landing page"
              sizes="100%"
            />
          </button>
          <div className="textWrap">
            <h1>real estate website</h1>
            <h3>Project 1 description</h3>
          </div>
        </Project>
      </Wrapper>
    </Section>
  );
};
const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #000;
  padding: 4rem 0;
  font-size: 1.5rem;
  h1 {
    font-family: "Akira Expanded";
  }
`;
const Wrapper = styled.div`
  width: 95%;
  max-width: 45rem;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.3rem solid #000;
  border-radius: 2rem;
`;
const Project = styled.div<{ isNonMobileScreen: boolean }>`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ isNonMobileScreen }) => (isNonMobileScreen ? "2rem" : "1rem")};
  width: 100%;
  h1 {
    font-size: ${({ isNonMobileScreen }) =>
      isNonMobileScreen ? "1.1rem" : "1rem"};
  }
  h3 {
    font-family: "Poppins";
    font-size: 0.8rem;
  }
  button {
    position: relative;
    overflow: hidden;
    background-color: #000;
    width: ${({ isNonMobileScreen }) =>
      isNonMobileScreen ? "16rem" : "160px"};
    height: ${({ isNonMobileScreen }) => (isNonMobileScreen ? "9rem" : "90px")};
    border-radius: 1rem;
    border: 0.15rem solid #000;
    cursor: pointer;
  }
  .textWrap {
    display: flex;
    background: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #000;
    width: 50%;
  }
`;
export default Projects;
