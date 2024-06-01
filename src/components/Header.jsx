import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Part Start*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Shadman<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Logo Part End*/}

        {/* Desktop Navbar & Hire Me Button Open*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-accent font-bold hover:text-primary">
              Hire Me
            </Button>
          </Link>
        </div>
        {/* Desktop Navbar & Hire Me Button Close*/}

        {/* Mobile Navbar*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
        {/* Mobile Navbar*/}
      </div>
    </header>
  );
};

export default Header;
