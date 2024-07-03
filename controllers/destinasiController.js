const database = require("../config/database.js");

// Get All Destination
const getAllDestination = (req, res) => {
  database.query(`SELECT * FROM destinasi`, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "Error while getting Data Daftar Travel with ID",
      });
    }
    if (result.length === 0) {
      return res.json({
        message: "Data Daftar Travel Not Found:",
        results: [],
      });
    }
    console.log(result);
    res.json({ result });
  });
};

const getDestinationById = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      error: "Silahkan isi field id destinasi!",
    });
  }
  database.query(`Select * from destinasi where id=?`, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "Error while getting Data Destinasi with ID",
      });
    }
    if (result.length === 0) {
      return res.json({
        message: "Data Destinasi Not Found:",
        results: [],
      });
    }
    console.log(result);
    res.json({ result });
  });
};

// Create New Destination
const createDestination = (req, res) => {
  const {
    nama_destinasi,
    harga,
    provinsi,
    negara,
    id_status_promo,
    id_status_gratis_refund,
    id_status_gratis_asuransi,
    id_kategori,
    tanggal_travel,
    included,
    not_included,
    tanggal_tiket_kadaluarsa,
    foto,
    rating,
  } = req.body;
  if (
    !nama_destinasi ||
    !harga ||
    !provinsi ||
    !negara ||
    !id_status_promo ||
    !id_status_gratis_refund ||
    !id_status_gratis_asuransi ||
    !id_kategori ||
    !tanggal_travel ||
    !included ||
    !not_included ||
    !tanggal_tiket_kadaluarsa ||
    !foto ||
    !rating
  ) {
    return res.status(400).json({
      error: "Silahkan isi field name, email dan password",
    });
  }
  database.query(
    `INSERT INTO destinasi (
    nama_destinasi, 
    harga, 
    provinsi,
    negara,
    id_status_promo,
    id_status_gratis_refund,
    id_status_gratis_asuransi,
    id_kategori,
    tanggal_travel,
    included,
    not_included,
    tanggal_tiket_kadaluarsa,
    foto,
    rating
    ) VALUE (
     ?, ?, ?, ?,
     ?, ?, ?, ?,
     ?, ?, ?, ?,
     ?, ?
     )`,
    [
      nama_destinasi,
      harga,
      provinsi,
      negara,
      id_status_promo,
      id_status_gratis_refund,
      id_status_gratis_asuransi,
      id_kategori,
      tanggal_travel,
      included,
      not_included,
      tanggal_tiket_kadaluarsa,
      foto,
      rating,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: "Error while inserting new destinasi!",
        });
      }

      if (result.affectedRows > 0) {
        console.log(result);
        return res.json({
          message: "New Destinasi Created:",
        });
      }
      return res.status(500).json({
        error: "No Destinasi created!",
      });
    }
  );
};

const updateDestinationById = (req, res) => {
  const { id } = req.params;
  const {
    nama_destinasi,
    harga,
    provinsi,
    negara,
    id_status_promo,
    id_status_gratis_refund,
    id_status_gratis_asuransi,
    id_kategori,
    tanggal_travel,
    included,
    not_included,
    tanggal_tiket_kadaluarsa,
    foto,
    rating,
  } = req.body;
  if (
    !id ||
    !nama_destinasi ||
    !harga ||
    !provinsi ||
    !negara ||
    !id_status_promo ||
    !id_status_gratis_refund ||
    !id_status_gratis_asuransi ||
    !id_kategori ||
    !tanggal_travel ||
    !included ||
    !not_included ||
    !tanggal_tiket_kadaluarsa ||
    !foto ||
    !rating
  ) {
    return res.status(400).json({
      error: "Silahkan isi field yang kosong",
    });
  }

  database.query(
    `UPDATE destinasi set
    nama_destinasi=?, 
    harga=?, 
    provinsi=?,
    negara=?,
    id_status_promo=?,
    id_status_gratis_refund=?,
    id_status_gratis_asuransi=?,
    id_kategori=?,
    tanggal_travel=?,
    included=?,
    not_included=?,
    tanggal_tiket_kadaluarsa=?,
    foto=?,
    rating=?
    WHERE id=?`,
    [
      nama_destinasi,
      harga,
      provinsi,
      negara,
      id_status_promo,
      id_status_gratis_refund,
      id_status_gratis_asuransi,
      id_kategori,
      tanggal_travel,
      included,
      not_included,
      tanggal_tiket_kadaluarsa,
      foto,
      rating,
      id,
    ],
    (err, result) => {
      if (err) {
        res.status(500).json({
          error: "Error while updating user!",
        });
      }

      console.log(result);

      if (result.affectedRows === 0) {
        return res.status(400).json({
          error:
            "Destinasi dengan ID " + id + " tidak ditemukan, gagal update!",
        });
      }

      return res.json({
        users: result,
        message: "Data Destinasi dengan id " + id + " telah diubah",
      });
    }
  );
};

const deleteDestinationById = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      error: "Silahkan isi field id destinasi!",
    });
  }
  database.query(`DELETE FROM destinasi WHERE id=?`, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: "Error while deleting destinasi!",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(400).json({
        error: `Destinasi dengan ID ${id} tidak ditemukan, gagal dihapus!`,
      });
    }
    res.json({
      message: "Data Destinasi dengan id " + id + " telah dihapus!",
    });
  });
};

module.exports = {
  getAllDestination,
  getDestinationById,
  createDestination,
  updateDestinationById,
  deleteDestinationById,
};
