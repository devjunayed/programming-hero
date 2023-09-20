import { useEffect, useState } from "react";
import axios from 'axios';
import { BarChart, Bar,  YAxis, XAxis,  Tooltip } from "recharts";
// import {Audio} from 'react-loader-spinner';

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data));
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(phonesWithFakeData);
        });
    }, [])

    return (
        <div>
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <BarChart width={1050} height={400} data={phones}>
                <Bar dataKey="price" fill="gray"></Bar>
                <Tooltip></Tooltip>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default Phones;