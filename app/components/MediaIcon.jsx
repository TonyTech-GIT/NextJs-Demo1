import Image from "next/image"

const MediaIcon = ({ imgUrl, label }) => {
    return (
        <div className="bg-white rounded-full cursor-pointer mr-2">
            <a href={label}>
                <Image
                    src={imgUrl}
                    width={30}
                    height={30}
                    className="object-cover p-1"
                    alt="media icon"
                />
            </a>

        </div>
    )
}

export default MediaIcon
