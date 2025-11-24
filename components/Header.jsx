"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { Plus } from "lucide-react";
import { Ticket } from "lucide-react";
import { Building } from "lucide-react";
import { BarLoader } from "react-spinners";

import { Button } from "./ui/button";

import { useStoreUser } from "@/hooks/use-store-user";

const Header = () => {
  const { isLoading } = useStoreUser();

  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

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
          <div className="flex items-center">
            <Button
              variant={"ghost"}
              size={"sm"}
              onClick={() => setShowUpgradeModal(true)}
            >
              Pricing
            </Button>

            <Button variant={"ghost"} size={"sm"} asChild className={"mr-2"}>
              <Link href={"/explore"}>Explore</Link>
            </Button>

            <Authenticated>
              <Button size={"sm"} asChild className={"mr-4 flex gap-2"}>
                <Link href="/create-event">
                  <Plus className="size-4" />
                  <span className="hidden sm:inline">Create Event</span>
                </Link>
              </Button>

              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9",
                  },
                }}
              >
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="My Tickets"
                    labelIcon={<Ticket size={16} />}
                    href="/my-tickets"
                  />
                  <UserButton.Link
                    label="My Events"
                    labelIcon={<Building size={16} />}
                    href="/my-events"
                  />
                  <UserButton.Action label="manageAccount" />
                </UserButton.MenuItems>
              </UserButton>
            </Authenticated>

            <Unauthenticated>
              <SignInButton mode="modal">
                <Button size={"sm"}>Sign In</Button>
              </SignInButton>
            </Unauthenticated>
          </div>
        </div>

        {/* Mobile Search & Location - Below Header */}

        {/* Loader */}

        {isLoading && (
          <div className="absolute bottom-0 left-0 w-full">
            <BarLoader width={"100%"} color="#a855f7" />
          </div>
        )}
      </nav>

      {/* Modals  */}
    </>
  );
};

export default Header;
