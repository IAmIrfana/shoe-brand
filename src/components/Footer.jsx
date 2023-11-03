function Footer(){
    return(
        <div>
            <div className="bg-blue-300 flex p-2 border rounded-3xl m-10 justify-evenly w-50" >
                <div className="">
                <h1 className="font-semibold text-2xl">Subscribe Us to get monthly voucher or <br /><span className="text-red-700">25 % off</span></h1>
                <input type="text" placeholder="you@company.com" />
                <div className="">
                <button className='my-4 px-10 border border-red-500 rounded-3xl bg-red-700 text-white hover:bg-green-700 '>Subscribe</button>
                </div>

                </div>
                <div>
                    <img className="w-40 h-45" src="Rectangle 26.png" alt="" />
                </div>

            </div>
            {/* footer part */}
            <div className="flex justify-evenly py-7 bg-black text-white m-2">
                <div className="font-semibold text-lg my-2">
            <h3>Rapture</h3>
            <h3>Athletics</h3>
            </div>
            <div>
            <h1 className="my-2 font-medium">Links</h1>
            <ul className="font-light text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Cart page</li>
                <li>Contact Us</li>
            </ul>
            </div>
            <div>
            <h1  className="my-2 font-medium">Contact</h1>
            <ul className="font-light text-sm">
                <li>Email</li>
                <li>Linkedin</li>
                <li>Instagram </li>
                <li>Twitter</li>
            </ul>
            </div>
            <div>
            <h1  className="my-2 font-medium">Collection</h1>
            <ul className="font-light text-sm">
                <li>Men</li>
                <li>Women</li>
                <li>Children</li>
            </ul>
            </div>



            </div>
        </div>
    )
}
export default Footer