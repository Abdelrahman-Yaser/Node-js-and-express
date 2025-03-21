import express from 'express'


const app = express()


const courses = [
  { id: 1, name: 'course1', price: 100 },
  { id: 2, name: 'course2', price: 200 },
  { id: 3, name: 'course3', price: 300 }
]

app.get('/api/courses/id', (req, res) => {
  res.json(courses)
})
app.get('/api/courses/:courseId', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.courseId))
  if (!course) return res.status(404).send('Course not found')
  res.json(course)
})




app.listen(3000, () => {
  console.log('Server is running 00  on port 3000')
})