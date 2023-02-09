import { useState } from "react";

const Menubar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo-detail">
          <i className="bx bx-plus-medical"></i>
          <span className="logo_name">โรงพยาบาลตัวอย่าง</span>
        </div>
        <ul className="nav-links">
          <li className={activeLink === 1 ? "active" : ""}>
            <a href="#" onClick={() => handleLinkClick(1)}>
              <i className="bx bx-square"></i>
              <span className="link_name">กลับเมนูหลัก</span>
            </a>
          </li>
          <li className={activeLink === 2 ? "active" : "activeMain"}>
            <a href="#" onClick={() => handleLinkClick(2)}>
              <i className="bx bx-square"></i>
              <span className="link_name">งานบริหารทรัพย์สิน</span>
            </a>
          </li>
          <ul className="sub-menu">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">ข้อมูลครุภัณฑ์</a>
            </li>
            <li>
              <a href="#">ข้อมูลครุภัณฑ์เป็นชุด</a>
            </li>
            <li>
              <a href="/">
                <span>เบิกครุภัณฑ์</span>
              </a>
            </li>
            <ul className="sub-menu-list">
              <li>
                <a href="#">รายการเบิกจ่ายครุภัณฑ์</a>
              </li>
              <li className={activeLink === 22 ? "active" : ""}>
                <a href="#" onClick={() => handleLinkClick(22)}>บันทึกเบิกจ่ายครุภัณฑ์</a>
              </li>
              <li className={activeLink === 23 ? "active" : ""}>
                <a href="/Disbursement" onClick={() => handleLinkClick(23)}>
                  อนุมัติเบิกจ่ายครุภัณฑ์
                </a>
              </li>
            </ul>
            <li>
              <a href="#">
                <span>ยืม-คืน ครุภัณฑ์</span>
              </a>
            </li>
            <ul className="sub-menu-list">
              <li>
                <a href="#">รายการยืม-คืน ครุภัณฑ์</a>
              </li>
              <li>
                <a href="#">บันทึกยืมครุภัณฑ์</a>
              </li>
              <li>
                <a href="#">อนุมัติยืมครุภัณฑ์</a>
              </li>
              <li>
                <a href="#">บันทึกคืนครุภัณฑ์</a>
              </li>
            </ul>
            <li>
              <a href="#">
                <span>โอนครุภัณฑ์/ย้ายสถานที่ตั้ง</span>
              </a>
            </li>
            <ul className="sub-menu-list">
              <li>
                <a href="#">รายการโอนครุภัณฑ์/ย้ายสถานที่ตั้ง</a>
              </li>
              <li>
                <a href="#">บันทึกโอนครุภัณฑ์/ย้ายสถานที่ตั้ง</a>
              </li>
              <li>
                <a href="#">อนุมัติโอนครุภัณฑ์/ย้ายสถานที่ตั้ง</a>
              </li>
            </ul>
            <li>
              <a href="#">
                <span>งานซ่อม</span>
              </a>
            </li>
            <ul className="sub-menu-list">
              <li>
                <a href="#">Dashboard งานซ่อม</a>
              </li>
              <li>
                <a href="#">เพิ่มการซ่อมบำรุง</a>
              </li>
              <li>
                <a href="#">ลงบันทึกรายละเอียดการซ่อม</a>
              </li>
              <li>
                <a href="#">บันทึกจ้างซ่อมภายนอก</a>
              </li>
              <li>
                <a href="#">ตรวจสอบการจ้างภายนอก</a>
              </li>
              <li>
                <a href="#">ประวัติการซ่อม</a>
              </li>
            </ul>
          </ul>
        </ul>
      </nav>
    </>
  );
};

export default Menubar;
