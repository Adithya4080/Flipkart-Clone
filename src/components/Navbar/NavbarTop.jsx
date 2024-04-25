import React from 'react';
import { Img, Text, Heading, SelectBox } from "../../components";
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png'

function NavbarTop() {
    const dropDownOptions = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
    ];
  return (
    
        <header>
            <div className='wrapper'>
            <div className="flex justifu-center items-center gap-10 my-3 bg-white-A700 w-full">                
                <div className='w-40'>
                    <Link to = '/'>
                        <img src={Logo} alt='Logo' className='w-full' />
                    </Link>
                </div>
                <div className='flex items-center'>
                    <img src="images/img_fluent_navigation_16_regular.svg" alt="fluent_one" className="h-[24px] w-[24px] mr-2" />
                    <p className="font-medium">
                        Menu
                    </p>
                </div>
                <div>
                    <div className="flex justify-center items-center">
                        <div className="flex gap-4 p-2 border-black-900 border border-solid bg-white-A700 rounded-[20px]">
                            <SelectBox
                                shape="square"
                                indicator={<img src="images/img_arrowdown.svg" alt="arrow_down" className="ml=2"/>}
                                name="allcategories"
                                placeholder=" All Categories"
                                options={dropDownOptions}
                                className=" text-black-900 font-medium ml-2 border-r border-solid border-gray-300 whitespace-nowrap"
                            />
                            <p className="flex justify-center items-center !text-gray-400 whitespace-nowrap pr-28">
                                Search Product,Brands and more...
                            </p>
                            <img src="images/img_search.svg" alt="search_one" className="mr-2" />
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-center items-end w-[20%] md:w-full mr-[88px]">
                    <div className="h-[41px] w-[24%] pb-px px-px relative">
                    <Img
                        src="images/img_vector.svg"
                        alt="vector_one"
                        className="h-[32px] w-[31px] bottom-[9%] left-[4%] m-auto absolute"
                    />
                    <div className="flex flex-col items-center w-[41%] right-[10%] top-0 m-auto absolute">
                        <div className="self-stretch h-[15px] bg-blue-600 rounded-[50%]" />
                        <Heading size="lg" as="p" className="mt-[-15px]">
                        5
                        </Heading>
                    </div>
                    </div>
                    <Text size="s" as="p" className="h-[30px] w-[30px] mb-[7px] ml-1 !text-black-900 !font-normal">
                    <>
                        Cart
                        <br />
                        $240
                    </>
                    </Text>
                    <div className="h-[29px] w-[2px] mb-[3px] ml-[13px] bg-blue_gray-100_01" />
                    <Img src="images/img_mi_user_add.svg" alt="miuseradd_one" className="h-[36px] w-[37px] ml-[11px]" />
                    <Text size="s" as="p" className="w-[36%] mb-[3px] !text-black-900 !font-normal">
                    <>
                        ACCOUNT
                        <br /> Sign in
                    </>
                    </Text>
                </div>
                </div>
            </div>
        </header>
           

  )
}

export default NavbarTop