import React from "react";
import moment from "moment";
import SignupBtn from '../../Images/Button/btn_mykeepin_signup.png';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { registerUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";

import {
  Form,
  Radio ,
  Button,
} from 'antd';

import RadioButton from "antd/lib/radio/radioButton";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegisterPage_(props) {
  const dispatch = useDispatch();
  return (

    <Formik
      initialValues={{
        agree: ''
      }}
      validationSchema={Yup.object().shape({
       agree: Yup.string()
          .required('서비스 이용 약관에 동의 해주셔야 회원가입이 가능합니다.')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            agree: values.agree, //이용약관동의
            image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`
          };

          dispatch(registerUser(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg)
            }
          })

          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          isSubmitting,
          handleSubmit
    
        } = props;
        return (
          <div className="app">
            <h2>Mart Plug</h2>
            <br />
            <h3>서비스 이용 약관에 동의 해주세요.</h3>
            <hr />
            <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >
            <Form.Item required label="서비스 이용 약관"> 
            </Form.Item>
            
            <Radio>서비스 이용 약관 </Radio>

            <h5>MYKEEPIN으로 간편하게 회원가입 할 수 있습니다.</h5>

              <Form.Item {...tailFormItemLayout}>
                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                <img src={SignupBtn} /> 
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};


export default RegisterPage_
