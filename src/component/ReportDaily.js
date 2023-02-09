const ReportDaily = () => {
  return (
    <div className="report-day">
      <div className="report-date">
        <div className="report-name">
          <span className="main-name">รายการเสนออนุมัติประจำวัน</span>
        </div>
        <div className="form-date-daily">
          <label>
            <input
              type="date"
              className="date-form"
              placeholder="11 มีนาคม 2562"
              value=""
            />
          </label>
          <label>
            <input
              type="text"
              className="date-form"
              placeholder="หน่วยงานที่เสนอ รหัส P4P"
            />
          </label>
          <label>
            <input type="text" className="date-form" placeholder="ดูทั้งหมด" />
          </label>
        </div>
      </div>
      <div className="report-block">
        <div className="block-1">
          <div className="block-2">
            <i className="bx bx-square"></i>
            <span className="link_name">ทั้งหมด</span>
          </div>
          <span className="link_rs">5</span>
        </div>
        <div className="block-1">
          <div className="block-2">
            <i className="bx bx-square"></i>
            <span className="link_name">รออนุมัติ</span>
          </div>
          <span className="link_rs">5</span>
        </div>
        <div className="block-1">
          <div className="block-2">
            <i className="bx bx-square"></i>
            <span className="link_name">อนุมัติแล้ว</span>
          </div>
          <span className="link_rs">5</span>
        </div>
        <div className="block-1">
          <div className="block-2">
            <i className="bx bx-square"></i>
            <span className="link_name">Reject</span>
          </div>
          <span className="link_rs">5</span>
        </div>
      </div>
    </div>
  );
};
export default ReportDaily;
