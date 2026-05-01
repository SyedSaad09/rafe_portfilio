import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Pharmacy</h4>
                <h5>SRTMUN</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Score: 75%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Pharmacy</h4>
                <h5>SRTMUN</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Score: 75%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSC</h4>
                <h5>LATUR BOARD</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Score: 59%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSC</h4>
                <h5>LATUR BOARD</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Score: 73%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
