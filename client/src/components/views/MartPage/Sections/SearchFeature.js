import React, { useState } from 'react'
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) {

    const [SearchTerm, setSearchTerm] = useState("")

    const searchHandler = (event) => {
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }

    return (
        <div>
            <Search
                placeholder="마트를 검색하세요."
                onChange={searchHandler}
                style={{ width: 200 }}
                value={SearchTerm}
            />
        </div>
    )
}

export default SearchFeature
