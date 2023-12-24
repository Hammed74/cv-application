import { useState } from "react";
import Resume from "./ResumeComponents/Resume";
import Form from "./FormComponents/Form";

const personalDetails = {
  fullName: "Your Name",
  email: "yourname123@email.com",
  phoneNumber: "123-456-7890",
  city: "Your City, Your State",
};

const defaultEducation = {
  id: 10,
  school: "Your University",
  degree: 'Your Degree',
  startDate: '2019-01',
  endDate: '2023-01',
  location: 'University Location',
  saved: true

}

const defaultExperience = 
  {
    id: Date.now(),
    job: "MicroSoft",
    jobTitle: "Software Engineer",
    location: "Seattle",
    startDate: "2021-08",
    endDate: "Ongoing",
    notes: "Led team of Engineers, Invented Office 365, Hired Bill Gates",
    saved: true
  }

function App() {
  const [details, setDetails] = useState(personalDetails);
  const [education, setEducation] = useState(defaultEducation);
      const [activeSchool, setActiveSchool] = useState(education);
      const [edDrawer, setEdDrawer] = useState(false)
      const [schools, setSchools] = useState([education]);
      const [experiences, setExperiences] = useState([defaultExperience])
      const [activeExperience, setActiveExperience] = useState(null)
  return (
    <>
      <h1 className="title">RESUME BUILDER</h1>
      <div className="body">
        <Form experiences={experiences} setExperiences={setExperiences} activeExperience={activeExperience} setActiveExperience={setActiveExperience} details={details} setDetails={setDetails} education={education} setEducation={setEducation} activeSchool={activeSchool} setActiveSchool={setActiveSchool} setEdDrawer={setEdDrawer} edDrawer={edDrawer} schools={schools} setSchools={setSchools}/>
        <Resume experiences={experiences} details={details} education={education} activeSchool={activeSchool} edDrawer={edDrawer} schools={schools}/>
      </div>
    </>
  );
}

export default App;
