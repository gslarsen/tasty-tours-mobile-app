const router = require("express").Router();
const City = require("../models/city");
const Tour = require("../models/tour");
const Location = require("../models/location");

// INITIAL DATA
// const raleigh = new City({ name: "Raleigh, NC  US" });
// const durham = new City({ name: "Durham, NC  US" });
// const chapelHill = new City({ name: "Chapel Hill, NC  US" });

// raleigh.save();
// durham.save();
// chapelHill.save();

// const foodies = new Tour({
//   cityId: raleigh._id,
//   name: "Foodies!",
//   image:
//     "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_200,q_85,w_400/v1/clients/raleigh/tt_head_7_22_19_bdf716ae-da6f-4980-8e36-b283f11ee59f.jpg",
//   description:
//     "This tour is a fun and fantastic way to get to know the heart of downtown. Delicious savory and sweet tastings at unique, locally-owned restaurants, food shops, and food halls show off artisan preparations of regional dishes and bites.",
//   locations: []
// });

// const mofu = new Location({
//   place_id: "ChIJlcDv8XJfrIkRomNGWepQfjw", 
//   tourId: [foodies._id],
//   locationName: "MOFU Shoppe",
//   address: "321 S Blount St, Raleigh, NC 27601",
//   coordinates: { latitude: 35.7759366, longitude: -78.6365848 },
//   phone: "(919) 301-8465",
//   image:
//     "https://morganandco.com/wp-content/uploads/2019/10/2019-10-16-MCo-6-Ways-Help-Target-Customer-Find-Restaurant-Online-400x200.jpg",
//   menu: "https://www.mofushoppe.com/menus",
//   summary:
//     "MOFU Shoppe derives its name from several sources: 'Fu' means fortune in Mandarin Chinese. MO (more) FU (fortune); more food, more fun.  MOFU Shoppe brings the flavors of Asia to downtown Raleigh, fittingly, in an old car dealership (hence the unique garage doors).  \n\nThe dishes are inspired by the foods commonly eaten in several Asian countries and represent our identity in a unique way. We like to refer to our approach to food and our identity as nature (Asian Americans) and nurture (who grew up in the South around lots of diverse ethnic food). \n\nSunny and Sophia started their journey to food by dreaming about building and running a food truck in 2013. With the help of a successful Kickstarter, they finished building the truck and started service in 2014 as a truck that sold dumplings and pho cheekily called the 'Dump Pho King Truck'. After a year in operation they were approached by Food Network and invited to compete, along with their high school friend Becca Plumlee, in Season 6 of the reality TV show The Great Food Truck Race with Tyler Florence under the name 'Pho Nomenal Dumpling Truck'. Despite setbacks, including a blown engine in the very first episode, the truck eventually went on to become the first and only all-female team to ever win a season of The Great Food Truck Race. After being crowned champions of Season 6, Sunny and Sophia decided to keep the 'Pho Nomenal Dumpling Truck' name and put their $50,000 winnings from the show towards their brick and mortar restaurant – MOFU Shoppe."
// });

// const greenLight = new Location({
//   place_id: "ChIJ47ktj21frIkReHw8dqgs0aU",
//   tourId: [foodies._id],
//   locationName: "The Green Light",
//   address: "108 1/2 East Hargett Street, Raleigh, NC 27601",
//   coordinates: { latitude: 35.7782729, longitude: -78.63920159999999 },
//   phone: "(919) 833-4949",
//   image:
//     "https://lh5.googleusercontent.com/p/AF1QipN0YitmHvg5oIrb1V8DAxomHJ5lBlldBGb2JDN6=w408-h306-k-no",

//   menu: "http://places.singleplatform.com/the-green-light/menu?ref=google",

//   summary:
//     "The Green Light is a well kept cocktail secret aimed to intrigue every taste ranging from the cocktail connoisseur to the curious wanderer. The building was originally built in 1922, and when we found it we saw immediate character. As we pulled away old sheetrock and insulation, we found beautiful brick walls and windows that had been covered for decades. It was our vision to create a space that had a synergy with the historic business neighborhood while adding some comfortable, yet stylish, elements.\n\nIf you ever look up at the ceiling or look at a satellite view of our address, you’ll notice an enormous skylight in the shape of an arrow.\n\nWe wanted a bar and social house, so we created a craft beer menu, a specialty cocktail list, brought music, and then dimmed the lights. Follow the arrow and you’ll find a good time."
// });

// const stRoche = new Location({
//   place_id: "ChIJG4bhdnJfrIkR7ZYGFMACFIA",
//   tourId: [foodies._id],
//   locationName: "St. Roch Fine Oysters + Bar",
//   address: "223 S. Wilmington Street, Raleigh, NC 27601",
//   coordinates: { latitude: 35.7775196, longitude: -78.6379455 },
//   phone: "(919) 322-0359",
//   image:
//     "https://images.squarespace-cdn.com/content/v1/58922c1bbe65942118bf6143/1507064830193-RJ06LOEZD82C2K6L6LCE/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/DSC06151.jpg?format=1500w",

//   menu: "https://www.strochraleigh.com/#menu-section",

