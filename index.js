const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.json());

// Sample data
const courses = [
    { id: 1, name: 'Sabir', age: 22 },
    { id: 2, name: 'Ali', age: 23 },
    { id: 3, name: 'Sara', age: 24 },
    { id: 4, name: 'Ahmed', age: 25 },
];

// GET all courses
app.get('/api/courses', (req, res) => {
    res.json(courses);
});

// GET a course by ID
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found');
    }
    res.json(course);
});

// POST a new course
// app.post(
//     '/api/courses',
//     // Validation rules
//     body('name').notEmpty().withMessage('Name is required').bail()
//         .isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
//     body('age').isInt().withMessage('Age must be a valid integer').bail()
//         .isLength({ min: 18 }).withMessage('Age must be at least 18'),
//     (req, res) => {
//         // Check for validation errors
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         // Create a new course
//         const course = {
//             id: courses.length + 1,
//             name: req.body.name,
//             age: req.body.age,
//         };
        
//         // Add to courses array
//         courses.push(course);

//         // Send success response
//         res.status(201).json({ message: 'Course created successfully', course });
//     }
// );

// updata a course
app.put('/api/courses/:id', (req, res) => {
    const id=res.params.id;
    const course = courses.find((course) => course.id ===id);
    if (!course) {
        return res.status(404).send('The course with the given ID was not found');
    }
    course={course, ...req.body};
    res.send(course);
})
app.delete('/api/courses/:id', (req, res) => res => {
    const id=res.params.id;
    const course = courses.find((course) => course.id ===id);
    if (!course) {
        return res.status(404).send('The course with the given ID was not found');
    }
    res.send(course);
})
// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

