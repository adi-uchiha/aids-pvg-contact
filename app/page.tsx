import LinkBar from "@/components/LinkBar";
import MemberObject from "@/components/MemberData";
import PersonCard from "@/components/PersonCard";
import Title from "@/components/Title";

// 
export default function Home() {
  return (
    <div className="flex flex-col lg:items-center">
      <div className="space-y-6">
        <LinkBar link=" https://youtu.be/biUc9BVwhk8" type="youtube" />
        <LinkBar link="https://www.linkedin.com/company/aideas-pvg/" type="linkedin" />
        <LinkBar link="https://instagram.com/aideas_pvg" type="instagram" />
        <LinkBar link="https://chat.whatsapp.com/HLhZxXG7F1WLvUQ39eVc31" type="whatsapp" />

      </div>
      <Title title={"General Secretary"} />
      <PersonCard user={MemberObject[1]} />
      <Title title="Joint Secretary" />
      <PersonCard user={MemberObject[2]} />
      <Title title={"Treasurer"} />
      <PersonCard user={MemberObject[13]} />
      <Title title={"Technical Team"} />
      <PersonCard user={MemberObject[5]} />
      <Title title={"Design Team"} />
      <PersonCard user={MemberObject[8]} />
      <Title title={"Production Team"} />
      <PersonCard user={MemberObject[10]} />
      <Title title={"Web Team"} />
      <PersonCard user={MemberObject[14]} />
      <Title title={"Event Team"}  />
      <PersonCard user={MemberObject[11]} />
      <Title title={"Editorial and Notification Team"} />
      <PersonCard user={MemberObject[12]} />

    </div>
  )
}
