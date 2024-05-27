// import React from 'react';
// import { SelectBox } from 'components';
// import { Link } from 'react-router-dom';
// import Logo from '../../assets/images/Logo.png';
// import { FaBars } from "react-icons/fa6";
// import Grocery from "../../assets/images/food.png"
// import Phone from "../../assets/images/Phone.png";
// import Sofa from "../../assets/images/Sofa.png";
// import Electronics from "../../assets/images/Electronics.png";
// import Beauty from "../../assets/images/Beauty.png"

// function Navbar() {
//     const dropDownOptions = [
//         { label: "Option1", value: "option1" },
//         { label: "Option2", value: "option2" },
//         { label: "Option3", value: "option3" },
//     ];
//     return (
//         <header>
//             <div className='wrapper flex justify-between items-center py-2'>
//                 <div>
//                     <h1 className='w-[100%]'>
//                         <Link to = '/'>
//                             <img src={Logo} alt='Logo' className='w-full' />
//                         </Link>
//                     </h1>
//                 </div>
//                 <div className='flex items-center gap-1'>
//                     <FaBars />
//                     <p className='font-medium text-[18px]'>
//                         Menu
//                     </p>
//                 </div>
//                 <div className="lg:flex hidden justify-center items-center">
//                     <div className="flex gap-4 py-2 px-4 border-black-900 border border-solid bg-white-A700 rounded-[20px]">
//                         <SelectBox
//                             shape="square"
//                             indicator={<img src="images/img_arrowdown.svg" alt="arrow_down" className="ml=2"/>}
//                             name="allcategories"
//                             placeholder=" All Categories"
//                             options={dropDownOptions}
//                             className=" text-black-900 font-medium ml-2 border-r border-solid border-gray-300 whitespace-nowrap"
//                         />
//                         <p className="flex justify-center items-center !text-gray-400 whitespace-nowrap pr-28">
//                             Search Product,Brands and more...
//                         </p>
//                         <img src="images/img_search.svg" alt="search_one" className="mr-2" />
//                     </div>
//                 </div>
//                 <div className='hidden gap-3 lg:flex'>
//                     <div className='flex gap-5 '>
//                         <div className='relative'>
//                             <div className='h-[32px] w-[32px]'>
//                                 <img
//                                     src="images/img_vector.svg"
//                                     alt="vector_one"
//                                     className="h-full w-full"
//                                 />
//                             </div>
//                             <div className='absolute bottom-5 left-4'>
//                                 <p className='bg-[#198ada] text-white-A700 rounded-[30px] flex justify-center items-center px-2 font-bold'>5</p>
//                             </div>
//                         </div>
//                         <div className='flex flex-col'>
//                             <small>Cart</small>
//                             <small>$240</small>
//                         </div>
//                     </div>
//                     <div className="h-[29px] w-[2px] bg-blue_gray-100_01" />
//                     <div className='flex'>
//                         <div className='h-[29px] w-[37px]'>
//                             <img 
//                                 src="images/img_mi_user_add.svg" 
//                                 alt="miuseradd_one" 
//                                 className="h-full w-full" 
//                             />
//                         </div>
//                         <div className='flex flex-col'>
//                             <small>Account</small>
//                             <small>Sign In</small>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="border-t-2 border-gray-200 bg-white-700">
//                 <div className="wrapper">
//                     <div className="h-[2px] w-[8%] bg-blue-600" />
//                     <div className="flex gap-7 py-4">
//                         <div className="flex self-end items-center gap-[7px]">
//                         <div className='w-[30px]'>
//                             <img src="images/img_ei_star.svg" alt="image" className="w-full" />
//                         </div>
//                             <a href="#">
//                                 <h3 className="font-bold text-sm text-blue-600">
//                                     Top Offers
//                                 </h3>
//                             </a>
//                         </div>
//                         <div className="flex self-end items-center gap-[7px]">
//                             <div className='w-[30px]'><img src={Grocery} alt="image" className="w-full" /></div>
//                             <a href="#">
//                                 <h3 className="font-medium text-sm text-black-600">
//                                     Grocery
//                                 </h3>
//                             </a>
//                         </div>
//                         <div className="flex self-end items-center gap-[7px]">
//                             <div className='w-[30px]'><img src={Phone} alt="image" className="w-full" /></div>
//                             <a href="#">
//                                 <h3 className="font-medium text-sm text-black-600">
//                                     Mobiles
//                                 </h3>
//                             </a>
//                         </div>
//                         <div className="flex self-end items-center gap-[7px]">
//                             <div className='w-[30px]'>
//                                 <img src={Sofa} alt="image" className="w-full" />
//                             </div>
//                             <a href="#">
//                                 <h3 className="font-medium text-sm text-black-600">
//                                     Home
//                                 </h3>
//                             </a>
//                         </div>
//                         <div className="flex self-end items-center gap-[7px]">
//                             <div className='w-[30px]'>
//                                 <img src={Electronics} alt="image" className="w-full" />
//                             </div>
//                             <a href="#">
//                                 <h3 className="font-medium text-sm text-black-600">
//                                     Electronics
//                                 </h3>
//                             </a>
//                         </div>
//                         <div className="flex self-end items-center gap-[7px]">
//                             <div className='w-[30px]'>
//                                 <img src="images/img_shoe.png" alt="shoe_one" className="w-full" />
//                             </div>
//                             <a href="#">
//                                 <h3 className="font-medium text-sm text-black-600">
//                                     Fashion
//                                 </h3>
//                             </a>
//                         </div>
//                         <div className="flex self-end items-center gap-[7px]">
//                             <div className='w-[30px]'>
//                                 <img src={Beauty} alt="image" className="w-full" />
//                             </div>
//                             <a href="#">
//                                 <h3 className="font-medium text-sm text-black-600">
//                                     Beauty & Accessories
//                                 </h3>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     )
// }

