import './App.css';
import { Link, useParams } from 'react-router-dom';

const workData = {
  2025: [
    {
      title: 'รางวัลชนะเลิศ RoboFuture 2025',
      desc: 'หุ่นยนต์ NB-GEAR คว้ารางวัลชนะเลิศด้านนวัตกรรม',
      image: 'public/works/2025-1.png',
      robot: 'NB-GEAR 2025',
      details: 'หุ่นยนต์รุ่นล่าสุดที่พัฒนา AI และระบบขับเคลื่อนอัตโนมัติ',
      awards: ['ชนะเลิศ RoboFuture 2025', 'Best Innovation Award'],
    },
  ],
  2024: [
    {
      title: 'รองชนะเลิศอันดับ 1 RoboCup 2024',
      desc: 'ผลงานหุ่นยนต์ที่ผ่านเข้ารอบชิงชนะเลิศ RoboCup 2024',
      image: 'public/works/2024-1.png',
      robot: 'NB-GEAR 2024',
      details: 'หุ่นยนต์ที่เน้นความเร็วและความแม่นยำ',
      awards: ['รองชนะเลิศอันดับ 1 RoboCup 2024'],
    },
  ],
  2023: [
    {
      title: 'รางวัล Popular Vote 2023',
      desc: 'ได้รับคะแนนโหวตสูงสุดจากผู้เข้าชมในงาน RoboShow 2023',
      image: 'public/works/2023-1.png',
      robot: 'NB-GEAR 2023',
      details: 'หุ่นยนต์ที่ออกแบบให้ใช้งานง่ายและเป็นมิตรกับผู้ใช้',
      awards: ['Popular Vote 2023'],
    },
  ],
};

export default function WorkYear() {
  const { year } = useParams();
  const works = workData[year] || [];
  return (
    <div className="robot-bg">
      <div className="App-container">
        <Link to="/works" className="back-link">← กลับหน้าผลงาน</Link>
        <h1 className="main-title">ผลงานปี {year}</h1>
        <div className="works-cards">
          {works.map((work, idx) => (
            <div className="works-card" key={idx}>
              <div className="works-img-wrapper">
                <img src={work.image} alt={work.title} className="works-img" />
              </div>
              <div className="works-title-card">{work.title}</div>
              <div className="works-desc">{work.desc}</div>
              <div className="works-robot">หุ่นยนต์: {work.robot}</div>
              <div className="works-details">{work.details}</div>
              <ul className="works-awards">
                {work.awards.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
