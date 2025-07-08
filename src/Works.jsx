import './App.css';
import { Link } from 'react-router-dom';

const years = [2025, 2024, 2023];

export default function Works() {
  return (
    <div className="robot-bg">
      <div className="App-container">
        <Link to="/" className="back-link">← กลับหน้าหลัก</Link>
        <h1 className="main-title">ผลงานและรางวัล</h1>
        <div className="works-years">
          {years.map((year) => (
            <Link to={`/works/${year}`} className="works-year-card" key={year}>
              <div className="works-year-title">ปี {year}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
