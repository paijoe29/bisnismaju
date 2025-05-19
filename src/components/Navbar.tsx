"use client";

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { Menu, X, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current location

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-16 items-center"> {/* Increased height to h-16 */}
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <Mountain className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold hidden sm:inline-block text-slate-900">MyLogo</span> {/* Increased logo text size */}
        </Link>

        <NavigationMenu className="hidden md:flex flex-1">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <Link to={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-base", // Increased font size for desktop nav items
                      location.pathname === item.href
                        ? "font-semibold text-blue-600" // Active link style
                        : "text-slate-700", // Default link style
                      "hover:text-blue-600 hover:bg-blue-50/70" // Common hover style
                    )}
                    active={location.pathname === item.href}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex text-blue-600 hover:bg-blue-100 hover:text-blue-700">
            Login
          </Button>
          <Button size="sm" className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white">
            Sign Up
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs bg-white">
              <nav className="grid gap-4 text-lg font-medium mt-8"> {/* Adjusted gap for mobile links */}
                <Link
                  to="/"
                  className="flex items-center gap-2 text-lg font-semibold mb-4 text-slate-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Mountain className="h-6 w-6 text-blue-600" />
                  <span>MyLogo</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={cn(
                      "block px-3 py-2 rounded-md", // Added padding and rounded style for mobile links
                      location.pathname === item.href
                        ? "font-semibold text-blue-600 bg-blue-50" // Active mobile link style
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-100" // Default mobile link style
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <hr className="my-4 border-slate-200" />
                <Button variant="ghost" className="w-full justify-start text-blue-600 hover:bg-blue-100 hover:text-blue-700 text-base" onClick={() => setIsMobileMenuOpen(false)}> {/* Ensured text size consistency */}
                  Login
                </Button>
                <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-base" onClick={() => setIsMobileMenuOpen(false)}> {/* Ensured text size consistency */}
                  Sign Up
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;