import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Form_report = () => {

  // Formdata
  const [data, setData] = React.useState({
      id_name: '',
      name_num: '',
      doc_name: '',
      agency: '',
      user: '',
      value: new dayjs(),
      description: '',
      cash: '',
      valueYear: new dayjs(),
  });

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleDateChange = (date,name) => {
    setData({
      ...data,
      [name]:date
    });
  };

  const handleSubmit = event => {
    if(window.confirm("Are you sure you want to insert this item?")){
      event.preventDefault();
      console.log(data);
      setData({
        id_name: '',
        name_num: '',
        doc_name: '',
        agency: '',
        user: '',
        value: new dayjs(),
        description: '',
        cash: '',
        valueYear: new dayjs(),
      });
    }
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="header-form">
        <span className="main-name">รายการรออนุมัติเบิกจ่ายครุภัณฑ์</span>
        <div className="btn-header">
          <button className="btn-view">ดูรายละเอียด</button>
          <button className="btn-print">พิมพ์</button>
        </div>
      </div>
      <div className="header-form-sub">
        <span className="main-name-sub">บันทึกใบเบิกครุภัณฑ์</span>
        <button className="btn-save" onClick={handleSubmit}>บันทึก</button>
      </div>
      <div className="grid-control">
        <form className="form-input">
          <div className="form-control">
            <label>ID ใบเบิก</label>
            <TextField
              id="outlined-size-small"
              name="id_name"
              value={data.id_name}
              placeholder="ID ใบเบิก"
              size="small"
              onChange={handleChange}
            />
            <label>เลขที่ใบเบิก</label>
            <TextField
              id="outlined-size-small"
              name="name_num"
              value={data.name_num}
              placeholder="เลขที่ใบเบิก"
              size="small"
              onChange={handleChange}
            />
            <label>ทะเบียนเอกสาร</label>
            <TextField
              id="outlined-size-small"
              name="doc_name"
              value={data.doc_name}
              placeholder="ทะเบียนเอกสาร"
              size="small"
              onChange={handleChange}
            />
            <label>หน่วยงาน</label>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">หน่วยงาน</InputLabel>
              <Select
                id="demo-select-small"
                name="agency"
                value={data.agency}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"หน่วยงาน1"}>หน่วยงาน 1</MenuItem>
                <MenuItem value={"หน่วยงาน2"}>หน่วยงาน 2</MenuItem>
                <MenuItem value={"หน่วยงาน3"}>หน่วยงาน 3</MenuItem>
              </Select>
            </FormControl>
            <label>ผู้มีสิทธ์</label>
            <TextField
              id="outlined-size-small"
              name="user"
              value={data.user}
              placeholder="ผู้มีสิทธ์"
              size="small"
              onChange={handleChange}
            />
            <label>วันที่เบิก</label>
            <DateTimePicker
              renderInput={(params) => <TextField {...params} />}
              name="value"
              value={data.value}
              inputFormat="D/MM/YYYY hh:mm A"
              onChange={date => handleDateChange(date, "value")}

            />
            <label>หน่วยงาน</label>
            <TextField
              id="outlined-multiline-static"
              multiline
              name="description"
              value={data.description}
              rows={4}
              placeholder="หน่วยงาน"
              onChange={handleChange}
            />
            <label>จำนวนเงิน</label>
            <div className="input_cash">
              <TextField
                id="outlined-size-small"
                name="cash"
                value={data.cash}
                placeholder="จำนวนเงิน"
                size="small"
                onChange={handleChange}
              />
              <label>บาท</label>
            </div>
            <label>เลือกปีงบประมาณ</label>
            <DateTimePicker
              renderInput={(params) => <TextField {...params} />}
              name="valueYear"
              value={data.valueYear}
              inputFormat=" D/MM/YYYY hh:mm A"
              onChange={date => handleDateChange(date, "valueYear")}
            />
          </div>
        </form>
      </div>
    </LocalizationProvider>
  );
};
export default Form_report;
