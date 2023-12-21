import ResumePersonalDetails from "./ResumePersonalDetails";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";

export default function Resume({ details, education, activeSchool, schools }) {
  return (
    <>
      <div className="resume">
        <div className="resume-details">
          <ResumePersonalDetails details={details} />
        </div>
        <div className="resume-container">
          <ResumeEducation education={education} activeSchool={activeSchool} schools={schools}/>
          <ResumeExperience />
        </div>
      </div>
    </>
  );
}
