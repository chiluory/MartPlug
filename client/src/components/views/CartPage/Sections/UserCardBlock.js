import React from 'react'
import "./UserCardBlock.css"
import Quantity from "../../../../components/utils/Quantity";
import {Checkbox } from 'antd';



function UserCardBlock(props) {

    const renderCartImage = (images) => {
        if (images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }


    const [purchaseNum, setPurchaseNum] = React.useState(1);

    const renderItems = () => (
        props.products && props.products.map((product, index) => (
            <tr key={index}>
                <td><Checkbox></Checkbox></td>
                <td>
                    <img style={{ width: '70px' }} alt="product"
                        src={renderCartImage(product.images)} />
                        {product.title}
                </td>
                <td>
                <Quantity num={purchaseNum} setNum={setPurchaseNum}></Quantity>
                </td>
                <td>
                     {product.price}원
                </td>
                < td> {product.mart}
                </td>
                <td>
                    <button onClick={() => props.removeItem(product._id)}>
                        삭제
                    </button>
                </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr style={{backgroundColor: '#FAFAFA' }}>
                        <th style={{ textAlign: 'center' }}><Checkbox></Checkbox></th>
                        <th style={{ textAlign: 'center' }}>상품명/옵션</th>
                        <th style={{ textAlign: 'center' }}>수량</th>
                        <th style={{ textAlign: 'center' }}>판매가격</th>
                        <th style={{ textAlign: 'center' }}>마트명</th>
                        <th style={{ textAlign: 'center' }}>삭제</th>
                    </tr>
                </thead>

                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
