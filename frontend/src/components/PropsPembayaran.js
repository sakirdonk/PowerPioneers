import React from "react";
import ReactDOM from "react-dom";
import Pembayaran from "./Pembayaran";

const ticketDetails = {
  noPesanan: "00112",
  tujuanDestinasi: "Tiket Pulau Pari",
  masaBerlaku: "Rabu 20 Juni 2024",
  jumlahPaket: "1",
  namaPemesan: "Nicho",
  nomorPemesan: "089XXXXX",
  emailPemesan: "nicho9@gmail.com",
};

ReactDOM.render(<Pembayaran ticketDetails={ticketDetails} />, document.getElementById("root"));
