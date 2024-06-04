
function Home() {
    return (
        <div className='bg-black lg:rounded-bl-[20%] lg:rounded-br-[35%] text-white min-h-screen flex flex-col lg:flex-row pt-40 sm:pt-0 gap-16 lg:gap-0'>
            <div className='bg-blue-200/40s basis-1/2 flex flex-col items-centers justify-center px-4 sm:px-10 lg:px-36 gap-6 sm:gap-16'>
                <div className='text-3xl md:text-6xl tracking-wider font-semibold'>
                    <p>Every order</p>
                    <p>fullfilled, <span>on time.</span></p>
                </div>
                <div className='text-xl'>
                    Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.
                </div>

                <div>
                <button className="bg-gradient-to-br  from-orange-500 to-70% to-purple-500 text-white font-semibold rounded-xl p-[1px]">
                    <span className="flex w-full bg-black text-white rounded-xl py-3 px-6 tracking-wide text-lg">
                        <p className='bg-gradient-to-br from-orange-400 to-purple-500 bg-clip-text text-transparent'>Get started with Crest</p>
                    </span>
                    
                </button>
                </div>
            </div>
            {/*  */}
            <div className='bg-green-200/70s flex-1 pl-8 sm:p-20 lg:p-0 pb-40'>
                <img src='./home.svg' className='h-full w-full object-contain' />
            </div>
        </div>
    )
}

export default Home