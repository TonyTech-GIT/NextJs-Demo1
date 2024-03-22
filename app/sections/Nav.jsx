import headerLogo from "../../public/assets/web-dev-logo.jpg"
import Image from "next/image";
import { navLinks } from "../constants";
import menuBtn from '../../public/assets/icons/menu-btn.png'
import Button from "../components/Button";

const Nav = () => {
    return (
        <nav className=" max-container flex justify-between items-center ">
            <div className="h-8 w-8 sm:h-16 sm:w-16">
                <a href="/">
                    <Image
                        src={headerLogo}
                        width={80}
                        height={80}
                        alt="header logo"
                        className="object-cover rounded-full"
                    />
                </a>

            </div>

            <div className="flex  gap-8 font-montserrat lg:flex-row md:flex-row max-sm:hidden">
                {navLinks.map((navLink) => (
                    <div className=" border-b-4 pb-1 hover:border-yellow-400 transition duration-200 ease-in-out" key={navLink.label}>
                        <a
                            href={navLink.href}>{navLink.label}
                        </a>
                    </div>

                ))}
            </div>

            <div className="flex gap-4 max-lg:hidden">
                <Button label="Get Started" />

                <Button
                    label="Log In"
                    bgColor="bg-transparent"
                    borderColor="border-yellow-400"
                    textColor='text-black'
                    funcHover
                />
            </div>

            <div className="md:hidden">
                <Image
                    src={menuBtn}
                    width={24}
                    height={24}
                    alt="menu btn"
                />
            </div>

        </nav>
    )
}

export default Nav;
