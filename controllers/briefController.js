const Brief = require("../models/Brief");

const exampleBriefs = [
    {
        title: "Brief 1",
        description: "This is brief 1",
    },
    {
        title: "Brief 2",
        description: "This is brief 2",
    },
    {
        title: "Brief 3",
        description: "This is brief 3",
    },
];

/**
 * This will return a random brief from the database.
 * 
 * @param {*} req Request
 * @param {*} res Response
 */
const getBrief = (req, res) => {

    // Get random example brief
    const randomIndex = Math.floor(Math.random() * exampleBriefs.length);
    const randomBrief = exampleBriefs[randomIndex];

    // Generate new brief
    const newBrief = new Brief(randomBrief);

    // Return new brief
    res.json(newBrief);

};

module.exports = {
    getBrief,
};