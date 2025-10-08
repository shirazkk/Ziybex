import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blogs", href: "#blogs" },
];

export default function Navbar() {
  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-accent/20 z-50">
        <div className="h-full bg-accent w-0 animate-scroll-progress" />
      </div>

      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg  duration-300 navbar-slide">
        <div className="container mx-auto px-1 md:px-0">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="outline-none focus-visible:ring-1 focus-visible:ring-accent/60 rounded-sm hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/ziybex_logo.png"
                width={200}
                height={200}
                alt="Ziybex Logo"
                priority
                className="w-48 md:w-56 cursor-pointer relative right-7"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center pr-0 md:pr-3 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-foreground/80 hover:text-accent transition-colors duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-sm after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                >
                  {link.name}
                </Link>
              ))}

              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent"
                asChild
              >
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile Menu using ShadCN Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="link"
                  className="md:hidden"
                  aria-label="Open Menu"
                >
                  <RxHamburgerMenu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-4">
                <div className="flex flex-col gap-4 mt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-foreground/80 hover:text-accent font-medium py-2 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-sm"
                    >
                      {link.name}
                    </Link>
                  ))}

                  <Button
                    className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-4 py-3 text-lg"
                    asChild
                  >
                    <Link href="#contact">Contact Us</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
