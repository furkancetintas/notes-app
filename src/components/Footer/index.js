import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  return (
    <div className="w-full text-center relative mt-14">
      <ul className="flex items-center justify-center">
        <li className="flex items-center justify-center">
          <AiFillGithub size={22} />
          <a className="ml-1" href="https://github.com/furkancetintas">
            /furkancetintas
          </a>
        </li>
        <li className="flex items-center justify-center ml-5">
          <AiFillLinkedin size={22} />
          <a className="ml-1" href="linkedin.com/in/furkancetintas">
            /in/furkancetintas/
          </a>
        </li>
      </ul>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-600 sticky bottom-0 left-0 right-0">
        Not Uygulaması 2024
      </p>
    </div>
  );
}

export default Footer;
