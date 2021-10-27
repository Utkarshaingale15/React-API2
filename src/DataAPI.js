import React, { useEffect, useState } from 'react';

const DataAPI = () => {

    const [data, setData] = useState([]);

    const getUserData = async () => {
        const res = await fetch('https://my-json-server.typicode.com/animeshroydev/SampleJSONPlaceholder/db');
        const actualData = await res.json();
        console.log(actualData.contacts);
        setData(actualData.contacts);
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (

        <div>
            <div className="table">
            <h1>Data Analysis</h1>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Phone</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return (
                                <tr>
                                    <td>{curElem.id}</td>
                                    <td>{curElem.name}</td>
                                    <td>{curElem.country}</td>
                                    <td>{curElem.phone}</td>
                                 </tr>   
                            );
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
    );

}

export default DataAPI;
