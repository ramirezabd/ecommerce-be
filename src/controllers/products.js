import db from "../models";
const Products = db.Product
// import Products from "../../models/product.js";

module.exports.CariSemua = async (req, res) => {
    db.Products.findAll()
        .then(hasil => {
            res.send(hasil)
        })
        .catch(err => console.error(err))
}

module.exports.BuatProduc = async (req, res) => {
        const ProductsRule = await {
            id_Seller: req.body.id_Seller,
            id_Category: req.body.id_Category,
            id_Shop: req.body.id_Shop,
            Descr_Product: req.body.Descr_Product,
            Quantity_Product: req.body.Quantity_Product,
            Unit_Price: req.body.Unit_Price,
            Product_Pictures: req.file.Product_Pictures
        }

        Products.create(ProductsRule)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: 
                        err.message || "Terdapat kesalahan dalam penambahan data"
                })
            }) 
}

const BuatProduct = async (req, res) => {
    try {
        const ProductsRule = await {
            id_Seller: req.body.id_Seller,
            id_Category: req.body.id_Category,
            id_Shop: req.body.id_Shop,
            Descr_Product: req.body.Descr_Product,
            Quantity_Product: req.body.Quantity_Product,
            Unit_Price: req.body.Unit_Price,
            Product_Pictures: req.file.Product_Pictures
        }

        Products.create(ProductsRule)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: 
                        err.message || "Terdapat kesalahan dalam penambahan data"
                })
            })

    } catch (error) {
        console.log(error);
    }
}

module.exports.BuatProductFoto = async (req, res) => {
    try {
        console.log(req.file);
        if(req.file == undefined){
            return res.send("Anda Harus Memasukan File Gambar");
        }
        
        Products.create({
            id_Seller: req.body.id_Seller,
            id_Category: req.body.id_Category,
            id_Shop: req.body.id_Shop,
            Descr_Product: req.body.Descr_Product,
            Quantity_Product: req.body.Quantity_Product,
            Unit_Price: req.body.Unit_Price,
            Product_Pictures: fs.readFileSync(__basedir + "../../src/imgsrc/misc" + req.file.filename)
        })
        .then((Products) => {
            fs.writeFileSync(__basedir+ "../../src/imgsrc/misc", Products.Product_Pictures)
        });

        res.send("File Berhasil terkirim")
    }
    catch (error) {
        console.log(error);
        return res.send(`Kesalahan saat pengiriman ${error}`);
      }
}

export default BuatProduct;