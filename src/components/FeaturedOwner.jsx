import React from "react";
import { Link } from "react-router";

const FeaturedOwner = () => {
  const owner = {
    name: "MD Sazzadur Rahman Yamin",
    image: "/Owner-photo.jpg",
    location: "Dhaka, Bangladesh",
    rating: 4.9,
    description:
      "Yamin is one of TravelEase’s most trusted vehicle owners, known for maintaining high-quality cars and ensuring smooth, reliable rides for every traveler. With dozens of 5-star reviews, he represents the spirit of hospitality and professionalism on our platform.",
  };

  return (
    <section className="bg-base-200 text-base-content py-4 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center my-10">
          Featured Owner
        </h2>

        <div className="card lg:card-side bg-base-100 shadow-xl rounded-2xl">
          <figure className="lg:w-1/2">
            <img
              src={owner.image}
              alt={owner.name}
              className="object-cover h-full w-full rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none"
            />
          </figure>

          <div className="card-body lg:w-1/2 flex flex-col justify-center items-center text-center">
            <h3 className="card-title text-2xl text-primary">{owner.name}</h3>
            <p className="text-sm opacity-70">{owner.location}</p>

            <p className="mt-4 text-base leading-relaxed">
              {owner.description}
            </p>

            <div className="card-actions mt-6">
              <Link target="_blank" to="https://www.facebook.com/msry.bd/">
                <button className="btn btn-primary btn-outline">
                  View Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOwner;
