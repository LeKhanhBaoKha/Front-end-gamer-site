import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
export default function LoadApi() {
    const [lists, setLists] = useState([]);
    
    const [tabs, setTabs] = useState([
        {
            name : 'Bài viết',
            api : 'posts'
        },
        {
            name : 'Bình luận',
            api : 'comments'
        },
        {
            name : 'Hình ảnh',
            api : 'photos'
        },
        {
            name : 'việc làm',
            api : 'todos'
        },
        {
            name : 'người dùng',
            api : 'users'
        },

    ])
    const [tabActive, setTabActive] = useState(0);
    console.log(tabActive);
    useEffect(() => {
        let api1 = tabs[tabActive].api;
        document.title = tabs[tabActive].name;
        axios.get(`https://jsonplaceholder.typicode.com/${api1}`).then(res => setLists(res.data));
    }, [tabActive]);
    return (
        <>
            {tabs.map((data,index) => <button className={tabActive === index ? 'btn btn-danger' : 'btn btn-primary'} onClick={() => setTabActive(index)}>{data.name}</button>)}
            <h1>{tabs[tabActive].name}</h1>
            {lists.map(data => <li>{data.title || data.name}</li>)}
        </>
    )
}          