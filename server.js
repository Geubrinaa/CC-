const express = require("express");
const app = express();

// app method untuk menampilkan pilihan kategori makasakan //
app.get("/kategori", (req, res) => {
  const kategori = ["Salad", "Beverages", "Cake", "", "", ""];
  res.send(kategori);
});
// app method untuk menampilkan daftar makanan berdasarkan kategorinya //
app.get("/menu/:id_kategori", (req, res) => {
  let idKat = req.params.id_kategori;
  if (isNaN(parseInt(idKat)))
    return res.status(400).send("Invalid Category ID");
  else {
    const menu = [
      { nama: "Green Salad" },
      { nama: "Fruit Juice" },
      { nama: "Chocolate Cake" },
    ].filter((m) => m.nama.toLowerCase().includes(idKat.toLowerCase()));
    res.send(menu);
  }
});
// Method untuk mengambil gambar dan menampilkan resep-resep masakan //
app.get("/scan", (req, res) => {
  let image_file = req.query.nama;
  console.log(`User scanned ${image_file}`);
  if (!image_file) {
    return res.status(400).send("Please provide a food name!");
  }
});

// Method untuk mengambil data detail dari suatu makanan //
app.get("/detail", (req, res) => {
  const detail = req.params.detail;
  res.json({
    nama: "Nasi Goreng",
    bahan: "",
  });
  res.status(404).send("Not found");
});

// method untuk tombol setting
app.post("/setting", (req, res) => {
  const action = req.body.action;
  switch (action) {
    case "add":
      addSetting(req.body.data, res);
      break;
    default:
      res.status(400).send(`Action "${action}" not supported.`);
  }
});
