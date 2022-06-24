import * as React from "react"
import {
  Twitter,
  Twitch,
  Instagram,
  Facebook,
  Youtube,
  GitHub,
} from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
} from "./ui"
import BrandLogo from "./brand-logo"

const socialMedia = {
  INSTAGRAM: {
    url: "http://instagram.com/eline_goedeten/",
    name: "Instagram",
    icon: <Instagram />,
  },
  FACEBOOK: {
    url: "https://www.facebook.com/dietistelinezuiderwijk/",
    name: "Facebook",
    icon: <Facebook />,
  },
  YOUTUBE: {
    url: "https://youtube.com",
    name: "YouTube",
    icon: <Youtube />,
  },
}

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service }) => {
  return socialMedia[service]?.icon
}

const getSocialName = ({ service }) => {
  return socialMedia[service]?.name
}

const data = {
  links: [
    {
      id: 0,
      navItemType: "Link",
      href: "/over-dietist-eline-zuiderwijk/",
      text: "Over Eline Zuiderwijk",
    },
    {
      id: 1,
      navItemType: "Link",
      href: "/fodmap-dieet/",
      text: "FODMAP dieet",
    },
    {
      id: 2,
      navItemType: "Link",
      href: "afvallen-en-aankomen",
      text: "Afvallen en aankomen",
    },
    {
      id: 3,
      navItemType: "Link",
      href: "/contact/",
      text: "Contact",
    },
  ],
  meta: [
    {
      id: 0,
      href: "/terms",
      text: "Terms",
    },
    {
      id: 1,
      href: "/privacy",
      text: "Privacy Policy",
    },
  ],
  socialLinks: [
    {
      service: "INSTAGRAM",
      username: "gatsbyjs",
    },
    {
      service: "FACEBOOK",
      username: "gatsbyjs",
    },
  ],
  copyright: "© 2022 Eline Zuiderwijk. All rights reserved",
}

export default function Footer(props) {
  const { links, meta, socialLinks, copyright } = data

  return (
    <Box as="footer" paddingY={4}>
      <Container>
        <Flex variant="start" responsive>
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
          </NavLink>
          <Space />
          <FlexList>
            {socialLinks &&
              socialLinks.map((link) => {
                const url = getSocialURL(link)
                return (
                  url && (
                    <li key={link.id}>
                      <IconLink to={url}>
                        <VisuallyHidden>{getSocialName(link)}</VisuallyHidden>
                        {getSocialIcon(link)}
                      </IconLink>
                    </li>
                  )
                )
              })}
          </FlexList>
        </Flex>
        <Space size={5} />
        <Flex variant="start" responsive>
          <FlexList variant="start" responsive>
            {links &&
              links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>{link.text}</NavLink>
                </li>
              ))}
          </FlexList>
          <Space />
          <FlexList>
            {meta &&
              meta.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>
                    <Text variant="small">{link.text}</Text>
                  </NavLink>
                </li>
              ))}
          </FlexList>
          <Text variant="small">{copyright}</Text>
        </Flex>
      </Container>
      <Space size={3} />
    </Box>
  )
}
