import { useState } from "react";
import Form from "./FormComponents/Form";
import PersonalDetails from "./personalDetails";

const personalDetails = {
  fullName: "Your Name",
  email: "yourname123@email.com",
  phoneNumber: "123-456-7890",
  city: "Your City, Your State",
};
function App() {
  const [details, setDetails] = useState(personalDetails);
  return (
    <>
      <h1 className="title">RESUME BUILDER</h1>
      <div className="body">
        <PersonalDetails details={details} setDetails={setDetails} />
        <Form details={details} />
      </div>
    </>
  );
}

export default App;
