import {
  LOGIN,
  LOGIN_INIT,
  LOGIN_END,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_INIT,
  REGISTER_END,
  APPLY_FAIL,
  APPLY_SUCCESS,
  APPLY_INIT,
  APPLY_END,
} from "./actionsConstant";
import axios from "axios";
import { message } from "antd";

const BASE_URL = "http://localhost:8080/api/turntablexe/";

// const BASE_URL = "https://turntablexebackend.herokuapp.com/api/turntablexe/";

const email_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const logininit = () => ({
  type: LOGIN_INIT,
});

export const loginend = () => ({
  type: LOGIN_END,
});

export const login = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const registerinit = () => ({
  type: REGISTER_INIT,
});

export const registerend = () => ({
  type: REGISTER_END,
});

export const register_succes = () => {
  return {
    type: REGISTER_SUCCESS,
  };
};

export const register_fail = () => {
  return {
    type: REGISTER_FAIL,
  };
};

export const apply_init = () => {
  return {
    type: APPLY_INIT,
  };
};

export const apply_end = () => {
  return {
    type: APPLY_END,
  };
};
export const apply_succes = () => {
  return {
    type: APPLY_SUCCESS,
  };
};

export const apply_fail = () => {
  return {
    type: APPLY_FAIL,
  };
};

export const loginUser = (email, password) => (dispatch) => {
  if (email.length > 0 && password.length >= 6 && email.match(email_re)) {
    dispatch(logininit());
    axios
      .post(BASE_URL + "login", { email, password })
      .then((res) => {
        const { id, email } = res.data;

        if (res.data === "Wrong username/password") {
          dispatch(loginend());
          message.info("Wrong Email/password");
        } else if (res.data === "Activate account from your email") {
          dispatch(loginend());
          message.info("Activate account from your email");
        } else {
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("email", res.data.email);
          dispatch(login(res.data));
        }
      })
      .catch((err) => {
        dispatch(loginend());
      });
  } else {
    message.warn("Invalid Email or Password");
  }
};

export const register = (email, password, confirmPassword) => (dispatch) => {
  dispatch(registerinit());
  axios
    .post(BASE_URL + "register", {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })
    .then((res) => {
      if (res.data === "Email already exist") {
        dispatch(registerend());
        message.error("Email Already Exist");
        dispatch(register_fail());
      } else if (res.data !== "") {
        const { id, email, password } = res.data;
        dispatch(registerend());
        message.success("Registration Successful Check email to activate account");
        dispatch(register_succes());
      }
    })
    .catch((err) => {
      dispatch(registerend());
    });
};

const sendEmail = ( applicantId )=>{
  return (dispatch) => {
    axios.get(`/applicants/SuccessfulApplication/${applicantId}`)
    .then(res=>{
      if (res.data === "Successful Email Sent") {
        message.info("Email sent");
      }
    })
  }
}


export const toggleStatus = () => {axios.get(`${BASE_URL}/getToggleStatus`)
  .then(res => {console.log(res.data) 
    const status = res.data[0].data
    localStorage.setItem("status", status)
    console.log(status)
  } )
  .catch((e) => e)
}


export const submitApplicantData = (
  id,
  first_name,
  middle_name,
  last_name,
  nickname,
  email,
  dob,
  gender,
  university,
  year_of_graduation,
  address1,
  address2,
  city,
  region,
  zip_code,
  ssnit_number,
  nss_number,
  phone_number,
  whatsApp_number,
  referral
) => (dispatch) => {
  dispatch(apply_init());
  axios
    .put(BASE_URL + `applicants/${id}`, {
      first_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      nickname: nickname,
      email: email,
      dob: dob,
      gender: gender,
      university: university,
      year_of_graduation: year_of_graduation,
      address1: address1,
      address2: address2,
      city: city,
      region: region,
      zip_code: zip_code,
      ssnit_number: ssnit_number,
      nss_number: nss_number,
      phone_number: phone_number,
      whatsApp_number: whatsApp_number,
      referral: referral,
    })
    .then((res) => {
      console.log(res.data);
      if (res.data === "User data saved") {
        message.info("User data saved");
        dispatch(apply_end());
        sendEmail(id)
      } else {
        message.info("Sorry your profile is deleted");
        dispatch(apply_end());
        localStorage.clear();
      }
    })
    .catch((err) => err);
};
