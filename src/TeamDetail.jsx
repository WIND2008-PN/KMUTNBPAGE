import './App.css';
import { useParams, Link } from 'react-router-dom';

const teamData = {
  Building: {
    color: '#ff6f00',
    description: 'ทีม Building รับผิดชอบการออกแบบและสร้างหุ่นยนต์ให้เท่ระเบิดแบบระเบิดจริงๆ',
    members: [
      { name: 'Aom', role: 'หัวหน้าทีม', img: '/public/monkey.png' },
      { name: 'Bank', role: 'ช่างเทคนิค', img: '/public/monkey.png' },
      { name: 'Mild', role: 'ออกแบบโครงสร้าง', img: '/public/monkey.png' },
    ],
  },
  Marketing: {
    color: '#ff6f00',
    description: 'ทีม Marketing ดูแลการประชาสัมพันธ์และนำเสนอผลงาน(มีม)ของทีมสู่สายตาคนภายนอก',
    members: [
      { name: 'Jane', role: 'หัวหน้าทีม', img: '/public/monkey.png' },
      { name: 'Fah', role: 'ครีเอทีฟ', img: '/public/monkey.png' },
      { name: 'Tle', role: 'ตัดต่อ/กราฟิก', img: '/public/monkey.png' },
    ],
  },
  Programming: {
    color: '#ff6f00',
    description: 'ทีม Programming พัฒนาซอฟต์แวร์และควบคุมการทำงานของหุ่นยนต์(บงการตามใจนึก)',
    members: [
      { name: 'ภาวิช', role: 'หัวหน้าทีม', img: '/public/monkey.png' },
      { name: 'Pond', role: 'AI Developer', img: '/public/monkey.png' },
      { name: 'Nina', role: 'Embedded Dev', img: '/public/monkey.png' },
      { name: 'Nina', role: 'Embedded Dev', img: '/public/monkey.png' },
      { name: 'Nina', role: 'Embedded Dev', img: '/public/monkey.png' }
    ],
  },
};

export default function TeamDetail() {
  const { team } = useParams();
  const info = teamData[team];
  if (!info) return <div className="App-container">ไม่พบทีมนี้</div>;
  return (
    <div className="robot-bg">
      <div className="App-container" style={{maxWidth: 700}}>
        <Link to="/" className="back-link">← กลับหน้าหลัก</Link>
        <div className="team-detail-card">
          <h1 style={{ color: info.color }}>{team}</h1>
          <p className="team-detail-desc">{info.description}</p>
          <h2 className="team-detail-member-title">สมาชิก</h2>
          <div className="member-cards">
            {info.members.map((m) => (
              <div className="member-card" key={m.name}>
                <div className="member-img-wrapper">
                  <img src={m.img} alt={m.name} className="member-img" />
                </div>
                <div className="member-info">
                  <div className="member-name">{m.name}</div>
                  <div className="member-role">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
