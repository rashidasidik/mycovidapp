import React from 'react'
import useCorona from '../Hooks/useCorona'
import Loader from "./Loader";


const CasesCard = ({url}) => {
     const {error,isPending,covid}=useCorona(url)

     if (isPending) return <Loader/>;
     if(error) return <h1>OOPS!! Something went wrong</h1>
    return(
        <section className = "container">
            {
                covid && (
                    <div className="card-container">
                  <div className="card-confirmed">
                <div className="card-header1">
                    <h1>CONFIRMED CASES</h1>

                </div>
                <div className="card-body">
                    <h1>{ covid.confirmed.value}</h1>

                </div>
                </div>
                <div className="card-recovered">
                <div className="card-header2">
                    <h1>RECOVERIES</h1>

                </div>
                <div className="card-body">
                    <h1>{ covid.recovered.value}</h1>

                </div>
                </div>
                <div className="card-deaths">
                <div className="card-header3">
                    <h1>DEATHS</h1>

                </div>
                <div className="card-body">
                    <h1>{ covid.deaths.value}</h1>

                </div>
                </div>
                </div>
                )
            }
            
        </section>
    )
} 
export default CasesCard