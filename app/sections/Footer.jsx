import Image from "next/image"

import headerLogo from "../../public/assets/web-dev-logo.jpg"
import { mediaLinks } from "../constants"
import MediaIcon from "../components/MediaIcon"


const Footer = () => {
    return (
        <section className="max-container flex md:flex-row flex-col sm:justify-between justify-start sm:items-center lg:gap-8">

            <div className="h-8 w-8 sm:h-16 sm:w-16 max-sm:mb-8">
                <Image
                    src={headerLogo}
                    width={80}
                    height={80}
                    className="object-cover rounded-full"
                    alt="logo"
                />
            </div>

            <div className="flex items-center">
                {mediaLinks.map((mediaLink) => (
                    <MediaIcon key={mediaLink.label} {...mediaLink} />
                ))}
            </div>

        </section>
    )
}

export default Footer
