import "bootstrap/dist/css/bootstrap.min.css";

//import css file from style sheets directory
import styleHome from "../style_sheets/Home.module.css";

//import images from img directory
import coverImg from "../img/Beach.jpg"
import paymentImg from "../img/ezpayment.png"
import nearbyImg from "../img/Nearby.png"
import covidImg from "../img/Safe.png"
import priceImg from "../img/Prices.png"

const Home = () => {
    return (
        <>
        <div className={styleHome.container}>
            <img src={coverImg} alt="Cover Beach" className={styleHome.img} />
            <div className={styleHome.layer}>
                <div className={styleHome.centered}>
                    <div className={styleHome.headerTxt}>TRAVEL TO EXPLORE</div>
                    <div className={styleHome.sloganTxt}>Stop worrying about the potholes in the road and enjoy the journey <br/>~ Babs Hoffman ~</div>
                    <button className={styleHome.exploreBtn}>Explore Now</button>
                </div>
            </div>
        </div>
        <div className={`row row-cols-md-4 g-5`} style={{margin: "40px 70px 0px 70px"}}>
            <div className={`col`}>
                <div className={`card h-100 ${styleHome.cardContainer}`}>
                    <div className={styleHome.imgBg}>
                        <img src={priceImg} className={`card-img-top ${styleHome.cardImg}`} alt="..."/>
                    </div>
                    <div className={`card-body`} style={{marginLeft: "10px", marginRight: "15px"}}>
                        <h5 className={`card-title ${styleHome.cardHeader}`}>Get Best Prices</h5>
                        <p className={`card-text ${styleHome.cardDes}`}>Pay through our application and save thousands and get amazing rewards</p>
                    </div>
                </div>
            </div>
            <div className={`col`}>
                <div className={`card h-100 ${styleHome.cardContainer}`}>
                    <div className={styleHome.imgBg}>
                        <img src={covidImg} className={`card-img-top ${styleHome.cardImg}`} style={{width: "45px"}} alt="..."/>
                    </div>
                    <div className={`card-body`} style={{marginLeft: "10px", marginRight: "20px"}}>
                        <h5 className={`card-title ${styleHome.cardHeader}`}>Covid Safe</h5>
                        <p className={`card-text ${styleHome.cardDes}`}>We have all the curated hotels that have all the precaution for a covid safe environment</p>
                    </div>
                </div>
            </div>
            <div className={`col`}>
                <div className={`card h-100 ${styleHome.cardContainer}`}>
                    <div className={styleHome.imgBg}>
                        <img src={paymentImg} className={`card-img-top ${styleHome.cardImg}`} style={{width: "45px", marginTop: "5px"}} alt="..."/>
                    </div>
                    <div className={`card-body`} style={{marginLeft: "10px", marginRight: "20px"}}>
                        <h5 className={`card-title ${styleHome.cardHeader}`}>Flexible Payment</h5>
                        <p className={`card-text ${styleHome.cardDes}`}>Enjoy the flexible payment through our app and get rewards on every payment</p>
                    </div>
                </div>
            </div>
            <div className={`col`}>
                <div className={`card h-100 ${styleHome.cardContainer}`}>
                    <div className={styleHome.imgBg}>
                        <img src={nearbyImg} className={`card-img-top ${styleHome.cardImg}`} style={{width: "45px"}} alt="..."/>
                    </div>
                    <div className={`card-body`} style={{marginLeft: "10px", marginRight: "20px"}}>
                        <h5 className={`card-title ${styleHome.cardHeader}`}>Find The Best Near You</h5>
                        <p className={`card-text ${styleHome.cardDes}`}>Find the best hotels and places to visit near you in a single click</p>
                    </div>
                </div>
            </div>
        </div>
        <section className={styleHome.reviewSection}>
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-xl-8 text-center">
                <h3 className="mb-4" style={{fontWeight: "700", fontSize: "32px"}}>Here's What Our Customers Say?</h3>
                <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                    numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                    quisquam eum porro a pariatur veniam.
                </p>
                </div>
            </div>

            <div className="row text-center">
                <div className={`col-md-4 mb-5 mb-md-0`} style={{padding: "10px"}}>
                    <div className={styleHome.reviewCard}>
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt=".."
                            className="rounded-circle shadow-1-strong" style={{width: "150px", height: "150px"}} />
                        </div>
                        <h5 className="mb-3">Maria Smantha</h5>
                        <h6 className="text-primary mb-3">Travel Vlogger</h6>
                        <p className="px-xl-3">
                            <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                            tenetur.
                        </p>
                    </div>
                </div>
                <div className={`col-md-4 mb-5 mb-md-0`} style={{padding: "10px"}}>
                    <div className={styleHome.reviewCard}>
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" alt=".."
                            className="rounded-circle shadow-1-strong" style={{width: "150px", height: "150px"}}  />
                        </div>
                        <h5 className="mb-3">Lisa Cudrow</h5>
                        <h6 className="text-primary mb-3">Traveller</h6>
                        <p className="px-xl-3">
                            <i className="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
                        </p>
                    </div>
                </div>
                <div className={`col-md-4 mb-0`} style={{padding: "10px"}}>
                    <div className={styleHome.reviewCard}>
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt=".."
                            className="rounded-circle shadow-1-strong" style={{width: "150px", height: "150px"}}  />
                        </div>
                        <h5 className="mb-3">John Smith</h5>
                        <h6 className="text-primary mb-3">Traveller</h6>
                        <p className="px-xl-3">
                            <i className="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
                            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <div style={{padding: "100px 100px 20px 100px"}}>
            <p className={`text-center ${styleHome.destinationHeading}`}><span style={{color:"#4468E2"}}>BEST</span> DESTINATIONS</p>
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                    />

                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                    />

                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                    />
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;