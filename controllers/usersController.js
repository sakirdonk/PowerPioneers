const database = require("../config/database.js");

// Get All User
const getAllUser = (req, res) => {
  database.query(`SELECT * FROM users`, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "Error while getting Data Users!",
      });
    }
    if (result.length === 0) {
      return res.json({
        message: "Data Users Not Found:",
        results: [],
      });
    }
    console.log(result);
    res.json({ result });
  });
};

// Get User By ID Users
const getUserByEmail = (req, res) => {
  const { email } = req.params;
  if (!email) {
    return res.status(400).json({
      error: "Silahkan isi field Email Users!",
    });
  }
  database.query(
    `SELECT * FROM users WHERE email = ?`,
    [email],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          error: "Error while getting Data User with Email",
        });
      }
      if (result.length === 0) {
        return res.json({
          message: "Data User Not Found:",
          results: [],
        });
      }
      console.log(result);
      res.json({ result });
    }
  );
};

// Create User saat user mendaftar akun baru
const createUser = (req, res) => {
  const { nama_depan, nama_belakang, email, password } = req.body;
  if (!nama_depan || !nama_belakang || !email || !password) {
    return res.status(400).json({
      error: "Silahkan isi seluruh field yang kosong!",
    });
  }
  database.query(
    `select * from users where email=?`,
    [email],
    (err, result) => {
      if (result.length === 1) {
        console.error(err);
        return res.status(500).json({
          message: "Email already registered",
        });
      }
      database.query(
        `INSERT INTO users(
                nama_depan,
                nama_belakang,
                email,
                password
            ) VALUE (
                ?, ?, ?, ?
            )`,
        [nama_depan, nama_belakang, email, password],
        (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              error: "Error while Registering User!",
            });
          }

          if (result.affectedRows > 0) {
            console.log(result);
            return res.json({
              message: "Registration Success!",
            });
          }
          return res.status(500).json({
            error: "Unable to register user!",
          });
        }
      );
    }
  );
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      message: "Silahkan isi field yang kosong",
    });
  }

  database.query(
    `Select * from users where email=? and password=?`,
    [email, password],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Terjadi kesalahan pada server",
        });
      }

      if (result.length === 0) {
        return res.status(401).json({
          message: "Email atau password salah",
        });
      }

      res.status(200).json({
        message: "Login berhasil",
        user: result[0],
      });
    }
  );
};

module.exports = {
  getAllUser,
  getUserByEmail,
  createUser,
  login,
};
