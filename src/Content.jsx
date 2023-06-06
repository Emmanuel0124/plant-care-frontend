import axios from "axios";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import { PlantsNew } from "./PlantsNew";

export function Content() {

  const [plants, setPlants] = useState([]);

  const handleIndexPlants = () => {
    console.log("handleIndexPlants");
    axios.get("http://localhost:3000/plants.json").then((response) => {
      console.log(response.date);
      setPlants(response.data);
    });
  };

  const handleCreatePlant = (params, successCallback) => {
    console.log("handleCreatePlant", params);
    axios.post("http://localhost:3000/plants.json", params).then((response) => {
      setPlants([...plants, response.data]);
      successCallback();
    });
  };
  

  useEffect(handleIndexPlants, []);
  
  return (
    <div>
      <PlantsNew onCreatePlant={handleCreatePlant} />
      <PlantsIndex plants={plants} />
    </div>
  )
}