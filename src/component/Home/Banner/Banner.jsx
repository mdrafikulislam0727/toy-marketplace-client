import img1 from '../../../assets/banner1.png'
import img2 from '../../../assets/banner2.png'
import img3 from '../../../assets/banner3.png'
import img4 from '../../../assets/banner4.png'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full rounded-xl" />
            <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
               <div className='text-white space-y-7 pl-12  w-1/2'>
                <h2 className='text-6xl font-bold'>Welcome my toy car</h2>
                <p>Rev up the Fun with Our Exciting Collection of Toy Cars Experience Thrilling Adventures with Our High-Speed Toy Car Selection!</p>
                <div>
                <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">Customize</button>
                </div>
               </div>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
            <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
               <div className='text-white space-y-7 pl-12  w-1/2'>
                <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">Latest Project</button>
                </div>
               </div>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
            <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
               <div className='text-white space-y-7 pl-12  w-1/2'>
                <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">Latest Project</button>
                </div>
               </div>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
            <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
               <div className='text-white space-y-7 pl-12  w-1/2'>
                <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">Latest Project</button>
                </div>
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

export default Banner;