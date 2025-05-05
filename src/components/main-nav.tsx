"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


// Update the attractions array to use query parameters
const attractions = [
  {
    title: "Ireland",
    href: "/attractions?q=ireland",
    description: "Discover historic castles, charming villages, and stunning landscapes.",
  },
  {
    title: "UK",
    href: "/attractions?q=uk",
    description: "Experience royal heritage, vibrant cities, and picturesque countryside.",
  },
  {
    title: "Africa",
    href: "/attractions?q=africa",
    description: "Experience wildlife safaris, vibrant cultures, and breathtaking scenery.",
  },
  {
    title: "Classic Europe",
    href: "/attractions?q=europe",
    description: "Explore historic cities, charming villages, and cultural treasures.",
  },
]

// Update the aboutItems array to use anchor links instead of page links
const aboutItems = [
  {
    title: "Our Story",
    href: "/about#story",
    description: "Learn about Genève's journey and our vision for luxury travel.",
  },
  {
    title: "Our Team",
    href: "/about#team",
    description: "Meet our experienced travel designers and specialists.",
  },
  {
    title: "Goals & Values",
    href: "/about#values",
    description: "Discover the principles that guide our service and experiences.",
  },
]

export function MainNav({ isDark = false }: { isDark?: boolean }) {
  const pathname = usePathname()

  // Function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }

    // For attractions with query parameters
    if (path.startsWith("/attractions")) {
      return pathname === "/attractions" || pathname.startsWith("/attractions/")
    }

    return pathname.startsWith(path)
  }

  // Function to get the appropriate text color based on active state
  const getTextColor = (path: string) => {
    return isActive(path) ? "text-[#EE1D46] hover:text-[#EE1D46]" : isDark ? "text-[#09163A] hover:text-[#09163A]" : "text-white"
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/attractions" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-white/10",
                getTextColor("/attractions")
              )}
            >
              Attractions
            </NavigationMenuLink>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {attractions.map((attraction) => (
                <ListItem key={attraction.title} title={attraction.title} href={attraction.href}>
                  {attraction.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/packages" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-white/10 hover:text-white",
                getTextColor("/packages"),
              )}
            >
              Packages
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-white/10 hover:text-white",
                getTextColor("/about"),
              )}
            >
              About Us
            </NavigationMenuLink>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {aboutItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-white/10 hover:text-white",
                getTextColor("/blog"),
              )}
            >
              Blog & Press
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-white/10 hover:text-white",
                getTextColor("/contact"),
              )}
            >
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
