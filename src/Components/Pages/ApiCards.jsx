// import { Try } from '@mui/icons-material'
// import axios from 'axios'
// import React, { useState,useEffect } from 'react'

// const ApiCards = () => {
//     // let [lodding, setLodding]= useState(false);
//     let [data, setdata] = useState([]);
//     let dataFetch = async () => {
//         try {
//             let res = axios.get("https://fakestoreapi.com/products/");
//             setdata(res.data)
//         } catch (error) {
//             console.log(error);
//         }
//         // finally{
//         //     setLodding(false);
//         // }
//     };
//     useEffect(() => {
//         dataFetch();
//     }, []);
//   return (
//     <div>
//         <table border={1} width="100%">
//             <thead>
//                 <tr>
//                     <th>id</th>
//                     <th>title</th>
//                     <th>category</th>
//                     <th>desciption</th>
//                     <th>image</th>
//                     <th>price</th>
//                     <th>rating</th>
//                 </tr>
//             </thead>
//             <tbody>
//               {data.map ((el,i) => {
//                 return(
//                     <tr key={el.id}>
//                         <td>{el.id}</td>
//                         <td>{el.title}</td>
//                         <td>{el.category}</td>
//                         <td>{el.description}</td>
//                         <td> <img src={el.image} width={"30px"} alt="" /></td>
//                         <td>{el.price}</td>
//                         <td>{el.rating.rate} {el.rating.count}</td>
//                     </tr>
//                 )
//               })}  
//             </tbody>
//         </table>
//     </div>
//   )
// }

// export default ApiCards


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ApiCards = () => {
//     const [data, setData] = useState([]);

//     const dataFetch = async () => {
//         try {
//             const res = await axios.get("https://fakestoreapi.com/products/");
//             setData(res.data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     useEffect(() => {
//         dataFetch();
//     }, []);

//     return (
//         <div style={{ padding: "20px" }}>
//             <h1>Product Cards</h1>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
//                 {data.map((el) => (
//                     <div
//                         key={el.id}
//                         style={{
//                             border: "1px solid #ddd",
//                             borderRadius: "10px",
//                             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                             padding: "15px",
//                             textAlign: "center",
//                             backgroundColor: "#fff",
//                         }}
//                     >
//                         <img
//                             src={el.image}
//                             alt={el.title}
//                             style={{ width: "100px", height: "100px", objectFit: "contain", marginBottom: "10px" }}
//                         />
//                         <h3 style={{ fontSize: "1.1em", margin: "10px 0" }}>{el.title}</h3>
//                         <p style={{ color: "#666", fontSize: "0.9em", margin: "10px 0" }}>{el.category}</p>
//                         <p style={{ color: "#333", fontSize: "0.9em", margin: "10px 0" }}>{el.description.slice(0, 50)}...</p>
//                         <p style={{ fontWeight: "bold", margin: "10px 0" }}>${el.price.toFixed(2)}</p>
//                         <p style={{ fontSize: "0.9em", margin: "10px 0" }}>
//                             Rating: {el.rating?.rate || "N/A"} ({el.rating?.count || 0} reviews)
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ApiCards;


import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiCards = () => {
    const [data, setData] = useState([]);

    const dataFetch = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products/");
            setData(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        dataFetch();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Product Cards</h1>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center", // Centers the cards horizontally
                }}
            >
                {data.map((el) => (
                    <div
                        key={el.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            padding: "15px",
                            width: "250px",
                            textAlign: "center",
                            backgroundColor: "#fff",
                        }}
                    >
                        <img
                            src={el.image}
                            alt={el.title}
                            style={{ width: "100px", height: "100px", objectFit: "contain", marginBottom: "10px" }}
                        />
                        <h3 style={{ fontSize: "1.1em", margin: "10px 0" }}>{el.title}</h3>
                        <p style={{ color: "#666", fontSize: "0.9em", margin: "10px 0" }}>{el.category}</p>
                        <p style={{ color: "#333", fontSize: "0.9em", margin: "10px 0" }}>{el.description.slice(0, 50)}...</p>
                        <p style={{ fontWeight: "bold", margin: "10px 0" }}>${el.price.toFixed(2)}</p>
                        <p style={{ fontSize: "0.9em", margin: "10px 0" }}>
                            Rating: {el.rating?.rate || "N/A"} ({el.rating?.count || 0} reviews)
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApiCards;
