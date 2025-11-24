import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="bg-background/80 fixed top-0 right-0 left-0 z-20 border-b backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}

          <Link href={"/"} className="flex items-center">
            <Image
              src={"/spott.png"}
              alt="Spott Logo"
              width={500}
              height={300}
              className="h-11 w-full"
              priority
            />
          </Link>

          {/* Search & Location - Desktop only */}

          {/* Right Side Actions */}
        </div>

        {/* Mobile Search & Location - Below Header */}
      </nav>

      {/* Modals  */}
    </>
  );
};

export default Header;
