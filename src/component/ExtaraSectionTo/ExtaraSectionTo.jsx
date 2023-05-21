import './ExtarasectionTo.css'
import img1 from '../../assets/img/img3.png'
import img2 from '../../assets/img1/car2.png'
import img3 from '../../assets/img1/car3.png'
import img4 from '../../assets/img1/car4.png'
import img5 from '../../assets/img1/car5.png'
import img6 from '../../assets/img1/car6.png'
import img7 from '../../assets/img1/car7.png'
import img8 from '../../assets/img1/car8.png'
import img9 from '../../assets/img1/car9.png'
import img10 from '../../assets/img1/car10.png'
import img11 from '../../assets/img1/car11.png'
import img12 from '../../assets/img1/car12.png'
import img13 from '../../assets/img1/car13.png'
import img14 from '../../assets/img1/car14.png'
import img15 from '../../assets/img1/car15.png'
import img16 from '../../assets/img1/car16.png'

const ExtaraSectionTo = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img1} /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ExtaraSectionTo;