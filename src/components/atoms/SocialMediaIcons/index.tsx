import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';

export function SocialMediaIcons() {
  return (
    <div className="mt-4 flex w-32 justify-between">
      <a href='https://github.com/DanLucena' target="_blank" rel="noreferrer"><FiGithub className="cursor-pointer" size="1.5rem" color="#A78BFA" id='github' /></a>
      <a href='https://www.instagram.com/leinad_lucena/' target="_blank" rel="noreferrer"><FiInstagram className="cursor-pointer" size="1.5rem" color="#A78BFA" id='instagram' /></a>
      <a href='https://twitter.com/Hobbitdafavela' target="_blank" rel="noreferrer"><FiTwitter className="cursor-pointer" size="1.5rem" color="#A78BFA" id='twitter' /></a>
      <a href='https://www.linkedin.com/in/daniel-oliveira-lucena/' target="_blank" rel="noreferrer"><FiLinkedin className="cursor-pointer" size="1.5rem" color="#A78BFA" id='linkedin' /></a>
    </div>
  );
}