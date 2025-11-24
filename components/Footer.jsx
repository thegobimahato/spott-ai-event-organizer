import Link from "next/link";

import {  Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-gray-800/50 px-6 py-8 md:flex-row">
      <div className="flex items-center gap-6 text-sm text-gray-400">
        Made with ❤️ by Gobi Mahato
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="https://www.github.com/thegobimahato"
          className="text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Github profile"
        >
          <Github className="h-5 w-5" />
        </Link>

        <Link
          href="https://x.com/thegobimahato"
          className="text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our X (Twitter) profile"
        >
          <Twitter className="h-5 w-5" />
        </Link>
      </div>    </footer>
  );
};

export default Footer;
