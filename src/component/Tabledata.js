import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

// Modal
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

//Component
import Form_report from "./Form_report";

const Tabledata = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 5,
  };

  const columns = [
    { id: "id", label: "ลำดับ", minWidth: 70, align: "center" },
    { id: "code", label: "เลขครุภัณฑ์", minWidth: 90, align: "center" },
    {
      id: "name",
      label: "ชื่อครุภัณฑ์",
      minWidth: 130,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "size",
      label: "ยี่ห้อ/รุ่น/ขนาด",
      minWidth: 130,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "sn",
      label: "Serial No.",
      minWidth: 140,
      align: "center",
      format: (value) => value.toFixed(2),
    },
    {
      id: "name_sell",
      label: "ผู้ผลิต/ผู้จำหน่าย",
      minWidth: 150,
      align: "center",
      format: (value) => value.toFixed(2),
    },
    {
      id: "ea",
      label: "จำนวน",
      minWidth: 80,
      align: "center",
      format: (value) => value.toFixed(2),
    },
    {
      id: "cash",
      label: "จำนวนเงิน",
      minWidth: 100,
      align: "center",
      format: (value) => value.toFixed(2),
    },
    {
      id: "action",
      label: "Action",
      minWidth: 100,
      align: "center",
    },
  ];

  function createData(id, code, name, size, sn, name_sell, ea, cash) {
    return { id, code, name, size, sn, name_sell, ea, cash };
  }

  const [rows, setRows] = React.useState([
    createData(
      "1",
      "xxxxxxxxxxx",
      "India",
      "20",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxxx"
    ),
    createData(
      "2",
      "xxxxxxxxxxx",
      "India",
      "20",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxxx"
    ),
    createData(
      "3",
      "xxxxxxxxxxx",
      "India",
      "20",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxxx"
    ),
    createData(
      "4",
      "xxxxxxxxxxx",
      "India",
      "20",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxxx"
    ),
    createData(
      "5",
      "xxxxxxxxxxx",
      "India",
      "20",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxxx"
    ),
    createData(
      "6",
      "xxxxxxxxxxx",
      "India",
      "20",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxxx"
    ),
    createData(
      "7",
      "xxxxxxxxxxx",
      "India",
      "20",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxxx"
    ),
    createData(
      "8",
      "xxxxxxxxxxx",
      "India",
      "20",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxxx"
    ),
    createData(
      "9",
      "xxxxxxxxxxx",
      "India",
      "20",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxxx"
    ),
    createData(
      "10",
      "xxxxxxxxxxx",
      "India",
      "20",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxx",
      "xxxxxxxxxxx"
    ),
  ]);

  // Modal

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [code, setCode] = React.useState("");
  const [name, setName] = React.useState("");
  const [size, setSize] = React.useState("");
  const [sn, setSn] = React.useState("");
  const [name_sell, setNameSell] = React.useState("");
  const [ea, setEa] = React.useState("");
  const [cash, setCash] = React.useState("");

  //Table

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const newRows = rows.filter((row) => row.id !== id);
      setRows(newRows);
    }
  };

  const handleRowAdd = () => {
    if(window.confirm("Are you sure you want to delete this item?")){
      setRows([
        ...rows,
        {
          id: rows.length + 1,
          code: code,
          name: name,
          size: size,
          sn: sn,
          name_sell: name_sell,
          ea: ea,
          cash: cash,
        },
      ]);
      setCode("");
      setName("");
      setSize("");
      setSn("");
      setNameSell("");
      setEa("");
      setCash("");
      handleClose();
    }
  };

  return (
    <div className="report-form">
      <Form_report />
      {/* ! ตารางรายงานบันทึกใบเบิกครุภัณฑ์ */}
      <div className="report-table">
        <div className="header-form">
          <span className="main-name">รายการบันทึกใบเบิกครุภัณฑ์</span>
          <div className="btn-header">
            <button className="btn-save-table" onClick={handleOpen}>
              บันทึกใบเบิกครุภัณฑ์
            </button>
          </div>
        </div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 300 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, color: "#079307" }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === "action" ? (
                                <IconButton
                                  aria-label="delete"
                                  onClick={() => handleDelete(row.id)}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              ) : column.format && typeof value === "number" ? (
                                column.format(value)
                              ) : (
                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>

      {/* //Modal */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            บันทึกใบเบิกครุภัณฑ์
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="grid-control">
              <div className="form-input">
                <div className="form-control">
                  <label>เลขครุภัณฑ์</label>
                  <TextField
                    id="outlined-size-small"
                    name="code"
                    value={code}
                    placeholder="เลขครุภัณฑ์"
                    size="small"
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                  />
                  <label>ชื่อครุภัณฑ์</label>
                  <TextField
                    id="outlined-size-small"
                    name="name"
                    value={name}
                    placeholder="ชื่อครุภัณฑ์"
                    size="small"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <label>ยี่ห้อ</label>
                  <TextField
                    id="outlined-size-small"
                    name="size"
                    value={size}
                    placeholder="ยี่ห้อ"
                    size="small"
                    onChange={(e) => {
                      setSize(e.target.value);
                    }}
                  />
                  <label>Serial No.</label>
                  <TextField
                    id="outlined-size-small"
                    name="sn"
                    value={sn}
                    placeholder="Serial No."
                    size="small"
                    onChange={(e) => {
                      setSn(e.target.value);
                    }}
                  />
                  <label>ผู้ผลิต/ผู้จำหน่าย</label>
                  <TextField
                    id="outlined-size-small"
                    name="name_sell"
                    value={name_sell}
                    placeholder="ผู้ผลิต/ผู้จำหน่าย"
                    size="small"
                    onChange={(e) => {
                      setNameSell(e.target.value);
                    }}
                  />
                  <label>จำนวน</label>
                  <TextField
                    id="outlined-size-small"
                    name="ea"
                    value={ea}
                    placeholder="จำนวน"
                    size="small"
                    onChange={(e) => {
                      setEa(e.target.value);
                    }}
                  />
                  <label>จำนวนเงิน</label>
                  <TextField
                    id="outlined-size-small"
                    name="cash"
                    value={cash}
                    placeholder="จำนวนเงิน"
                    size="small"
                    onChange={(e) => {
                      setCash(e.target.value);
                    }}
                  />
                </div>
                <div className="form-control-btn">
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleRowAdd}
                >
                  บันทึก
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleClose}
                >
                  ยกเลิก
                </Button>
                </div>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default Tabledata;
