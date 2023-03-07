import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

const Projects = () => {
  return (
    <Section>
      <h1>Projects</h1>
      <Wrapper>
        <Project>
          <div />
          <div className="textWrap">
            <h1>Project 1</h1>
            <h3>Project 1 description</h3>
          </div>
        </Project>
        <Project>
          <div />
          <div className="textWrap">
            <h1>Project 1</h1>
            <h3>Project 1 description</h3>
          </div>
        </Project>
        <Project>
          <div />
          <div className="textWrap">
            <h1>Project 1</h1>
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
  width: 80%;
  max-width: 45rem;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.3rem solid #000;
  border-radius: 2rem;
`;
const Project = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  h1 {
    font-size: 1.8rem;
  }
  h3 {
    font-family: "Poppins";
    font-size: 0.8rem;
  }
  div {
    background-color: #000;
    width: 16rem;
    height: 9rem;
    border-radius: 1rem;
  }
  .textWrap {
    display: flex;
    background: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #000;
  }
`;
export default Projects;
