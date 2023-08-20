import Image from "next/image"
import Instagram from "@/components/icons/Instagram"
import Linkedin from "@/components/icons/Linkedin"
import Whatsapp from "./icons/Whatsapp"
import Email from "./icons/Email"

interface SingleUserProps {
  user: {
    firstName: string,
    lastName: string,
    designation: string,
    about: string,
    instagram: string,
    whatsapp: string,
    linkedin: string,
    email: string
  }
}

const PersonCard = ({ user }: SingleUserProps) => {
  return (
    <div className="rounded-2xl w-[96vw] m-[2vw] border-[#C8C8C8] border-[1.5px] shadow-md bg-gradient-to-tl from-[#eae4fe] via-[#eaabfdcc] to-[#8bcfff]">
      <div className="p-8 pl-10 flex flex-row items-center">
        <Image className="rounded-full w-24 h-24" src="/profile-pic.jpg" alt="picture" width={180} height={180} />
        <div className="flex flex-col pl-[2vw]">
          <span className="font-semibold text-[1.8rem]">{user.firstName} {user.lastName}</span>
          <span className="italic font-light text-[1.2rem]">{user.designation}</span>
        </div>
      </div>
      <p className="pl-10 pr-10 font-normal">
        &quot; Dedicated member of our vibrant club team, passionately contributing to our collective goals. Bringing unique skills and enthusiasm, I thrive on collaboration and creative problem-solving. Committed to fostering a welcoming environment while achieving exceptional results together. &quot;
      </p>
      <div className="flex flex-row space-x-10 w-full align-middle justify-between pl-20 pr-20 pt-6 mb-8">
        <Instagram />
        <Linkedin />
        <Email />
        <Whatsapp />
      </div>
    </div>
  )
}

export default PersonCard