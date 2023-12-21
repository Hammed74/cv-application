import Education from "./Education";
import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
export default function Form({
  details,
  setDetails,
  education,
  setEducation,
  activeSchool,
  setActiveSchool,
  setEdDrawer,
  edDrawer,
  schools,
  setSchools,
  activeExperience,
  setActiveExperience,
  experiences,
  setExperiences
}) {
  return (
    <div className="form-elements">
      <PersonalDetails details={details} setDetails={setDetails} />
      <Education
        education={education}
        setEducation={setEducation}
        activeSchool={activeSchool}
        setActiveSchool={setActiveSchool}
        setEdrawer={setEdDrawer}
        edDrawer={edDrawer}
        schools={schools}
        setSchools={setSchools}
      />
      <Experience
        experiences={experiences}
        setExperiences={setExperiences}
        activeExperience={activeExperience}
        setActiveExperience={setActiveExperience}
      />
    </div>
  );
}
