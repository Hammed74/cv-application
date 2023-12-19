import Education from "./Education";
import PersonalDetails from "./PersonalDetails";
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
    </div>
  );
}
