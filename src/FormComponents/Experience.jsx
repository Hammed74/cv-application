export default function Experience({activeExperience, setActiveExperience, experiences, setExperiences}){
function handleClose(){
    setExperiences([])
}

    return (
      <div className="experience-details">
        <h2>Experience</h2>
        <div onClick={handleClose} className="close">
          &times;
        </div>
        {activeExperience === null ? (
          <ExperienceListForm
            activeExperience={activeExperience}
            setActiveExperience={setActiveExperience}
            experiences={experiences}
            setExperiences={setExperiences}
          />
        ) : (
          <CurrentExperience
            setActiveExperience={setActiveExperience}
            activeExperience={activeExperience}
            experiences={experiences}
            setExperiences={setExperiences}
          />
        )}
      </div>
    );
}

function ExperienceListForm({activeExperience, setActiveExperience, experiences, setExperiences}){

    function onNewExperience(e){
        e.preventDefault()
        let newExp = { 
    id: Date.now(),
    job: "Company",
    jobTitle: "Job Title",
    location: "Location",
    startDate: "2021-08",
    endDate: "Ongoing",
    notes: "Job Description"
  }
        let newExpList = [...experiences,newExp]
        setExperiences(newExpList)
        setActiveExperience(newExp)
    }

    function onTrash(e,obj){
        e.stopPropagation()
        setExperiences(experiences.filter(exp => exp.id !== obj.id))
    }
    return (
      <>
        {experiences.length > 0 ? (
          <ul>
            {experiences.map((obj) => {
              return (
                <li onClick={() => setActiveExperience(obj)} key={obj.id}>
                  {obj.job}
                  <div className='trash' onClick={(e) => onTrash(e, obj)}>🗑️</div>
                </li>
              );
            })}
          </ul>
        ) : null}
        <div style={{fontSize: '1.5rem'}} onClick={(e) => onNewExperience(e)}>+</div>
      </>
    );
}

function CurrentExperience({
  setActiveExperience,
  activeExperience,
  experiences,
  setExperiences,
}) {
  function handleSetExperiences(exp, e) {
    let section = e.target.className;
    let newExp = experiences.map((obj) => {
      if (exp.id === obj.id) {
        return { ...obj, [section]: e.target.value };
      }
      return obj;
    });
    setExperiences(newExp);
  }

  function onBack() {
    setExperiences(experiences.filter((exp) => exp.id !== activeExperience.id));
    setActiveExperience(null);
  }

  function onSave(){
    setActiveExperience(null)
  }

  let currentExp = experiences.filter((exp) => exp.id === activeExperience.id);

  return (
    <>
      <input
        type="text"
        className="job"
        value={currentExp[0].job}
        onChange={(e) => handleSetExperiences(activeExperience, e)}
      />
      <input
        type="text"
        className="jobTitle"
        placeholder="title"
        value={currentExp[0].jobTitle}
        onChange={(e) => handleSetExperiences(activeExperience, e)}
      />
      <input
        type="text"
        className="location"
        placeholder="location"
        value={currentExp[0].location}
        onChange={(e) => handleSetExperiences(activeExperience, e)}
      />
      <div className="exp-dates">
        <input
          type="month"
          className="startDate"
          placeholder="Start Date"
          value={currentExp[0].startDate}
          onChange={(e) => handleSetExperiences(activeExperience, e)}
        />
        <input
          type="text"
          className="endDate"
          placeholder="End Date"
          value={currentExp[0].endDate}
          onChange={(e) => handleSetExperiences(activeExperience, e)}
        />
      </div>
      <textarea
        className="notes"
        placeholder="Job Description"
        value={currentExp[0].notes}
        onChange={(e) => handleSetExperiences(activeExperience, e)}
      />
      <div className="buttons">
          <div className="back-button" onClick={onBack}>BACK</div>
          <div className="save" onClick={onSave}>SAVE</div>
      </div>
    </>
  );
}