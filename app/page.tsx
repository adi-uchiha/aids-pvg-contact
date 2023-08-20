import MemberObject from "@/components/MemberData";
import PersonCard from "@/components/PersonCard";

// 
export default function Home() {
  return (
    <div>
      {/* Anshul
Jaswandi
Shivendra
Sarang
Raj kanchan
Parth deskhmukh
Vedant
Om kasurde
Parth lokhande
Ayushi
Vaishnavi
Rugved */}
      <span className={`flex w-full justify-center text-5xl text-white font-bold`}>General Secretary</span>

      <PersonCard user={MemberObject[1]} />
      <span className={`flex w-full justify-center text-5xl text-white font-bold`}>Joint Secretary</span>
      <PersonCard user={MemberObject[2]} />
      <span className={`flex w-full justify-center text-5xl text-white font-bold`}>Treasurers</span>
      <PersonCard user={MemberObject[4]} />
      <span className={`flex w-full justify-center text-5xl text-white font-bold`}>Technical</span>
      <PersonCard user={MemberObject[5]} />
      <PersonCard user={MemberObject[6]} />
      <span className={`flex w-full justify-center text-5xl text-white font-bold`}>Design</span>
      <PersonCard user={MemberObject[8]} />
      <PersonCard user={MemberObject[9]} />

      <span className={`flex w-full justify-center text-5xl text-white font-bold`}>Production</span>
      <PersonCard user={MemberObject[10]} />
      <span className={`flex w-full justify-center text-5xl text-white font-bold`}>Event</span>
      <PersonCard user={MemberObject[11]} />
      <span className={`flex w-full justify-center text-5xl text-white font-bold`}>Notification</span>
      <PersonCard user={MemberObject[11]} />
      <PersonCard user={MemberObject[7]} />
    </div>
  )
}
