import React from 'react';
import { Img, Text } from "../../../components";
import Background from '../../../assets/images/Rectangle.png'

function Ad() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="wrapper flex gap-4 pt-4 pb-6 w-full">
                <div className="pt-2 bg-gradient3 w-[49%] rounded-[20px]">
                    <div className="flex flex-col">
                        <div>
                            <div className="flex justify-center items-center ml-[80%] w-[10%] sm:w-full mt-1 p-[9px] border-blue-300 border border-solid rounded-[50%]">
                                <div className="h-[36px] w-full border-blue-300 border border-solid rounded-[18px]" />
                            </div>
                            <p className='flex justify-center items-center font-bold text-2xl'>
                                <span className="text-white-A700 ">Become a 
                                <span className="text-yellow_A400"> Plus Member </span> Now & <br />Enjoy amazing benefits</span>
                            </p>
                            <small className='text-white-A700 mt-4 flex justify-center items-center'>
                                Shop on Flipkart and pay using supercoins
                            </small>
                        </div>
                    
                        <div className="mt-6 relative">
                            <img
                                src="images/img_3e8a80bd_a21b_4.png"
                                alt="Flipkart Plus"
                                className="justify-center w-full"
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
        </div>
    )
}

export default Ad