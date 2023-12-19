export default function ResumeEducation({education, activeSchool, edDrawer, schools}){
    function formatMonthYear(dateString) {
  const [year, month] = dateString.split('-');
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthIndex = parseInt(month, 10) - 1; // Subtracting 1 since month indices start from 0
  const formattedDate = `${monthNames[monthIndex]} ${year}`;

  return formattedDate;
}


    return (
      <div className="resume-education">
        <h3>Education</h3>
        <div className="break"></div>
        <div>
            {schools.map(school => {
                return (
          <div key={school.id} className="resume-education-details">
            <p className="resume-university">{ activeSchool.id === school.id ? activeSchool.school : school.school}</p>
            <p className="resume-degree">{ activeSchool.id === school.id ? activeSchool.degree : school.degree}</p>
            <p className="resume-start">
              {formatMonthYear( activeSchool.id === school.id ? activeSchool.startDate : school.startDate )}
            </p>
            <p className="resume-end">
              {formatMonthYear( activeSchool.id === school.id ? activeSchool.endDate : school.endDate)}
            </p>
            <p className="resume-location">{ activeSchool.id === school.id ? activeSchool.location : school.location}</p>
          </div>
            )})}
        </div>
      </div>
    );
}