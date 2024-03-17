import React from 'react'
import { MdOutlineDiscount } from "react-icons/md";
import { Card } from 'flowbite-react';
import Image from 'next/image';

function NewsCardComponent() {
    return (
        <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://api.istad.co/media/image/e4a4d369-72c3-441c-9df1-23cc6e2ce3f7.jpg"
        >
            <div className=' flex justify-between'>
                <div className=' flex gap-2 text-xs'>
                    <MdOutlineDiscount />
                    <p>Block</p>
                </div>
                <div className='  text-xs '>16-May-2024</div>
            </div>
            <p className="normal-card-title mb-1">លេងបិទពួនជាមួយ Searching Algorithm</p>
        </Card>
    )
}



export default NewsCardComponent;