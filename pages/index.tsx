import { Button, Container, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import FirstImage from "../public/first-section-right.jpeg";
import BoldLine from "./components/BoldLine";
export default function Home() {
  return (
    <>
      <Head>
        <title>AsgarAliyev Home</title>
      </Head>
      <Container maxW={"container.xl"}>
        <section className="flex lg:flex-row flex-col py-20 ">
          <div className="flex-1 ">
            <Text fontSize="3xl">BRAND + UI DESIGNER</Text>
            <Text fontSize="6xl">Brandonoff Hamptonoff</Text>
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
            I'm Brandon, a Brand & UI Designer currently working as a
            Communications Designer for Facebook Reality Labs Research in
            Redmond, WA.
          </Text>
          <Text className="mb-10  md:text-3xl text-xl">
            At the intersections of brand identity, motion, & UI design I take
            pride in building and developing brands that help make the world a
            better, more sustainable place.
          </Text>
          <Text className="mb-10  md:text-3xl text-xl">Interested in working together?</Text>
          <Button> Drop a note</Button>
          
        </Container>
      </section>
    </>
  );
}
