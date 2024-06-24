const mongoose = require('mongoose')

const introSchema = new mongoose.Schema({
    WelcomeText: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    fname: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    cv: {
        type: String,
        required: true,
    },
});

const aboutSchema = new mongoose.Schema({
    experience: {
        type: String,
        required: true,
    },
    client: {
        type: String,
        required: true,
    },
    project: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

const experienceSchema = new mongoose.Schema({
    dev: {
        type: String,
        required: true,
    },
    code: {
        type: Array,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    }
});

const portfolioSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    gitlink: {
        type: String,
        required: true,
    },
    livedemo: {
        type: String,
        required: true,
    }
});
const servicesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    service: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});
const contactSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Age: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Mobile: {
        type: String,
        required: true,
    },
    Country: {
        type: String,
        required: true,
    },
});

