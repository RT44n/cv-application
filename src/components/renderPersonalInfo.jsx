import '../styles/index.css';

const RenderPersonalInfo = ({ fullName, phoneNumber, email }) => {
  return (
    <div className="personalInfoRenderCard">
      <p>Full Name: {fullName}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default RenderPersonalInfo;