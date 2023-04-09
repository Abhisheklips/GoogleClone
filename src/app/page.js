import Header from "@/componets/Header";
import Searchinput from "@/componets/Searchinput";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center mt-32">
      <Image src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
      alt="google image"
      width={270}
      height={100}      
      ></Image>
      <Searchinput/>
    </div>
    </>
  )
}
