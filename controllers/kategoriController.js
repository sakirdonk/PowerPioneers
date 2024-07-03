const database = require("../config/database.js");

// Get All Kategori
const getAllCategory = (req, res) => {
    database.query(`SELECT * FROM kategori`, (err, result) =>{
        if(err) {
            console.error(err)
            return res.status(500).json({
                error: "Error while getting Data Kategori!"
            })
        }
        if(result.length === 0) {
            return res.json({
                message: "Data Kategori Not Found:",
                results: []
            })
        }
        console.log(result);
        res.json({result});
    });
};

module.exports = {
    getAllCategory
};