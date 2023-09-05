"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { Disclosure } from "@headlessui/react";
import { cn } from "~/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Both", href: "/" },
  { name: "Client", href: "/client" },
  { name: "Server", href: "/server" },
  { name: "Client Tabs", href: "/tabs/client" },
  { name: "Server Tabs", href: "/tabs/server" },
];

export function TopNavigation() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-zinc-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          item.href === pathname
                            ? "bg-zinc-900 text-white"
                            : "text-zinc-300 hover:bg-zinc-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium",
                        )}
                        aria-current={
                          item.href === pathname ? "page" : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={cn(
                    item.href === pathname
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-300 hover:bg-zinc-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                  aria-current={item.href === pathname ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
