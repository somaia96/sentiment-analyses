import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { ArrowBigDown, ArrowBigDownDash, ArrowBigDownDashIcon, ArrowDownFromLine, ArrowDownNarrowWideIcon, CarIcon, CarTaxiFrontIcon, GroupIcon, ListCheckIcon, ListCollapseIcon, ListIcon, ListTodoIcon, PersonStandingIcon, PlayCircleIcon, UserMinusIcon, UsersIcon } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {

  let cars: string[] = ["/images/BMWdark.jpg", "/images/Mercedes.jpg", "/images/Toyota.jpg"];
  return (
    <div>
      <div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full h-screen overflow-hidden">
          <CarouselContent>
            {cars.map((car, index) => (
              <CarouselItem className="bg-black" key={index}>
                <img className="w-full min-h-screen object-cover" src={car} alt="car-slider" />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="bg-black flex justify-center items-center opacity-50 absolute z-10 left-0 top-0 w-full h-screen">
            <h1 className="z-50 text-center leading-tight text-white font-semibold text-5xl">
              Sentiment Analyses For Cars<br /> Companies Comments
            </h1>
          </div>
          <CarouselPrevious className="bg-white z-20 absolute left-5 h-12 w-12 top-1/2 -translate-y-1/2" />
          <CarouselNext className="bg-white z-20 absolute right-5 h-12 w-12 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
      <section className="">
        <h2 className="text-center my-5 text-3xl font-semibold text-gray-900">Are You Obsessed With Cars ?</h2>
        <div className="flex">
          <div className="flex-1 overflow-hidden max-h-screen flex ">
            <img className="w-full h-auto object-cover" src="/images/BMWblack.jpg" alt="BMW" />
          </div>
          <div className="flex-1 text-center font-semibold flex justify-center items-center text-white leading-10 bg-black text-2xl flex-col p-10">
            <h3 className="font-bold my-5">Looking For People Who Share Your Obsession With You ?</h3>
            <p className="w-3/4">Discover the World of Cars: Here you will find the most famous car manufacturers, with user opinions and ratings for each company.</p>
          </div>
        </div>
      </section>
      <section className="py-5 bg-gray-300">
        <h2 className="text-center my-5 text-3xl font-semibold text-gray-900">Best Features</h2>
        <div className="container flex space-x-5">
          <div className="bg-gray-400 flex-1 px-5 rounded-xl flex justify-between items-center flex-col">
            <div className="h-24 flex-1 flex justify-center items-center w-full">
              <img className="h-3/4" src="images/8.png" alt="car" />
            </div>
            <p className="text-lg flex-1 text-gray-900 text-center ">
              Comment Classification: Easily browse positive and negative comments for each company.
            </p>
          </div>
          <div className="bg-gray-400 flex-1 p-5 rounded-xl flex justify-between items-center flex-col">
            <div className="h-24 flex-1 flex justify-center items-center w-full">
              <img className="w-full" src="images/5.png" alt="car" />
            </div>
            <p className="text-lg flex-1 text-gray-900 text-center ">
              Browse Without Registration: View comments and ratings without having to create an account.
            </p>
          </div>
          <div className="bg-gray-400 flex-1 p-5 rounded-xl flex justify-between items-center flex-col">
            <div className="h-40 flex-1 flex justify-center items-center w-full">
              <ListCollapseIcon className="w-20 h-20" />
            </div>
            <p className="text-lg flex-1 text-gray-900 text-center ">
              Your Comments in One Place: Easy access to all your previous comments.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-screen overflow-hidden relative">
          <PlayCircleIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 opacity-35 -translate-y-1/2 z-10 w-32 h-32 " />
          <video autoPlay controls src="/images/Toyota.mp4" className="w-full h-auto object-cover"></video>
        </div>
      </section>
      <section>
        <div className="flex">
          <div className="flex-1 text-center font-semibold flex justify-center items-center text-white leading-10 bg-black text-2xl flex-col p-10">
            <p className="w-3/4">Share Your Opinion in the World of Cars: An interactive platform for car enthusiasts, where you can rate manufacturers and share your experiences with others.</p>
          </div>
          <div className="flex-1 overflow-hidden max-h-screen flex">
            <img className="w-full h-auto object-cover" src="/images/BMW.jpeg" alt="BMW" />
          </div>
        </div>
      </section>
      <footer className="bg-black relative py-5 h-[400px] text-white text-2xl overflow-hidden">
        <div className="container w-3/4 flex items-center justify-center h-full">
          <div className="flex-1  flex items-start justify-center text-start flex-col space-y-4 ">
            <h2>Share Your Opinion Now!</h2>
            <h3>Join Our Community Today!</h3>
            <button className="bg-white font-semibold text-black rounded-md px-6 py-2">
              <Link to={"/comments"}>Join</Link>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center text-center h-full flex-col space-y-2">
            <h2>Send Your Feedback</h2>

            <Link className="text-white bg-gray-900  rounded-md px-6 py-2" to={"mailto:somaia96.sh@gmail.com"}>Send An Email</Link>

          </div>
          <img className="w-1/4 absolute left-1/3 bottom-0" src="images/1.png" alt="car" />
        </div>
      </footer>
    </div>
  )
}

export default HomePage
