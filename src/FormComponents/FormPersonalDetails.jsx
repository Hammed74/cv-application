export default function FormPersonalDetails({ details }) {
  return (
    <>
      <div className="form">
        <div className="form-details">
          <h1 style={{ fontWeight: "600" }}>{details.fullName}</h1>
          <div className="sub-form-details">
            <p>{"📧" + details.email}</p>
            <p>{"📲" + details.phoneNumber}</p>
            <p>{"🌃" + details.city}</p>
          </div>
        </div>
      </div>
    </>
  );
}
