// const express = require('express');
// const app = express();
// require('dotenv').config();
// const dbConfig = require('./config/dbConfig.jsx');

// const portfolioRoute = require('./routes/portfolioRoute.jsx');

// app.use(express.json());

// app.use("/api/portfolio", portfolioRoute);

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Serve static files (like your HTML file)
app.use(express.static('public'));

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads/';
        // Ensure the upload directory exists
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const pre = "FBI"
        const filename = path.basename(file.originalname, ext);
        cb(null, `${pre}-${Date.now()}${ext}`);
    }
});
const upload = multer({ storage });

// Serve the signup form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'img.html'));
});

// Handle file uploads
app.post('/upload', upload.single('profileImage'), (req, res) => {
    // `req.file` contains information about the uploaded file
    console.log('File uploaded:', req.file);
    res.send('File uploaded successfully!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
