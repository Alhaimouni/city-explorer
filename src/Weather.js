import React from "react";

class Weather extends React.Component {


    render() {

        return (

            <>
            
            <h3>Weather Data :</h3>
            
            {this.props.weatherInformation.map((item,i)=>{ 

                return(
                    <>
                    <p>Day {i+1} : </p>
                    <p>Date :{item.date}</p>
                    <p>Description: {item.description}</p>
                    <p>==========================</p>
                    </>
                )})
            }
            </>
        )
    }

}
export default Weather ;
