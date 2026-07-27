const products = [

  {
    id: 201,
    brand: "ZARA",
    name: "Colourfull Floral Shirt",
    price: "₹2,499",
    image: "../img/products/f1.jpg",
    description: "Premium colourful floral shirt made with breathable cotton fabric. Perfect for casual outings and summer wear."
  },

  {
    id: 202,
    brand: "Valentino",
    name: "Luxury Floral Shirt",
    price: "₹2,199",
    image: "../img/products/f2.jpg",
    description: "Elegant luxury floral shirt crafted from premium fabric for a stylish and comfortable look."
  },

  {
    id: 203,
    brand: "Valentino",
    name: "Luxury Floral Shirt",
    price: "₹3,999",
    image: "../img/products/f3.jpg",
    description: "Designer floral shirt with premium stitching and modern fit suitable for every occasion."
  },

  {
    id: 204,
    brand: "Tommy Hilfiger",
    name: "White Pink Floral Shirt",
    price: "₹2,999",
    image: "../img/products/f4.jpg",
    description: "Premium white floral shirt featuring elegant pink patterns with soft cotton comfort."
  },

  {
    id: 205,
    brand: "Levi's",
    name: "Floral Summer Shirt",
    price: "₹2,799",
    image: "../img/products/f5.jpg",
    description: "Comfortable floral summer shirt designed with lightweight cotton fabric."
  },

  {
    id: 206,
    brand: "Levi's",
    name: "Slim-Fit Denim Shirt",
    price: "₹2,799",
    image: "../img/products/f6.jpg",
    description: "Slim-fit denim shirt offering premium quality, durability and modern casual style."
  },

  {
    id: 207,
    brand: "Lacoste",
    name: "Linen Comfort Trouser",
    price: "₹4,499",
    image: "../img/products/f7.jpg",
    description: "Premium linen trouser providing maximum comfort with a classy appearance."
  },

  {
    id: 208,
    brand: "H&M",
    name: "Printed Casual Top",
    price: "₹2,999",
    image: "../img/products/f8.jpg",
    description: "Soft printed casual top suitable for daily wear with a trendy design."
  },

  {
    id: 209,
    brand: "Zara",
    name: "Oversize Cotton T-Shirt",
    price: "₹3,399",
    image: "../img/products/n1.jpg",
    description: "Oversized cotton t-shirt made with premium fabric for maximum comfort."
  },

  {
    id: 210,
    brand: "VERO MODA",
    name: "Blue Formal Shirt",
    price: "₹1,899",
    image: "../img/products/n2.jpg",
    description: "Elegant blue formal shirt designed for office and professional wear."
  },

  {
    id: 211,
    brand: "Louis Philippe",
    name: "White Formal Shirt",
    price: "₹3,499",
    image: "../img/products/n3.jpg",
    description: "Luxury white formal shirt with wrinkle-resistant premium cotton fabric."
  },

  {
    id: 212,
    brand: "U.S. Polo Assn.",
    name: "Printed Beige Shirt",
    price: "₹2,799",
    image: "../img/products/n4.jpg",
    description: "Premium beige printed shirt with comfortable regular fit."
  },

  {
    id: 213,
    brand: "Puma",
    name: "Denim Cotton Shirt",
    price: "₹3,399",
    image: "../img/products/n5.jpg",
    description: "Premium denim cotton shirt built for comfort and everyday fashion."
  },

  {
    id: 214,
    brand: "H&M",
    name: "Grey Shorts",
    price: "₹1,799",
    image: "../img/products/n6.jpg",
    description: "Comfortable grey shorts made from lightweight breathable fabric."
  },

  {
    id: 215,
    brand: "Wrangler",
    name: "Brown Utility Shirt",
    price: "₹129",
    image: "../img/products/n7.jpg",
    description: "Modern utility shirt featuring durable fabric and stylish design."
  },

  {
    id: 216,
    brand: "Allen Solly",
    name: "Premium Polo Shirt",
    price: "₹5,399",
    image: "../img/products/n8.jpg",
    description: "Premium polo shirt offering elegant style with soft cotton comfort."
  },
  
  {
    id: 101,
    brand: "Apple",
    name: "Apple iPhone 16 Pro",
    price: "₹1,19,900",
    image: "../img/products/t2.png",
    description: "Apple iPhone 16 Pro with A18 Pro chip, ProMotion display, advanced camera system and premium titanium design."
  },

  {
    id: 102,
    brand: "Samsung",
    name: "Samsung Galaxy S25 Ultra",
    price: "₹89,999",
    image: "../img/products/t1.png",
    description: "Samsung flagship smartphone featuring Galaxy AI, premium cameras and high-performance Snapdragon processor."
  },

  {
    id: 103,
    brand: "Apple",
    name: "MacBook Air M4",
    price: "₹1,09,900",
    image: "../img/products/t6.png",
    description: "Ultra-light MacBook Air powered by Apple's M4 chip for exceptional speed, battery life and productivity."
  },

  {
    id: 104,
    brand: "Sony",
    name: "Sony WH-1000XM6",
    price: "₹29,990",
    image: "../img/products/Sony-Headphone-PNG-File.png",
    description: "Industry-leading wireless noise cancelling headphones with crystal-clear sound quality."
  },

  {
    id: 105,
    brand: "Apple",
    name: "Apple Watch Series 11",
    price: "₹45,900",
    image: "../img/products/t4.png",
    description: "Smartwatch with advanced health tracking, fitness features and seamless iPhone integration."
  },

  {
    id: 106,
    brand: "Logitech",
    name: "Logitech MX Master 3S",
    price: "₹9,999",
    image: "../img/products/t3.png",
    description: "Professional wireless productivity mouse with silent clicks and ultra-precise tracking."
  },

  {
    id: 107,
    brand: "ASUS",
    name: "ASUS ROG Keyboard",
    price: "₹12,499",
    image: "../img/products/t5.png",
    description: "Mechanical RGB gaming keyboard designed for professional gamers and enthusiasts."
  },

  {
    id: 108,
    brand: "Razer",
    name: "Razer DeathAdder V3",
    price: "₹5,499",
    image: "../img/products/rgbmouse.webp",
    description: "Lightweight ergonomic gaming mouse with high precision optical sensor."
  },

  {
    id: 110,
    brand: "JBL",
    name: "JBL Flip 7 Speaker",
    price: "₹12,999",
    image: "../img/products/t8.jpg",
    description: "Portable Bluetooth speaker delivering powerful bass, waterproof protection and long battery life."
  },

  {
    id: 111,
    brand: "Dell",
    name: "Dell XPS 14",
    price: "₹1,69,900",
    image: "../img/products/t10.avif",
    description: "Premium Dell XPS laptop featuring Intel Core Ultra processor, OLED display and lightweight build."
  },

  {
    id: 112,
    brand: "Samsung",
    name: "Samsung Galaxy Buds 3 Pro",
    price: "₹16,999",
    image: "../img/products/t7.jpg",
    description: "Wireless earbuds with intelligent ANC, immersive audio and all-day comfort."
  },

  {
    id: 113,
    brand: "HP",
    name: "HP Victus Gaming Laptop",
    price: "₹84,999",
    image: "../img/products/t9.jpg",
    description: "Gaming laptop powered by NVIDIA RTX graphics and a high-refresh-rate display for smooth gameplay."
  },
{
    id: 217,
    brand: "Nike",
    name: "Nike Sports Hoodie",
    price: "₹4,499",
    image: "../img/products/n10.png",
    description: "Premium Nike sports hoodie made with soft fleece fabric. Comfortable, stylish and perfect for winter wear."
},
{
    id: 218,
    brand: "Nike",
    name: "Nike Air Max 270",
    price: "₹8,999",
    image: "../img/products/f9.png",
    description: "Nike Air Max 270 featuring responsive Air cushioning, breathable mesh upper and modern streetwear design."
},
{
    id: 219,
    brand: "Adidas",
    name: "Adidas Ultraboost 5",
    price: "₹10,999",
    image: "../img/products/f12.png",
    description: "Adidas Ultraboost 5 with Boost cushioning technology for maximum comfort and all-day performance."
},
{
    id: 220,
    brand: "Wrangler",
    name: "Wrangler Slim Fit Jeans",
    price: "₹3,499",
    image: "../img/products/f10.png",
    description: "Classic slim fit denim jeans crafted from premium stretch cotton for everyday comfort."
},
{
    id: 221,
    brand: "Tommy Hilfiger",
    name: "Tommy Hilfiger Polo T-Shirt",
    price: "₹2,799",
    image: "../img/products/n9.png",
    description: "Premium Tommy Hilfiger polo t-shirt made from soft cotton fabric with a timeless casual style."
},
{
    id: 222,
    brand: "Casio",
    name: "Casio Edifice Watch",
    price: "₹7,999",
    image: "../img/products/f11.png",
    description: "Elegant Casio Edifice analog watch featuring a stainless steel case and premium sporty design."
}
];