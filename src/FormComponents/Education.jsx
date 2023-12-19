import { useState } from "react";

export default function Education({
  education,
  setEducation,
  activeSchool,
  setActiveSchool,
  setEdrawer,
  edDrawer,
  schools,
  setSchools,
}) {
  const [isOpen, setIsOpen] = useState(true);
  function handleSetIsOpen() {
    setIsOpen(!isOpen);
    console.log(activeSchool);
  }

  return (
    <div className="education-details">
      <div onClick={handleSetIsOpen} className="close">
        &times;
      </div>
      <h2>Education</h2>
      {edDrawer ? (
        <CurrentSchool
          activeSchool={activeSchool}
          education={education}
          setEducation={setEducation}
          setActiveSchool={setActiveSchool}
          setEdrawer={setEdrawer}
          setSchools={setSchools}
          schools={schools}
        />
      ) : (
        <UniversityList
          schools={schools}
          setSchools={setSchools}
          activeSchool={activeSchool}
          setActiveSchool={setActiveSchool}
          setEdrawer={setEdrawer}
        />
      )}
    </div>
  );
}

function UniversityList({
  schools,
  setSchools,
  activeSchool,
  setActiveSchool,
  setEdrawer,
}) {
  function handleSetActiveSchool(id) {
    const theSchool = schools.filter((school) => school.id === id);
    setActiveSchool(theSchool[0]);
    setEdrawer(true);
  }

  function onAddSchool(){
    const newSchoolObj = {
      id: 12,
      school: "Your University",
      degree: "Your Degree",
      startDate: "2019-01",
      endDate: "2023-01",
      location: "University Location",
    };
    setSchools([...schools,newSchoolObj])
    setActiveSchool(newSchoolObj)
    setEdrawer(true)
    
  }
  return (
    <>
      <ul>
        {schools.map((school) => {
          return (
            <li
              onClick={() => handleSetActiveSchool(school.id)}
              key={school.id}
            >
              {school.school}
            </li>
          );
        })}
      </ul>
      <div onClick={onAddSchool} className="add-school">+</div>
    </>
  );
}

function CurrentSchool({
  education,
  setEducation,
  activeSchool,
  setActiveSchool,
  setEdrawer,
  setSchools,
  schools
}) {
  function editSchool(e) {
    const section = e.target.className;
    const newObj = { ...activeSchool, [section]: e.target.value };
    console.log(newObj);
    setActiveSchool(newObj);
    handleSetSchools(activeSchool.id, newObj)
  }

  function handleSetSchools(id, newObj){
    setSchools(schools.map(school => {
            if(school.id === id){
                return {...newObj}
            }
            return school
        }))
  }


  console.log(activeSchool.school);
  return (
    <>
      <input
        type="text"
        className="school"
        value={activeSchool.school}
        onChange={(e) => editSchool(e)}
      />
      <input
        type="text"
        className="degree"
        value={activeSchool.degree}
        onChange={(e) => editSchool(e)}
      />
      <div>
        <input
          type="month"
          className="startDate"
          value={activeSchool.startDate}
          onChange={(e) => editSchool(e)}
        />
        <input
          type="month"
          className="endDate"
          value={activeSchool.endDate}
          onChange={(e) => editSchool(e)}
        />
      </div>
      <input
        type="text"
        className="location"
        value={activeSchool.location}
        onChange={(e) => editSchool(e)}
      />
      <div className="buttons">
          <div onClick={() => setEdrawer(false)} className="back-button">
            BACK
          </div>
          <div className="save">SAVE</div>
      </div>
    </>
  );
}