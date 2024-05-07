const Travel = require('../models/travel.modul')

// Method: GET
// Descr: Get all travels  books

const  getAllTravels  = async (req, res) => {
    try {
        const travels = await Travel.find()

        res.status(200).json({
            massge: 'success',
            travels: travels.reverse()
        })
    } catch (err) {
        res.send(err)
    }
}


//Method:     GET
//Descr:      Get one travel book by id
const getTravelById = async (req, res) => {
    try {
      const travel = await Travel.findById(req.params.id)
  
      if(!travel){
        return res.status(404).json({
          message: 'Not found'
        })
      }
  
      return res.status(200).json({
        message: 'success',
        travel
      })
    } catch (err) {
      res.send(err)
    }
  }

// Method: POST
// Descr: add new travel book

const  addTravelBook = async (req, res) => {
    try {
        const { title, imge, descr} = req.body

        const newTravel = await Travel.create({
            title,
            imge,
            descr
        })

        res.status(200).json({
            massge: 'success',
            newTravel
        })
    } catch (err) {
        res.send(err)
    }
}

// Method: PUT
// Descr: Edit travel book bu its ID

const  updateTravelBook = async (req, res) => {
    try {
        const { title, imge, descr} = req.body

        const updateTravel = await Travel.findByIdAndUpdate(req.params.id, {
            title,
            imge,
            descr
        })

        res.status(200).json({
            massge: 'success',
            updateTravel
        })
    } catch (err) {
        res.send(err)
    }
}

// Method: DElETE
// Descr: REmoving travel book by ID

const  removeTravelBook = async (req, res) => {
    try {
        await Travel.findByIdAndDelete(req.params.id)

        res.status(200).json({
            massge: 'Deleted'
        })
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    getAllTravels,
    getTravelById,
    addTravelBook,
    updateTravelBook,
    removeTravelBook
}