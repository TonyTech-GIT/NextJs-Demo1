import headerLogo from "../../public/assets/web-dev-logo.jpg"
import Image from "next/image";
import { navLinks } from "../constants";
import menuBtn from '../../public/assets/icons/menu-btn.png'

const Nav = () => {
    return (
        <nav className=" max-container flex justify-between items-center ">
            <div className="">
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

            <div className="flex  gap-8 font-montserrat  md:hidden">
                {navLinks.map((navLink) => (
                    <div key={navLink.label}>
                        <a
                            href={navLink.href}>{navLink.label}
                        </a>
                    </div>

                ))}
            </div>

            <div >
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
