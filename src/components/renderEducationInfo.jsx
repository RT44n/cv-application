import '../styles/index.css';

const RenderEducationInfo = ({school, title, year}) => {
    return (
        <div className="educationInfoRenderCard">
            <p>School Name: {school}</p>
            <p>Title Of Study: {title}</p>
            <p>Year: {year}</p>
        </div>
    );
};

export default RenderEducationInfo;