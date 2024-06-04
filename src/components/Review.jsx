import React from 'react'

const Feat = (props) => {
    return (
        <div className='flex'>
            <div className='bg-purple-100 min-w-36 sm:min-w-max py-8 spx-10 sm:px-5 lg:px-3 2xl:px-5 rounded-3xl text-center space-y-3'>
                <p className='text-xl sm:text-3xl lg:text-2xl xl:text-4xl 2xl:text-5xl bg-gradient-to-br to-75% from-orange-400 to-purple-500 bg-clip-text text-transparent font-semibold'>upto 95%</p>
                <p className='text-xs sm:text-lg lg:text-sm xl:text-lg 2xl:text-xl tracking-wider'>Demand Fulfilment</p>
            </div>
        </div>
    );
}

function Review() {
    return (
        <div>
            <div className='bg-red-300s flex lg:flex-row flex-col-reverse px-4 sm:px-10 lg:px-28 pb-20 gap-5'>
                <div className='bg-blue-500/40s flex-1 '>
                    <div className='text-lg font-serif sm:text-xl md:text-2xl tracking-wide leading-relaxed md:pr-16 mb-16 line-clamp-6 sm:line-clamp-none'>D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.</div>

                    {/* last of first section */}
                    <div className='flex items-center gap-4 mb-10 sm:mb-20 md:mb-36'>
                        <div>
                            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp" alt="" className='h-14 sm:h-24  rounded-full' />
                        </div>
                        <div>
                            <p className='text-xl sm:text-3xl font-semibold'>Diskha Pande</p>
                            <p className='text-lgsm:text-xl'>Co-founder, Samosa Party</p>
                        </div>
                    </div>

                    <div className='flex gap-10 overflow-hidden'>
                    <Feat/>
                    <Feat/>
                    <Feat/>
                    </div>
                </div>
                {/*  */}
                <div className='bg-green-500/40 border-2 border-purple-300 rounded-3xl basis-[35%]'>
                    <img src="./review1.webp" alt="" className='h-full w-full object-cover object-right rounded-3xl' />
                </div>
            </div>
        </div>
    )
}

export default Review