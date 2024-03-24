import Cards from "../components/Cards"
import { cardsInfo } from "../constants"

const About = () => {
    return (
        <section className="max-container flex flex-col justify-center">
            <div className=" py-6 px-6 bg-gradient-to-r from-black to-yellow-400 flex self-center justify-center shadow-2xl rounded-xl lg:w-[65%]">

                <h1 className="lg:text-3xl text-2xl text-center text-white leading-normal">Lorem ipsum
                    <span className="text-yellow-400"> dolor </span>
                    sit amet.
                </h1>
            </div>

            <div className="mt-11 flex flex-1 flex-wrap justify-center gap-11">
                {cardsInfo.map((cardInfo) => (
                    <Cards key={cardInfo.label}
                        {...cardInfo}
                    />

                ))}
            </div>
        </section>
    )
}

export default About
