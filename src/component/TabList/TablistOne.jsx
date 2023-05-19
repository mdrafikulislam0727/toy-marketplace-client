
const TablistOne = ({category}) => {
   const sportCar=category.sports_car;
   console.log(category)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto ms-16">
            {
                sportCar.map(cart =><div key={cart.id} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={cart.Picture} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{cart.name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default TablistOne;