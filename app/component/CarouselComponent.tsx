import {Carousel} from "flowbite-react";

const CarouselComponent = () => {
    return (
        <>
            <section className="h-[95vh]">
                <Carousel>
                    <img
                        src="https://images.ctfassets.net/wp1lcwdav1p1/48WMPx4NZ8rgRwPRncVspO/977c6f9ebcf6574de9878dc1a1ae324d/GettyImages-1224500457.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive"
                        alt="..."/>
                    <img
                        src="https://media.istockphoto.com/id/1440263343/photo/internet-cloud-computing-technology-and-online-data-storage-for-transferring-backup-file.jpg?s=612x612&w=0&k=20&c=Ia73pD7eLjiASw2vL1F54yrQWn3lnWEAHoX9AGGfZBI="
                        alt="..."/>
                    <img
                        src="https://imageio.forbes.com/specials-images/imageserve/65df74f6c070fb3f4d90ca90/A-picture-of-a-decentralized-network-connecting-the-entire-world-/960x0.jpg?format=jpg&width=960"
                        alt="..."/>
                </Carousel>
            </section>
        </>
    )
}
export default CarouselComponent;