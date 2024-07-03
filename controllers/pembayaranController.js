const database = require("../config/database.js");

// Get All Payment
const getAllPayment = (req, res) => {
    database.query(`SELECT * FROM pembayaran`, (err, result) =>{
        if(err) {
            console.error(err)
            return res.status(500).json({
                error: "Error while getting Data Pembayaran!"
            })
        }
        if(result.length === 0) {
            return res.json({
                message: "Data Pembayaran Not Found:",
                results: []
            })
        }
        console.log(result);
        res.json({result});
    });
};


module.exports = {
    getAllPayment
};