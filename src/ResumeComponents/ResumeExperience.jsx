export default function ResumeExperience(){
    return(
        <div className="resume-experience">
        <h3>Experience</h3>
        <div className="break"></div>
        <ExperienceList />
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



const expObj = [
  {
    job: "MicroSoft",
    title: "Software Engineer",
    location: "Seattle",
    startDate: "2021-08",
    endDate: "Ongoing",
    notes: "Led team of Engineers, Invented Office 365, Hired Bill Gates",
  },
];

function ExperienceList(){
    return(
        expObj.map(obj => {
            return (
              <div className="experience-grid" key={obj.job}>
                <p className="exp-job">{obj.job}</p>
                <p className="exp-title">{obj.title}</p>
                <p className="exp-location">{obj.location}</p>
                  <p className="exp-start">{formatMonthYear(obj.startDate)}</p>
                  <p className="exp-end">{obj.endDate === 'Ongoing' ? obj.endDate : formatMonthYear(obj.endDate)}</p>
                <p className="exp-notes">• {obj.notes}</p>
              </div>
            );
        })

    )
}