"use client"
import { navItems } from '@/constants/constants'
import Link from 'next/link'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { usePathname } from 'next/navigation'
import useUser from '@/hooks/useUser'
import Logo from './Logo'
import { Menu } from 'lucide-react'
import SignOutButton from './SignOutButton'

const Navbar = () => {
  const pathName = usePathname()
  const user = useUser()
  return (
    <nav className='flex flex-row justify-around items-center py-10 px-3'>
      <div>
        <Logo />
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger><Menu /></NavigationMenuTrigger>
            <NavigationMenuContent>
              {
                navItems.map((ele) => {
                  return <Link key={ele.id} href={ele.route === "/dash" ? `${ele.route}/${user?._id}` : ele.route} legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathName.includes(ele.route) && "text-primary"}`}>
                      <span className='text-xs'>
                        {ele.name}
                      </span>
                    </NavigationMenuLink>
                  </Link>
                })
              }
              <NavigationMenuLink>
                <SignOutButton />
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav >
  )
}

export default Navbar

{/* <NavigationMenuItem>
                      </NavigationMenuItem>*/}
