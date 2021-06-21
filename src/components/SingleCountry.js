import {useState}from 'react'
import useCorona from "../Hooks/useCorona"
import CasesCard from './CasesCard'

 const SingleCountry = () => {
     const [ search,setSearch]=useState("GHA")
     const { isPending,error,covid}=useCorona("https://covid19.mathdro.id/api/countries")
     
    return (
        <>
        <div className="search" style={{textAlign:"center"}}>
            {
                !isPending && !error && covid &&(
                    <select
                        onChange={(e) => setSearch(e.target.value)}
                        style={{padding:"6px 10px",margin:20}}>

                        <option>Choose country</option>
                        {
                         covid.countries.map((country)=>(
                             <option value={`{country.iso3}`}>{country.name}</option>

                         )
                         )
                        }
                    </select>

                )
            }
      
        </div>
            <CasesCard url = {`https://covid19.mathdro.id/api/countries/${search.lenght>=2?search:"GHA"}`}/>
        </>
    );
}
export default SingleCountry;
