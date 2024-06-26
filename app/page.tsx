import Banners from "@/components/Banners";
import LinkBar from "@/components/LinkBar";
import MemberObject from "@/components/MemberData";
import PersonCard from "@/components/PersonCard";
import Title from "@/components/Title";
import Image from "next/image";

// 
export default function Home() {
  return (
    <div className="flex flex-col lg:items-center">
      {/* <Banners /> */}
      <div>
        <div className="title-div">
          <span className={`pl-5 flex w-full justify-center lg:text-3xl font-bold text-white mt-8 p-2 sm:text-lg`}>Pillars of the AIDS Department</span>
        </div>
        <img className="md:w-full lg:w-[75vw]" src="/banner-images/pillars.jpeg" alt="Aideas Logo" />
      </div>

      <div>
        <div className="title-div">
          <span className={`pl-5 flex w-full justify-center lg:text-3xl font-bold text-white mt-8 p-2 sm:text-lg`}>Smart City Pune Vist</span>
        </div>
        <img className="md:w-full lg:w-[75vw]" src="/banner-images/smart-city.jpeg" alt="Aideas Logo" />
      </div>

      <div>
        <div className="title-div">
          <span className={`pl-5 flex w-full justify-center lg:text-3xl font-bold text-white mt-8 p-2 sm:text-lg`}>PVG Sanstha Visit</span>
        </div>
        <img className="md:w-full lg:w-[75vw]" src="/banner-images/pvg-sanstha.jpeg" alt="Aideas Logo" />
      </div>

      <div>
        <div className="title-div">
          <span className={`pl-5 flex w-full justify-center lg:text-3xl font-bold text-white mt-8 p-2 sm:text-lg`}>World Food day celebration</span>
        </div>
        <img className="md:w-full lg:w-[75vw]" src="/banner-images/food-day.jpeg" alt="Aideas Logo" />
      </div>

      <div>
        <div className="title-div">
          <span className={`pl-5 flex w-full justify-center lg:text-3xl font-bold text-white mt-8 p-2 sm:text-lg`}>Donation to Salvation Army</span>
        </div>
        <img className="md:w-full lg:w-[75vw]" src="/banner-images/salvation-army.jpeg" alt="Aideas Logo" />
      </div>

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
      <Title title={"Event Team"} />
      <PersonCard user={MemberObject[11]} />
      <Title title={"Editorial and Notification Team"} />
      <PersonCard user={MemberObject[12]} />
      <Title title={"Marketing Team"} />
      <PersonCard user={MemberObject[15]} />
      <Title title="Co-Heads" />
      <PersonCard user={MemberObject[22]} />
      <PersonCard user={MemberObject[20]} />
      <PersonCard user={MemberObject[21]} />
      <PersonCard user={MemberObject[17]} />
      <PersonCard user={MemberObject[19]} />
      <PersonCard user={MemberObject[16]} />
      <PersonCard user={MemberObject[18]} />

    </div>
  )
}
