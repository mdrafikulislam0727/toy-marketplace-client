import img11 from '../../assets/img/img11.png'
import img12 from '../../assets/img/img12.png'
import img13 from '../../assets/img/img13.png'
import img14 from '../../assets/img/img14.png'
const ExtraSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-40'>
            {/* card 1 */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img11} alt="Movie" className='p-4' /></figure>
                <div className="card-body">
                    <h2 className="card-title">Turbo Blitz</h2>
                    <p>Turbo Blitz: This sleek and aerodynamic toy car is designed for high-speed racing. With its vibrant red color and streamlined body, it zooms through tracks with lightning speed</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            {/* card 1 */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img12} alt="Movie" className='p-4' /></figure>
                <div className="card-body">
                    <h2 className="card-title">Lightning Bolt</h2>
                    <p>Lightning Bolt: Get ready to witness electrifying speed with the Lightning Bolt toy car. Its striking blue color and lightning bolt decals make it stand out from the rest. Equipped</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            {/* card 1 */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img13} alt="Movie" className='p-4' /></figure>
                <div className="card-body">
                    <h2 className="card-title">Speedster X</h2>
                    <p>Speedster X: The Speedster X toy car combines style and performance effortlessly. Its sleek silver body and futuristic design make it a real head-turner. With its precision</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            {/* card 1 */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img14} alt="Movie" className='p-4' /></figure>
                <div className="card-body">
                    <h2 className="card-title">Mega Wheels</h2>
                    <p>Mega Wheels: The Mega Wheels toy car is a beast on the road. Its rugged appearance and oversized wheels make it perfect for off-road adventures. Whether it is climbing over obstacles or tearing through rough terrains, this car handles it all with ease.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;