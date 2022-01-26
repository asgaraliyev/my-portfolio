import { Button, Container, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

import React from "react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="container.xl">
      <div className="flex w-full   px-10 py-3">
        <div className="flex-1 flex items-center">
          <h1 className="font-bold">
            <Link href="/">
              <Text className="cursor-pointer">Bhamps.</Text>
            </Link>
          </h1>
        </div>
        <div className="flex-1">
          <ul className="flex w-full">
            <li className="grid place-items-center flex-1">
              <Link href="/work">
                <Text className="cursor-pointer">Work</Text>
              </Link>
            </li>
            <li className="grid place-items-center flex-1">
              <Link href="/play">
                <Text className="cursor-pointer">Play</Text>
              </Link>
            </li>
            <li className="grid place-items-center flex-1">
              <Link href="/dribble">
                <Text className="cursor-pointer">Dribble</Text>
              </Link>
            </li>
            <li className="grid place-items-center flex-1">
              <Button variant="outline" onClick={toggleColorMode}>
                Reach Out
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
