import gallery1 from '../../../assets/gllary1.png'
import gallery2 from '../../../assets/gllary2.png'
import gallery3 from '../../../assets/gllary3.png'
import gallery4 from '../../../assets/gllary4.png'
import gallery5 from '../../../assets/gllary5.png'
import gallery6 from '../../../assets/gllary6.png'
import gallery7 from '../../../assets/gllary7.png'
const Gallery = () => {
    return (
        <div className="carousel w-full h-[300px] my-24">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='flex w-full'>
                    <img src={gallery1} alt="" className='w-1/2' />
                    <img src={gallery2} className="w-1/2" />
                </div>
                <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12  w-1/2'>


                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-24 ">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯ </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='flex w-full'>
                    <img src={gallery3} alt="" className='w-1/2 rounded-xl' />
                    <img src={gallery4} className="w-1/2 rounded-xl" />
                </div>            <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12  w-1/2'>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='flex w-full'>
                    <img src={gallery5} alt="" className='w-1/2 rounded-xl' />
                    <img src={gallery6} className="w-1/2 rounded-xl" />
                </div>                <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12  w-1/2'>

                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='flex w-full'>
                    <img src={gallery7} alt="" className='w-1/2 rounded-xl' />
                    <img src={gallery3} className="w-1/2 rounded-xl" />
                </div>                <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12  w-1/2'>

                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Gallery;