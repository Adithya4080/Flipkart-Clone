import React from 'react';
import iPhone from '../../../assets/images/iPhone.png';
import TV from '../../../assets/images/TV.png'

function Spotlight() {
    return (
        <div className='bg-[#f2f0f0] py-2'>
            <div className='wrapper flex'>
                <div className='left'>
                    <div className="left-top bg-[#caf2ff] px-2 py-4 rounded-lg flex justify-between mb-2">
                        <div>
                            <button className='bg-[#fcdf5b] py-1 pl-2 pr-6 text-sm text-[#6c602b] font-medium rounded-lg'>50% Discount</button>
                            <div className='p-6'>
                                <h3 className='font-bold text-[28px]'>iPhone 14</h3>
                                <p className='py-3 text-sm text-[#6f6f6f]'>Now Available on <br /> affordable price</p>
                                <div className='flex'>
                                    <p className='text-sm text-[#6f6f6f] mr-2'><del>₹1,00,000</del> From</p>
                                    <h4 className='font-bold'>₹99,500*</h4>
                                </div>
                                <button className='bg-[#198ada] text-[#ffffff] my-4 px-8 py-1 rounded-xl'>Buy Now</button>
                            </div>
                        </div>
                        <div>
                            <img src={iPhone} alt="iPhone" />
                        </div>
                    </div>
                    <div className="left-bot bg-[#e4d6fb] px-2 py-4 rounded-lg flex justify-between">
                        <div>
                            <div className='px-6 py-10'>
                                <h3 className='font-bold text-[28px]'>Ultra HD 4K TVs</h3>
                                <div className='flex pt-5 pb-2 text-xl font-bold'>
                                    <p className='mr-2'>From</p>
                                    <h4 className='text-[#873ffb]'>₹5000*</h4>
                                </div>
                                <p className='py-3 text-sm text-[#6f6f6f]'>Sony, Samsung, LG and <br /> more. Instant 10% Offer on <br /> CitiBank</p>
                            </div>
                        </div>
                        <div>
                            <img src={TV} alt="TV" />
                        </div>
                    </div>
                </div>
                <div className="right ml-8">
                    <div className='bg-[#ffe1e3]'>
                        <h3>Lifelong Tribe 20T</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Spotlight