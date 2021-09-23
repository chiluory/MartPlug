import React from 'react'
import { Result, Button } from 'antd';
import Image from '../../Images/check.svg';


function ResultSuccess() {
    return (
        <Result
    status="success"
    title="주문이 성공적으로 완료되었습니다. 주문 내역 및 배송에 관한 안내는 마이페이지를 통하여 확인 가능합니다."
    extra={[
      <Button type="primary" key="console">
       홈으로＞
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
    )
}

export default ResultSuccess


