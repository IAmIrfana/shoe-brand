import { MdVerifiedUser } from "react-icons/md"
// import { VscWorkspaceTrusted } from "react-icons/vsc"
// eslint-disable-next-line no-unused-vars
import { imagedetails } from "./utility"

function Hero2() {
    // console.log(imagedetails)
    { imagedetails.map((item) => console.log(item.image)) }
    return (
<div>
<div className="p-5">
            <div className="text-center">
                <h1 className=" page1  font-bold text-3xl md:text-5xl md:m-14">Trending In 2023</h1>
            </div>
            <div className=" flex-row items-center justify-center md:flex md:flex-row md:justify-evenly md:px-10">
                {imagedetails.map((cart,index) => <div key={index}>                    <img className=" w-[768px] md:w-[250px]" src={cart.image} alt={cart.title} />
                    <div className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold">{cart.title}</h3>
                        <div className="flex items-center my-1">
                            <MdVerifiedUser className=" my-1 text-green-500" />

                            <p className="ml-2">  Nike Sports Wear|Joksel</p>
                        </div>

                        <button className='my-4 px-10 border border-red-500 rounded-3xl bg-red-700 text-white hover:bg-green-700 '>Purchase Now</button>
                    </div>
                    </div>)}




            </div>

</div>
<div className="p-5">
                <div className="text-center">
                    <h1 className=" font-semibold text-4xl">Our shoes Reviews</h1>
                    <p className="my-2">Check the comments and ratings given by users</p>
                </div>
                <div className="flex flex-col items-center md:flex-row md:mx-60 py-5 ">
                <div className="mb-4 md:mb-0">
                    <img className="w-full max-w-full md:max-w-none" src="Rectangle 21.png" alt="" />
                </div>
                <div className="flex flex-col md:flex-col md:gap-4">
                    <img className="w-full  p-2 md:w-full" src="Rectangle 22.png" alt="" />
                    <img className="w-full  p-2 md:w-full" src="Rectangle 24.png" alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}
export default Hero2