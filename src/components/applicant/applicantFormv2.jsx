import React, { Component } from "react";
import { connect } from "react-redux";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col, FormGroup, Input, Label } from "reactstrap";
import { submitApplicantData } from "../../service/actions/actions";
import "bootstrap/dist/css/bootstrap.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FileUpload from "./fileUpload";
import { Modal } from "antd";
import { css } from "@emotion/core";
import ClockLoader from "react-spinners/ClockLoader";
import { message, Select, DatePicker } from "antd";
import { UniversityNames } from "./schoolData";
import "antd/dist/antd.css";
import { Helmet } from "react-helmet";

// First component
class FirstStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      middle_name: null,
      last_name: null,
      nick_name: null,
      date_of_birth: null,
      gender: null,
    };
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  isValidated() {
    const { first_name, last_name, date_of_birth, gender } = this.state;
    if (
      first_name !== null &&
      last_name !== null &&
      date_of_birth.length !== null &&
      gender !== null
    ) {
      return true;
    } else {
      message.error("All required fields must be completed");
      return false;
    }
  }
  render() {
    const {
      first_name,
      middle_name,
      last_name,
      nick_name,
      date_of_birth,
      gender,
    } = this.state;
    return (
      <Container className="fallcack">
        <Row>
          <Col xs={12} md={6} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="first_name">
                First Name <span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Enter first name"
                value={first_name}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>

          <Col xs={12} md={6} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="middle_name">Middle Name</Label>
              <Input
                type="text"
                name="middle_name"
                id="middle_name"
                placeholder="Enter middle name"
                value={middle_name}
                onChange={this.onChangeHandler}
                required
              />
            </FormGroup>
          </Col>
          <Col xs={12} md={6} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="last_name">
                Last Name <span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Enter last name"
                value={last_name}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>
          <Col xs={12} md={6} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="nick_name">Nick Name</Label>
              <Input
                type="text"
                name="nick_name"
                id="nick_name"
                placeholder="Enter nick name"
                value={nick_name}
                onChange={this.onChangeHandler}
                required
              />
            </FormGroup>
          </Col>

          <Col xs={12} md={6} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="last_name">
                Date of Birth <span className="text-danger">*</span>
              </Label>
              <Input
                type="date"
                name="date_of_birth"
                id="date_of_birth"
                min="2005-01-01"
                value={date_of_birth}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>
          <Col xs={12} md={6} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="exampleSelectMulti">
                Select Gender <span className="text-danger">*</span>
              </Label>
              <Input
                type="select"
                name="gender"
                id="exampleSelectMulti"
                value={gender}
                onChange={this.onChangeHandler}
              >
                <option>--Select Gender--</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
// =====================end of first component==================

// =================Second component=========================
class SecondStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: null,
      address2: null,
      city: null,
      region: null,
      zip_code: null,
      phone_number: null,
      phone_number2: null,
    };
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onChangeHandlerPh1 = (value) => {
    this.setState({ phone_number: value });
  };

  onChangeHandlerPh2 = (value) => {
    this.setState({ phone_number2: value });
  };

  isValidated() {
    const { address1, city, region, phone_number } = this.state;
    if (
      address1 !== null &&
      city !== null &&
      region !== null &&
      phone_number.length
    ) {
      return true;
    } else {
      message.error("All required fields must be completed");
      return false;
    }
  }
  render() {
    const { address1, address2, city, region, zip_code } = this.state;
    return (
      <Container>
        <Row>
          <Col xs={12} md={6} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="address1">
                Street Address Line 1<span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                name="address1"
                id="address1"
                placeholder="Street Address Line 1"
                value={address1}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>

          <Col xs={12} md={6} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="address2">Street Address Line 2</Label>
              <Input
                type="text"
                name="address2"
                id="address12"
                placeholder="Street Address Line 2"
                value={address2}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>

          <Col xs={12} md={4} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="city">
                City <span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                name="city"
                id="city"
                placeholder=" Enter city"
                value={city}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>

          <Col xs={12} md={4} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="address2">
                Region <span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                name="region"
                id="region"
                placeholder=" Enter region"
                value={region}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>

          <Col xs={12} md={4} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="zip_code">Zip Code</Label>
              <Input
                type="text"
                name="zip_code"
                id="zip_code"
                placeholder=" Enter zip code"
                value={zip_code}
                onChange={this.onChangeHandler}
                required
              />
            </FormGroup>
          </Col>

          <Col xs={12} md={6} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="phone_number">
                Phone Number <span className="text-danger">*</span>
              </Label>
              <PhoneInput
                country="gh"
                inputStyle={{ width: "100%" }}
                onChange={this.onChangeHandlerPh1}
                countryCodeEditable={false}
                enableAreaCodes={true}
                enableSearch={true}
                enableTerritories={true}
                enableAreaCodeStretch
              />
            </FormGroup>
          </Col>

          <Col xs={12} md={6} className="ml-auto mr-auto">
            <FormGroup>
              <Label for="phone_number2">
                WhatsApp Number <span className="text-danger">*</span>
              </Label>
              <PhoneInput
                country="gh"
                inputStyle={{ width: "100%" }}
                onChange={this.onChangeHandlerPh2}
                countryCodeEditable={false}
                enableAreaCodes={true}
                enableSearch={true}
                enableTerritories={true}
                enableAreaCodeStretch
              />
            </FormGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
// ===============End of secon component==========================

// ===========Third component================================
class ThirdStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      university: null,
      year_graduated: null,
      nss_number: null,
      snnit_number: null,
      nss_status: () => <></>,
      ssnit_status: () => <></>,
    };
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onChangeHandler1 = (date, dateString) => {
    this.setState({ year_graduated: dateString });
  };

  onChangeHandler2 = (value) => {
    this.setState({ university: value });
  };
  nss_statusHandler = (event) => {
    let checked = event.target.checked;

    if (checked) {
      this.setState({
        nss_status: () => (
          <FormGroup>
            <hr />
            <Input
              type="text"
              name="nss_number"
              placeholder="Enter NSS number"
              value={this.state.nss_number}
              onChange={this.onChangeHandler}
              required
            />
          </FormGroup>
        ),
      });
    } else {
      this.setState({ nss_status: () => <></> });
    }
  };

  ssnit_statusHandler = (event) => {
    let checked = event.target.checked;

    if (checked) {
      this.setState({
        ssnit_status: () => (
          <FormGroup>
            <hr />
            <Input
              type="text"
              name="snnit_number"
              placeholder="Enter SSNIT number"
              value={this.state.snnit_number}
              onChange={this.onChangeHandler}
            />
          </FormGroup>
        ),
      });
    } else {
      this.setState({ ssnit_status: () => <></> });
    }
  };

  isValidated() {
    const { university, year_graduated } = this.state;
    if (university !== null && year_graduated !== null) {
      return true;
    } else {
      message.error("All required fields must be completed");
      return false;
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={6} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="university">
                University Name <span className="text-danger">*</span>
              </Label>
              <Select
                placeholder="Name of university"
                style={{ width: "100%" }}
                showSearch
                onChange={this.onChangeHandler2}
              >
                {UniversityNames.map((data, key) => (
                  <Select.Option key={key} value={data}>
                    {" "}
                    {data}
                  </Select.Option>
                ))}
              </Select>
            </FormGroup>
          </Col>

          <Col xs={12} md={6} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="year_graduated">
                Year Graduated <span className="text-danger">*</span>
              </Label>
              <DatePicker
                picker="year"
                style={{ width: "100%" }}
                onChange={this.onChangeHandler1}
              />
            </FormGroup>
          </Col>

          <Col xs={12} md={6} className="mr-auto ml-auto">
            <FormGroup check>
              <Label check>
                <Input type="checkbox" onClick={this.nss_statusHandler} /> Are
                you doing NSS?
              </Label>
            </FormGroup>
            {this.state.nss_status()}
          </Col>

          <Col xs={12} md={6} className="mr-auto ml-auto">
            <FormGroup check>
              <Label check>
                <Input type="checkbox" onClick={this.ssnit_statusHandler} /> Do
                you have SSNIT number?
              </Label>
            </FormGroup>
            {this.state.ssnit_status()}
          </Col>
        </Row>
      </Container>
    );
  }
}
// ====================end of third component================

// ====================Fourth component====================
class FourthStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommender: null,
      selectedFile: [],
    };
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={6} className="mr-auto ml-auto">
            <FormGroup>
              <Label for="recommender">Referral fullname</Label>
              <Input
                type="text"
                name="recommender"
                id="recommender"
                placeholder="Enter referral fullname"
                value={this.state.recommender}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>

          <Col xs={12} md={6} className="mr-auto ml-auto">
            <br />
            <FileUpload
              id={localStorage.getItem("id")}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

