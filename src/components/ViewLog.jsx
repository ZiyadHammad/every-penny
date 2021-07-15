import React, { useState, useEffect } from 'react'
import axios from "axios"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE

let URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`

export default function ViewLog() {

  const [list, setList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(URL, { headers: { Authorization: `Bearer ${AIRTABLE_KEY}` } })
      console.log(response.data.records)
      setList(response.data.records)
      

    }
    fetchData()
  
}, [])


  return (
    <div>{list.map((list) => {
      return(
        <div className="Monthly-list">
          <p>Name:{list.fields.name}</p>
          <p>Date:{list.fields.date}</p>
          <p>Income:{list.fields.income}</p>
          <p>Rent:{list.fields.rent}</p>
          <p>Food:{list.fields.food}</p>
          <p>Auto:{list.fields.auto}</p>
          <p>Utilities:{list.fields.utilities}</p>
          <p>Health&Wellness:{list.fields.healthandwellness}</p>
          <p>Misc:{list.fields.misc}</p>
          <p>Entertainment:{list.fields.entertainment}</p>
        </div> )
    })}</div>
  )
}