//   summary:
//     "St. Roch Fine Oysters + Bar embraces the spirit of our namesake New Orleans' neighborhood where Chef Sunny Gerhart's family hails from. We offer the finest oysters, ingredients and Carolina produce we can find, prepare them with a touch of  Sunny's past kitchens, and serve with energy and warmth.\n\nFresh Oysters and NC's best with a touch of New Orleans from Chef Sunny Gerhart, an alum of the highly-acclaimed Poole's Diner. In addition to oysters shucked or roasted, St. Roch does brunch with a pair of waffles – one sweet and topped with fruit and maple syrup, another savory and stuffed with sausage and topped with creole cane syrup. In place of doughnuts, Gerhart serves his dinner dessert, a mound of brioche beignets, the New Orleans breakfast icon, served here with bourbon caramel sauce.\n\nFor more of a savory lunch dish, the fired catfish po’boy comes wiht roasted tomato and Tabasco aioli.  For drinks, St. Roch gets creative. The best name is “Mary Smokes When She Drinks,” a Bloody Mary riff made with smoked tomato juice and hot sauce. There’s also a matcha gimlet for those craving the popular green tea, but also gin."
// });

// const bittersweet = new Location({
//   place_id: "ChIJneOkEHJfrIkRidqBmAyeguY",
//   tourId: [foodies._id],
//   locationName: "BITTERSWEET",
//   address: "16 E. Martin Street, Raleigh, NC 27601",
//   coordinates: { latitude: 35.7768286, longitude: -78.6386742 },
//   phone: "(919) 977-3829",
//   image:
//     "https://media-cdn.tripadvisor.com/media/photo-s/0f/8c/24/d1/desserts.jpg",

//   menu: "http://bittersweetraleigh.com/menu/",

//   summary:
//     "Bittersweet is a terribly wonderful cocktail, dessert and coffee lounge with an all-natural, local, seasonal menu. We are a place where you can get bourbon with your pie, champagne with your cake and Irish whiskey in your coffee. Our menu changes each season, with drink and dessert pairing specials offered regularly. \n\nBittersweet offers a seasonal and classic cocktail menu, with an emphasis on gin cocktails. We have over 55 different gins—many unique and rare in this state. We even have special “Gin Club” events. Our beer selection contains unique smaller breweries from North Carolina and all over. Our wine choices reflect our love of bubbles—champagne, cava, prosecco—our motto is “champagne saved is champagne wasted. \n\nWe have a full coffee and espresso menu with beans from our pals over in Durham, Counter Culture Coffee. Desserts are baked in-house daily from chef-owner Kim Hammer’s recipes—many going back years from Kim’s early days with her original company, bittycakes. Most weekends you will find Kim behind the bar plating tasty treats, next to our skilled and witty bartenders.  We love chatting with our customers, so join us for cocktails, dessert and late night banter—that’s right, we said banter and we meant it. We are responsible for some rather magnificent banter."
// });

// mofu.save();
// greenLight.save();
// stRoche.save();
// bittersweet.save();

// foodies.locations.push(mofu, greenLight, stRoche, bittersweet);
// foodies.save();


router.get("/cities", (req, res, next) => {
  City.find({}, (err, data) => {
    res.send({
      cities: data
    });
  });
});

router.get("/tours", (req, res, next) => {
  Tour.find({}, (err, data) => {
    res.send({
      tours: data
    });
  });
});

router.get("/locations", (req, res, next) => {
  Location.find({}, (err, data) => {
    res.send({
      locations: data
    });
  });
});

// // Returns a specific product by its id
// router.get("/products/:product", (req, res, next) => {
//   const productId = req.params.product;

//   // find product in db
//   Product.findById(productId, (err, prod) => {
//     if (err) console.log(err);
//     else {
//       res.send(prod);
//     }
//   });
// });

// // Returns ALL the reviews, but limited to 40 at a time. Reviews collection exists as this is using references and population methodology
// router.get("/reviews", (req, res, next) => {
//   const perPage = 40;

//   // return the first page by default
//   const page = req.query.page || 1;

//   Review.find()
//     .skip(perPage * (page - 1))
//     .limit(perPage)
//     .exec((err, reviews) => {
//       Product.count().exec((err, count) => {
//         if (err) console.log(err);
//         else res.send(reviews);
//       });
//     });
// });

// // Creates a new product in the database
// router.post("/products", (req, res, next) => {
//   let newProduct = new Product();

//   newProduct.category = req.body.category;
//   newProduct.name = req.body.name;
//   newProduct.price = req.body.price;
//   newProduct.image = req.body.image;
//   newProduct.reviews = [];

//   newProduct.save((err, prod) => {
//     if (err) console.log(err);
//     res.send(prod);
//   });
// });

// // Creates a new review in the database by adding it to the correct product's reviews array
// router.post("/:product/reviews", (req, res, next) => {
//   const productId = req.params.product;

//   // check to see if product is in db
//   Product.findById(productId, (err, product) => {
//     console.log("Product is:", product);
//     if (err) console.log(err);

//     // else create the new review
//     const userName = req.body.userName;
//     const text = req.body.text;

//     const newReview = new Review({
//       userName,
//       text,
//       product: productId
//     });

//     // save it
//     newReview.save(function(err, review) {
//       if (err) console.log(err);
//       console.log("Review added:", JSON.stringify(review));
//     });

//     // add to product reviews, save the product and return it to client
//     product.reviews.push(newReview);
//     product.save((err, prod) => {
//       if (err) console.log(err);
//       res.send(prod);
//     });
//   });
// });

// // Deletes a product by id
// router.delete("/products/:product", (req, res, next) => {
//   const productId = req.params.product;

//   Product.findByIdAndDelete(productId, (err, result) => {
//     if (err) console.log(err);
//     res.send(result);
//   });
// });

// // Deletes a review by id
// router.delete("/reviews/:review", (req, res, next) => {
//   const reviewId = req.params.review;

//   Review.findByIdAndDelete(reviewId, (err, result) => {
//     if (err) console.log(err);
//     res.send(result);
//   });
// });

module.exports = router;
