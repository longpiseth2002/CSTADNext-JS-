import React from 'react'
import CardComponent from "@/app/component/CardComponent"



export default function page() {
  return (
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
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          
        </section>
      </section>
  )
}
