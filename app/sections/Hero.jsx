import Image from "next/image"
import bigImage from "../../public/assets/big-img.png"


const Hero = () => {
    return (
        <section id="hero" className="mt-[6rem] w-full max-container flex lg:flex-row flex-col justify-center min-h-screen max-md:gap-4">

            <div className="relative flex flex-1 flex-col justify-center items-center text-white bg-black rounded-lg lg:w-full ">

                <h1 className="lg:text-4xl text-3xl p-1 leading-normal font-plus-jakata font-bold">Lorem, ipsum <span className="text-yellow-400">dolor.</span>
                    <br />
                    Lorem ipsum dolor sit.
                    <br />
                    <span className="text-yellow-400">Lorem, ipsum.</span>

                </h1>

            </div>

            <div className="relative flex flex-1 bg-[#e5e5e5] bg-center justify-center items-center w-full">
                <Image
                    src={bigImage}
                    alt="big image"
                    className="object-cover  "
                />
            </div>
        </section>
    )
}

export default Hero
