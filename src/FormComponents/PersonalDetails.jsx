import { useState } from "react"

export default function PersonalDetails({details, setDetails}){
    const [open, setOpen] = useState(true)
    
    function handleSetDetails(e){
        const section = e.target.className
        const newObj = {...details, [section]: e.target.value}
        return setDetails(newObj)
        
    }

    return (
      <>
        <div className="personal-details">
              <h2>Personal Details</h2>
              <img onClick={() => setOpen(!open)} className="hamburger" src="../src/assets/hamburger.png" width="20px" alt="" />
          {open ? (
            <>
              <input
                type="text"
                className="fullName"
                value={details.fullName}
                onChange={(e) => {
                  handleSetDetails(e);
                }}
              />
              <input
                type="email"
                className="email"
                value={details.email}
                onChange={(e) => {
                  handleSetDetails(e);
                }}
              />
              <input
                type="text"
                className="phoneNumber"
                value={details.phoneNumber}
                onChange={(e) => {
                  handleSetDetails(e);
                }}
              />
              <input
                type="text"
                className="city"
                value={details.city}
                onChange={(e) => {
                  handleSetDetails(e);
                }}
              />
            </>
          ) : null}
        </div>
      </>
    );
}