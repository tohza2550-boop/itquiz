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
          <div className="login-icon">⚔️🥶💀🧣</div>

          <h1>CHARACTER WEB</h1>
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
        <div className="logo">CHARACTER WEB</div>

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

            <h1>ชื่อ : Mikasa Ackerman</h1>

            <p className="character-title">
              ทหารรับจ้างในเงามืด
            </p>

            <div className="info-box">
              <h2>ประวัติตัวละคร</h2>

              <p>
                มิคาสะเคยอาศัยอยู่อย่างสงบสุขกับพ่อแม่ในเขตกำแพงมาเรีย จนกระทั่งวันหนึ่งพ่อแม่ของเธอถูกกลุ่มโจรโจรลักพาตัวฆ่าตาย
              </p>

              <p>
                ในเหตุการณ์นั้น เอเรน เยเกอร์ ได้เข้าช่วยชีวิตเธอไว้ และกระตุ้นสัญชาตญาณการต่อสู้ในตัวเธอ หลังจากนั้น กริชา เยเกอร์ (พ่อของเอเรน) จึงรับเธอมาเลี้ยงดูเหมือนลูกสาว และเอเรนได้มอบ "ผ้าพันคอสีแดง" ให้เธอไว้ ซึ่งกลายเป็นสิ่งสำคัญที่เธอใส่ติดตัวเสมอ
              </p>
            </div>

          </div>

        </section>

        <section className="stats-section">

          <h2>ข้อมูลตัวละคร</h2>

          <div className="stats-grid">

            <div className="stat-box">
              <span>ชื่อ</span>
              <strong>Mikasa Ackerman</strong>
            </div>

            <div className="stat-box">
              <span>อายุ</span>
              <strong>19 ปี</strong>
            </div>

            <div className="stat-box">
              <span>อาชีพ</span>
              <strong>ทหารสังกัดหน่วยสำรวจ</strong>
            </div>

            <div className="stat-box">
              <span>อาวุธ</span>
              <strong>ดาบคู่คัตเตอร์</strong>
            </div>

            <div className="stat-box">
              <span>พลัง</span>
              <strong>สัญชาตญาณความสามารถระดับอัจฉริยะ</strong>
            </div>

            <div className="stat-box">
              <span>เผ่าพันธุ์</span>
              <strong>มนุษย์ (ลูกครึ่งสายเลือดแอคเคอร์แมน)</strong>
            </div>

          </div>

        </section>

        <section className="story-section">

          <h2>เรื่องราวของตัวละคร</h2>

          <p>
            มิคาสะสูญเสียพ่อแม่ไปตั้งแต่เด็กจากเหตุการณ์ถูกกลุ่มโจรลักพาตัวฆ่าตายอย่างโหดเหี้ยม
            เธอได้รับการช่วยเหลือจาก เอเรน เยเกอร์ 
            เด็กชายที่เข้ามาร่วมสู้และจุดประกายสัญชาตญาณการต่อสู้ในตัวเธอให้ตื่นขึ้น
          </p>

        </section>

      </main>

      <footer>
        © 2026 Character WEB
      </footer>

    </div>
  );
}

export default App;