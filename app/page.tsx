import CarouselComponent from "@/app/component/CarouselComponent";
import SliderComponent from "@/app/component/SliderComponent";
import CardComponent from "./component/CardComponent";

export default function Home() {
  return (
    <main className=" bg-[#f5f5f5] ">

      <section>
        <CarouselComponent />
      </section>

      <section className=" grid justify-center w-full my-[50px] ">
        <h1 className="uppercase text-3xl font-extrabold my-5 ">
          COURSES
        </h1>
        <section className=" grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-5  ">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </section>
      </section>

      <section className=" my-[80px] ">
        <h1 className="uppercase text-3xl font-extrabold pl-44 mb-4 my-5 ">USEFUL CONTENTS</h1>
        <SliderComponent />
      </section>
    </main>
  );
}

