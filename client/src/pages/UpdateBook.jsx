import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBook = () => {
  const [title, setTitle] =  useState('')
  const [imge, setImge] =  useState('')
  const [descr, setDescr] =  useState('')

  const { id } = useParams()
  const navigate = useNavigate()


  const fetchDate = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/travel/${id}`)
    console.log(data);
    setTitle(data.travel.title)
    setImge(data.travel.imge)
    setDescr(data.travel.descr)
  }

  const updeleteHendler = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:5000/api/travel/${id}`, {
      title, descr, imge
    })
    navigate('/')
  }


  useEffect(() => {
    fetchDate()
  }, [])
  return (
    <div>
      <form onSubmit={updeleteHendler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title'
          onChange={e => setTitle(e.target.value)}
           value={title} />
        </div>
        <div className="mb-3">
          <label htmlFor="descr" className="form-label">Description</label>
          <input type="text" className="form-control" id="descr" name='descr'
          onChange={e => setDescr(e.target.value)}
          value={descr} />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input type="text" className="form-control" id="image" name='descr' 
          onChange={e => setImge(e.target.value)}
          value={imge} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default UpdateBook
