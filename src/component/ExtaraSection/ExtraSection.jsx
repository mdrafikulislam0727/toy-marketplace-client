import img11 from '../../assets/img/img11.png'
import img12 from '../../assets/img/img12.png'
import img13 from '../../assets/img/img13.png'
import img14 from '../../assets/img/img14.png'
const ExtraSection = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold text-center mt-40'>Collectors Corner</h2>
            <p className='text-center font-bold mt-10'> This section caters to collectors and enthusiasts who appreciate high-quality and limited-edition toy cars. It can showcase die-cast models, vintage replicas, <br /> and rare collectible cars. Customers can find detailed replicas of classic and modern vehicles,<br /> often featuring intricate designs, realistic paintwork, and display cases for showcasing these prized possessions.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-40'>
            {/* card 1 */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img11} alt="Movie" className='p-4' /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-purple-600 text-2xl">Turbo Blitz</h2>
                    <p className='font-bold'>Turbo Blitz: This sleek and aerodynamic toy car is designed for high-speed racing. With its vibrant red color and streamlined body, it zooms through tracks with lightning speed</p>
                    <div className="card-actions justify-end">
                        <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">Details</button>
                    </div>
                </div>
            </div>
            {/* card 1 */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img12} alt="Movie" className='p-4' /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-purple-600 text-2xl">Lightning Bolt</h2>
                    <p className='font-bold'>Lightning Bolt: Get ready to witness electrifying speed with the Lightning Bolt toy car. Its striking blue color and lightning bolt decals make it stand out from the rest. Equipped</p>
                    <div className="card-actions justify-end">
                        <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">Details</button>
                    </div>
                </div>
            </div>
            {/* card 1 */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img13} alt="Movie" className='p-4' /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-purple-600 text-2xl">Speedster X</h2>
                    <p className='font-bold'>Speedster X: The Speedster X toy car combines style and performance effortlessly. Its sleek silver body and futuristic design make it a real head-turner. With its precision</p>
                    <div className="card-actions justify-end">
                        <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">Details</button>
                    </div>
                </div>
            </div>
            {/* card 1 */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img14} alt="Movie" className='p-4' /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-purple-600 text-2xl">Mega Wheels</h2>
                    <p className='font-bold'>Mega Wheels: The Mega Wheels toy car is a beast on the road. Its rugged appearance and oversized wheels make it perfect for off-road adventures. Whether it is climbing over obstacles or tearing through rough terrains, this car handles it all with ease.</p>
                    <div className="card-actions justify-end">
                        <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">Details</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ExtraSection;