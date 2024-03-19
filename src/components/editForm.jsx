import { useState } from 'react';
import '../styles/index.css';
import RenderPersonalInfo from './renderPersonalInfo';
import RenderEducationInfo from './renderEducationInfo';
import RenderExperienceInfo from './renderExperienceInfo';

export default function InfoForm() {
  const [personalInfo, setPersonalInfo] = useState({ fullName: '', email: '', phoneNumber: '' });
  const [educationalInfo, setEducationalInfo] = useState([{ schoolName: '', titleOfStudy: '', year: '' }]);
  const [experienceInfo, setExperienceInfo] = useState([{ company: '', position: '', responsibilities: '', joinedWork: '', leftWork: '' }]);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEducationChange = (index, e) => {
    const values = [...educationalInfo];
    values[index][e.target.name] = e.target.value;
    setEducationalInfo(values);
  };

  const handleExperienceChange = (index, e) => {
    const values = [...experienceInfo];
    values[index][e.target.name] = e.target.value;
    setExperienceInfo(values);
  };

  const addExtraEducationForm = () => {
    setEducationalInfo([...educationalInfo, { schoolName: '', titleOfStudy: '', year: '' }]);
    setShowEducationForm(true);
  };

  const addExtraExperienceForm = () => {
    setExperienceInfo([...experienceInfo, { company: '', position: '', responsibilities: '', joinedWork: '', leftWork: '' }]);
    setShowExperienceForm(true);
  };

  return (
    <>
      <div className='content'>
        <div className='form'>

          <div className='personalform'>
            <h2>Personal Information</h2>
            <form>
              <label>
                Full name:
                <input type="text" name="fullName" value={personalInfo.fullName} onChange={handlePersonalChange} />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={personalInfo.email} onChange={handlePersonalChange} />
              </label>
              <label>
                Phone Number:
                <input type="tel" name="phoneNumber" value={personalInfo.phoneNumber} onChange={handlePersonalChange} />
              </label>
            </form>
          </div>
            <h2>Educational Information</h2>
          <div className='educationform' style={{ display: showEducationForm ? 'block' : 'none' }}>
            {educationalInfo.map((form, index) => (
              <form className='' key={index}>
                <label>
                  School Name:
                  <input
                    type="text"
                    name="schoolName"
                    value={form.schoolName}
                    onChange={(e) => handleEducationChange(index, e)}
                  />
                </label>
                <label>
                  Title of study:
                  <input
                    type="text"
                    name="titleOfStudy"
                    value={form.titleOfStudy}
                    onChange={(e) => handleEducationChange(index, e)}
                  />
                </label>
                <label>
                  Year:
                  <input
                    type="date"
                    name="year"
                    value={form.year}
                    onChange={(e) => handleEducationChange(index, e)}
                  />
                </label>
              </form>
            ))}
          </div>
          <button onClick={addExtraEducationForm}>Add</button>

            <h2>Experience Information</h2>
          <div className='experienceform' style={{ display: showExperienceForm ? 'block' : 'none' }}>
            {experienceInfo.map((form, index) => (
              <form className='experienceInfoFormCard' key={index}>
                <label>
                  Company:
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </label>
                <label>
                  position:
                  <input
                    type="text"
                    name="position"
                    value={form.position}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </label>
                <label>
                  Responsibilities:
                  <input
                    type="text"
                    name="responsibilities"
                    value={form.responsibilities}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </label>
                <label>
                  Joined Work:
                  <input
                    type="date"
                    name="joinedWork"
                    value={form.joinedWork}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </label>
                <label>
                  left Work:
                  <input
                    type="date"
                    name="leftWork"
                    value={form.leftWork}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </label>
              </form>
            ))}
          </div>
          <button onClick={addExtraExperienceForm}>Add</button>
        </div>

        <div className='render'>
          <div className='renderPersonalInfo'>
            <h2>About me</h2>
            <RenderPersonalInfo
              fullName={personalInfo.fullName}
              email={personalInfo.email}
              phoneNumber={personalInfo.phoneNumber}
            />
          </div>
          <div className='renderEducationInfo'>
            <h2>Education</h2>
            {educationalInfo.map((info, index) => (
              <RenderEducationInfo key={index} school={info.schoolName} title={info.titleOfStudy} year={info.year} />
            ))}
          </div>
          <div className='renderExperienceInfo'>
            <h2>Experience</h2>
            {experienceInfo.map((info, index) => (
              <RenderExperienceInfo key={index} company={info.company} position={info.position} responsibilities={info.responsibilities} joinedWork={info.joinedWork} leftWork={info.leftWork} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}