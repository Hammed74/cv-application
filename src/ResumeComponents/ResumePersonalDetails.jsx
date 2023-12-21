export default function ResumePersonalDetails({ details }) {
  return (
    <>
          <h1 className="your-name">{details.fullName}</h1>
          <div className="sub-resume-details">
            <p>{details.email}</p>
            <p>{details.phoneNumber}</p>
            <p>{details.city}</p>
          </div>
    </>
  );
}
