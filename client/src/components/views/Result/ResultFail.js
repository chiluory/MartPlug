import React from 'react'
import { Result, Button } from 'antd';
import Image from '../../Images/Error/Error.png';


function ResultFailPage() {
    return (
        <Result
        title="''에 대한 검색 결과가 없습니다 \n 다른 검색어로 검색하십시오"
        extra={
          <Button type="primary" key="console">
            Go Console
          </Button>
        }
      />
    )
}

export default ResultFail

