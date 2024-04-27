"use client"
import { navItems } from '@/constants/constants'
import Link from 'next/link'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
    <nav className='flex justify-center py-5 px-3 md:px-20 lg:px-96'>
      <div className='w-full flex flex-row justify-around items-center md:py-5 lg:py-5 md:px-4 lg:px-6 md:justify-between lg:justify-between md:bg-gradient-to-r md:from-secondary md:to-secondary-background rounded-full'>
        <div className=''>
          <Logo />
        </div>
        <NavigationMenu className="md:hidden lg:hidden">
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
        <div className='md:flex lg:flex hidden w-full flex-row items-center justify-end gap-10'>
          {
            navItems.map((ele) => {
              return <Link key={ele.id} href={ele.route === "/dash" ? `${ele.route}/${user?._id}` : ele.route}>
                <span className={`text-xl font-bold ${pathName.includes(ele.route) && "text-primary underline underline-offset-4"}`}>
                  {ele.name}
                </span>
              </Link>
            })
          }
          <SignOutButton />
        </div>
      </div>
    </nav >
  )
}

export default Navbar
