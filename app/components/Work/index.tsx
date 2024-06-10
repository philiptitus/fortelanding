"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'For students',
        subheading: 'Find Hostels To Stay effortlessly',
        hiddenpara: 'Dont woory we got you covered witha wide range of hostels to choose from seamlessly',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'For Managers',
        subheading: 'Sit back and Relax while we take care of business for you',
        hiddenpara: 'Dont worry our software will ensure you spend less time stressing and more time earning decent profits',
    },


]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative' id="work-section">
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>So How does this work ? </h3>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;
