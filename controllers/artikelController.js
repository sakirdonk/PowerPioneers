const database = require("../config/database.js");

// Get All Data Artikel
const getAllArtikel = (req, res) => {
  database.query(`SELECT * FROM artikel`, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "Error while getting Data Artikel!",
      });
    }
    if (result.length === 0) {
      return res.json({
        message: "Data Artikel Not Found:",
        results: [],
      });
    }
    console.log(result);
    res.json({ result });
  });
};

// Get Data Artikel By ID
const getArtikelById = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      error: "Silahkan isi field id Artikel!",
    });
  }
  database.query(`SELECT * FROM artikel WHERE id = ?`, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "Error while getting Data Artikel with ID",
      });
    }
    if (result.length === 0) {
      return res.json({
        message: "Data Artikel Not Found:",
        results: [],
      });
    }
    console.log(result);
    res.json({ result });
  });
};

// Create Artikel
const createArtikel = (req, res) => {
  const { judul_artikel, deskripsi, kategori, main_foto } = req.body;
  if (!judul_artikel || !deskripsi || !kategori || !main_foto) {
    return res.status(400).json({
      error: "Silahkan isi field judul_artikel, deskripsi, kategori, main_foto",
    });
  }
  database.query(
    `INSERT INTO artikel (judul_artikel, deskripsi, kategori, main_foto) VALUES (?, ?, ?, ?)`,
    [judul_artikel, deskripsi, kategori, main_foto],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: "Error while inserting new artikel!",
        });
      }

      if (result.affectedRows > 0) {
        console.log(result);
        return res.json({
          message: "New Artikel Created!",
        });
      }
      return res.status(500).json({
        error: "No Artikel created!",
      });
    }
  );
};

// Update Data Artikel
const updateArtikelById = (req, res) => {
  const { id } = req.params;
  const { judul_artikel, deskripsi, kategori, main_foto } = req.body;
  if (!id || !judul_artikel || !deskripsi || !kategori || !main_foto) {
    return res.status(400).json({
      error: "Silahkan isi field id, judul_artikel, deskripsi, kategori",
    });
  }
  database.query(
    `UPDATE artikel SET judul_artikel=?, deskripsi=?, kategori=?, main_foto=? WHERE id=?`,
    [judul_artikel, deskripsi, kategori, main_foto, id],
    (err, result) => {
      if (err) {
        res.status(500).json({
          error: "Error while updating artikel!",
        });
      }

      console.log(result);

      if (result.affectedRows === 0) {
        return res.status(400).json({
          error: "Artikel dengan ID " + id + " tidak ditemukan, gagal update!",
        });
      }

      return res.json({
        users: result,
        message: "Data artikel dengan id " + id + " telah diubah",
      });
    }
  );
};

// Delete data Artikel
const deleteArtikel = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      error: "Silahkan isi field id Artikel!",
    });
  }
  database.query(`DELETE FROM artikel WHERE id=?`, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: "Error while deleting Artikel!",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(400).json({
        error: `Data Artikel dengan ID ${id} tidak ditemukan, gagal dihapus!`,
      });
    }
    res.json({
      message: "Data Artikel dengan id " + id + " telah dihapus!",
    });
  });
};

module.exports = {
  getAllArtikel,
  getArtikelById,
  createArtikel,
  updateArtikelById,
  deleteArtikel,
};