var steps = [
  {
    stepName: "Personal_Information",
    component: FirstStep,
  },

  {
    stepName: "Address",
    component: SecondStep,
  },

  {
    stepName: "Employment",
    component: ThirdStep,
  },
  {
    stepName: "CV",
    component: FourthStep,
  },
];

class Applicant extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    loader: () => <></>,
  };

  finishButtonClick = (allStates) => {
    const { Address, Personal_Information, Employment, CV } = allStates;
    const {
      date_of_birth,
      first_name,
      gender,
      last_name,
      middle_name,
      nick_name,
    } = Personal_Information;
    const {
      address1,
      address2,
      city,
      phone_number,
      phone_number2,
      region,
      zip_code,
    } = Address;
    const { nss_number, snnit_number, university, year_graduated } = Employment;
    const { recommender } = CV;

    this.props.dispatch(
      submitApplicantData(
        localStorage.getItem("id"),
        first_name,
        middle_name,
        last_name,
        nick_name,
        localStorage.getItem("email"),
        date_of_birth,
        gender,
        university,
        year_graduated,
        address1,
        address2,
        city,
        region,
        zip_code,
        snnit_number,
        nss_number,
        phone_number,
        phone_number2,
        recommender
      )
    );
  };

  load = () => {
    const override = css`
      display: block;
      margin: 0 auto;
    `;
    return (
      <Modal
        visible={this.props.apply_init}
        closable={false}
        footer={null}
        centered={true}
        width="80"
      >
        <ClockLoader css={override} size={100} color={" #00ffff"} />
      </Modal>
    );
  };

  render() {
    return (
      <a id="myform">
        <Helmet>
          <title>Jobs</title>
        </Helmet>
        {this.props.apply_init ? this.load() : this.state.loader()}
        <div id="form" className="fallback">
          <div className="contain">
            <ReactWizard
              steps={steps}
              title="TURNTABL APPLICANT FORM"
              headerTextCenter
              validate
              finishButtonClick={this.finishButtonClick}
            />
          </div>
        </div>
      </a>
    );
  }
}

ReactWizard.defaultProps = {
  validate: true,
  previousButtonText: "Previous",
  finishButtonText: "Finish",
  nextButtonText: "Next",
  color: "primary",
  progressbar: false,
  title: "TURNTABL APPLICANT FORM",
  headerTextCenter: true,
};

const mapStateToProps = (state) => ({
  apply_init: state.Apply.init,
});

export default connect(mapStateToProps)(Applicant);
