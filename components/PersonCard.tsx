import Image from "next/image"
import Instagram from "@/components/icons/Instagram"
import Linkedin from "@/components/icons/Linkedin"
import Whatsapp from "./icons/Whatsapp"
import Email from "./icons/Email"

interface SingleUserProps {
  user: {
    firstName: string,
    lastName: string,
    about: string,
    instagram: string,
    whatsapp: string,
    linkedin: string,
    email: string
  }
}

const PersonCard = ({ user }: SingleUserProps) => {
  return (
    <div className="rounded-xl w-[96vw] m-[2vw] border-[#C8C8C8] border-[1.5px] shadow-md bg-gradient-to-tl from-gray-200 to-slate-50">
      <div className="p-3 flex flex-row items-center">
        <Image className="rounded-full w-20 h-20" src="/profile-pic.webp" alt="picture" width={180} height={180} />
        <div className="flex flex-col pl-[2vw]">
          <span className="font-semibold text-[1.8rem]">Firstname Lastname</span>
          <span className="italic font-light">Designation</span>
        </div>
      </div>
      <p className="p-3 font-normal">
        &quot; Dedicated member of our vibrant club team, passionately contributing to our collective goals. Bringing unique skills and enthusiasm, I thrive on collaboration and creative problem-solving. Committed to fostering a welcoming environment while achieving exceptional results together. &quot;
      </p>
      <div className="flex flex-row space-x-10 w-full align-middle justify-center p-4 mb-2">
        <Instagram />
        <Linkedin />
        <Whatsapp />
        <Email />
      </div>
    </div>
  )
}

export default PersonCard