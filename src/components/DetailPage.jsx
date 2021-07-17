import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import axios from "axios"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`

export default function DetailPage() {
  const [list, setList] = useState({})
  const { id } = useParams()
  const history = useHistory()
  console.log(history)

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const newUrl = `${URL}/${id}`
    const res = await axios.get(newUrl, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
      },
    })
    setList(res.data)
    console.log(res.data)
  }

  const handleDelete = async () => {
   let newUrl = `${URL}/${id}`
    const res = await axios.delete(newUrl, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
      },
    })
  
    // Takes you back to all recipes page when clicking delete button
    history.push("/view-log")
  }
  
  return (
    <div className="detail-page">
      <h1>{list.fields?.name}</h1>
      <p>{list.fields?.date}</p>
      <p>{list.fields?.income}</p>
      <p>{list.fields?.rent}</p>
      <p>{list.fields?.food}</p>
      <p>{list.fields?.auto}</p>
      <p>{list.fields?.utilities}</p>
      <p>{list.fields?.healthandwellness}</p>
      <p>{list.fields?.misc}</p>
      <p>{list.fields?.entertainment}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  )
}
