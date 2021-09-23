import React, { useState } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';
const { TextArea } = Input;

function UploadMartPage(props) {

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Images, setImages] = useState([])

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }

  

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!Title || !Description || Images.length === 0) {
            return alert(" 모든 값을 넣어주셔야 합니다.")
        }


        //서버에 채운 값들을 request로 보낸다.

        const body = {
            //로그인 된 사람의 ID 
            writer: props.user.userData._id,
            title: Title,
            description: Description,
            images: Images,
        }

        Axios.post('/api/mart', body)
            .then(response => {
                if (response.data.success) {
                    alert('마트 업로드에 성공 했습니다.')
                    props.history.push('/')
                } else {
                    alert('마트 업로드에 실패 했습니다.')
                }
            })
    }


    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2> 마트 업로드</h2>
            </div>

            <Form onSubmit={submitHandler}>
                <FileUpload refreshFunction={updateImages} />
                <br />
                <br />
                <label>마트명</label>
                <Input onChange={titleChangeHandler} value={Title} />
                <br />
                <br />
                <label>마트설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description} />
                <br />
                <br />
                <Button type="submit">
                    확인
                </Button>
            </Form>


        </div>
    )
}

export default UploadMartPage
