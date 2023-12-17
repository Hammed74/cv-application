
export default function PersonalDetails({details, setDetails}){
    
    function handleSetDetails(e){
        const section = e.target.className
        const newObj = {...details, [section]: e.target.value}
        return setDetails(newObj)
        
    }

    return (
        <>
        <div className="details">
            <h2>Personal Details</h2>
            <input type="text" className="fullName" value={details.fullName} onChange={(e) => {handleSetDetails(e)}}/>
            <input type="email" className="email" value={details.email} onChange={(e) => {handleSetDetails(e)}} />
            <input type="text" className="phoneNumber" value={details.phoneNumber} onChange={(e) => {handleSetDetails(e)}} />
            <input type="text" className="city" value={details.city} onChange={(e) => {handleSetDetails(e)}} />
        </div>
        </>
    )
}