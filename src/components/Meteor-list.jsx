import { useState, useEffect } from "react";
import MeteorCard from "./Meteor-card";
import { nasaFetchFunction } from "../utils/fetchMeteor";
import MeteorChart from "./Meteor-chart";

// test data
export const data = {
  datasets: [
    {
      label: "A dataset",
      data: [{ x: 1, y: 0 }],
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};
// test options
export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function MeteorList({ searchTerm }) {
  const [meteors, setMeteors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) return;

    setIsLoading(true);
    nasaFetchFunction(searchTerm)
      .then((meteorData) => {
        setMeteors(meteorData);
      })
      .catch((error) => {
        console.error("Error fetching meteors:", error);
        setMeteors([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchTerm]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (meteors.length === 0 && searchTerm) {
    return <p>No meteors found for the year {searchTerm}.</p>;
  }

  return (
    <>
      <MeteorChart data={data} options={options} />
      <ul className="meteor-list">
        {meteors.map((currentMeteor) => (
          <MeteorCard currentMeteor={currentMeteor} key={currentMeteor.id} />
        ))}
      </ul>
    </>
  );
}
