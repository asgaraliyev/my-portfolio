import { Button, Container, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

import React from "react";
const menu_items = [
  {
    name: "...",
    path: "/..1.",
  },
  {
    name: "...",
    path: "/...2",
  },
  {
    name: "...",
    path: "/...3",
  },
];

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl">
      <div className="flex w-full   px-10 py-3">
        <div className="flex-1 flex items-center">
          <h1 className="font-bold">
            <Link href="/">
              <Text className="cursor-pointer">Asgar</Text>
            </Link>
          </h1>
        </div>
        <div className="flex-1">
          <ul className="flex w-full">
            {menu_items.map((item) => {
              return (
                <li
                  key={item.path}
                  className="grid place-items-center flex-1  cursor-pointer"
                >
                  <Link href={item.path}>
                    <Text className="cursor-pointer hover:border-b-2 hover:border-b-rose-600">
                      {item.name}
                    </Text>
                  </Link>
                </li>
              );
            })}
            <li className="grid place-items-center flex-1">
              <Button variant="outline" onClick={toggleColorMode}>
                My mode
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
