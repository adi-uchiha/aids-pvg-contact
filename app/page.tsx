import MemberObject from "@/components/MemberData";
import PersonCard from "@/components/PersonCard";
import Title from "@/components/Title";

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

      <Title title={"General Secretary"} />
      <PersonCard user={MemberObject[1]} />
      <Title title="Joint Secretary" />
      <PersonCard user={MemberObject[2]} />
      <Title title={"Treasurers"} />
      <PersonCard user={MemberObject[4]} />
      <Title title={"Technical"} />
      <PersonCard user={MemberObject[5]} />
      <PersonCard user={MemberObject[6]} />
      <Title title={"Design"} />
      <PersonCard user={MemberObject[8]} />
      <PersonCard user={MemberObject[9]} />
      <Title title={"Production"} />
      <PersonCard user={MemberObject[10]} />
      <Title title={"Event"} />
      <PersonCard user={MemberObject[11]} />
      <Title title={"Notification"} />
      <PersonCard user={MemberObject[11]} />
      <PersonCard user={MemberObject[7]} />

    </div>
  )
}
