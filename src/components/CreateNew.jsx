import React, {useState} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
let URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`

const defaultForm = {
  name: "",
  date: "",
  income: "",
  rent: "",
  food: "",
  auto: "",
  utilities: "",
  healthandwellness: "",
  misc: "",
  entertainment: "",
};

export default function CreateNew() {
  const [input, setInput] = useState(defaultForm)
  const history = useHistory()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // prevents pafe from resfreshing
    e.preventDefault();
    const res = await axios.post(URL, { fields: input }, {headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}});
    console.log(res);
    // takes user back to all albums after clicking submit button
    history.push("/view-log")
  };


  




  return (
    <div>
    <h3>Add a new List</h3>
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <br />
      <input
        name="name"
        value={input.name}
        onChange={handleChange}
        placeholder="Your Name"
      />
      <br />
      <label>Date</label>
      <br />
      <input
        name="date"
        value={input.date}
          onChange={handleChange}
          placeholder="Date"
        />
        <br />
        <label>Income</label>
        <br />
        <input
          name="income"
          value={input.income}
          onChange={handleChange}
          placeholder="Income"
        />
        <br />
        <label>Rent</label>
        <br />
        <input
          name="rent"
          value={input.rent}
          onChange={handleChange}
          placeholder="Rent"
        />
        <br />
        <label>Food</label>
        <br />
        <input
          name="food"
          value={input.food}
          onChange={handleChange}
          placeholder="Food"
        />
        <br />
        <label>Auto</label>
        <br />
        <input 
          name="auto"
          value={input.auto}
          onChange={handleChange}
          placeholder="Auto"
        />
        <br />
        <label>Utilities</label>
        <br />
        <input 
          name="utilities"
          value={input.utilities}
          onChange={handleChange}
          placeholder="Utilities"
          />
        <br />
          <label>Health&Wellness</label>
        <br />
        <input 
          name="healthandwellness"
          value={input.healthandwellness}
          onChange={handleChange}
          placeholder="Health&Wellness"
        />
        <br />
          <label>Miscellaneous</label>
        <br />
        <input 
          name="misc"
          value={input.misc}
          onChange={handleChange}
          placeholder="Miscellaneous"
        />
        <br />
         <label>Entertainment</label>
        <br />
        <input 
          name="entertainment"
          value={input.entertainment}
          onChange={handleChange}
          placeholder="Entertainment"
        />
        <br />
      <button>Create New</button>
    </form>
  </div>
  )
}
