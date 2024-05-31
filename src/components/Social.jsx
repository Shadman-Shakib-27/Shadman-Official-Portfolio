import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaXTwitter />, path: "" },
  { icon: <FaFacebook />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
