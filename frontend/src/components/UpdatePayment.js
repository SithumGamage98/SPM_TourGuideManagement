import { useState, useEffect } from "react";
import axios from "axios";

//import css file from style sheets directory
import styles from "../style_sheets/Payment.module.css";

//Import components from the component directory
import Profile from "./Profile";

const UpdatePayment = (props) => {
  const [data, setData] = useState([]);
  const [card_num, setCardNum] = useState(data.card_num);
  const [full_name, setFullName] = useState(data.full_name);
  const [cvv, setCvv] = useState(data.cvv);
  const [expiry_date, setExpiryDate] = useState(data.expiry_date);
  const [street_address, setStreetAddress] = useState(data.street_address);
  const [country, setCountry] = useState(data.country);
  const [city, setCity] = useState(data.city);
  const [zip_code, setZip] = useState(data.zip_code);
  const [state, setState] = useState(data.state);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = () => {
    axios
      .get(`http://localhost:8070/payment/get/${props.userId}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data.payment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateData = (e) => {
    e.preventDefault();

    const updatedData = {
      card_num,
      full_name,
      cvv,
      expiry_date,
      street_address,
      country,
      city,
      zip_code,
      state,
    };

    axios
      .put(`http://localhost:8070/payment/update/${props.userId}`, updatedData)
      .then(() => {
        console.log("Updated");
        props.history.push(`/view/payment+details/${props.userId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.maincontainer}>
        <div className={styles.side_bar}>
            <Profile {...props} userId={props.userId}/>
        </div>
        <div className={styles.container}>
            <div className={styles.innercontainer}>
            <div className="horizontal-center">
                <h2 className={`text-center margin-bottom ${styles.headertext}`}><strong>Add a new card</strong></h2>
                <hr className={styles.divider} style={{ marginTop: "25px", marginBottom: "0px"}}/>
                <br></br>
                <form className="formt" style={{margin: "0px 50px 0px 50px"}} onSubmit={updateData}>
                    <div className="row" style={{marginTop: "15px"}}>
                        <div className="form-group col-md-6">
                            <label for="inputName" className={styles.label} style={{marginBottom: "5px"}}>Full Name</label>
                            <input type="text" className="form-control" id="inputName" defaultValue={data.full_name}
                                onChange={(e)=> {
                                    setFullName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputCard" className={styles.label} style={{marginBottom: "5px"}}>Card Number</label>
                            <input type="text" className="form-control" id="inputCard" pattern="\d*" defaultValue={data.card_num}
                                onChange={(e)=> {
                                    setCardNum(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "20px", marginBottom: "40px"}}>
                        <div className="form-group col-md-3">
                            <label for="inputExpiryDate" className={styles.label} style={{marginBottom: "5px"}}>Expiry Date</label>
                            <input type="text" className="form-control" id="inputExpiryDate" defaultValue={data.expiry_date}
                                onChange={(e)=> {
                                    setExpiryDate(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label for="inputCvv" className={styles.label} style={{marginBottom: "5px"}}>Cvv</label>
                            <input type="text" className="form-control" id="inputCvv" defaultValue={data.cvv}
                                onChange={(e)=> {
                                    setCvv(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="mt-4 mb-4">
                        <h5 style={{marginLeft: "10px"}}>Billing Address</h5>
                        <hr className="divider-line" style={{marginTop: "20px"}}/>
                        <br></br>
                        <div className="row" style={{marginTop: "0px"}}>
                            <div className="form-group col-md-7">
                                <label for="inputStreet" className={styles.label} style={{marginBottom: "5px"}}>Street Address</label>
                                <input type="text" className="form-control" id="inputStreet" defaultValue={data.street_address}
                                    onChange={(e)=> {
                                        setStreetAddress(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="form-group col-md-5">
                                <label for="inputCountry" className={styles.label} style={{marginBottom: "5px"}}>Country</label>
                                {/* <input type="text" className="form-control" id="inputCountry" defaultValue={data.country}
                                    onChange={(e)=> {
                                        setCountry(e.target.value);
                                    }}
                                /> */}
                                <div className={styles.dropdown}>
                                    <select id="inputState" className="form-control"
                                        onChange={(e) => {
                                            setCountry(e.target.value);
                                        }}>
                                        <option selected>Choose...</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Aland Islands">Aland Islands</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antarctica">Antarctica</option>
                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Bouvet Island">Bouvet Island</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Congo, Democratic Republic of the Congo">Congo, Democratic Republic of the Congo</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Curacao">Curacao</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern Territories">French Southern Territories</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guernsey">Guernsey</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Isle of Man">Isle of Man</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jersey">Jersey</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                        <option value="Korea, Republic of">Korea, Republic of</option>
                                        <option value="Kosovo">Kosovo</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macao">Macao</option>
                                        <option value="Macedonia, the Former Yugoslav Republic of">Macedonia, the Former Yugoslav Republic of</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                        <option value="Moldova, Republic of">Moldova, Republic of</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montenegro">Montenegro</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Pitcairn">Pitcairn</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russian Federation">Russian Federation</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Barthelemy">Saint Barthelemy</option>
                                        <option value="Saint Helena">Saint Helena</option>
                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Martin">Saint Martin</option>
                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Sint Maarten">Sint Maarten</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                        <option value="South Sudan">South Sudan</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                        <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Timor-Leste">Timor-Leste</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Viet Nam">Viet Nam</option>
                                        <option value="Virgin Islands, British">Virgin Islands, British</option>
                                        <option value="Virgin Islands, U.s.">Virgin Islands, U.s.</option>
                                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                                        <option value="Western Sahara">Western Sahara</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop: "20px", marginBottom: "40px"}}>
                        <div className="form-group col-md-5">
                            <label for="inputCity" className={styles.label} style={{marginBottom: "5px"}}>City</label>
                            <input type="text" className="form-control" id="inputCity" defaultValue={data.city}
                                onChange={(e)=> {
                                    setCity(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState" className={styles.label} style={{marginBottom: "5px"}}>State</label>
                            <input type="text" className="form-control" id="inputState" defaultValue={data.state}
                                onChange={(e)=> {
                                    setState(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label for="inputZip" className={styles.label} style={{marginBottom: "5px"}}>Zip</label>
                            <input type="text" className="form-control" id="inputZip" defaultValue={data.zip_code}
                                onChange={(e)=> {
                                    setZip(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    </div>
                    <div className="text-center" style={{marginTop:"50px", marginBottom: "35px"}}>
                        <button  type="submit" style={{width: "120px"}} className={styles.btn_update} onClick={updateData}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
            </div>    
        </div> 
    </div>
  );
};
export default UpdatePayment;
