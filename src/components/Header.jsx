import { FiSearch } from "react-icons/fi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoMdContact } from "react-icons/io"
import {ImMenu} from "react-icons/im"
import { useState } from "react"

function Header() {
    const[toggleMenu,setToggleMenu]=useState()
    

    // const Menu=()=>{
    //     setToggleMenu(!toggleMenu)
    // }

    return (
        <div className="page1 font-semibold ">
            <div className="header flex p-2 md:p-7 justify-evenly md:justify-between  ">
                <div className="font-extrabold text-[30px]">
                    <h3>Rapture</h3>
                    <h3>Athletics</h3>
                </div>
                <div className=" ">
                    {toggleMenu && (
                    
                                            <ul className="flex flex-col md:flex-row gap-5 md:gap-7 items-center text-[20px]">
                                            <li>Men</li>
                                            <li>Women</li>
                                            <li>Kids</li>
                                            <li>Customize</li>
                    
                                        </ul>
                    )}
                    
                    
                </div>
                <div className="flex gap-4 items-center text-[30px]">
                    <ImMenu className="cursor-pointer" onClick={()=>setToggleMenu(!toggleMenu)}/>
                    <FiSearch />
                    <AiOutlineShoppingCart />
                    <IoMdContact />
                </div>
            </div>
            <div className=" mx-10 flex flex-col lg:flex-none justify-between relative">
                <div className="main  ">
                    <h1 className="font-[100px] py-4 text-[40px]  ">Step Into Style With <br />Our Trendy Shoes!</h1>
                    <h2 className="border border-red-600 border-dotted w-[100px] text-center text-red-600 text-[25px]">2023</h2>
                    <p className="py-4" >Our collections include a wide range of shoes for <br />
                        men,women, and children</p>
                            <button className=' p-2 px-10 border border-red-500 rounded-3xl bg-red-700 text-white hover:bg-green-700 '>Shop Now</button>

                </div>



            <div className="image-container bg-gradient-to-r  from-[#e6c6c6] to-red-900 border-red-400 rounded-[140px] md:h-[400px] w-[600px] md:w-[700px] lg:absolute -right-20 -z-10  ">
                
                <img className="w-[300px] md:w-[450px] lg:absolute -top-10" src="redshoe.png" alt="" />
                </div>

            </div>

        </div>
    )
}

export default Header