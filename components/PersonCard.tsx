import Image from "next/image"

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
    <div className="rounded-md w-[90vw] ml-[5vw] border-[#C8C8C8] border-2">
      <div className="p-4 flex flex-row items-center">
          <Image className="rounded-full w-20 h-20" src="/profile-pic.webp" alt="picture" width={180} height={180}/>
          <div className="flex flex-col pl-[5vw]">
            <span className="font-semibold text-xl">Firstname Lastname</span>
            <span className="italic font-light">Designation</span>
          </div>
      </div>
      <p className="p-3 italic font-light">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sunt nostrum dicta, quibusdam harum ad iure provident reprehenderit fugit voluptate rerum non quos sit debitis inventore quasi odio aspernatur quas.
      </p>
      <div className="flex flex-row space-x-4">
        
      </div>
    </div>
  )
}

export default PersonCard