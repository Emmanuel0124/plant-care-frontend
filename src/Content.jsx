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
import { SchedulesIndex } from "./SchedulesIndex";
import { SchedulesNew } from "./SchedulesNew";

export function Content() {

  const [plants, setPlants] = useState([]);
  const [isPlantsShowVisible, setIsPlantsShowVisible] = useState(false);
  const [currentPlant, setCurrentPlant] = useState({});

  const [schedules, setSchedules] = useState([]);
  

  const handleIndexSchedules = () => {
    console.log("handleIndexSchedules");
    axios.get("http://localhost:3000/schedules.json").then((response) => {
      console.log(response.data);
      setSchedules(response.data);
    });
  };

  const handleCreateSchedule = (params, successCallback) => {
    console.log("handleCreateSchedule", params);
    axios.post("http://localhost:3000/schedules.json", params).then((response) => {
      setSchedules([...schedules, response.data]);
      successCallback();
    });
  };

  
  
  useEffect(() => { handleIndexSchedules(); }, []);

  const handleIndexPlants = () => {
    console.log("handleIndexPlants");
    axios.get("http://localhost:3000/plants.json").then((response) => {
      console.log(response.data);
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
        <Route path="/schedules/new" element={<SchedulesNew onCreateSchedule={handleCreateSchedule} />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plants/new" element={<PlantsNew onCreatePlant={handleCreatePlant} />} />
        <Route path="/" element={<PlantsIndex plants={plants} onShowPlant={handleShowPlant} />} />
        <Route path="/schedules" element={<SchedulesIndex schedules={schedules}  /> } />
      </Routes>


      
      <Modal show={isPlantsShowVisible} onClose={handleClose} >
        <PlantsShow plant={currentPlant} />
      </Modal>
    </div>
  )
}