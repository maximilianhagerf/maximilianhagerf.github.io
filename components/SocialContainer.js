import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { getBreakpointValue } from "../lib/breakpoint.js";
import { useWindowDimensions } from "../lib/useWindowDimension.js";
import SocialLink from "./SocialLink";

import styles from "../styles/modules/SocialContainer.module.css";
import github from "../public/images/social/github.svg";
import stackoverflow from "../public/images/social/stackoverflow.svg";
import dribbble from "../public/images/social/dribbble.svg";
import linkedin from "../public/images/social/linkedin.svg";

const breakpoint = getBreakpointValue("sm");

const SocialLinks = [
  {
    id: 13,
    key: "github",
    href: "https://github.com/maximilianhagerf",
    alt: "github",
    icon: github,
  },
  {
    id: 12,
    key: "stackoverflow",
    href: "https://stackoverflow.com/users/3865079/captain-green",
    alt: "stackoverflow",
    icon: stackoverflow,
  },
  {
    id: 11,
    key: "dribbble",
    href: "https://dribbble.com/captain_green",
    alt: "dribbble",
    icon: dribbble,
  },
  {
    id: 10,
    key: "linkedin",
    href: "https://www.linkedin.com/in/maximilianhagerf/",
    alt: "linkedin",
    icon: linkedin,
  },
];

const SocialContainer = () => {
  const { width, height } = useWindowDimensions();
  const [isPhone, setIsPhone] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      setIsPhone(width < breakpoint ? styles.SocialContainerHidden : "");
    } else {
      setIsPhone("");
    }
  }, [router, isPhone, width]);

  return (
    <div className={`${styles.SocialContainer} ${isPhone}`}>
      {SocialLinks.map(({ id, key, href, alt, icon }) => (
        <SocialLink id={id} key={key} href={href} alt={alt} icon={icon} />
      ))}
    </div>
  );
};

export default SocialContainer;
