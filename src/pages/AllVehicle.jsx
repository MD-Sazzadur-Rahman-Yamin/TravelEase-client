import React, { useMemo, useState } from "react";
import { useLoaderData, useNavigation } from "react-router";
import VehiclesCard from "../components/VehiclesCard";
import Spinner from "../components/Spinner";
import { motion } from "motion/react";


const AllVehicle = () => {
  const navigation = useNavigation();
  const allVehicleData = useLoaderData();

  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filteredVehicles = useMemo(() => {
    let filtered = [...allVehicleData];

    if (category) {
      filtered = filtered.filter((v) => v.category === category);
    }

    if (location) {
      filtered = filtered.filter((v) =>
        v.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())
      );
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.pricePerDay - a.pricePerDay);
    }

    return filtered;
  }, [category, location, sortOrder, allVehicleData]);

  if (navigation.state === "loading") {
    return <Spinner></Spinner>;
  }

  return (
    <div className="max-w-7xl mx-auto mb-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center my-10">
        All Vehicles
      </h2>
      <div className="flex flex-wrap gap-4 items-center mb-6 justify-between">
        <select
          className="select select-bordered w-40"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="">All Categories</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Electric">Electric</option>
          <option value="Van">Van</option>
          <option value="Pickup">Pickup</option>
          <option value="Hatchback">Hatchback</option>
        </select>

        <input
          type="text"
          placeholder="Search by Location"
          className="input input-bordered w-40"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />

        <select
          className="select select-bordered w-40"
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>

        <motion.button
          onClick={() => {
            setCategory("");
            setLocation("");
            setSortOrder("");
          }}
          className="btn btn-outline btn-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Clear Filters
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-4 xl:mx-0">
        {filteredVehicles.map((Vehicle) => (
          <VehiclesCard key={Vehicle._id} Vehicle={Vehicle}></VehiclesCard>
        ))}
      </div>
    </div>
  );
};

export default AllVehicle;
