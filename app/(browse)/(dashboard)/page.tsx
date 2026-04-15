import { Pacifico } from "next/font/google";
import { AiFillAccountBook, AiFillBehanceSquare, AiFillDribbbleSquare } from "react-icons/ai";
import { AiFillAmazonCircle } from "react-icons/ai";
import Hero from "@/components/Hero";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const pacifiko = Pacifico({ subsets: ["latin"], weight: '400' });

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mt-4 mx-auto mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-10">

          <div className="lg:col-span-3 border-2 items-center justify-center flex flex-col p-4">

            <div className="relative">
              <AiFillAccountBook className="text-5xl z-10" />
              <div className="-z-50 absolute right-1 -top-3 bg-red-700 rounded-full p-1 px-2 text-white">2</div>
              <h2>Home1</h2>
            </div>

          </div>

          <div className="border-2 items-center justify-center flex flex-col p-4">
            <AiFillAmazonCircle className="text-5xl" />
            <h2>Home2</h2>
          </div>

          <div className="border-2 items-center justify-center flex flex-col p-4">
            <AiFillBehanceSquare className="text-5xl" />
            <h2>Home3</h2>
          </div>

          <div className="border-2 items-center justify-center flex flex-col p-4">
            <AiFillDribbbleSquare className="text-5xl" />
            <h2>Home4</h2>
          </div>

        </div>

      </div>
    </>
  );
}