// export default Navbar

import React, { useState } from 'react';
import { SelectBox } from 'components';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import Logo from '../../assets/images/Logo.png';
import Grocery from "../../assets/images/food.png";
import Phone from "../../assets/images/Phone.png";
import Sofa from "../../assets/images/Sofa.png";
import Electronics from "../../assets/images/Electronics.png";
import Beauty from "../../assets/images/Beauty.png";
import Star from "../../assets/images/star.png";
import Shoe from "../../assets/images/shoe2.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const dropDownOptions = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
    ];

    const navItems = [
        { imgSrc: Star, label: "Top Offers", to: "#" },
        { imgSrc: Grocery, label: "Grocery", to: "#" },
        { imgSrc: Phone, label: "Mobiles", to: "#" },
        { imgSrc: Sofa, label: "Home", to: "#" },
        { imgSrc: Electronics, label: "Electronics", to: "#" },
        { imgSrc: Shoe, label: "Fashion", to: "#" },
        { imgSrc: Beauty, label: "Beauty & Accessories", to: "#" },
    ];

    return (
        <header>
            <div className='wrapper flex justify-between items-center py-2'>
                <div>
                    <h1 className='w-[100%]'>
                        <Link to='/'>
                            <img src={Logo} alt='Logo' className='w-full' />
                        </Link>
                    </h1>
                </div>
                <div className='flex items-center gap-2 cursor-pointer' onClick={handleMenuToggle}>
                    <FaBars />
                    <p className='font-medium text-[18px]'>Menu</p>
                </div>
                <div className="lg:flex hidden justify-center items-center">
                    <div className="flex gap-4 py-2 px-4 border-black-900 border border-solid bg-white-A700 rounded-[20px]">
                        <SelectBox
                            shape="square"
                            indicator={<img src="images/img_arrowdown.svg"  alt="Arrow Down" className="ml=2"/>}
                            name="allcategories"
                            placeholder="All Categories"
                            options={dropDownOptions}
                            className="text-black-900 font-medium ml-2 border-r border-solid border-gray-300 whitespace-nowrap"
                        />
                        <p className="flex justify-center items-center !text-gray-400 whitespace-nowrap pr-28">
                            Search Product, Brands and more...
                        </p>
                        <img src="images/img_search.svg" alt="Searchbar" className="mr-2" />
                    </div>
                </div>
                <div className='hidden gap-3 lg:flex'>
                    <div className='flex gap-5'>
                        <div className='relative'>
                            <div className='h-[32px] w-[32px]'>
                                <img
                                    src="images/img_vector.svg"
                                    alt="Vector"
                                    className="h-full w-full"
                                />
                            </div>
                            <div className='absolute bottom-5 left-4'>
                                <p className='bg-[#198ada] text-white-A700 rounded-[30px] flex justify-center items-center px-2 font-bold'>5</p>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <small>Cart</small>
                            <small>$240</small>
                        </div>
                    </div>
                    <div className="h-[29px] w-[2px] bg-blue_gray-100_01" />
                    <div className='flex'>
                        <div className='h-[29px] w-[37px]'>
                            <img 
                                src="images/img_mi_user_add.svg" 
                                alt="Miuser" 
                                className="h-full w-full" 
                            />
                        </div>
                        <div className='flex flex-col'>
                            <small>Account</small>
                            <small>Sign In</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`border-t-2 border-gray-200 bg-white-700 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                <div className="wrapper">
                    <div className="h-[2px] w-[8%] bg-blue-600" />
                    <div className="flex flex-col lg:flex-row gap-7 py-4">
                        {navItems.map((item, index) => (
                            <div key={index} className="flex self-end items-center gap-[7px]">
                                <div className='w-[24px]'>
                                    <img src={item.imgSrc} alt={item.label} className="w-full" />
                                </div>
                                <Link to={item.to}>
                                    <h3 className="font-medium text-sm text-black-600">
                                        {item.label}
                                    </h3>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
