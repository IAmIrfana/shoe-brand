function Hero1() {
    return (
        <div>
        <div className=" flex items-center my-4 md:my-20  " >
            <img className="w-[80px] object-cover md:w-[135px] h-[100px]" src="Rectangle 22.png" alt="" />
          <div className="w-full ">
            <ul className="bgimage flex items-center justify-evenly gap-3 bg-cover md:w-full h-[100px] md:-[200px]  my-4 md:my-10">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>
            </div>
            <div >
            <p className="bg-black text-white  h-[100px]  md:w-[220px] flex justify-center items-center my-4 md:my-0">Explore More  →</p>

            </div>
        </div>
        <div className="px-4 flex-row md:flex md:flex-row  md:gap-6 items-center md:px-40  ">
        <img className="w-full max-h-96  md:max-h-[444px] object-cover" src="Rectangle 6.png" alt="" />
          <div className="flex flex-col text-center md:text-left ">
            <h1 className="font-bold text-4xl md:text-6xl my-5 md:my-0  md:-mx-12">Be Your <br /> Own Level</h1>
            <p className="  ">The right shoes can take any outfits from basic to stylish with just a few steps. At our shoe store , we have a wide variety of stylish shoes to help you create the perfect look from contemporary sneakers to classic loafers, we have something to match all fasters and occasions. Our shoes are designed to be comfortable durable and fashionable, so you can look and feel your best no matter what you're wearing   </p>
            <button className='py-2 my-4 px-10 md:px-0 border border-red-500 rounded-3xl bg-red-700 text-white hover:bg-green-700 md:w-[300px] '>Shop Now</button>

            </div>
        </div>
        </div>
        
    )
}
export default Hero1