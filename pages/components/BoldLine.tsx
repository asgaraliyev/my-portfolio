import { useColorMode, useColorModePreference, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function BoldLine() {
  const bg = useColorModeValue("bg-black","bg-white")
  return <section className={`w-full h-5 ${bg}`}></section>;
}
