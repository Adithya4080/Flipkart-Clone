import React from 'react'

function Grocery() {
    return (
        <>
        <div className='wrapper py-10'>
            <div className=' flex justify-between bg-gradient1 rounded-[30px] p-10 w-full'>
                <div className='w-[49%]'>
                    <h6 className='text-[38px] text-white-A700 font-bold'>
                        <span className='text-black-900'>Flipkart Grocery:</span> Your <br />
                        New Go-to Online <br />
                        Grocery Store
                    </h6>
                    <p className='text-white-A700 my-3 text-[20px]'>
                        Whether you work from home or office or other <br />
                        workplaes, daily items are a requsite for everybody
                    </p>
                    <button className=''>
                        UP To 30% Off
                    </button>
                </div>
                <div className="h-[250px] w-[49%] relative">
                    <div className="h-[170px] w-[68%] right-0 top-0 m-auto bg-blue-600_23 absolute rounded-[50%]" />
                    <div className="h-[170px] w-[68%] bottom-0 left-0 m-auto bg-blue-600_23 absolute rounded-[50%]" />
                    <div className='z-1 w-[80%]'>
                        <img
                            src="images/img_image_31.png"
                            alt="imagethirtyone"
                            className="w-full bottom-0 absolute"
                        />
                    </div>
                </div>
            </div>            
        </div>
        </>
    )
}

export default Grocery