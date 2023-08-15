import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

// const formatTime = (time) => {
//   let min = Math.floor(time / 60);
//   let sec = Math.floor(time - min * 60);

//   if (min <= 10) min = "0" + min;
//   if (sec <= 10) sec = "0" + sec;

//   return min + ":" + sec;
// };

export const Email = () => {
  //   const [countdown, setCountdown] = useState(3 * 60);
  //   const timerId = useRef();
  //   useEffect(() => {
  //     timerId.current -
  //       setInterval(() => {
  //         setCountdown((perv) => perv - 1);
  //         return () => clearInterval(timerId.current);
  //       }, 1000);
  //   }, []);
  //   useEffect(() => {
  //     if (countdown < 0) clearInterval(timerId.current);
  //   }, [countdown]);

  return (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headingContainer}>
            <Img
              src="https://res.cloudinary.com/amrelgendy/image/upload/v1692062612/header_wt2v5s.png"
              style={img}
            />
          </Section>
          <Section style={textContainer}>
            <Heading style={header}>OTP Verification</Heading>
            <Text style={paragraph}>
              Enter the following code to finish reseting you password.
            </Text>
            <Section style={codeContainer}>
              <Text style={code}>MYOTP</Text>
            </Section>
            <Section>
              <Text>
                Your otp is valid for <strong>3</strong> min.
              </Text>
            </Section>
            <Hr style={hr} />
            <Text style={footer}>Copyright @ Hady Tawfik - 2023</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  borderRadius: "8px",
  borderColor: "#cccccc",
  border: "1px solid #cccccc",
  margin: "56px auto",
  width: "550px",
  overflow: "hidden",
};
const headingContainer = {
  backgroundColor: "#171e2b",
  height: "100%",
  borderRadius: "8px 8px 0 0",
};

const img = {
  width: "100%",
  objectFit: "cover",
};
const codeContainer = {
  background: "rgba(0,0,0,.05)",
  borderRadius: "4px",
  margin: "16px auto 14px",
  verticalAlign: "middle",
  width: "280px",
};

const code = {
  color: "#000",
  display: "inline-block",
  fontFamily: "inter",
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: "6px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center",
};
const header = {
  textAlign: "center",
  color: "#00000",
  margin: "0 0 16px 0",
};

const textContainer = {
  textAlign: "center",
  padding: "24px",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "26px",
  margin: "0 0 32px 0",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  textAlign: "left",
  color: "#8898aa",
  fontSize: "12px",
};
