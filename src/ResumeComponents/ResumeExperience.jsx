export default function ResumeExperience({experiences}){
    return(
        <div className="resume-experience">
        <h3>Experience</h3>
        <div className="break"></div>
        <ExperienceList experiences={experiences} />
        </div>
    )
}

 function formatMonthYear(dateString) {
  const [year, month] = dateString.split('-');
  const monthNames = [
    'Jan', 'Feb', 'March', 'April', 'May', 'June', 
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
  ];

  const monthIndex = parseInt(month, 10) - 1; // Subtracting 1 since month indices start from 0
  const formattedDate = `${monthNames[monthIndex]} ${year}`;

  return formattedDate;
}


function ExperienceList({experiences}){
    return(
        experiences.map(obj => {
            return (
              <div className="experience-grid" key={obj.id}>
                <p className="exp-job">{obj.job}</p>
                <p className="exp-title">{obj.jobTitle}</p>
                <p className="exp-location">{obj.location}</p>
                  <p className="exp-start">{formatMonthYear(obj.startDate)}</p>
                  <p className="exp-end">{obj.endDate === 'Ongoing' ? obj.endDate : formatMonthYear(obj.endDate)}</p>
                <p className="exp-notes">• {obj.notes}</p>
              </div>
            );
        })

    )
}