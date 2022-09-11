import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//import css file from style sheets directory
import styles from "../style_sheets/Payment.module.css";

//Import components from the component directory
import Profile from "./Profile";

//import images from img directory
import illustration from "../img/void.png";

const DisplayPayment = () => {
  const [data, setData] = useState([]);

  //TODO create user related functions and replace this with props.user.id
  const id = 150;

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    axios
      .get(`http://localhost:8070/payment/get/${id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data.payment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteEntry = () => {
    axios
      .delete(`http://localhost:8070/payment/delete/${id}`)
      .then((resoponse) => {
        console.log("Deleted");
        retrieveData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className={styles.maincontainer}>
            <div className={styles.side_bar}>
                <Profile/>
            </div>

      {data ? (
        
            <div className={styles.container} style={{width: "1400px"}}>
              <div className={styles.innercontainer}>
                <h2 className={`text-center ${styles.headertext}`}><strong>Payment Details</strong></h2>
                <hr className={styles.divider} style={{ marginTop: "25px", marginBottom: "-20px"}} /><br></br><br></br>
                <div className="text-center">
                  <p>Card Number :</p>
                  <p style={{ marginTop: "-12px", fontSize: "18px", fontWeight: "500", marginBottom: "25px" }}>{data.card_num}</p>
                  <p>Full Name :</p>
                  <p style={{ marginTop: "-12px", fontSize: "18px", fontWeight: "500", marginBottom: "25px" }}>{data.full_name}</p>
                  <p>Expiry Date :</p>
                  <p style={{ marginTop: "-12px", fontSize: "18px", fontWeight: "500", marginBottom: "70px" }}>{data.expiry_date}</p>
                </div>
                <h5 style={{marginLeft: "90px", marginBottom: "20px"}}>Billing Address</h5><hr className={styles.divider} style={{ marginTop: "10px" }} /><br></br>
                <div style={{ marginLeft: "90px", marginTop: "-30px" }}>
                  <p style={{ fontSize: "18px", fontWeight: "400" }}>{data.full_name}</p>
                  <p style={{ marginTop: "-10px", fontSize: "18px", fontWeight: "400" }}>{data.street_address},</p>
                  <p style={{ marginTop: "-10px", fontSize: "18px", fontWeight: "400" }}>{data.city}, {data.zip_code}</p>
                  <p style={{ marginTop: "-10px", fontSize: "18px", fontWeight: "400" }}>{data.state}</p>
                  <p style={{ marginTop: "-10px", fontSize: "18px", fontWeight: "400" }}>{data.country}</p>
                  <br></br>
                </div>
                <div className={styles.btncontainer}>
                  <Link to="/update/payment+details/:id">
                  <button type="button" className={styles.btn_update}>Update</button>
                  </Link>
                  <button onClick={deleteEntry} className={styles.btn_delete}>Delete</button>
                </div>
              </div>
            </div>
        
      ) : (
            <div className={`text-center ${styles.nocard}`} style={{width: "1000px"}}>
              <img src={illustration} alt="Logo" className={styles.illustration}/>
              <h4 className="text-center" style={{marginBottom: "30px"}}><strong>You don't have any card details added to the system</strong></h4>
              <Link to={"/add/payment+details"} className={styles.btn_update} style={{marginTop: '20px', padding: "6px 40px 6px 40px"}}>Add</Link>
            </div>
      )}
      </div>
    </div>
  );
};
export default DisplayPayment;
