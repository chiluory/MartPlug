import React from 'react'
import { Result, Button } from 'antd';
import Image from '../../Images/Error/Error.png';


function ResultFailPage() {
    return (

        <Result
        status="warning"
        title="인증에 실패하였습니다."
        subTitle=" 오류코드 E-000001"
        extra={
          <Button type="primary" key="console">
            홈으로
          </Button>
       }
      />
    )
}

export default ResultFail