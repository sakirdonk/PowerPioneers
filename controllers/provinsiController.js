const database = require("../config/database.js");

// Get All Status
const getAllProvince = (req, res) => {
    database.query(`SELECT * FROM provinsi`, (err, result) =>{
        if(err) {
            console.error(err)
            return res.status(500).json({
                error: "Error while getting Data Provinsi!"
            })
        }
        if(result.length === 0) {
            return res.json({
                message: "Data Provinsi Not Found:",
                results: []
            })
        }
        console.log(result);
        res.json({result});
    });
};

module.exports = {
    getAllProvince
};