import Image from "next/image";
import Link from "next/link";

import { Button } from "../components/ui/button";

export default function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="text-center sm:text-left">
            <div className="mb-6">
              <span className="font-light tracking-wide text-gray-500">
                spott<span className="text-purple-400">*</span>
              </span>
            </div>

            <h1 className="mb-6 text-5xl leading-[0.95] font-bold tracking-tight sm:text-6xl md:text-7xl">
              Discover &<br />
              create amazing
              <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                events.
              </span>
            </h1>

            <p className="mb-12 max-w-lg text-lg font-light text-gray-400 sm:text-xl">
              Whether you&apos;re hosting or attending, Spott makes every event
              memorable. Join our community today.
            </p>

            <Link href="/explore">
              <Button size="xl" className={"rounded-full"}>Get Started</Button>
            </Link>
          </div>

          {/* Right - 3D Phone Mockup */}
          <div className="relative block">
            <Image
              src="/3d-react.png"
              alt="react meetup"
              width={700}
              height={700}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
