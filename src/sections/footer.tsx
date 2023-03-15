import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Section>
        <h1>Made with Next.js, Three.js and a lot of coffee!</h1>
        <div>
          <div>
            <h3>Get in touch</h3>
            <h4>danielcaio75@gmail.com</h4>
          </div>
          <div>
            <h3>Connect</h3>
            <Link href="https://www.linkedin.com/in/caio-cavalcante-757a91207/">
              <h4>Linkedin</h4>
            </Link>
            <Link href="https://github.com/caiojcavalcante">
              <h4>Github</h4>
            </Link>
          </div>
          <div>
            <h3>Technologies used</h3>
            <h4>Next.js</h4>
            <h4>Typescript</h4>
            <h4>React</h4>
            <h4>Three.js</h4>
          </div>
        </div>
        <h3>© 2023 Caio. Todos os direitos reservados.</h3>
      </Section>
    </>
  );
};
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20rem;
  background-color: #000403;
  color: #8e8e8e;
  font-family: "Poppins";
  padding: 2rem 0;
  h1 {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 1rem;
  }
  h4 {
    font-size: 0.8rem;
  }
  div {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    height: 70%;
    gap: 2rem;
    div {
      gap: 0;
      flex-direction: column;
    }
  }
`;
export default Footer;
