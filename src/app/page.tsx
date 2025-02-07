"use client";

import React  from "react";

import {
  Heading,
  Button,
  AvatarGroup,
  Line,
  LogoCloud,
  Column,
  Grid,
  Icon,
} from "@/once-ui/components";

export default function Home() {

  const technologies = ["rails", "golang", "nextjs", "tailwind", "postgresql", "docker", "github", "aws", "linux", "digitalocean"];

  return (
    <Column fillWidth horizontal="center" gap="32" padding="32" position="relative">
      <Heading wrap="balance" variant="display-default-l" align="center" marginBottom="16">
        Building Scalable & Reliable Software Solutions
      </Heading>
      <Button
        id="readDocs"
        target="_blank"
        label="Get in touch"
        href="mailto:ontapsoftwaresolutions@gmail.com"
        variant="secondary"
        arrowIcon
      />
      <Column horizontal="center" paddingTop="64" fillWidth gap="24">
        <Line maxWidth={4} marginBottom="16" background="neutral-alpha-medium" />
        <AvatarGroup
          marginBottom="8"
          reverse
          size="s"
          avatars={[

          ]}
        />
        <Heading marginBottom="12" as="h2" align="center" variant="heading-default-l">
          Brought to you with the help of some stellar <br/>
          technologies and a lot of coffee!
        </Heading>
        <Grid
          columns="5"
          gap="24"
          padding="24"
        >
          {technologies.map((tech) => (
            <Icon key={tech} name={tech} size="l" />
          ))}
        </Grid>
      </Column>
    </Column>
  );
}
