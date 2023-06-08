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
import { Modal2 } from "./Modal2";
import { SchedulesIndex } from "./SchedulesIndex";

export function Content() {

  const [plants, setPlants] = useState([]);
  const [isPlantsShowVisible, setIsPlantsShowVisible] = useState(false);
  const [currentPlant, setCurrentPlant] = useState({});

  const [schedules, setSchedules] = useState([]);
  const [isSchedulesShowVisible, setIsSchedulesShowVisible] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState({});

  const handleIndexSchedules = () => {
    console.log("handleIndexSchedules");
    axios.get("http//localhost:3000/schedules.json").then((response) => {
      console.log(response.data);
      setSchedules(response.data);
    });
  };

  const handleShowSchedule = (schedule) => {
    console.log("handleShowSchedule", schedule);
    setIsSchedulesShowVisible(true);
    setCurrentSchedule(schedule);
  };

  const handleClose2 = () => {
    console.log("handleClose");
    setIsSchedulesShowVisible(false);
  };
  
  useEffect(handleIndexSchedules, []);

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
      <SchedulesIndex schedules={schedules} onShowSchedule={handleShowSchedule} />

      <Modal2 show={isSchedulesShowVisible} onClose={handleClose2} >
        <h1>test</h1>
      </Modal2>


      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plants/new" element={<PlantsNew onCreatePlant={handleCreatePlant} />} />
        <Route path="/" element={<PlantsIndex plants={plants} onShowPlant={handleShowPlant} />} />
      </Routes>


      
      <Modal show={isPlantsShowVisible} onClose={handleClose} >
        <PlantsShow plant={currentPlant} />
      </Modal>
    </div>
  )
}