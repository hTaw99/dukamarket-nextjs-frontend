// import {
//   Body,
//   Button,
//   Container,
//   Head,
//   Hr,
//   Html,
//   Img,
//   Preview,
//   Section,
//   Text,
//   Tailwind,
// } from "@react-email/components";
// // import { Tailwind } from "@react-email/tailwind";

// const Email = ({ name }) => (
//   // <Tailwind
//   //   config={{
//   //     theme: {
//   //       fontFamily: {
//   //         sans: ["inter"],
//   //       },
//   //     },
//   //   }}
//   // >
//   <Html>
//     <Head />
//     <Preview>
//       The sales intelligence platform that helps you uncover qualified leads.
//     </Preview>
//     <Body >
//       <Container>
//         <Text >Welcome</Text>
//         <Text className="capitalize">Hi {name},</Text>
//         <Text>
//           Welcome to DukaMarket, the sales intelligence platform that helps you
//           uncover qualified leads and close deals faster.
//         </Text>
//         <Section>
//           <Button
//             href="https://dukamarket-nextjs.vercel.app"
//           >
//             Get started
//           </Button>
//         </Section>
//         <Text>
//           Best,
//           <br />
//           The DukaMarket team
//         </Text>
//         <Hr />
//       </Container>
//     </Body>
//   </Html>
// );

// export default Email;

import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const Email = ({ name }) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headingContainer}>
          <Img
            src="https://res.cloudinary.com/amrelgendy/image/upload/v1692061792/header_oeyfbw.svg"
            style={img}
          ></Img>
          {/* <Heading style={header}>
            duka<span style={span}>market</span>
          </Heading> */}
        </Section>
        <Section style={textContainer}>
          <Text style={paragraph}>
            Hi <strong>{name},</strong>
          </Text>
          <Text style={paragraph}>
            Welcome to DukaMarket, Digital storefront on the internet,
            <strong> discover latest offers!</strong>
          </Text>
          <Section style={btnContainer}>
            <Button pX={12} pY={12} style={button} href="https://getkoala.com">
              Start Shoping
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The DukaMarket team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Copyright @ Hady Tawfik - 2023</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

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

const header = {
  textAlign: "center",
  color: "#ffffff",
};

const span = {
  color: "#ef4443",
};

const textContainer = {
  padding: "24px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#ef4443",
  borderRadius: "4px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
