import { PopupButton } from "@typeform/embed-react";
import { Button, Container, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import FirstImage from "../public/my-photos/first-image.webp";
import BoldLine from "./components/BoldLine";
export default function Home() {
  return (
    <>
      <Head>
        <title>Asgar Aliyev</title>
      </Head>
      <Container maxW={"container.xl"}>
        <section className="flex lg:flex-row flex-col py-20 ">
          <div className="flex-1 uppercase">
            <Text fontSize="3xl">Asgar + front-end dev</Text>
            <Text fontSize="6xl">Asgar Aliyev</Text>
          </div>
          <div className="flex-1 flex justify-center ">
            <Image
              width={300}
              height={500}
              objectFit="cover"
              src={FirstImage}
            />
          </div>
        </section>
      </Container>

      <BoldLine />
      <section className="py-10">
        <Container maxW="container.lg">
          <Text className="mb-10  md:text-3xl text-xl">
            Talented and experienced front-end developer with 2+ years of
            experience working with mainly Javascript and its frameworks or
            libraries.
          </Text>
          <Text className="mb-10  md:text-3xl text-xl">
            Advanced knowledge in React, Typescript, and Redux. I am also
            experienced in agile environments and software design principles.
            Skilled in creating e-commerce, CRM web applications, integrating
            with payment APIs, etc.
          </Text>
          <Text className="mb-10  md:text-3xl text-xl">
            Interested in working together?
          </Text>
          <PopupButton
            id="A6hBBtrO"
            style={{ fontSize: 20 }}
            className="my-button"
          >
            Drop a note
          </PopupButton>
        </Container>
      </section>
    </>
  );
}
