import '../styles/index.css';

const RenderExperienceInfo = ({company, position, responsibilities, joinedWork, leftWork}) => {
    return (
        <div className="experienceInfoRenderCard">
            <p>Company Name: {company}</p>
            <p>Job Title: {position}</p>
            <p>Responsibilities: {responsibilities}</p>
            <p>Joined: {joinedWork}</p>
            <p>Left: {leftWork}</p>
        </div>
    );
};

export default RenderExperienceInfo;