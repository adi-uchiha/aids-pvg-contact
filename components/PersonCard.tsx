import Image from "next/image"
import Instagram from "@/components/icons/instagram.svg"
import Linkedin from "@/components/icons/linkedin.svg"
import WhatsApp from "@/components/icons/whatsapp.svg"
import Email from "@/components/icons/gmail.svg"
import Link from "next/link"

interface SingleUserProps {
  user: {
    firstName: string,
    lastName: string,
    designation: string,
    about: string,
    instagram: string,
    whatsapp: string,
    linkedin: string,
    email: string,
  }
}

const PersonCard = ({ user }: SingleUserProps) => {
  return (
    <div className="max-w-screen-sm rounded-lg w-[96vw] m-[2vw] bg-gradient-to-tl from-[#1a1a1a] to-stone-800">
      <div className="pt-5 pb-2  pl-10 flex flex-row items-top">
        <Image className="rounded-md w-24 h-24" src={"/"+user.firstName + user.lastName + ".webp"} alt="picture" width={180} height={180} />
        <div className="flex flex-col pl-[2vw]">
          <span className="font-semibold text-[1.5rem] text-white">{user.firstName} {user.lastName}</span>
          <div className="user_designation bg-emerald-500 mt-2">
            <span className="font-light text-[1rem] text-white">{user.designation}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full align-middle justify-between pl-[8vw] pr-[8vw] pt-2 mb-5 fill-white">
        <Link href={user.instagram}>
          <Image width={40} height={40} priority src={Instagram} alt="Follow us on Instagram"/>
        </Link>
        <Link href={user.linkedin}>
          <Image width={40} height={40} priority src={Linkedin} alt="Follow us on LinkedIn"/>
        </Link>
        <Link href={"mailto:" + user.email}>
          <Image width={40} height={40} priority src={Email} alt="Follow us on whatsapp"/>
        </Link>
        <Link href={user.whatsapp}>
          <Image width={40} height={40} priority src={WhatsApp} alt="Follow us on gmail"/>
        </Link>
      </div>
      <p className="pl-10 pb-10 pr-10 font-normal text-white">
        &quot;
        {user.about}
        &quot;
      </p>
    </div>
  )
}

export default PersonCard