"use client"


import Image from "next/image"
import { useState } from "react"

const Cards = ({ imgUrl, label, desc }) => {
    const [showFullDesc, setShowFullDesc] = useState(false)

    // const [showChars, setShowChars] = useState(50)

    const toggleDesc = () => {
        setShowFullDesc(!showFullDesc)

        // if (showFullDesc) {
        //     setShowChars(desc.length + 5)
        // } else {
        //     setShowChars(50)
        // }
    }
    return (
        <div className="h-[250px] w-[250px] bg-white rounded-lg shadow-lg flex flex-col justify-center pl-3">

            <div className="bg-yellow-400 rounded-full h-11 w-11 flex justify-center items-center">
                <Image
                    src={imgUrl}
                    width={30}
                    height={30}
                    className="object-cover"
                    alt="card-icons"
                />
            </div>

            <p className="mt-2 text-xl font-plus-jakata font-semibold">{label}</p>

            <p className="mt-2 leading-normal font-montserrat text-gray-500">
                {showFullDesc || desc.length <= 50 ? desc : `${desc.substring(0, 50)}...`}

                {/* {desc.length > 50 && (
                    <span className="text-blue-500 cursor-pointer" onClick={toggleDesc}>
                        {showFullDesc ? "...Read Less" : "Read More"}
                    </span>
                )} */}

                {desc.length > 50 && !showFullDesc && (
                    <span className="cursor-pointer text-blue-500" onClick={toggleDesc}>Read More</span>
                )}

                {showFullDesc && (
                    <span className="text-blue-500 cursor-pointer" onClick={toggleDesc}>...Read Less</span>
                )}
            </p>
        </div>
    )
}

export default Cards
