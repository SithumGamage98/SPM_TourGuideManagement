import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import css file from style sheets directory
import styles from "../style_sheets/Payment.module.css";

//Import components from the component directory
import Profile from "./Profile";

//import images from img directory
import print from "../img/print.svg";

const PrintPayments = (props) => {

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

    const Print = () =>{
        let printContents = document.getElementById('printablediv').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
       document.body.innerHTML = originalContents; 
      }

    return (
        <div className={styles.maincontainer}>
            <div className={styles.side_bar}>
                <Profile {...props} userId={props.userId}/>
            </div>
            <div className={styles.container}>
                <div id="printablediv" className={`text-center ${styles.tableContainer}`} style={{marginTop: "40px"}}>
                    <table className={`${styles.table}`}>

                        <thead className={styles.tableHead}>
                            <tr>
                                <th className={styles.tableContent} scope="col">Order ID</th>
                                <th className={styles.tableContent} scope="col">Service Name</th>
                                <th className={styles.tableContent} scope="col">Amount Paid</th>
                                <th className={styles.tableContent} scope="col">Date</th>
                            </tr>
                        </thead>
                    
                        {data.length !== 0 ? (
                            data.map((data) => (
                            <>
                                <tbody>
                                    <tr>
                                        <td className={styles.tableContent}>{data._id}</td>
                                        <td className={styles.tableContent}>{data.service_name}</td>
                                        <td className={styles.tableContent}>{data.amount_paid}</td>
                                        <td className={styles.tableContent}>{moment(data.date).format('YYYY-MM-DD')}</td>
                                    </tr>
                                </tbody>
                            </>
                        ))) : (
                            <tbody>
                                    <tr>
                                        <td style={{paddingTop: "30px", paddingLeft: "10px"}}><h5>No Results</h5></td>
                                        
                                    </tr>
                            </tbody>
                        )}
                            
                    </table>
                </div>
                    <div style={{display: "flex"}}>
                        {data.length !== 0 ? (
                            <p className="text-center" style={{marginTop: "40px", marginBottom: "20px", flex: "1"}}>1-{data.length} of {data.length}</p>
                        ) : (
                            <p className="text-center" style={{marginTop: "40px", marginBottom: "20px", flex: "1"}}>{data.length} of {data.length}</p>
                        )}
                        <div style={{height: "fit-content", margin: "auto"}}>
                            <Link className={styles.printBtn} onClick={Print}><img src={print} alt="print icon" style={{width: "25px", marginRight: "5px"}}/>Print</Link>
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default PrintPayments;