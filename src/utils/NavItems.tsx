import { IoMdContact, IoMdHome } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";


export const NavItems: NavItemsType[] = [
    {
        name: "home",
        path: "/",
        icon: <IoMdHome size={22} />
    },
    {
        name: "about",
        path: "/about",
        icon: <IoMdContact size={21} />
    },
    {
        name: "projects",
        path: "/projects",
        icon: <IoSettingsSharp size={21} />
    },
    {
        name: "contact",
        path: "/contact",
        icon: <MdContactSupport size={21} />
    }
]