const router = require('express').Router();
const { Intro, About, Experience, Portfolio, Services, Contact } = require('../models/portfolioModel.jsx');


router.get('/get-portfolio-data', async (req, res) => {

    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const experiences = await Experience.find();
        const portfolios = await Portfolio.find();
        const services = await Services.find();
        const contacts = await Contact.find();
        

        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            experience: experiences,
            portfolio: portfolios,
            servie: services,
            contact: contacts[0],
        });


    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;