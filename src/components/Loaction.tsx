export default function About() {
  return (
    <div className="px-48">
      <div>
        <p>Pool Stations</p>
      </div>
      <div className="grid grid-cols-4 gap-y-16">
        <a href={"/pool/" + pool.id}>
          <div>
            <div className="w-56 rounded-3xl">
              <img
                src={pool.image}
                alt="location"
                className="h-56 object-cover rounded-3xl"
              />
            </div>
            <div>
              <div className="w-56 flex justify-between">
                <h3 className="text-lg ">{pool.location}</h3>
                <div className="flex items-center">
                  <i className="fa-solid fa-star " />
                  <h5>{pool.interested}</h5>
                </div>
              </div>
              <div>
                <p>
                  Invested Amount: <span>₹{pool.invested}</span>
                </p>
                <p>
                  Targeted Amount: <span>₹{pool.cost}</span>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
