const express = require('express')
const cors = require('cors')
const app = express()
var port = process.env.PORT || 3000

var staff = [{
    id: 1,
    fullName: 'Kyle Coberly',
    title: 'Faculty Director',
    numberOfDogs: 0
},
{
    id: 2,
    fullName: 'Danny Fritz',
    title: 'Lead Instructor',
    numberOfDogs: 0
},
{
    id: 3,
    fullName: 'CJ Reynolds',
    title: 'Lead Instructor',
    numberOfDogs: 0
},
{
    id: 4,
    fullName: 'Brooks Patton',
    title: 'Lead Instructor',
    numberOfDogs: 0
},
{
    id: 5,
    fullName: 'Roberto Ortega',
    title: 'Lead Instructor',
    numberOfDogs: 1
},
{
    id: 6,
    fullName: 'Chad Drummond',
    title: 'Instructor',
    numberOfDogs: 0
},
{
    id: 7,
    fullName: 'Kim Schlesinger',
    title: 'Instructor',
    numberOfDogs: 0
},
{
    id: 8,
    fullName: 'Peter Ostiguy',
    title: 'Associate Instructor',
    numberOfDogs: 1
},
{
    id: 9,
    fullName: 'Cass Torske',
    title: 'Resident',
    numberOfDogs: 1
},
{
    id: 10,
    fullName: 'Matt Winzer',
    title: 'Resident',
    numberOfDogs: 2
},
{
    id: 11,
    fullName: 'Aaron Goodman',
    title: 'Resident',
    numberOfDogs: 0
},
{
    id: 12,
    fullName: 'Michelle Bergquist',
    title: 'Resident',
    numberOfDogs: 1
},
]

function findById(data, id){
    for(let i = 0; i<data.length; i++){
        if(data[i].id == id){
            return data[i]
        }
    }
    return null
}

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        data: staff
    })
})

app.get('/:id', ((req, res) => {
    var record = findById(cohorts, request.params.id)
    if(!record){
        response.status = 404;
        response.json({
            error: {
                message: 'No record found!'
            }
        })
    }
    response.json({data: record})
}))

app.listen(port)
