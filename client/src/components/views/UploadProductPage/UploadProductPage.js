import React, { useState } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';
const { TextArea } = Input;

const Categorys = [
    { key: 1, value: "채소·과일·견과·쌀" },
    { key: 2, value: "수산·해산·건어물" },
    { key: 3, value: "정육·계란" },
    { key: 4, value: "간편식" },
    { key: 5, value: "면·양념·오일" },
    { key: 6, value: "생수·음료·우유·커피" },
    { key: 7, value: "간식·과자·떡" },
    { key: 8, value: "건강식품" },
    { key: 9, value: "생활용품·리빙" }
]

function UploadProductPage(props) {

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Category, setCategory] = useState(1)
    const [Images, setImages] = useState([])

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }

    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }

    const categoryChangeHandler = (event) => {
        setCategory(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!Title || !Description || !Price || !Category || Images.length === 0) {
            return alert(" 모든 값을 넣어주셔야 합니다.")
        }


        //서버에 채운 값들을 request로 보낸다.

        const body = {
            writer: props.user.userData._id,  //로그인 된 사람의 ID 
            title: Title,
            description: Description,
            price: Price,
            images: Images,
            categorys: Category
        }

        Axios.post('/api/product', body)
            .then(response => {
                if (response.data.success) {
                    alert('상품 업로드에 성공 했습니다.')
                    props.history.push('/')
                } else {
                    alert('상품 업로드에 실패 했습니다.')
                }
            })
    }


    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2> 상품 업로드</h2>
            </div>

            <Form onSubmit={submitHandler}>
                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>상품명</label>
                <Input onChange={titleChangeHandler} value={Title} />
                <br />
                <br />
                <label>상품설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description} />
                <br />
                <br />
                <label>가격(원)</label>
                <Input type="number" onChange={priceChangeHandler} value={Price} />
                <br />
                <br />
                <select onChange={categoryChangeHandler} value={Category}>
                    {Categorys.map(item => (
                        <option key={item.key} value={item.key}> {item.value}</option>
                    ))}
                </select>
                <br />
                <br />
                <Button type="submit">
                    확인
                </Button>
            </Form>

        </div>
    )
}

export default UploadProductPage
