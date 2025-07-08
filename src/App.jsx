

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TeamDetail from './TeamDetail';
import Works from './Works';
import WorkYear from './WorkYear';


const teams = [
  {
    name: 'Building',
    image: 'public/Building.png',
    description: 'ทีมออกแบบและสร้างหุ่นยนต์ให้เท่ระเบิดแบบระเบิดจริงๆ',
  },
  {
    name: 'Marketing',
    image: 'public/marketing.png',
    description: 'ทีมประชาสัมพันธ์และนำเสนอผลงาน(มีม)ของทีมสู่สายตาคนภายนอก',
  },
  {
    name: 'Programming',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    description: 'ทีมพัฒนาควบคุมการทำงานและบงการหุ่นยนต์ตามใจนึก(ไม่ถึง)',
  },
];

const works = [
  {
    title: 'รางวัลชนะเลิศ หุ่นยนต์ระดับประเทศ 2024',
    image: 'public/works/win2024.png',
    desc: 'คว้ารางวัลชนะเลิศจากการแข่งขันหุ่นยนต์ระดับประเทศ ประจำปี 2024',
  },
  {
    title: 'รองชนะเลิศอันดับ 1 RoboCup 2023',
    image: 'public/works/robocup2023.png',
    desc: 'ผลงานหุ่นยนต์ที่ผ่านเข้ารอบชิงชนะเลิศ RoboCup 2023',
  },
  {
    title: 'รางวัล Popular Vote 2022',
    image: 'public/works/popvote2022.png',
    desc: 'ได้รับคะแนนโหวตสูงสุดจากผู้เข้าชมในงาน RoboShow 2022',
  },
];



function Home() {
  return  (
    <div className="robot-bg">
      <div className="App-container">
        <h1 className="main-title">NB GEAR 2025</h1>
        <p className="subtitle">ทีมรวมพลังสร้างสรรค์หุ่นยนต์สู่อนาคต</p>

        {/* ปุ่มดูผลงาน */}
        <div style={{ margin: '2.5em 0 2em 0' }}>
          <Link to="/works" className="detail-btn" style={{ fontSize: '1.2em', padding: '0.7em 2.5em' }}>ดูผลงานและรางวัล</Link>
        </div>

        {/* Section ทีม */}
        <div className="team-cards">
          {teams.map((team) => (
            <div className="team-card" key={team.name}>
              <div className="card-img-wrapper">
                <img src={team.image} alt={team.name} className="card-img" />
              </div>
              <div className="card-content">
                <h2>{team.name}</h2>
                <p>{team.description}</p>
                <Link to={`/team/${team.name}`} className="detail-btn">ดูรายละเอียด</Link>
              </div>
            </div>
          ))}
        </div>

        {/* ช่องทางติดตาม */}
        <div className="follow-section">
          <div className="follow-title">ติดตามผลงานเราได้ที่</div>
          <div className="follow-links">
            <a href="https://facebook.com/nbgear" target="_blank" rel="noopener noreferrer" className="follow-link fb">Facebook</a>
            <a href="https://instagram.com/nbgear" target="_blank" rel="noopener noreferrer" className="follow-link ig">Instagram</a>
            <a href="https://youtube.com/nbgear" target="_blank" rel="noopener noreferrer" className="follow-link yt">YouTube</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team/:team" element={<TeamDetail />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:year" element={<WorkYear />} />
      </Routes>
    </Router>
  );
}

export default App;
