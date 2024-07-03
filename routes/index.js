const express = require("express");
const app = express();
const database = require("../config/database.js");
const errorhandler = require("../middleware/errorHandler.js");
const logger = require("../middleware/logger.js");
const cors = require("cors");

// Controller Connection
const daftarTravelController = require("../controllers/daftar_travelController.js");
const destinasiController = require("../controllers/destinasiController.js");
const kabupatenController = require("../controllers/kabupatenController.js");
const kategoriController = require("../controllers/kategoriController.js");
const pembayaranController = require("../controllers/pembayaranController.js");
const provinsiController = require("../controllers/provinsiController.js");
const statusController = require("../controllers/statusController.js");
const tipeUserController = require("../controllers/tipe_userController.js");
const usersController = require("../controllers/usersController.js");
const artikelController = require("../controllers/artikelController.js");

const PORT = 8000;

// Middleware
// Ambil data dari client yang dikirim berbentuk json
app.use(express.json());

// Menangani data dari client atau browser
app.use(express.urlencoded({ extended: true }));

//Menangani Error
app.use(errorhandler);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(logger);

// ROUTE http://localhost:8000/
// METHOD GET
app.get("/", (req, res) => {
  res.json({
    message: "Berhasil Success",
  });
});

// ================================== ROUTING ============================================
// =============================== DAFTAR TRAVEL =========================================
// Get Data Travel By ID User
app.get("/api/daftarTravel", daftarTravelController.getAllDaftarTravel);
// Get Data Travel By ID User
app.get("/api/daftarTravel/:id", daftarTravelController.getDaftarTravelById);
// Create Daftar Travel
app.post("/api/daftarTravel", daftarTravelController.createDaftarTravel);
// Update Daftar Travel
app.put("/api/daftarTravel/:id", daftarTravelController.updateDaftarTravelById);
// Delete Daftar Travel
app.delete("/api/daftarTravel/:id", daftarTravelController.deleteDaftarTravel);

// ================================= DESTINASI =========================================
// Get All Data From Table Destinasi
app.get("/api/destination", destinasiController.getAllDestination);
// Get Data Destinasi By Id
app.get("/api/destination/:id", destinasiController.getDestinationById);
// Create New Data Destinasi
app.post("/api/destination/", destinasiController.createDestination);
// Update Data Destinasi By Id
app.put("/api/destination/:id", destinasiController.updateDestinationById);
// Delete Data Destinasi By Id
app.delete("/api/destination/:id", destinasiController.deleteDestinationById);

// ================================= KABUPATEN =========================================
// Get All Data From Table Destinasi
app.get("/api/kabupaten/:id", kabupatenController.getKabupatenByProvinceId);

// ================================= KATEGORI =========================================
// Get All Data From Table Kategori
app.get("/api/kategori/", kategoriController.getAllCategory);

// ================================= PEMBAYARAN =========================================
// Get All Data From Table Kategori
app.get("/api/pembayaran/", pembayaranController.getAllPayment);

// ================================= PROVINSI =========================================
// Get All Data From Table Provinsi
app.get("/api/provinsi/", provinsiController.getAllProvince);

// ================================= STATUS =========================================
// Get All Data From Table Status
app.get("/api/status/", statusController.getAllStatus);

// ================================= TIPE USER =========================================
// Get All Data From Table Tipe User
app.get("/api/user_type/", tipeUserController.getAllUserType);

// =============================== DAFTAR TRAVEL =========================================
// Get Data User by Email User
app.get("/api/user/", usersController.getAllUser);

// Get Data User by Email User
app.get("/api/user/:email", usersController.getUserByEmail);

// Create New User
app.post("/api/user", usersController.createUser);

// Login User
app.post("/login", usersController.login);

// ================================= ARTIKEL =========================================
// Get All Data From Table Artikel
app.get("/api/artikel", artikelController.getAllArtikel);
// Get All Data From Table Artikel By Id
app.get("/api/artikel/:id", artikelController.getArtikelById);
// Create New Data Artikel
app.post("/api/artikel", artikelController.createArtikel);
// Update Data From Table Artikel
app.put("/api/artikel/:id", artikelController.updateArtikelById);
// Delete Data From Table Artikel
app.delete("/api/artikel/:id", artikelController.deleteArtikel);

// ================================= LISTEN ==============================================
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
