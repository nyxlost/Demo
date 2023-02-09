const Header = () => {
  return (
    <div className="head-bar">
      <input
        type="text"
        className="search-input"
        placeholder="ID ใบเบิกจ่ายครุภัณฑ์"
      />
      <div className="profile">
        <i id="icon-1" className="bx bx-notification"></i>
        <i id="icon-2" className="bx bx-notification-off"></i>
        <i id="icon-3" className="bx bx-square"></i>
        <span>Phumiphat Oomkrathok</span>
        <i class="bx bxs-user-circle"></i>
      </div>
    </div>
  );
};
export default Header;
