import NewsCardComponent from "../component/NewsCardComponent";


export default function page() {
    return (
        <section className=' w-full bg-[#f5f5f5] pt-[20px] '>
            <h1 className="uppercase text-3xl font-extrabold my-5 pl-[10%] ">
                USEFUL CONTENTS
            </h1>
            <section className=' mx-auto w-[80%] grid grid-cols-4 grid-flow-row gap-5'>

                <NewsCardComponent/>
                <NewsCardComponent/>
                <NewsCardComponent/>
                <NewsCardComponent/>
                <NewsCardComponent/>
                <NewsCardComponent/>
                <NewsCardComponent/>
                <NewsCardComponent/>
                <NewsCardComponent/>
                <NewsCardComponent/>
                
            
            </section>
        </section>

    )
}
