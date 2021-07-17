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
    <div className="Create-wrap">
    <h3>Create Log</h3>
    <form className="create-log" onSubmit={handleSubmit}>
        <div className="create-div">
          <label>Name</label>
          <input
          name="name"
          value={input.name}
          onChange={handleChange}
          placeholder="Your Name"/>
        </div>
        
        <div className="create-div">
      <label>Date</label>
      
      <input
        name="date"
        value={input.date}
          onChange={handleChange}
          placeholder="Date"
          />
          </div>
          <div className="create-div">
        <label>Income</label>
        
        <input
          name="income"
          value={input.income}
          onChange={handleChange}
          placeholder="Income"
        />
        </div>
        <div className="create-div">
        <label>Rent</label>
      
        <input
          name="rent"
          value={input.rent}
          onChange={handleChange}
          placeholder="Rent"
        />
        </div>
        <div className="create-div">
        <label>Food</label>
        
        <input
          name="food"
          value={input.food}
          onChange={handleChange}
          placeholder="Food"
        />
        </div>
        <div className="create-div">
        <label>Auto</label>
        
        <input 
          name="auto"
          value={input.auto}
          onChange={handleChange}
          placeholder="Auto"
        />
        </div>
        <div className="create-div">
        <label>Utilities</label>
        
        <input 
          name="utilities"
          value={input.utilities}
          onChange={handleChange}
          placeholder="Utilities"
          />
        </div>
        <div className="create-div">
          <label>Health&Wellness</label>
        
        <input 
          name="healthandwellness"
          value={input.healthandwellness}
          onChange={handleChange}
          placeholder="Health&Wellness"
        />
        </div>
        <div className="create-div">
          <label>Miscellaneous</label>
        
        <input 
          name="misc"
          value={input.misc}
          onChange={handleChange}
          placeholder="Miscellaneous"
        />
        </div>
        <div className="create-div">
         <label>Entertainment</label>
        
        <input 
          name="entertainment"
          value={input.entertainment}
          onChange={handleChange}
          placeholder="Entertainment"
        />
        </div>
        <div className="create-div">
          <button>Save</button>
          </div>
    </form>
  </div>
  )
}
