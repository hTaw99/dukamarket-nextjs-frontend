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
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export const Email = ({ name }) => {
  return (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto  w-[465px]">
            <Section className="w-full rounded bg-gray-900 ">
              <Heading className="text-center text-white">
                duka<span className="text-red-500">market</span>
              </Heading>
            </Section>

            <section className="p-[20px]">
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                Welcome to <strong>DukaMarket</strong>
              </Heading>
              <Text className="text-black text-[14px] font-semibold leading-[24px]">
                Hello {name},
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                Welcome to DukaMarket, the sales intelligence platform that
                helps you uncover qualified leads and close deals faster.
              </Text>

              <Section className="text-center mt-[32px] mb-[32px]">
                <Button
                  pX={20}
                  pY={12}
                  className="bg-red-500  rounded text-white text-[12px] font-semibold no-underline text-center"
                  href="https://dukamarket-nextjs.vercel.app"
                >
                  Get started
                </Button>
              </Section>
              <Text>
                <span className="font-semibold">Best,</span>
                <br />
                The DukaMarket team
              </Text>
            </section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
