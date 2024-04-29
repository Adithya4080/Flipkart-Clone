import React from 'react';
import { Img, Text, Heading } from "../../components";

function NavbarBottom() {
    return (
        <div>
            <div className="my-4 border-black-900 bg-white-700">
                <div className="wrapper">
                    <div className="h-[2px] w-[7%] bg-blue-600" />
                    <div className="flex items-center gap-7">
                    <div className="flex self-end items-center gap-[7px]">
                        <Img src="images/img_ei_star.svg" alt="image" className="h-[16px] w-[16px]" />
                        <Heading size="s" as="p" className="self-start !text-blue-600_01">
                        Top Offers
                        </Heading>
                    </div>
                    <a href="#" className="self-end">
                        <Text size="s" as="p" className="!text-black-900">
                        Grocery
                        </Text>
                    </a>
                    <a href="#" className="ml-[82px]">
                        <Text size="s" as="p" className="!text-black-900">
                        Mobiles
                        </Text>
                    </a>
                    <a href="#" className="ml-[98px]">
                        <Text size="s" as="p" className="!text-black-900">
                        Home
                        </Text>
                    </a>
                    <div className="flex items-center ml-[87px]">
                        <a href="#">
                        <Text size="s" as="p" className="!text-black-900">
                            Electronics
                        </Text>
                        </a>
                        <Img src="images/img_shoe.png" alt="shoe_one" className="w-[32px] ml-[29px] object-cover" />
                        <a href="#" className="ml-4">
                        <Text size="s" as="p" className="!text-black-900">
                            Fashion
                        </Text>
                        </a>
                    </div>
                    <a href="#" className="self-end">
                        <Text size="s" as="p" className="!text-black-900">
                        Beauty & Accesories
                        </Text>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarBottom