import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";

//import css file from style sheets directory
import stylesPaymentHistory from "../style_sheets/Payment.module.css";

//Import components from the component directory
import Profile from "./Profile";

const PaymentHistory = (props) => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        retrieveData();
    }, [])

    const retrieveData = () => {
        axios.get(`http://localhost:8070/payments/history/all/${props.userId}`)
            .then((response) => {
                setData(response.data.paymentHistory);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const filterContent = (_history, searchTerm) => {
        const results = _history.filter((data) => data.service_name.toLowerCase().includes(searchTerm));
        setData(results);
    }

    const handleTextSearch = (e) => {
        const searchTerm = e.currentTarget.value;
        axios.get(`http://localhost:8070/payments/history/all/${props.userId}`).then(res => {
            filterContent(res.data.paymentHistory, searchTerm)
        });
    };

    return (
        <div className={stylesPaymentHistory.maincontainer}>
            <div className={stylesPaymentHistory.side_bar}>
                <Profile {...props} userId={props.userId}/>
            </div>
            <div className={stylesPaymentHistory.container}>
                <div className={`text-center ${stylesPaymentHistory.searchContainer}`}>
                    <input placeholder="Search By Name" type="search" name="searchTerm" className={stylesPaymentHistory.search} onChange={handleTextSearch}/><button className={stylesPaymentHistory.searchBtn}>Search</button>
                </div>
                <div className={`text-center ${stylesPaymentHistory.tableContainer}`}>
                    <table className={`${stylesPaymentHistory.table}`}>

                        <thead className={stylesPaymentHistory.tableHead}>
                            <tr>
                                <th className={stylesPaymentHistory.tableContent} scope="col">Order ID</th>
                                <th className={stylesPaymentHistory.tableContent} scope="col">Service Name</th>
                                <th className={stylesPaymentHistory.tableContent} scope="col">Amount Paid</th>
                                <th className={stylesPaymentHistory.tableContent} scope="col">Date</th>
                            </tr>
                        </thead>
                    
                        {data.length !== 0 ? (
                            data.map((data) => (
                            <tbody>
                                <tr>
                                    <td className={stylesPaymentHistory.tableContent}>{data._id}</td>
                                    <td className={stylesPaymentHistory.tableContent}>{data.service_name}</td>
                                    <td className={stylesPaymentHistory.tableContent}>{data.amount_paid}</td>
                                    <td className={stylesPaymentHistory.tableContent}>{moment(data.date).format('YYYY-MM-DD')}</td>
                                </tr>
                            </tbody>
                        ))) : (
                            <tbody>
                                    <tr>
                                        <td style={{paddingTop: "30px", paddingLeft: "10px"}}><h5>No Results</h5></td>
                                        
                                    </tr>
                            </tbody>
                        )}
                            
                    </table>
                </div>
                    {data.length !== 0 ? (
                        <p className="text-center" style={{marginTop: "40px", marginBottom: "20px"}}>1-{data.length} of {data.length}</p>
                    ) : (
                        <p className="text-center" style={{marginTop: "40px", marginBottom: "20px"}}>{data.length} of {data.length}</p>
                    )}
            </div>
        </div>
    );
}
export default PaymentHistory;