import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Input, Button, Slider, SelectBox } from "../../components";
import NavbarTop from "components/Navbar/NavbarTop";
import NavbarBottom from "components/Navbar/NavbarBottom";
import Spotlight from "../../components/Screen/Home/Spotlight"


export default function FlipkartPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Flipkart</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <NavbarTop />
      <NavbarBottom />
      
      <div className="w-full bg-gray-200">
      <Spotlight />
        <div>

          
          <div className="h-[3777px] mt-[21px] overflow-auto relative">
            <div className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="w-full mx-auto md:p-5 max-w-[1440px]">
                <div className="h-[3777px] relative">
                  <div className="justify-center h-[3777px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute" />
                  <Img
                    src="images/img_vector_black_900.svg"
                    alt="vector_three"
                    className="h-[31px] w-[31px] right-[6%] top-[37%] m-auto absolute"
                  />
                  <div className="flex md:flex-col justify-end w-full gap-[26px] top-[35%] right-0 left-0 p-[25px] m-auto sm:p-5 bg-gradient4 absolute">
                    <div className="mb-[17px] pt-2.5 bg-gradient3 flex-1 rounded-[20px]">
                      <div className="flex flex-col items-end">
                        <div className="flex justify-center w-[10%] md:w-full mr-[83px] p-[9px] border-blue-300 border border-solid rounded-[50%]">
                          <div className="h-[36px] w-full border-blue-300 border border-solid rounded-[18px]" />
                        </div>
                        <div className="flex sm:flex-col justify-end items-start w-[86%] md:w-full mt-[13px] mr-[15px]">
                          <Text size="5xl" as="p" className="flex w-[90%] sm:w-full tracking-[-0.34px]">
                            <span className="text-white-A700 font-bold">Become a </span>
                            <span className="text-yellow_A400 font-bold">Plus Member </span>
                            <span className="text-white-A700 font-bold">
                              <>
                                Now & <br />
                                Enjoy amazing brnefits
                              </>
                            </span>
                          </Text>
                          <div className="flex justify-center w-[10%] sm:w-full mt-1.5 p-[9px] border-blue-300 border border-solid rounded-[50%]">
                            <div className="h-[36px] w-full border-blue-300 border border-solid rounded-[18px]" />
                          </div>
                        </div>
                        <Text size="3xl" as="p" className="self-start mt-3.5 tracking-[-0.18px]">
                          Shop on Flipkart and pay using supercoins
                        </Text>
                        <div className="self-stretch h-[256px] mt-6 relative">
                          <Img
                            src="images/img_3e8a80bd_a21b_4.png"
                            alt="3e8a80bda21bfou"
                            className="justify-center h-[256px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <div className="h-[30px] w-[8%] bottom-[39%] left-[30%] m-auto absolute">
                            <div className="justify-center h-[30px] w-full left-0 bottom-0 right-0 top-0 m-auto border-blue-300 border border-solid absolute rounded-[18px]" />
                            <div className="justify-center h-[19px] w-[66%] left-0 bottom-0 right-0 top-0 m-auto border-blue-300 border border-solid absolute rounded-[50%]" />
                          </div>
                          <div className="h-[39px] w-[8%] left-[3%] top-1/4 m-auto absolute">
                            <div className="justify-center h-[39px] w-full left-0 bottom-0 right-0 top-0 m-auto border-blue-300 border border-solid absolute rounded-[50%]" />
                            <div className="justify-center h-[25px] w-[66%] left-0 bottom-0 right-0 top-0 m-auto border-blue-300 border border-solid absolute rounded-[16px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end w-[47%] md:w-full mr-[49px] py-[5px] bg-gradient2 rounded-[20px]">
                      <div className="flex flex-col w-full mt-[59px] gap-[22px]">
                        <Text size="7xl" as="p" className="w-[79%] md:w-full ml-[57px] tracking-[-0.57px]">
                          <>
                            Gift Card for <br />
                            Corporate and <br />
                            Business needs
                          </>
                        </Text>
                        <div>
                          <div className="flex flex-col">
                            <Text size="xl" as="p" className="w-[81%] md:w-full ml-12 tracking-[-0.15px] z-[1]">
                              <>
                                Special occasions call for special gifts. Whether it&#39;s a birthday
                                <br />
                                or an anniversary, finding the right gift for your loved ones is <br />
                                always a difficult task.
                              </>
                            </Text>
                            <Img
                              src="images/img_image_14.png"
                              alt="imagefourteen"
                              className="h-[136px] mt-[-10px] object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-center items-center w-full bottom-[36%] right-0 left-0 m-auto absolute">
                    <Img
                      src="images/img_image_15.png"
                      alt="imagefifteen"
                      className="self-end w-[27%] md:w-full z-[1] object-cover"
                    />
                    <div className="h-[456px] md:w-full ml-[-409px] flex-1 relative md:flex-none">
                      <div className="w-full top-0 right-0 left-0 m-auto absolute">
                        <div className="flex md:flex-col justify-between gap-5">
                          <div className="h-[433px] w-[24%] relative">
                            <div className="justify-center h-[433px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-yellow-200 absolute rounded-[10px]" />
                            <Heading
                              size="4xl"
                              as="h2"
                              className="left-[11%] top-[8%] m-auto !text-black-900 tracking-[0.30px] absolute"
                            >
                              Fashion
                            </Heading>
                          </div>
                          <div className="h-[433px] w-[24%] bg-green-A100 rounded-[10px]" />
                        </div>
                      </div>
                      <div className="h-[433px] w-[33%] left-[26%] top-0 m-auto bg-red-100_01 absolute rounded-[10px]" />
                      <div className="h-[433px] w-[32%] right-[23%] top-0 m-auto bg-blue-50_01 absolute rounded-[10px]" />
                      <Img
                        src="images/img_image_17.png"
                        alt="imageseventeen"
                        className="h-[302px] w-[34%] bottom-0 right-[23%] m-auto object-cover absolute"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_image_16.png"
                    alt="imagesixteen"
                    className="h-[322px] w-[28%] bottom-[35%] left-[33%] m-auto object-cover absolute"
                  />
                  <div className="flex flex-col w-[90%] gap-[86px] top-[10%] right-0 left-0 m-auto absolute">
                    <div>
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
                    <div>
                      <div className="flex justify-between items-start gap-5">
                        <div className="h-[260px] w-[18%] relative">
                          <div className="flex flex-col items-start justify-center w-max h-full pb-1 gap-[214px] left-0 bottom-0 right-0 top-0 px-1 m-auto bg-green-50 absolute rounded-[10px]">
                            <div className="h-[20px] w-[29%] bg-green-A700 rounded-[10px]" />
                            <div className="h-[13px] w-[33%] mb-2 ml-[7px] relative">
                              <Text
                                size="xs"
                                as="p"
                                className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-black-900 absolute"
                              >
                                <span className="text-gray-600">₹1,699</span>
                                <span className="text-black-900">&nbsp;</span>
                                <span className="text-green_A700_01">65% off</span>
                              </Text>
                              <div className="h-px w-[32%] left-[7%] top-[42%] m-auto rotate-[-180deg] bg-gray-600 absolute" />
                            </div>
                          </div>
                          <Heading
                            size="md"
                            as="p"
                            className="w-[94%] bottom-[17%] right-0 m-auto !text-black-900 absolute"
                          >
                            <span className="text-blue_gray-400 font-medium">
                              <>
                                Sponsored
                                <br />
                              </>
                            </span>
                            <span className="text-black-900 font-medium">STREE MANTRA </span>
                            <span className="text-black-900 font-medium">
                              <>
                                Women <br />
                                Printed Georgette, Crepe <br />
                                A-line Kurta{" "}
                              </>
                            </span>
                            <span className="text-black-900 font-medium">
                              <>
                                Grey
                                <br />
                              </>
                            </span>
                          </Heading>
                        </div>
                        <a href="#" className="mt-[91px]">
                          <Text as="p" className="!text-gray-600">
                            View More
                          </Text>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="h-[463px] w-[83%] bottom-[2%] right-0 left-0 m-auto absolute">
                    <div className="flex justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[11px] m-auto bg-gradient1 absolute rounded-[30px]">
                      <div className="flex md:flex-col justify-between items-center w-[94%] mt-[17px] mb-[35px] gap-5">
                        <div className="flex flex-col w-[47%] md:w-full gap-[19px]">
                          <Text size="6xl" as="p" className="flex">
                            <span className="text-teal_900 font-bold">Flipkart Grocery:</span>
                            <span className="text-white-A700 font-bold">
                              <>
                                {" "}
                                Your
                                <br />
                                New Go-to Online
                                <br />
                                Grocery Store
                              </>
                            </span>
                          </Text>
                          <Text size="4xl" as="p" className="w-[94%] md:w-full">
                            <>
                              Whether you work from home or office or other <br />
                              workplaces, daily items are a requsite foe everybody
                            </>
                          </Text>
                          <Input shape="round" name="edittext" className="w-[48%] ml-2" />
                        </div>
                        <div className="h-[389px] w-[47%] relative">
                          <div className="h-[338px] w-[68%] right-0 top-0 m-auto bg-blue-600_23 absolute rounded-[175px]" />
                          <div className="h-[338px] w-[68%] bottom-0 left-0 m-auto bg-blue-600_23 absolute rounded-[175px]" />
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_image_31.png"
                      alt="imagethirtyone"
                      className="h-[374px] w-[51%] bottom-[7%] right-0 m-auto object-cover absolute"
                    />
                  </div>
                </div>
                <footer className="flex justify-center items-center p-[52px] md:p-5 bg-gray-900">
                  <div className="flex justify-center w-[85%] mb-0.5 mr-[85px]">
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="self-stretch">
                        <div className="flex md:flex-col justify-between items-start gap-5">
                          <div className="flex md:flex-col justify-center items-start w-[64%] md:w-full">
                            <div className="flex flex-col w-[27%] md:w-full">
                              <Heading as="h6">ABOUT</Heading>
                              <div className="flex flex-col mt-[18px]">
                                <div className="flex justify-center items-center">
                                  <div className="flex flex-col items-start">
                                    <a href="#">
                                      <Text as="p" className="tracking-[-0.28px]">
                                        Contact Us
                                      </Text>
                                    </a>
                                    <a href="#" className="mt-1">
                                      <Text as="p" className="tracking-[-0.28px]">
                                        About Us
                                      </Text>
                                    </a>
                                    <a href="#" className="mt-[3px]">
                                      <Text as="p" className="tracking-[-0.28px]">
                                        Careers
                                      </Text>
                                    </a>
                                    <ul className="flex flex-col items-start gap-20">
                                      <li>
                                        <a href="#">
                                          <Text as="p" className="tracking-[-0.28px]">
                                            Flipkart Stories{" "}
                                          </Text>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <Text as="p" className="tracking-[-0.28px]">
                                            Press
                                          </Text>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <Text as="p" className="self-end tracking-[0.70px]">
                                    Flipkart Wholesale
                                  </Text>
                                </div>
                              </div>
                              <Text as="p" className="tracking-[-0.28px]">
                                Corporate Information
                              </Text>
                            </div>
                            <div className="flex justify-between items-start ml-[59px] gap-5 flex-1">
                              <div className="flex flex-col items-start gap-[22px]">
                                <Heading as="h6" className="ml-2">
                                  HELP
                                </Heading>
                                <div className="flex flex-col items-start gap-0.5">
                                  <a href="#">
                                    <Text as="p" className="tracking-[0.70px]">
                                      Payments
                                    </Text>
                                  </a>
                                  <a href="#">
                                    <Text as="p" className="tracking-[0.70px]">
                                      Shipping
                                    </Text>
                                  </a>
                                  <Text as="p" className="tracking-[0.70px]">
                                    Cancellation & Returns
                                  </Text>
                                  <Text as="p" className="tracking-[0.70px]">
                                    FAQ
                                  </Text>
                                  <a href="#">
                                    <Text as="p" className="tracking-[0.70px]">
                                      Report Infringement
                                    </Text>
                                  </a>
                                </div>
                              </div>
                              <div className="flex flex-col items-start gap-[21px]">
                                <Heading as="h6">POLICY</Heading>
                                <ul className="flex flex-col items-start">
                                  <li>
                                    <a href="#">
                                      <Text as="p" className="tracking-[0.70px]">
                                        Return Policy
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <Text as="p" className="tracking-[0.70px]">
                                        Terms Of Use
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <Text as="p" className="tracking-[0.70px]">
                                        Security
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <Text as="p" className="tracking-[0.70px]">
                                        Privacy
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <Text as="p" className="tracking-[0.70px]">
                                        Sitemap
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <Text as="p" className="tracking-[0.70px]">
                                        EPR Compliance
                                      </Text>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="flex flex-col ml-[90px] gap-[22px]">
                              <Heading as="h6">SOCIAL</Heading>
                              <ul className="flex flex-col self-start items-start">
                                <li>
                                  <a href="#">
                                    <Text as="p" className="tracking-[0.70px]">
                                      Facebook
                                    </Text>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <Text as="p" className="tracking-[0.70px]">
                                      YouTube
                                    </Text>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <Text as="p" className="tracking-[0.70px]">
                                      Twitter
                                    </Text>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="flex flex-col w-[22%] md:w-full gap-8">
                            <Heading as="h6">MAIL Us:</Heading>
                            <Text as="p" className="tracking-[0.70px]">
                              <>
                                Flipkart Internet Private Limited,
                                <br />
                                Buildings Alyssa, Begonia &<br />
                                Clove Embassy Tech Village,
                                <br />
                                Outer Ring Road, <br />
                                Devarabeesanahalli Village,
                                <br />
                                Bengaluru, 560103,
                                <br />
                                Karnataka, India
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="h-px w-[93%] mt-[33px] bg-blue_gray-100" />
                      <div className="flex justify-between items-center w-[50%] md:w-full mt-[9px] gap-5">
                        <div className="flex justify-center items-center w-[39%]">
                          <div className="h-full w-px bg-blue_gray-400" />
                          <Text size="xs" as="p" className="self-start ml-[7px] !text-blue_gray-400 tracking-[0.50px]">
                            Advertise
                          </Text>
                          <div className="h-full w-px ml-2.5 bg-blue_gray-400" />
                          <Text size="xs" as="p" className="self-start ml-2 !text-blue_gray-400 tracking-[0.50px]">
                            Gift Cards
                          </Text>
                          <div className="h-full w-px ml-1 bg-blue_gray-400" />
                          <Text size="xs" as="p" className="self-start ml-[5px] !text-blue_gray-400 tracking-[0.50px]">
                            Help Center
                          </Text>
                        </div>
                        <Text size="xs" as="p" className="self-start !text-blue_gray-400 tracking-[0.50px]">
                          © 2007-2022 Flipkart.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
            <Img
              src="images/img_image_18.png"
              alt="imageeighteen"
              className="h-[346px] w-[20%] right-0 bottom-0 top-0 my-auto object-cover absolute"
            />
            <div className="w-[2%] h-max right-0 bottom-0 top-0 my-auto absolute">
              <div className="h-[434px] bg-gradient" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
