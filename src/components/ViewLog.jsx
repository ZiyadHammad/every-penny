import React, { useState, useEffect } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

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
        <div className="Monthly-list" key={list.id}>
          <Link to={`/log-detail/${list.id}`}>
          <p>Name:{list.fields.name}</p>
          <p>Date:{list.fields.date}</p>
          </Link>

        </div> )
    })}</div>
  )
}
