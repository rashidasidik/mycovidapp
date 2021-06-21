import React from 'react'
import CasesCard from "../components/CasesCard"
import SingleCountry from "../components/SingleCountry"

const CoronaScreen = () => {
    return (
        <section>
    <CasesCard url="https://covid.mathdro.id/api"/>
        <SingleCountry/>
        </section>
            
        
    )
}
export default CoronaScreen
