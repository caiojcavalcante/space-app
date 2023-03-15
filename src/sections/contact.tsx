import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

const Contact = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:1200px)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hasWritten, setHasWritten] = useState(false);

  return (
    <Section isNonMobileScreen={isNonMobileScreen}>
      <div className="Wrapper">
        <div className="imageWrapper">
          <Image fill src="/contact.jpg" alt="Contact" />
        </div>
        <form className="contactWrapper">
          <h1>Contact me</h1>
          <input
            className="contact"
            type="text"
            value={name}
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="contact"
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="message"
            rows={10}
            value={message}
            placeholder="Message"
            onChange={(e) => {
              setMessage(e.target.value);

              setHasWritten(name !== "" && email !== "" && message !== "");

              if (message.length < 3) {
                setHasWritten(false);
              }
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: hasWritten ? "#8e8e8e" : "#000403",
              color: hasWritten ? "#01140f" : "#8e8e8e",
            }}
          >
            send
          </button>
        </form>
      </div>
    </Section>
  );
};
const Section = styled.section<{ isNonMobileScreen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #01140f;
  padding: 4rem 0;
  color: #8e8e8e;
  gap: 2rem;
  max-height: 80vh;
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
    flex-direction: ${({ isNonMobileScreen }) =>
      isNonMobileScreen ? "row" : "column"};
    align-items: center;
    gap: 2rem;
    will-change: ${({ isNonMobileScreen }) =>
      isNonMobileScreen ? "none" : "transform"};
    transform: ${({ isNonMobileScreen }) =>
      isNonMobileScreen ? "none" : "translateY(-5vh)"};
  }
  .contact {
    border: none;
    color: #8e8e8e;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 1rem;
    font-weight: 600;
    font-family: "Poppins";
    background-color: #000403;
    width: 20rem;
    height: 2.5rem;
    border-radius: 1rem;
    :focus {
      outline: none;
    }
  }
  .message {
    padding: 0.8rem 0.8rem;
    width: 20rem;
    height: 8rem;
    border: none;
    border-radius: 1rem;
    background-color: #000403;
    font-weight: 600;
    font-family: "Poppins";
    //text on top left
    padding-bottom: 6rem;
    overflow: hidden;
    resize: none;
    :focus {
      outline: none;
    }
  }
  .imageWrapper {
    position: relative;
    width: 320px;
    height: 320px;
    overflow: hidden;
    border-radius: 2rem;
  }
  button {
    background-color: #000403;
    color: #8e8e8e;
    height: 2.5rem;
    border: none;
    border-radius: 1rem;
    padding: 0.8rem 1.5rem;
    font-family: "Poppins";
    font-size: 0.7rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default Contact;
