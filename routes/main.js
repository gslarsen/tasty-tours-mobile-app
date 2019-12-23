const router = require("express").Router();
const City = require("../models/city");
const Tour = require("../models/tour");
const Location = require("../models/location");

// INITIAL DATA - RALEIGH TOUR 1
// const raleigh = new City({ name: "Raleigh, NC  US" });
// const durham = new City({ name: "Durham, NC  US" });
// const chapelHill = new City({ name: "Chapel Hill, NC  US" });

// raleigh.save();
// durham.save();
// chapelHill.save();

// 
// const foodies = new Tour({
//   cityId: '5dfe9fbb6b86c13563744ac6',
//   name: "Tasting & Drinks",
//   image:
//     "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_677,q_85,w_1280/v1/clients/raleigh/33168110854_2b07300105_o_571b7345-cc69-4d3e-ab0e-05e3a8eb83c9.jpg",
//   description:
//     "The restaurants featured on this tour are as farm-to-table as you will find and are all located in funky, rehabbed historic buildings. Chefs prepare substantial tour tastings all paired with small drinks, including beer, wine and cocktails.",
//   locations: []
// });

// // PICK NEW LOCATIONS NEXT!!
// const mateo = new Location({
//   place_id: "ChIJqbMjoHLkrIkRU_pHV3Z9LMM", 
//   tourId: [foodies._id],
//   locationName: "Mateo Bar de Tapas",
//   address: "109 W Chapel Hill St, Durham, NC 27701",
//   coordinates: { latitude: 35.9967559, longitude: -78.9048161 },
//   phone: "(919) 530-8700",
//   image:
//     "https://lh5.googleusercontent.com/p/AF1QipMRKUq7NmsW6W-8d-iLHb_WctHExBDuJppBG0C_=w408-h272-k-no",
//   menu: "http://mateotapas.com/menus.htm",
//   summary:
//     "MATEO BAR de TAPAS is the first solo venture from chef Matthew Kelly of Vin Rouge, housed in the old Book Exchange building in the heart of downtown Durham. Featuring a menu that blends the flavors of Spain with beloved ingredients and dishes of the South. We offer a casual, yet refined, menu of Spanish small plates with a Southern inflection. Accompanying the food is a robust Spanish wine list as well as one of the largest sherry offerings in the country."
// });

// const luna = new Location({
//   place_id: "ChIJP59o423krIkRSMWfvuK7-GY",
//   tourId: [foodies._id],
//   locationName: "Luna",
//   address: "112 W Main St, Durham, NC 27701",
//   coordinates: { latitude: 35.9954828, longitude: -78.9008417 },
//   phone: "(984) 439-8702",
//   image:
//     "https://lh5.googleusercontent.com/p/AF1QipN_90dOxWgrhXSyrl_BkF2E1oJKkshr7Fzk5Enw=w493-h240-k-no",

//   menu: "http://lunarotisserie.com/menu.html",

//   summary:
//     "Luna’s chef and owner, Shawn Stokes , has over 15 years experience in the restaurant industry. A 1998 graduate of Johnson & Wales University’s culinary arts program, he has worked in numerous successful establishments up and down the East Coast, including the Ritz Carlton in Naples, FL, Chillingsworth in Cape Cod, MA, Hank’s and Peninsula Grille in Charleston, SC, and Komi in Washington, DC. During his time in the industry, he served in front-of-house and back-of-house roles, gaining a well-rounded understanding of restaurant operations and management.\n\nIn 2005, Shawn left the restaurant world to pursue a career in international development. He spent the next 10 years working in different parts of the world, gaining experience with organizations such as the US Peace Corps, USAID, UNICEF, CARE International, and Catholic Relief Services. Unable to stray too far from his culinary background, much of his work centered on improving global food systems. Most often, he lived and worked in Latin America, where he collaborated with coffee growers in Ecuador, subsistence farmers in El Salvador, shrimp fishermen in Mexico, and cattle ranchers in Brazil."
// });

// const kingfisher = new Location({
//   place_id: "ChIJ_ZNX85zlrIkRMfygBL0t-Xc",
//   tourId: [foodies._id],
//   locationName: "Kingfisher",
//   address: "321 E Chapel Hill St, Durham, NC 27701",
//   coordinates: { latitude: 35.9971941, longitude: -78.9009655 },
//   phone: "(919) 908-9429",
//   image:
//     "https://images.squarespace-cdn.com/content/v1/5ae749d7c258b42ea807d269/1575746017257-ML5L860NH4ACF7CAFV77/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Kingfisher_Nov19_Lg_File-72.jpg?format=2500w",

//   menu: "https://www.kingfisherdurham.com/",

