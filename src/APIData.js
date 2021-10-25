import React, { useEffect, useState } from 'react';

const APIData = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const actualData = await res.json();
        console.log(actualData.albumID=1);
        setData(actualData.albumID=1);
    }

    useEffect(() => {
        getAlbumID();
    }, []);
    return (

        <div>

            <h1>Images</h1>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Url</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return (
                                <tr>
                                    <td>{curElem.id}</td>
                                    <td>{curElem.title}</td>
                                    <td>{curElem.url}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

        </div>
    );

}

export default APIData;