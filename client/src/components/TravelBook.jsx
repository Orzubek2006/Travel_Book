import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TravelBook = () => {
  const [TravelBook, setTravelBook] = useState([]);
  const [id, setId] = useState('')

  const fetchDate = async () => {
    const { data } = await axios.get("http://localhost:5000/api/travel");
    setTravelBook(data.travels)
  }

  const deleteHandler = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:5000/api/travel/${id}`)
    fetchDate()
  }

useEffect(() => {
  fetchDate()
}, [])
  return (
    <div>
      {TravelBook.map(tb => (
        <div key={tb._id} className="card mb-3 mt-3">
          <img src={tb.imge} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tb.title}</h5>
            <p className="card-text">{tb.descr}</p>
            <div className="d-flex justify-content-start">
              <Link className='btn btn-primary' to={`/UpdeleteBook/${tb._id}`}>Update</Link>
              <form onSubmit={deleteHandler}>
                <button type='submit' className='btn btn-danger mx-2'
                onClick={() => setId(tb._id)}>Delete</button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TravelBook
