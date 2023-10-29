"use client";

import {
  Box,
  Flex,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Image from "next/image";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <div className="bg-brand-blue shadow-xl text-ftnal-white min-h-[4rem] py-2 px-4 flex items-center md:justify-between">
        <div className="flex-1 md:flex-auto ml-[-0.5rem] md:hidden">
          <button
            onClick={onToggle}
            className="group rounded-md p-2 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? (
              <CloseIcon className="w-3 h-3" />
            ) : (
              <HamburgerIcon className="w-5 h-5" />
            )}
          </button>
        </div>
        <Image
          alt="Fintech Society Logo"
          height="80"
          width="80"
          src="/images/white-fintech-logo-cropped.png"
          className="h-[50px] md:h-[60px] mx-0 w-auto"
        />

        <div className="hidden md:flex md:items-start ml-10 justify-center">
          <DesktopNav />
        </div>
      </div>

      <Collapse
        in={isOpen}
        animateOpacity
      >
        <MobileNav />
      </Collapse>
    </div>
  );
}

const DesktopNav = () => {
  return (
    <div className="flex flex-row space-x-4">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover
            trigger={"hover"}
            placement={"bottom-start"}
          >
            <PopoverTrigger>
              <Box
                as="a"
                className="p-2 text-sm tracking-wider hover:cursor-pointer transition-colors duration-300 hover:no-underline"
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent className="border-0 shadow-xl bg-popover bg-ftnal-white text-ftnal-black p-4 rounded-xl min-w-sm">
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                      key={child.label}
                      {...child}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </div>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <a
      role="group"
      className="group block p-2 rounded-md transition-all hover:bg-ftnal-offwhite"
      href={href}
    >
      <Stack
        direction={"row"}
        align={"center"}
      >
        <div className="transition-all hover:bg-ftnal-grey">
          <p className="text-body-l font-bold">{label}</p>
          <p className="text-body-s">{subLabel}</p>
        </div>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon
            className="w-5 h-5"
            as={ChevronRightIcon}
          />
        </Flex>
      </Stack>
    </a>
  );
};

const MobileNav = () => {
  return (
    <Stack className="md:hidden bg-brand-yellow p-4 ">
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          {...navItem}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      className="bg-brand-yellow"
      spacing={4}
      onClick={children && onToggle}
    >
      <Box
        className="bg-brand-yellow py-2 flex flex-row items-center"
        as="a"
        href={href ?? "#"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <p className="font-bold text-ftnal-white">{label}</p>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color="white"
            transform={isOpen ? "rotate(180deg)" : ""}
            className="w-6 h-6 transition-all"
          />
        )}
      </Box>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: "0!important" }}
      >
        <Stack className="mt-2 pl-4 align-start border-l-2 border-l-white">
          {children &&
            children.map((child) => (
              <Box
                as="a"
                key={child.label}
                href={child.href}
                className="py-2 text-ftnal-white text-dmsans text-body-l"
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Contact Us",
    href: "#",
  },
  {
    label: "Projects",
    children: [
      {
        label: "Machine Learning",
        subLabel: "A project description here",
        href: "#",
      },
      {
        label: "Blockchain",
        subLabel: "A project description",
        href: "#",
      },
    ],
  },
  {
    label: "Login",
    href: "#",
  },
];
