import { useState } from "react";
import  './ratings.css';
import { FaBlackTie, FaStar } from "react-icons/fa";


const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
    blue: "#4939c4",
    
};



function Ratings() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    
    
   
    <div style={styles.container}>
      <h3> Add your feedback and Ratings </h3>
      



      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea
        placeholder="Add your feedback"
      
        style={styles.textarea}
      />

      <a href="/view" button style={styles.button} >
        Post
      </a>
      
    </div>
  );
};


const styles = {

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
    
  
  },
  
  stars: {
    display: "flex",
    flexDirection: "row",
    
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
    alignItems: 30,
    
  },
  button: {
    border: "1px solid #a9a9a9",
    width: 300,
    padding: 10,
    alignItems: "center",
    borderRadius: 30,
    color: "#4939c4",


    
    
  }
 

};




export default Ratings;
 