import styled from "styled-components";
import Image from "next/image";

const Trajectory = () => {
  return (
    <Section>
      <CardWrapper>
        <ImageWrapper>
          <Image
            src="/card-astronaut-paint.jpg"
            alt="astronaut-paint"
            fill
          />
        </ImageWrapper>
        <h2>Space</h2>
        <h3>So lonely and so immense</h3>
      </CardWrapper>
      <TextWrapper>
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

const Section = styled.section`
  background-image: linear-gradient(120deg, #fd5d00 0%, #ff9a00 100%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  gap: 6rem;
`;
const CardWrapper = styled.div`
  background-color: #fff;
  height: 35rem;
  overflow: hidden;
  border-radius: 2rem;
  h2 {
    margin: 0.5rem 2rem 0 1rem;
    font-family: "Akira Expanded", sans-serif;
    font-size: 2rem;
    color: #000;
  }
  h3 {
    margin: 0 2rem 0 1rem;
    font-family: "Akira Expanded", sans-serif;
    font-size: 0.8rem;
    color: #222;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  height: 30rem;
  width: 30rem;
`;
const TextWrapper = styled.div`
  h1 {
    font-family: "Akira Expanded", sans-serif;
    font-size: 3.5rem;
    transform: scaleY(0.7);
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      text-align: center;
      font-weight: 500;
      width: 10rem;
      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 4rem;
      }
      h2 {
        font-family: "Poppins", sans-serif;
        font-size: 1.4rem;
      }
    }
  }
  p {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    width: 50rem;
  }
`;
export default Trajectory;
