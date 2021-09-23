import React from 'react'
import { Result, Button } from 'antd';
import Image from '../../Images/check.svg';


function ResultSuccess() {
    return (
        <Result
    status="success"
    title="회원가입이 완료되었습니다 이제 마트 플러그를 자유롭게 이용하실 수 있습니다."
    extra={
      <Button type="primary" key="console">
       홈으로＞
      </Button>}
  />
    )
}

export default ResultSuccess


