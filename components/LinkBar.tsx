import Image from "next/image"
import Link from "next/link"

interface LinkBarProps {
  link: string,
  type: "linkedin" | "instagram" | "youtube"
}

const LinkBar = ({ link, type }: LinkBarProps) => {
  return (
    <Link href={link}>
      <div className="w-90% h-16 m-8 rounded-full hover:from-[#0b0b0b]
      bg-gradient-to-tr from-[#121212] to-[#292828] border-[1px] cursor-pointer
     flex flex-row justify-center items-center">
        <div className="w-12 h-12 z-10">
          <Image src={`/icons/${type}.svg`} alt="Icon" height={500} width={500} />
        </div>
        <div>
          <span className="text-[1.4rem] m-4 font-extrabold z-10 text-white">
            {`${type.charAt(0).toUpperCase() + type.slice(1)}`}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default LinkBar