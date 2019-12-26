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
const foodies = new Tour({
  cityId: '5dfe9fbb6b86c13563744ac6',
  name: "Downtown Durham",
  image:
    "https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/9cd5e6a5-08e4-7b89-2de9-6394f81848b0/630x355.jpg",
  description:
    "The restaurants featured on this tour are a great way to experience downtown Durham, and they are local favorites with something for everyone.  There are four locations with opportunities for wine and beer here and there.",
  locations: []
});

// // PICK NEW LOCATIONS NEXT!!
const copa = new Location({
  place_id: "ChIJ__-_523krIkROx6yP0AZZlo", 
  tourId: [foodies._id],
  locationName: "COPA",
  address: "107 W Main St, Durham, NC 27701",
  coordinates: { latitude: 35.9950232, longitude: -78.9011522 },
  phone: "(919) 973-0111",
  image:
    "https://lh5.googleusercontent.com/p/AF1QipMh9F2vskP-G_yH0v2T23MAraBQAaHztBW3hQp-=w408-h272-k-no",
  menu: "https://copadurham.com/menus",
  summary:
    "At COPA, we're passionate about cultivating relationships from the soil to the table.  This means that we partner with organic farmers who care more about the quality of their soil than the ease of their harvest. We partner with farmers who practice healthy rotation of their animals on pasture, nurturing the soil as they go. This also means that we choose to take the long route at our own farm, Terra Sacra, building up the soil so that we can provide fresh, nutritious produce.\n\nOur philosphy also means that we don't just look for the best ingredients, but we also strive to build meaningful relationships with our farmers and local providers, fostering a dialogue that encourages each of us to perform to the highest standard. And we listen, too, paying attention to the needs of our vendors and seeking out new forms of partnership that will help them in their sustainability efforts. This could mean, for example, looking for a way to help a farmer sell an edible cover crop that is necessary for healthy soil but difficult to market. Or it could mean choosing to use smaller, heritage breeds of animals such as rabbit, poultry, lambs, and pigs, that are more sustainable for small farmers and increase the genetic diversity of livestock.\n\nCultivating relationships from the soil to the table also means that we care about our team members. We choose to pay a living wage, provide benefits, and offer a safe, nurturing work environment. This means that we are all committed to treating one another with respect and kindness.\n\nFinally, some of the most meaningful and special relationships that we cultivate are with you, our guests. From our early days at Old Havana through today, we have formed close friendships with many of our guests. We have seen some of them marry and have their first child. To our great delight, some of those children have cut their teeth on our black beans and sweet maduros. \n\nWhen you dine with us at COPA, you aren't just enjoying some of the nation's only farm-to-table Cuban food—you're engaging in a journey that begins in the earth itself, that turns strangers into friends, and that, almost magically, transports you to a time and place long forgotten, a time where people slowed down to savor flavors, to share face-to-face with loved ones, to nurture body and spirit."
});

const bull = new Location({
  place_id: "ChIJh3eRD27krIkRpG-tTJnXAf8",
  tourId: [foodies._id],
  locationName: "Bull City Burger and Brewery",
  address: "107 E Parrish St, Durham, NC 27701",
  coordinates: { latitude: 35.9954939, longitude: -78.8997764 },
  phone: "(919) 680-2333",
  image:
    "https://lh5.googleusercontent.com/p/AF1QipOn3-ud3sd8rhHkz-Y7-mol7YpJl49rk8mFFrbj=w408-h408-k-no",

  menu: "http://www.bullcityburgerandbrewery.com/food.html",

  summary:
    "Bull City Burger and Brewery is a locally owned, independent restaurant and craft brewery located at 107 East Parrish Street in downtown Durham, NC. We opened in March 2011. The restaurant serves lunch and dinner 7 days per week with approximately 90 seats inside plus 50 seats of outside year round patio dining. We offer counter style service and a family friendly experience with a children’s play area, as well as a semi-private meeting room for business gatherings, events and presentations all within full view of our own brewery.\n\nThere are Ten Things you need to know about us.\n\nThe restaurant is very much “farm-to-fork,” working closely with North Carolina pasture-raised beef farmers supplying beef with no added hormones and antibiotic-free, that we grind daily to make our hamburgers and all-beef hotdogs.  We work with other farmers growing vegetables such as tomatoes, cucumbers for pickles, and lettuce. The menu is streamlined with nearly everything produced on-site including house made buns, sauerkraut and bacon. We use no artificial sweeteners, no high fructose corn syrup, and no hydrogenated oils.  We like to say we are like fine dining in a burger joint.  We make the mustard, the slaw, the pickles, the mayo, the aioli, the hotdogs, the relish, the...\n\nCentral to Bull City Burger and Brewery’s core values is sustainability; our attempt is to operate while leaving the smallest energy footprint possible.  Our long term goal is to become part of a cycle of energy with the restaurant playing an integral role in the farms we source. Grain left over from the brewing process feeds locally farmed pigs and chickens that provide pork bellies to make our bacon and eggs for our over easy burger, and the fryer oil becomes bio-diesel to fuel vehicles. We are also recycling 99% of our food waste to feed pigs on a local farm, putting nearly zero food waste into landfills."
});

