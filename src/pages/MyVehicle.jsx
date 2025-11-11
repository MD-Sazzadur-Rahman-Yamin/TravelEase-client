import React from 'react';

const MyVehicle = () => {
    return (
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center my-10">
          My Vehicle
        </h2>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyVehicle;