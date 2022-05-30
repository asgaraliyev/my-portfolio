import { Container, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const footer_data = {
  mail: "asgaraliyev.work@gmail.com",
  social_medias: [
    {
      type: "instagram",
      url: "https://www.instagram.com/asgaraliyev",
      Icon: AiOutlineInstagram,
    },
    {
      type: "linkedin",
      url: "https://www.linkedin.com/in/asgar-aliyev-46077123a/",
      Icon: AiFillLinkedin,
    },
  ],
};
export default function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("bg-slate-400","bg-gray-900");
  return (
    <Container maxW="container.xl" className={`${textColor}`}>
      <div className="flex flex-col">
        <Link href="/reach-out">
          <span className={`text-5xl my-8 ${textColor}`}>Reach Out</span>
        </Link>
        <a
          href={`mailto:${footer_data.mail}`}
          className={`text-3xl ${textColor}`}
        >
          {footer_data.mail}
        </a>
        <div className="flex flex-row">
          {footer_data.social_medias.map((item) => {
            const { Icon } = item;
            return (
              <a
                target="_blank"
                href={item.url}
                key={item.url}
                className="mr-10 my-3"
              >
                <Icon className={`text-3xl ${textColor}`} />
              </a>
            );
          })}
          <a className="mr-10 my-3">
            <div></div>
          </a>
        </div>
      </div>
    </Container>
  );
}
