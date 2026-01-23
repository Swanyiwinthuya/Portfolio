import { content } from "../data/content";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function SocialRow() {
  return (
    <div className="socialRow">
      <a className="socialIcon" href={content.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub size={28} />
      </a>

      <a className="socialIcon" href={content.links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
        <FaInstagram size={28} />
      </a>

      <a className="socialIcon" href={content.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={28} />
      </a>

      <a className="socialIcon" href={`mailto:${content.links.email}`} aria-label="Gmail">
        <SiGmail size={28} />
      </a>
    </div>
  );
}
