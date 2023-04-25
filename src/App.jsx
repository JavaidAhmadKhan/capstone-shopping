import Directory from "./components/Directory/Directory"


const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://cdn.shopify.com/s/files/1/0397/0396/9949/files/MEGA-MENU-ALL_MENS_CAPS-SS23_2000x.jpg?v=1679321798"
    },
    {
      id: 2,
      title: "Sneakers",
      imageUrl: "https://media.wired.com/photos/63728604691ed08cc4b98976/16:9/w_2095,h_1178,c_limit/Nike-Swoosh-News-Gear.jpg"
    },
    {
      id: 3,
      title: "Jeans",
      imageUrl: "https://media.istockphoto.com/id/1148893542/photo/stylish-jeans-clothing-store-stands-showcase-boutique.jpg?s=170667a&w=0&k=20&c=WahxaXzgGbNZIpfthyPu0Xpn2R5EB6oZhEgVBjG5Sus=",
    },
    {
      id: 4,
      title: "Hoodies",
      imageUrl: "https://cdn.shopify.com/s/files/1/0719/6737/5670/products/front-6404b53106fc5-Black_M_Hoodie_1800x1800.jpg?v=1678031238",
    },
    {
      id: 5,
      title: "Shirts",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAWfgdQz-6qaCOMDKiGcmJTDHy4uKtX1LJiyxSkD0lpQ6ZOucQcmMZ0mFBDZ4FzeZin0&usqp=CAU",
    },
    {
      id: 6,
      title: "Jackets",
      imageUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/505ae21d1f72403f85acabe500b57c53_9366/ESSENTIALS_DOWN_JACKET_Black_GH4589_01_laydown.jpg"
    },
    {
      id: 7,
      title: "Mens",
      imageUrl: "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0098_a98676a9-84c0-4069-93f3-7ad0fa6e4a96_765x.jpg?v=1675661267",
    },
    {
      id: 8,
      title: "Womens",
      imageUrl: "https://cdn.shopify.com/s/files/1/0549/9555/0392/products/8907546732667_6_1024x1024.jpg?v=1673008095"
    },
  ]

  return (
    <Directory categories={categories} />
  )
}

export default App