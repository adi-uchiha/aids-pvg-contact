import Image from "next/image"

const NavBar = () => {
  return (
    <div className="w-ful h-32 flex flex-row justify-center
    bg-gradient-to-b from-black via-black to-transparent
    ">
      <Image className="w-20 h-20" src="/logo.jpeg" height={500} width={500} alt="" />
      <Image className="h-10 w-[11rem] mt-5" src="/aideas.jpeg" alt="" height={500} width={500} />
    </div>
  )
}

export default NavBar