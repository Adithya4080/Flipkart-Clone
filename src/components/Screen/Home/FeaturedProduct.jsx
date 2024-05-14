import React from 'react';
import { Img, Text, Heading, Button} from "../../../components";

function FeaturedProduct() {
    return (
        <div className='bg-white-A700'>
            <div className='wrapper'>
                <div className="flex md:flex-col justify-center items-center gap-[34px]">
                <div className="flex flex-col w-[36%] md:w-full gap-[42px]">
                    <Heading size="6xl" as="h3" className="ml-5 !text-black-900 tracking-[-0.33px]">
                    Feature Product
                    </Heading>
                    <div className="h-[459px] relative">
                    <Img
                        src="images/img_rectangle_44.png"
                        alt="image_one"
                        className="justify-center h-[459px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[10px]"
                    />
                    <div className="h-[25px] w-[29%] left-[4%] top-[3%] m-auto bg-white-A700 absolute" />
                    <Heading size="3xl" as="h4" className="left-[5%] top-[3%] m-auto !text-red-A700 absolute">
                        FURNITURE
                    </Heading>
                    <div className="h-[36px] w-[44%] right-[26%] top-[24%] m-auto bg-blue-600 absolute" />
                    <Heading
                        size="5xl"
                        as="h5"
                        className="w-[76%] left-[4%] top-[13%] m-auto !font-notosansjp absolute"
                    >
                        <>
                        Create your own
                        <br /> space with Flipkart Furniture
                        </>
                    </Heading>
                    <div className="flex flex-col items-center w-[46%] bottom-[5%] right-0 m-auto absolute">
                        <div className="self-stretch h-[52px] rounded-bl-[10px] rounded-tl-[10px] bg-red-A700" />
                        <Heading size="5xl" as="h6" className="mt-[-43px] !font-notosansjp">
                        From ₹1,200
                        </Heading>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col self-end gap-[13px] flex-1">
                    <div className="flex md:flex-col justify-center">
                    <div className="w-full p-[9px] bg-yellow-100_01 rounded-[10px]">
                        <div className="flex flex-col mb-[7px] gap-2">
                        <div>
                            <div className="flex items-start">
                            <Img
                                src="images/img_pngtree_dslr_camera_5634385.png"
                                alt="pngtreedslr_one"
                                className="w-[75%] z-[1] object-cover"
                            />
                            <a
                                href="#"
                                className="flex justify-center items-center h-[20px] ml-[-36px] px-[13px] py-1 bg-gray-800 rounded-[10px]"
                            >
                                <Heading size="xs" as="p">
                                ₹23,000‎
                                </Heading>
                            </a>
                            </div>
                        </div>
                        <Heading size="md" as="p" className="ml-9 !text-black-900">
                            NIKON DSLR Camera{" "}
                        </Heading>
                        </div>
                    </div>
                    <div className="flex justify-end w-full ml-[23px] p-2.5 bg-light_blue-50 rounded-[10px]">
                        <div className="flex flex-col w-[86%] mb-1.5 mr-[3px] gap-1.5">
                        <div className="flex items-start">
                            <Img
                            src="images/img_image_removebg_preview.png"
                            alt="imageremovebg"
                            className="w-[68%] z-[1] object-cover"
                            />
                            <a
                            href="#"
                            className="flex justify-center items-center h-[20px] ml-[-2px] px-4 py-1 bg-gray-800 rounded-[10px]"
                            >
                            <Heading size="xs" as="p">
                                ₹1,200‎
                            </Heading>
                            </a>
                        </div>
                        <Heading size="md" as="p" className="ml-2 !text-black-900">
                            NIKON DSLR Camera{" "}
                        </Heading>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full ml-[15px] gap-[140px] p-2 bg-deep_orange-50 rounded-[10px]">
                        <Button shape="round" className="w-full ml-[180px]">
                        ₹25,000
                        </Button>
                        <Heading
                        size="md"
                        as="p"
                        className="w-[51%] md:w-full mb-[7px] ml-[21px] !text-black-900"
                        >
                        Mj Furniture Bed with 4 Drawer{" "}
                        </Heading>
                    </div>
                    </div>
                    <div className="flex sm:flex-col justify-center gap-[23px]">
                    <div className="flex flex-col items-start w-[32%] sm:w-full p-2.5 bg-light_green-100 rounded-[10px]">
                        <Button shape="round" className="w-full ml-[166px]">
                        ₹2,900‎
                        </Button>
                        <Img
                        src="images/img_image_4.png"
                        alt="imagefour_one"
                        className="self-stretch mt-[23px] ml-[5px] z-[1] object-cover"
                        />
                        <Heading size="md" as="p" className="mt-[-4px] mb-1.5 ml-[43px] !text-black-900">
                        Cooker  Aluminium
                        </Heading>
                    </div>
                    <div className="flex flex-col items-start justify-center p-[19px] bg-blue-50 flex-1 rounded-[10px]">
                        <Text size="3xl" as="p" className="mt-[23px] !text-black-900">
                        Samsung Washing Machine
                        </Text>
                        <Text as="p" className="w-[49%] md:w-full mt-[3px] !text-gray-600 tracking-[-0.14px]">
                        <>
                            lorem ipsum dolor sit amet,
                            <br />
                            consectetur adiposcing elit.Vel eros,
                            <br />
                            Sollicitudin a nulla.
                        </>
                        </Text>
                        <Heading
                        size="lg"
                        as="p"
                        className="flex justify-center items-center h-[25px] mt-[31px] mb-[23px] ml-3.5 px-5 py-1 bg-gray-800 rounded-[10px]"
                        >
                        ₹60,000
                        </Heading>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct