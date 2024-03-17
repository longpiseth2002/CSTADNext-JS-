import React from 'react'
import { MdOutlineDiscount } from "react-icons/md";
import { Card } from 'flowbite-react';
import Image from 'next/image';


export default function page() {
    return (
        <section className=' w-full bg-[#f5f5f5] pt-[20px] '>
            <h1 className="uppercase text-3xl font-extrabold my-5 pl-[10%] ">
            USEFUL CONTENTS
            </h1>
            <section className=' mx-auto w-[80%] grid grid-cols-4 grid-flow-row gap-5'>



                <Card
                    className="max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://api.istad.co/media/image/665bb2ec-bd8b-4dc0-bbc0-c652aacc422b.png"
                >
                    <div className=' flex justify-between'>
                        <div className=' flex gap-2 text-xs'>
                            <MdOutlineDiscount />
                            <p>Block</p>
                        </div>
                        <div className='  text-xs '>16-May-2024</div>
                    </div>
                    <p className="normal-card-title mb-1 line-clamp-1">WebEssentials ប្រកាសរើសបុគ្គលិក Software Developer និង Senior Software Developer</p>
                </Card>

                <Card
                    className="max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://api.istad.co/media/image/0f73eade-8174-4d30-bed9-6319a27ce149.png"
                >
                    <div className=' flex justify-between'>
                        <div className=' flex gap-2 text-xs'>
                            <MdOutlineDiscount />
                            <p>Block</p>
                        </div>
                        <div className='  text-xs '>16-May-2024</div>
                    </div>
                    <p className="normal-card-title mb-1 line-clamp-1 ">Senior Spring Web Developer</p>
                </Card>

                <Card
                    className="max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://api.istad.co/media/image/ebb72f6e-6c2f-4e04-bc75-37253c41555e.png"
                >
                    <div className=' flex justify-between'>
                        <div className=' flex gap-2 text-xs'>
                            <MdOutlineDiscount />
                            <p>Block</p>
                        </div>
                        <div className='  text-xs '>16-May-2024</div>
                    </div>
                    <p className="normal-card-title mb-1 line-clamp-1">Senior Java Developer in Sky Booking Co., Ltd</p>
                </Card>

                <Card
                    className="max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://api.istad.co/media/image/5672e61a-d0bb-4040-a0d6-0c934cbba92e.png"
                >
                    <div className=' flex justify-between'>
                        <div className=' flex gap-2 text-xs'>
                            <MdOutlineDiscount />
                            <p>Block</p>
                        </div>
                        <div className='  text-xs '>16-May-2024</div>
                    </div>
                    <p className="normal-card-title mb-1 line-clamp-1 "> ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD</p>
                </Card>







            </section>
        </section>

    )
}
