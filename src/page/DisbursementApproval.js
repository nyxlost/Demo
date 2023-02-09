import "../css/DisbursementPage.css";
import "../App.css";
import Footer from "../component/Footer";
import Tabledata from "../component/Tabledata";
import ReportApprove from "../component/ReportApprove";
import ReportDaily from "../component/ReportDaily";
import Form from "../component/Form";
import Container from "../component/Container";

const DisbursementApproval = () => {
  return (
    <Form>
      <Container>
        <div className="topic-name">
          <label className="main-name">อนุมัติใบเบิกครุภัณฑ์</label>
        </div>
      </Container>
      <Container>
        <ReportDaily />
      </Container>
      <div className="grid-form">
        <Container>
          <ReportApprove />
        </Container>
        <Container>
          <Tabledata/>
        </Container>
      </div>
      <Container>
        <Footer />
      </Container>
    </Form>
  );
};
export default DisbursementApproval;
