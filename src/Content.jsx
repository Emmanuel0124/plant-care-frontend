import axios from "axios";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import { PlantsNew } from "./PlantsNew";
import { Modal } from "./Modal";
import { PlantsShow } from "./PlantsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";

export function Content() {

  const [plants, setPlants] = useState([]);
  const [isPlantsShowVisible, setIsPlantsShowVisible] = useState(false);
  const [currentPlant, setCurrentPlant] = useState({});

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
  
  const handleShowPlant = (plant) => {
    console.log("handleShowPlant", plant);
    setIsPlantsShowVisible(true);
    setCurrentPlant(plant);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPlantsShowVisible(false);
  };


  useEffect(handleIndexPlants, []);
  
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plants/new" element={<PlantsNew onCreatePlant={handleCreatePlant} />} />
      </Routes>



      <PlantsIndex plants={plants} onShowPlant={handleShowPlant} />
      <Modal show={isPlantsShowVisible} onClose={handleClose} >
        <PlantsShow plant={currentPlant} />
      </Modal>
    </div>
  )
}