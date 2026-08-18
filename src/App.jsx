import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "12345678") {
      setPage("profile");
    } else {
      alert("Username หรือ Password ไม่ถูกต้อง");
    }
  };

  const logout = () => {
    setUsername("");
    setPassword("");
    setPage("login");
  };

  if (page === "login") {
    return (
      <div className="login-page">
        <div className="login-box">
          <div className="login-icon">⚔️</div>

          <h1>CHARACTER WORLD</h1>
          <p>เข้าสู่ระบบเพื่อดูประวัติตัวละคร</p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                placeholder="กรอก Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="กรอก Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="login-button">
              LOGIN
            </button>
          </form>

          <p className="login-hint">
            Username: admin<br />
            Password: 12345678
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">

      <nav className="navbar">
        <div className="logo">CHARACTER WORLD</div>

        <button onClick={logout} className="logout-button">
          LOGOUT
        </button>
      </nav>

      <main className="profile-container">

        <section className="character-card">

          <div className="character-image-box">
            <img
              src="/character.jpg"
              alt="Character"
              className="character-image"
            />
          </div>

          <div className="character-info">

            <span className="character-label">
              CHARACTER PROFILE
            </span>

            <h1>ชื่อ : Shadow Knight</h1>

            <p className="character-title">
              อัศวินแห่งเงามืด
            </p>

            <div className="info-box">
              <h2>ประวัติตัวละคร</h2>

              <p>
                Shadow Knight เป็นนักรบผู้ลึกลับ
                ที่เดินทางอยู่ในดินแดนแห่งสงคราม
                เขาเป็นอัศวินที่มีความสามารถในการใช้ดาบ
                และสามารถควบคุมพลังแห่งเงาได้
              </p>

              <p>
                ในอดีตเขาเคยเป็นผู้พิทักษ์อาณาจักร
                แต่หลังจากเหตุการณ์ครั้งใหญ่
                เขาจึงออกเดินทางเพื่อค้นหาความจริง
                และปกป้องผู้คนที่อ่อนแอ
              </p>
            </div>

          </div>

        </section>

        <section className="stats-section">

          <h2>ข้อมูลตัวละคร</h2>

          <div className="stats-grid">

            <div className="stat-box">
              <span>ชื่อ</span>
              <strong>Shadow Knight</strong>
            </div>

            <div className="stat-box">
              <span>อายุ</span>
              <strong>25 ปี</strong>
            </div>

            <div className="stat-box">
              <span>อาชีพ</span>
              <strong>อัศวิน</strong>
            </div>

            <div className="stat-box">
              <span>อาวุธ</span>
              <strong>Dark Sword</strong>
            </div>

            <div className="stat-box">
              <span>พลัง</span>
              <strong>Shadow Magic</strong>
            </div>

            <div className="stat-box">
              <span>เผ่าพันธุ์</span>
              <strong>Human</strong>
            </div>

          </div>

        </section>

        <section className="story-section">

          <h2>เรื่องราวของตัวละคร</h2>

          <p>
            เมื่ออาณาจักรถูกกองทัพปีศาจโจมตี
            Shadow Knight ได้กลับมายังสนามรบอีกครั้ง
            เพื่อหยุดยั้งสงครามและค้นหาความจริง
            เบื้องหลังเหตุการณ์ที่เกิดขึ้น
          </p>

        </section>

      </main>

      <footer>
        © 2026 Character World
      </footer>

    </div>
  );
}

export default App;