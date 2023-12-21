export default function Experience(activeExperience, setActiveExperience, experiences, setExperiences){
    return (
      <div className="experience-details">
        <h2>Experience</h2>
        {activeExperience === null ? (
          <ExperienceListForm
            activeExperience={activeExperience}
            setActiveExperience={setActiveExperience}
          />
        ) : (
          <CurrentExperience
            activeExperience={activeExperience}
            experiences={experiences}
            setExperiences={setExperiences}
          />
        )}
      </div>
    );
}


const expObj = [{
    job: "MicroSoft",
    jobTitle: "Software Engineer",
    location: "Seattle",
    startDate: "2021-08",
    endDate: "Ongoing",
    notes: "Led team of Engineers, Invented Office 365, Hired Bill Gates"
}]

function ExperienceListForm(activeExperience, setActiveExperience){
    function handleSetActiveExperience(obj){
        setActiveExperience(obj)
    }
    return (
<ul>
    {expObj.map(obj => {
        return <li onClick={(obj) => handleSetActiveExperience(obj) } key="obj.job">{obj.job}</li>
    })}
</ul>
    )
}

function CurrentExperience(activeExperience, experiences, setExperiences){
return(
    <>
    <input type="text" className="job" placeholder="Company"/>
    <input type="text" className="jobTitle" placeholder="title"/>
    <input type="text" className="location" placeholder="location" />
    <div className="exp-dates">
        <input type="text" className="startDate" placeholder="Start Date"/>
        <input type="text" className="endDate" placeholder="End Date" />
    </div>
    <textarea className="notes" placeholder="Job Description" />
    <button>+</button>
    </>
)
}