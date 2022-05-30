import { useColorMode, useColorModePreference, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function BoldLine() {
  const bg = useColorModeValue("bg-slate-900","bg-slate-400")
  return <section className={`w-full h-5 ${bg}`}></section>;
}
