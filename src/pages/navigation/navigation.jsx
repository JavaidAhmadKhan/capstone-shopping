// /* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom"

import React from "react";
import {
    Navbar,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ChevronDownIcon,
    RocketLaunchIcon,
    Bars2Icon,
} from "@heroicons/react/24/outline";


import Logo from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utlis";
import './navigation.scss'


// profile menu component
const profileMenuItems = [
    {
        label: "Sign In",
        href: '/auth',
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    const { currentUser } = useContext(UserContext);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="candice wu"
                        className="border border-blue-500 p-0.5"
                        src="https://avatars.githubusercontent.com/u/45966257?v=4"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200"
                                : ""
                                }`}
                        >
                            {
                                currentUser ? (
                                    <span onClick={signOutUser}> Signout</span>
                                ) : (
                                    <Link to='/auth'>
                                        <Typography
                                            as="span"
                                            variant="small"
                                            className="font-normal"
                                            color={isLastItem ? "gray" : "inherit"}

                                        >
                                            signin
                                        </Typography>
                                    </Link>
                                )
                            }

                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu >
    );
}

// nav list menu
const navListMenuItems = [

];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const triggers = {
        onMouseEnter: () => setIsMenuOpen(true),
        onMouseLeave: () => setIsMenuOpen(false),
    };

    const renderItems = navListMenuItems.map(({ title, description, href }) => (
        <Link to={href} key={title}>
            <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                    {title}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                    {description}
                </Typography>
            </MenuItem>
        </Link>
    ));

    return (
        <React.Fragment>
            <Menu open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuList
                    {...triggers}
                    className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
                >
                    <Card
                        color="blue"
                        shadow={false}
                        variant="gradient"
                        className="col-span-3 grid h-full w-full place-items-center rounded-md"
                    >
                        <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
                    </Card>
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}

// nav list component
const navListItems = [
    {
        label: "Shop",
        icon: UserCircleIcon,
        href: '/shop',
    },
];

function NavList() {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <NavListMenu />
            {navListItems.map(({ label, href }) => (
                <Link to={href} key={label}>
                    <Typography
                        as="a"
                        href={href}
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                    >
                        <MenuItem className="flex items-center gap-2">
                            {label}
                        </MenuItem>
                    </Typography>
                </Link>
            ))}
        </ul>
    );
}

export default function Navigation() {

    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    // const { currentUser } = useContext(UserContext);


    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false)
        );
    }, []);

    return (
        <Navbar className="mx-auto mb-4 sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
            <div className="relative mx-auto flex items-center text-blue-gray-900">
                <Link to='/'>
                    <Typography
                        as="a"

                        className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
                    >
                        <img src={Logo} alt="" />
                    </Typography>
                </Link>
                <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>
                <ProfileMenu />
            </div>
            <Collapse open={isNavOpen} className="overflow-scroll">
                <NavList />
            </Collapse>
        </Navbar>
    );
}