const pizza = new Location({
  place_id: "ChIJmRWKh3LkrIkRUVpp9W-ENqY",
  tourId: [foodies._id],
  locationName: "Pizzeria Toro",
  address: "105 W Chapel Hill St, Durham, NC 27701",
  coordinates: { latitude: 35.9971175, longitude: -78.9036011 },
  phone: "(919) 908-6936",
  image:
    "https://lh5.googleusercontent.com/p/AF1QipMfewqmgzlJKApMVoQ0fhUYSFFKrI-d1vOyiGeA=w408-h306-k-no",

  menu: "http://pizzeriatoro.com/toro_dinner.pdf",

  summary:
    "Buzzing, modern pizza parlor featuring wood-fired pies & a bar, plus an assortment of Italian wines."
});

const parlour = new Location({
  place_id: "ChIJvR4VdHLkrIkRQAffX2_rw0w",
  tourId: [foodies._id],
  locationName: "The Parlour",
  address: "117 Market St, Durham, NC 27701",
  coordinates: { latitude: 35.9966254, longitude: -78.9022573 },
  phone: "(919) 564-7999",
  image:
    "https://lh5.googleusercontent.com/p/AF1QipPtVQ2rnT3afKncHo4cs9UISRhXgpSJndwlfLXl=w450-h240-k-no",

  menu: "https://theparlour.co/menu/",

  summary:
    "The Parlour was founded by co-owners Yoni and Vanessa Mazuz (aka Mr. and Mrs. Parlour).\n\nWe make the best ice cream around, with the best ingredients. Vanessa started experimenting with ice cream many years ago, after we moved from Philadelphia so Yoni could attend graduate school at Duke. Coming from a city with such a strong ice cream history, we missed the easy access to high-quality handmade ice cream. Since sharing a scoop with friends is one of our favorite things to do, we began making ice cream at home to bring to friends and coworkers. Our hobby grew into a business in 2011, when we bought a used commercial ice cream maker, started making bigger batches at The Cookery, and served it all over the Triangle from our converted school bus. In 2012, we ran a Kickstarter campaign to raise money for our own kitchen, and in April of 2013 we opened our permanent location downtown, where we now employ 3 kitchen staff and a dozen scoopers.\n\nWe love being part of downtown Durham, where we operate right across from CCB Plaza, home of the iconic Major The Bull. We’ve been thrilled at the support we’ve gotten from neighboring businesses, community organizations, media, and of course customers. Tourists and locals alike keep us busy, with lines out the door all summer. In 2014 we announced our first expansion strategy—adding more space right where we are, for more seating, more production space, a bigger menu.\n\nOur flavors are inspired by the seasons, our favorite well-worn cookbooks, and our childhood ice cream memories (though we promise we will never ever make gummy bear ice cream.) We make our ice cream with 18% butterfat and the best quality ingredients we can get our hands on. We also make all our pastries and most of our toppings from scratch. We always offer vegan options, including fruit sorbets, creamy flavors made from coconut milk, and scratch-made vegan baked treats. We’re committed to paying our workers a living wage, giving back to our community, and creating happiness through ice cream."
});

copa.save();
bull.save();
pizza.save();
parlour.save();

foodies.locations.push(copa, bull, pizza, parlour);
foodies.save();


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