//   summary:
//     "Ground-to-Glass Cocktails & Snacks in an Artful Basement.  For the duo behind Kingfisher Bar, innovative, locally inspired drinks are only part of the process.\n\nI think people like that feeling of a personal touch, that someone took the time to really think about the guest experience. I like providing a little bit of a surprise and delight for people when they discover all the different details everywhere,” says Michelle Vanderwalker. She and husband, Sean Umstead, opened the cocktail den in downtown Durham, North Carolina, this past summer. The couple built most of the bar’s furniture and decor, by hand, with the help of family and friends.\n\nVanderwalker and Umstead craft drinks with a meticulous focus on unique combinations made from sustainable, fresh ingredients; they put the same care and attention to detail in styling the underground bar space, too. Kingfisher’s design is intimate, and the co-owners aesthetic—and Vanderwalker’s talent as a ceramicist and visual artist—shines throughout. Handmade wooden tables and booths welcome guests into the bar, a line of mushroom photos taken by Vanderwalker’s father brings whimsy to the space, Vanderwalker’s ceramic dishes are put to use as servingware, and an origami lamp made by the couple’s son lights up the space.\n\nPerhaps the crowning jewel of the space is the tile bar top, a glassy, watercolor maze of identical 2-inch hexagonal tiles. The project took Vanderwalker months to make by hand, and it’s now the focal point of the earthy, elegant basement. “It’s really great for me to see people enjoying it. It’s personal; I really wanted to make this a place where I wanted to be,” she says.\n\nKingfisher’s uber-personal design also has practical perks. By relying on their DIY skills—plus those of their friends—the couple avoided costs that could have easily taken them over budget. “My grandmother was always figuring out how to solve problems in an artistic way, and I came away with that,” Vanderwalker says.\n\nAnd their creativity is good for the earth, too. Umstead and Vanderwalker often use surplus ingredients from local farmers in the cocktails; it’s all part of an effort to build a respectful, symbiotic relationship with community growers. Their design process is similar.\n\nVanderwalker picked up supplies for the bar at a Durham scrap exchange, and the tables and booths were built by a carpenter friend from the remains of an old barn in Maine. “It’s a philosophy of of really caring about where things come from and our community and making things from scratch, making something that is really special out of what we have,” Vanderwalker says."
// });

// const virgil = new Location({
//   place_id: "ChIJZ6Fe3m3krIkRFkAGozd8dKE",
//   tourId: [foodies._id],
//   locationName: "Bar Virgile",
//   address: "105 S Mangum St, Durham, NC 27701",
//   coordinates: { latitude: 35.99472, longitude: -78.9007883 },
//   phone: "(919) 973-3000",
//   image:
//     "https://images.squarespace-cdn.com/content/v1/56798826e0327c3145ba5ab5/1505746741636-17YDGL350CIPSPH32MMG/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/hillhoneck_cocktail_.jpg?format=2500w",

//   menu: "https://www.barvirgile.com/menu",

//   summary:
//     "Bar Virgile, located in the heart of downtown Durham, is a restaurant and bar specializing in craft and classic cocktails as well as an ever changing dinner and small plates menu. We source our products from the area's best purveyors, and we rely on a dynamic in-house team to execute a high quality, high standard operation. You'll always find friendly and knowledgeable service, a bustling atmosphere and thoughtful offerings--all of which have made us a landmark, Triangle area destination.\n\nBoasting one of the largest Spirits selections in the Triangle, Bar Virgile offers a wide variety of whiskey, gin, rum, agave and much more. Our focus is on craft and classic cocktails as well as seasonal offerings. We pride ourselves on technique, quality ingredients and warm hospitality. An ever changing beer and wine program rounds out our award winning bar and restaurant.\n\nExecutive Chef, Scott Howell, has teamed up with Kyle West, our Chef de Cuisine, to create a diverse and technique driven menu. You'll find poultry, meats, seafood, local vegetables, charcuterie and cheeses and much more. Our open kitchen allows the guests to experience, first hand, the energy of a very busy kitchen. We pride ourselves on quality and design with our offerings. From house made bread to scratch made desserts, we work tirelessly on creating dishes our guests love.\n\nYou can sit at the bar on our comfortable red bar stools or bring a group to enjoy one of our leather banquettes. All seats in the dining room and bar area are first-come, first-served.\n\nWe are conveniently located downtown near the Durham Performing Arts Center and the Carolina Theater. Many of our guests stop by for a drink or a bite to eat before and after the shows."
// });

// mateo.save();
// luna.save();
// kingfisher.save();
// virgil.save();

// foodies.locations.push(mateo, luna, kingfisher, virgil);
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

module.exports = router;
