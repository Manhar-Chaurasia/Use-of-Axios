import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './axiosprac.css';

let AxiosPrac = () => {
    let [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((respone) => {
            setData(respone.data);
        }).catch((error) => {
            alert("Error in fetching.... Wait for some time!")
        })
    })

    return (
        <>
            <div className="main">
                <h1>Fetching data from API🚀</h1>
                <h1>(Using Axios, ReactJs)</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>ZipCode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((currElem) => {
                                return (
                                    <>
                                        <tr key={currElem.id}>
                                            <td>{currElem.id}.</td>
                                            <td>{currElem.name}</td>
                                            <td>{currElem.email}</td>
                                            <td>{currElem.address.city}</td>
                                            <td>{currElem.address.zipcode}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default AxiosPrac;