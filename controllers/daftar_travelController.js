const database = require("../config/database.js");

// Get Daftar Travel By ID Users
const getDaftarTravelById = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      error: "Silahkan isi field id users!",
    });
  }
  database.query(
    `SELECT * FROM daftar_travel WHERE id = ?`,
    [id],
    (err, result) => {
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
    }
  );
};

// Get All Daftar Travel
const getAllDaftarTravel = (req, res) => {
  database.query(`SELECT * FROM daftar_travel`, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "Error while getting Data Daftar Travel",
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

// Create Daftar Travel saat user mendaftar ikut travel
const createDaftarTravel = (req, res) => {
  const {
    user_id,
    full_name,
    phone_number,
    email_user,
    fetch_location,
    user_type_id,
    status_assurance_id,
    status_pemandu_khusus_id,
    destinasi_id,
    jumlah_orang,
    total_harga,
    tipe_pembayaran_id,
    tanggal_travel,
    expired_date,
  } = req.body;
  if (
    !user_id ||
    !full_name ||
    !phone_number ||
    !email_user ||
    !fetch_location ||
    !user_type_id ||
    !status_assurance_id ||
    !status_pemandu_khusus_id ||
    !destinasi_id ||
    !jumlah_orang ||
    !total_harga ||
    !tipe_pembayaran_id ||
    !tanggal_travel ||
    !expired_date
  ) {
    return res.status(300).json({
      error: "Silahkan isi seluruh field yang kosong!",
    });
  }
  database.query(
    `INSERT INTO daftar_travel(
            user_id,
            full_name,
            phone_number,
            email_user,
            fetch_location,
            user_type_id,
            status_assurance_id,
            status_pemandu_khusus_id,
            destinasi_id,
            jumlah_orang,
            total_harga,
            tipe_pembayaran_id,
            tanggal_travel,
            expired_date
        ) VALUES (
            ?, ?, ?, ?, 
            ?, ?, ?, ?, 
            ?, ?, ?, ?, 
            ?, ?
        )`,
    [
      user_id,
      full_name,
      phone_number,
      email_user,
      fetch_location,
      user_type_id,
      status_assurance_id,
      status_pemandu_khusus_id,
      destinasi_id,
      jumlah_orang,
      total_harga,
      tipe_pembayaran_id,
      tanggal_travel,
      expired_date,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: "Error while Registering Travel!",
        });
      }

      if (result.affectedRows > 0) {
        console.log(result);
        return res.json({
          message: "Registration Success!",
        });
      }
      return res.status(500).json({
        error: "Unable to register travel!",
      });
    }
  );
};

// Create Daftar Travel saat user mendaftar ikut travel
const updateDaftarTravelById = (req, res) => {
  const { id } = req.params;
  const {
    user_id,
    full_name,
    phone_number,
    email_user,
    fetch_location,
    user_type_id,
    status_assurance_id,
    status_pemandu_khusus_id,
    destinasi_id,
    jumlah_orang,
    total_harga,
    tipe_pembayaran_id,
    tanggal_travel,
    expired_date,
  } = req.body;
  if (
    !id ||
    !user_id ||
    !full_name ||
    !phone_number ||
    !email_user ||
    !fetch_location ||
    !user_type_id ||
    !status_assurance_id ||
    !status_pemandu_khusus_id ||
    !destinasi_id ||
    !jumlah_orang ||
    !total_harga ||
    !tipe_pembayaran_id ||
    !tanggal_travel ||
    !expired_date
  ) {
    return res.status(400).json({
      error: "Silahkan isi seluruh field yang kosong!",
    });
  }
  database.query(
    `update daftar_travel set
              user_id=?,
              full_name=?,
              phone_number=?,
              email_user=?,
              fetch_location=?,
              user_type_id=?,
              status_assurance_id=?,
              status_pemandu_khusus_id=?,
              destinasi_id=?,
              jumlah_orang=?,
              total_harga=?,
              tipe_pembayaran_id=?,
              tanggal_travel=?,
              expired_date=?
          WHERE id=?`,
    [
      user_id,
      full_name,
      phone_number,
      email_user,
      fetch_location,
      user_type_id,
      status_assurance_id,
      status_pemandu_khusus_id,
      destinasi_id,
      jumlah_orang,
      total_harga,
      tipe_pembayaran_id,
      tanggal_travel,
      expired_date,
      id,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: "Error while Updating Daftar Travel!",
        });
      }

      if (result.affectedRows === 0) {
        return res.status(400).json({
          error:
            "Daftar Travel dengan ID " + id + " tidak ditemukan, gagal update!",
        });
      }

      return res.json({
        users: result,
        message: "Data Daftar Travel dengan id " + id + " telah diubah",
      });
    }
  );
};

// Delete Daftar Travel ketika user membatalkan travel
const deleteDaftarTravel = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      error: "Silahkan isi field id Daftar Travel!",
    });
  }
  database.query(
    `DELETE FROM daftar_travel WHERE id=?`,
    [id],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: "Error while deleting daftar travel!",
        });
      }

      if (result.affectedRows === 0) {
        return res.status(400).json({
          error: `Data Daftar Travel dengan ID ${id} tidak ditemukan, gagal dihapus!`,
        });
      }
      res.json({
        message: "Data Daftar Travel dengan id " + id + " telah dihapus!",
      });
    }
  );
};

module.exports = {
  getAllDaftarTravel,
  getDaftarTravelById,
  createDaftarTravel,
  updateDaftarTravelById,
  deleteDaftarTravel,
};
