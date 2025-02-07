"use client";

import { usePathname } from "next/navigation";

import { about, blog } from "@/app/resources/content";

import { Fade, Flex, Line, StyleOverlay, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { useEffect, useState } from "react";

import { person } from "@/app/resources/content";
type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;
export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex fillWidth horizontal="center" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s"> <TimeDisplay timeZone={person.location} /></Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              <Line vert maxHeight="24" />
              <>
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon={about.icon}
                  href="/about"
                  label={about.label}
                  selected={pathname === "/about"}
                />
                <ToggleButton
                  className="s-flex-show"
                  prefixIcon={about.icon}
                  href="/about"
                  selected={pathname === "/about"}
                />
              </>
              <>
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon={blog.icon}
                  href="/blog"
                  label={blog.label}
                  selected={pathname === "/blog"}
                />
                <ToggleButton
                  className="s-flex-show"
                  prefixIcon={blog.icon}
                  href="/blog"
                  selected={pathname === "/blog"}
                />
              </>


            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <StyleOverlay top="20" right="24" />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
