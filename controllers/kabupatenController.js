const database = require("../config/database.js");

// Get Kabupaten By ID Provinsi
const getKabupatenByProvinceId = (req, res) => {
    const { id } = req.params;
    if(!id){
        return res.status(400).json({
            error: "Silahkan isi field id provinsi!"
        });
    }
    database.query(`SELECT * FROM kabupaten WHERE id_provinsi = ?`, [id], (err, result) =>{
        if(err) {
            console.error(err)
            return res.status(500).json({
                error: "Error while getting Data Kabupaten with ID"
            })
        }
        if(result.length === 0) {
            return res.json({
                message: "Data Kabupaten Not Found:",
                results: []
            })
        }
        console.log(result);
        res.json({result});
    })
};


module.exports = {
    getKabupatenByProvinceId
};