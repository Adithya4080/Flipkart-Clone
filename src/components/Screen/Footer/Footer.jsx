import React from 'react'
import { Heading, Text } from 'components';

function Footer() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);
    return (
        
    <footer className=" py-10 bg-gray-900">
        <div className='wrapper'>
            <div className="flex justify-between">
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
    </footer>

    )
}

export default Footer