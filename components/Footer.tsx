import React from "react";
import Link from "next/link";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  aria: string;
  Icon: IconType;
}

const socialLinks: SocialLinkProps[] = [
  {
    href: "https://x.com/quietandstuff",
    aria: "Twitter",
    Icon: RiTwitterXFill,
  },
  {
    href: "https://github.com/Delightsheriff",
    aria: "GitHub",
    Icon: RiGithubFill,
  },
  {
    href: "https://www.instagram.com/deelit_e/",
    aria: "Instagram",
    Icon: RiInstagramFill,
  },
  {
    href: "https://www.linkedin.com/in/delightsheriff/",
    aria: "LinkedIn",
    Icon: RiLinkedinBoxFill,
  },
];

const SocialLink: React.FC<SocialLinkProps> = ({ href, aria, Icon }) => (
  <Link
    href={href}
    aria-label={aria}
    className="text-text-light dark:text-text-dark hover:text-box-light dark:hover:text-box-dark transition-colors"
    prefetch={false}
  >
    <Icon className="h-5 w-5" />
  </Link>
);

export default function Footer() {
  return (
    <footer className="w-full bg-background-light dark:bg-background-dark py-6 px-4 md:px-6">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
        <div className="text-xs text-center text-text-light dark:text-text-dark">
          &copy; {new Date().getFullYear()} Delight Amadi-Sheriff. All rights
          reserved.
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <SocialLink key={link.aria} {...link} Icon={link.Icon} />
          ))}
        </div>
      </div>
    </footer>
  );
}
