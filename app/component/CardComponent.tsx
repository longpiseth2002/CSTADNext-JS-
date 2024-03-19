import { Card } from 'flowbite-react';

function CardComponent() {
    return (
        <Card className="max-w-sm hover:scale-[101%] " imgSrc="https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png" horizontal>
            <h5 className="text-2xl font-simebold tracking-tight text-gray-900 dark:text-white">
                Flutter Mobile Development
            </h5>
            <span className="bg-red-400 p-1 w-[130px] rounded-lg text-white text-center ">20% Scholarship</span>
            <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2 ">
            Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.
            </p>
        </Card>
    );
}



export default CardComponent;