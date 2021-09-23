import React from 'react'

function HistoryPage(props) {

    return (
        <div style={{ width: '80%', margin: '3rem auto' }}>
            <div >
                <h2>마이페이지/주문내역</h2>
            </div>
            <br />

            <table>
                <thead>
                    <tr style={{backgroundColor: '#FAFAFA' }}>
                        <th style={{ textAlign: 'center' }}>주문번호</th>
                        <th style={{ textAlign: 'center' }}>마트명</th>
                        <th style={{ textAlign: 'center' }}>주문정보</th>
                        <th style={{ textAlign: 'center' }}>금액</th>
                        <th style={{ textAlign: 'center' }}>주문일자</th>
                    </tr>
                </thead>

                <tbody>

                    {props.user.userData && props.user.userData.history &&
                        props.user.userData.history.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.mart}</td>
                                <td>{item.id}  {item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.dateOfPurchase}</td>
                            </tr>
                        ))}


                </tbody>
            </table>
        </div>
/*
{     ShowSuccess ?
    <Result
        status="success"
        title="성공적으로 상품구매가 완료되었습니다"
    />
    :
    <>
        <br />
        <Empty description={false} /> 
       <div style={{ textAlign: 'center' }}>주문내역이 없습니다.</div>
    <hr />
    </>
    }
    
    
        )
        */
    )
}

export default HistoryPage
