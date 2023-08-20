import MemberObject from "@/components/MemberData";
import PersonCard from "@/components/PersonCard";

export default function Home() {
  return (
    <div>
      <PersonCard user={MemberObject[1]}/> 
    </div>
  )
}
