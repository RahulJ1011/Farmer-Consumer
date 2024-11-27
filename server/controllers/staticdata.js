const product = require('../models/product');


const prods = [
    {
      "name": "Red Rice",
      "price": "200/Kg",
      "image": "https://drive.google.com/uc?export=view&id=1DIA-a4IFwfT051PYbtEoslIgzLsLFJX3",
      
      "owner": "ABC",
      "email": "pmvijay2004@gmail.com"
    },
    {
      "name": "Kambu",
      "price": "300/KG",
      "image": "https://drive.google.com/uc?export=view&id=1rH9w6BrTCGqHPYooAcPPVkn0qh0iQRTQ",
     
      "owner": "XYZ",
      "email": "pmvijay2004@gmail.com"
    },
    {
      "name": "Pongal Rice",
      "price": "400/KG",
      "image": "https://drive.google.com/uc?export=view&id=15tkZEd14p_0JNncwVYjlFZCQZ2bND5fm",
      
      "owner": "Loki",
      "email": "pmvijay2004@gmail.com"
    },
    {
      "name": "Raagi",
      "price": "500/KG",
      "image": "https://drive.google.com/uc?export=view&id=1DIA-a4IFwfT051PYbtEoslIgzLsLFJX3",
      
      "owner": "Vijay",
      "email": "pmvijay2004@gmail.com"
    },
    {
      "name": "Thinnai",
      "price": "550/KG",
      "image": "https://drive.google.com/file/d/19Rn7ffKjAYHyTVtMW7VobhI5Q9XA3K-a/view?usp=sharing",
      
      "owner": "Dhana",
      "email": "pmvijay2004@gmail.com"
    }
  ]
  

const insertProduct = async()=>
{
    try
    {
        const count = await product.countDocuments();
        if(count === 0)
        {
            await product.insertMany(prods)
            console.log('Static prod data inserted successfully');

        }
        else {
            console.log('Static prod data already exists, skipping insertion');
        }
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({msg:"Internal Server Error"})
    }
}

module.exports = {insertProduct}