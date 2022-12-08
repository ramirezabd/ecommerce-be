import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import db from "../../models/index";
import Products from "../../models/product";

// const Products = db.Product;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CariSemua = async (req, res) => {
  db.Products.findAll()
    .then((hasil) => {
      res.send(hasil);
    })
    .catch((err) => console.error(err));
};

// const BuatProduc = async (req, res) => {
//   const ProductsRule = {
//     id_Seller: req.body.id_Seller,
//     id_Category: req.body.id_Category,
//     id_Shop: req.body.id_Shop,
//     Descr_Product: req.body.Descr_Product,
//     Quantity_Product: req.body.Quantity_Product,
//     Unit_Price: req.body.Unit_Price,
//     Product_Pictures: req.file.Product_Pictures,
//   };

//   Products.create(ProductsRule)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Terdapat kesalahan dalam penambahan data",
//       });
//     });
// };

// const BuatProduct = (req, res) => {
//   try {
//     const ProductsRule = {
//       id_Seller: req.body.id_Seller,
//       id_Category: req.body.id_Category,
//       id_Shop: req.body.id_Shop,
//       Descr_Product: req.body.Descr_Product,
//       Quantity_Product: req.body.Quantity_Product,
//       Unit_Price: req.body.Unit_Price,
//       Product_Pictures: req.file.Product_Pictures,
//     };

//     Products.create(ProductsRule)
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message: err.message || "Terdapat kesalahan dalam penambahan data",
//         });
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };

const BuatProductFoto = (req, res) => {
  try {
    console.log(req.file);
    if (req.file === undefined) res.send("Anda Harus Memasukan File Gambar");

    Products.create({
      id_Seller: req.body.id_Seller,
      id_Category: req.body.id_Category,
      id_Shop: req.body.id_Shop,
      Descr_Product: req.body.Descr_Product,
      Quantity_Product: req.body.Quantity_Product,
      Unit_Price: req.body.Unit_Price,
      Product_Pictures: fs.readFileSync(
        `${__dirname}../../src/imgsrc/misc${req.file.filename}`,
      ),
    }).then((product) => {
      fs.writeFileSync(
        `${__dirname}../../src/imgsrc/misc`,
        product.Product_Pictures,
      );
    });

    res.send("File Berhasil terkirim");
  } catch (error) {
    console.log(error);
    res.send(`Kesalahan saat pengiriman ${error}`);
  }
};
