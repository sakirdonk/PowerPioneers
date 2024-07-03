import React from "react";

const TanggalPemesanan = ({ selectedDate, onSelectDate }) => {
  const today = new Date();
  const dates = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);
    return date;
  });

  const formatDate = (date) => {
    const options = { weekday: "long", day: "numeric", month: "short" };
    return date.toLocaleDateString("id-ID", options);
  };

  return (
    <div className="tanggal-pemesanan">
      {dates.map((date, index) => (
        <button
          key={index}
          className={
            selectedDate.toDateString() === date.toDateString()
              ? "selected"
              : ""
          }
          onClick={() => onSelectDate(date)}
        >
          {formatDate(date)}
        </button>
      ))}
    </div>
  );
};

export default TanggalPemesanan;
