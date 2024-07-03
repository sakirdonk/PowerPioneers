const database = require("../config/database.js");

// Get All Status
const getAllStatus = (req, res) => {
    database.query(`SELECT * FROM status`, (err, result) =>{
        if(err) {
            console.error(err)
            return res.status(500).json({
                error: "Error while getting Data Status!"
            })
        }
        if(result.length === 0) {
            return res.json({
                message: "Data Status Not Found:",
                results: []
            })
        }
        console.log(result);
        res.json({result});
    });
};

module.exports = {
    getAllStatus
};