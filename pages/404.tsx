import { Text } from "@chakra-ui/react";
import React from "react";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center h-screen items-center">
      <Text fontSize={"7xl"}>404 </Text>
      <Text>This page could not be found.</Text>
    </section>
  );
}
