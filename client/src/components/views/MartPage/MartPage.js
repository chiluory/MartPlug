import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Col, Card, Row} from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider';



function MartPage() {

    const [Marts, setMarts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState(0)

    useEffect(() => {

        let body = {
            skip: Skip,
            limit: Limit
        }

        getMarts(body)

    }, [])

    const getMarts = (body) => {
        axios.post('/api/mart/marts', body)
            .then(response => {
                if (response.data.success) {
                    if (body.loadMore) {
                        setMarts([...Marts, ...response.data.martInfo])
                    } else {
                        setMarts(response.data.martInfo)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert(" 마트 리스트를 불러오는데 실패 했습니다.")
                }
            })
    }




    const loadMoreHanlder = () => {

        let skip = Skip + Limit
        let body = {
            skip: skip,
            limit: Limit,
            loadMore: true
        }

        getMarts(body)
        setSkip(skip)
    }


    const renderCards = Marts.map((mart, index) => {

        return <Col lg={6} md={8} xs={24} key={index}>
            <Card
                cover={<a href={`/mart/${mart._id}`} ><ImageSlider images={mart.images} /></a>}>
                <Meta
                    title={mart.title}
                    description={mart.info}
                />
            </Card>
        </Col>
    })




    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>

            {/* Cards */}


            <Row gutter={[16, 16]} >
                {renderCards}
            </Row>

            <br />

            {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={loadMoreHanlder}>더보기</button>
                </div>
            }

        </div>
    )
}

export default MartPage
