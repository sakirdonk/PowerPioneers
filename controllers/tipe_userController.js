const database = require("../config/database.js");

// Get All Tipe User
const getAllUserType = (req, res) => {
    database.query(`SELECT * FROM tipe_user`, (err, result) =>{
        if(err) {
            console.error(err)
            return res.status(500).json({
                error: "Error while getting Data Tipe User!"
            })
        }
        if(result.length === 0) {
            return res.json({
                message: "Data Tipe User Not Found:",
                results: []
            })
        }
        console.log(result);
        res.json({result});
    });
};

module.exports = {
    getAllUserType
};