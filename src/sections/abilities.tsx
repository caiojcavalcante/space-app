import styled from "styled-components";
import Mars from "@/components/mars";

const Trajectory = () => {
  return (
    <>
      <Section>
        <h1>Abilities</h1>
        <Canvas>
          <ul>
            <li className="right">
              <h2
                style={{
                  willChange: "transform",
                  transform: "translateX(37rem)",
                }}
              >
                Javascript
              </h2>
            </li>
            <li className="right">
              <h2
                style={{
                  willChange: "transform",
                  transform: "translateX(35rem)",
                }}
              >
                Typescript
              </h2>
            </li>
            <li className="right">
              <h2
                style={{
                  willChange: "transform",
                  transform: "translateX(34.2rem)",
                }}
              >
                Express
              </h2>
            </li>
            <li className="right">
              <h2
                style={{
                  willChange: "transform",
                  transform: "translateX(34.4rem)",
                }}
              >
                Three.js
              </h2>
            </li>
            <li className="right">
              <h2
                style={{
                  willChange: "transform",
                  transform: "translateX(35rem)",
                }}
              >
                Next
              </h2>
            </li>
            <li className="right">
              <h2
                style={{
                  willChange: "transform",
                  transform: "translateX(37rem)",
                }}
              >
                React
              </h2>
            </li>
          </ul>
          <Mars />
          <ul>
            <li className="left">
              <h2
                style={{
                  willChange: "transform",
                  transform: "translateX(-36.7rem)",
                }}
              >
                Illustrator
              </h2>
            </li>
            <li className="left">
              <h2
                style={{
                  willChange: "transform",
                  transform: "translateX(-35rem)",
                }}
              >
                Photoshop
              </h2>
            </li>
            <li className="left">
              <h2
                style={{
                  willChange: "transform",
                  transform: "translateX(-34.4rem)",
                }}
              >
                Django
              </h2>
            </li>
            <li className="left">
              <h2
                style={{
                  willChange: "transform",
                  transform: "translateX(-34.5rem)",
                }}
              >
                Python
              </h2>
            </li>
            <li className="left">
              <h2
                style={{
                  willChange: "transform",
                  transform: "translateX(-35.3rem)",
                }}
              >
                C/C++
              </h2>
            </li>
            <li className="left">
              <h2
                style={{
                  willChange: "transform",
                  transform: "translateX(-37rem)",
                }}
              >
                English
              </h2>
            </li>
          </ul>
        </Canvas>
      </Section>
    </>
  );
};
const Section = styled.section`
  //the glow from mars
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(255, 240, 0, 1) 22%,
    rgba(255, 100, 0, 1) 21%,
    rgba(0, 0, 0, 1) 25%,
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  justify-content: center;
  h1 {
    font-family: "Akira Expanded", sans-serif;
    font-size: 4rem;
  }
`;
const Canvas = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 120rem;
  height: 35rem;
  ul {
    justify-content: space-between;
    height: 60%;
    z-index: 1;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    will-change: transform;
    .right {
      text-align: right;
    }
    .left {
      text-align: left;
    }
    li {
      h2 {
        font-family: "Poppins", sans-serif;
        font-size: 2rem;
        color: #fff;
      }
    }
  }
`;

export default Trajectory;
