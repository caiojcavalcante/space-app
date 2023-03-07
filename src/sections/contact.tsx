import styled from "styled-components";
import Image from "next/image";

const Contact = () => {
  return (
    <Section>
      <div className="Wrapper">
        <div className="imageWrapper">
          <Image
            width={320}
            height={320}
            src="/contact.jpg"
            alt="Contact"
          />
        </div>
        <div className="contactWrapper">
          <h1>Contact me</h1>
          <div className="contact">
            <h2>Full Name</h2>
          </div>
          <div className="contact">
            <h2>E-mail</h2>
          </div>
          <div className="message">
            <h2>Message</h2>
          </div>
        </div>
      </div>
    </Section>
  );
};
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #01140f;
  padding: 4rem 0;
  color: #8e8e8e;
  gap: 2rem;
  h1 {
    font-family: "Akira Expanded";
  }
  h2 {
    font-family: "Poppins";
    font-size: 0.7rem;
  }
  .contactWrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .Wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
  .contact {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 1rem;
    background-color: #000403;
    width: 20rem;
    height: 2.5rem;
    border-radius: 1rem;
  }
  .message {
    padding: 0.8rem 0.8rem;
    width: 20rem;
    height: 8rem;
    border-radius: 1rem;
    background-color: #000403;
  }
  .imageWrapper {
    position: relative;
    width: 320px;
    height: 320px;
    overflow: hidden;
    border-radius: 2rem;
  }
`;

export default Contact;
