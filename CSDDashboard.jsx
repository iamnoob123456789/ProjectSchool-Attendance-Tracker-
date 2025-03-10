import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionCard from "./SectionCard";
import Navbar from "./Navbar";

const CSDDashboard = () => {
  const sections = [
    { name: "A31", subjects: ["ML", "DS", "OS"] },
    { name: "A32", subjects: ["LAC", "IOT"] },
    {name:"A33",subjects:["DA","BEE","COA"]}
  ];

  return (
  <div>
    <Navbar/>
    <h1 className="heading">Sections</h1>
    <div className="container mt-4">
             <div className="row col-lg-12">
                    {sections.map((section, index) => (
                     <div key={index} className="col-md-12 col-lg-fluid"> 
                         <SectionCard title={section.name} subjects={section.subjects} />
                     </div>
                     
    ))}
    </div>
   </div>
  </div>
  )
};

export default CSDDashboard;
