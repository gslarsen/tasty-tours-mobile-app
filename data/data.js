import City from "../models/city";
import Tour from "../models/tour";

export const CITIES = [
  new City("c1", "Raleigh"),
  new City("c2", "Durham"),
  new City("c3", "Chapel Hill"),
  new City("c4", "Cary")
];

export const TOURS = [
  new Tour("t1", "c1", "Foodies!", [
    {
      locationName: "MOFU Shoppe",
      address: "321 S Blount St, Raleigh, NC 27601",
      phone: "(919) 301-8465",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipN0YitmHvg5oIrb1V8DAxomHJ5lBlldBGb2JDN6=w408-h306-k-no",
      summary:
        "MOFU Shoppe derives its name from several sources: 'Fu' means fortune in Mandarin Chinese. MO (more) FU (fortune); more food, more fun.  MOFU Shoppe brings the flavors of Asia to downtown Raleigh, fittingly, in an old car dealership (hence the unique garage doors).  The dishes are inspired by the foods commonly eaten in several Asian countries and represent our identity in a unique way. We like to refer to our approach to food and our identity as nature (Asian Americans) and nurture (who grew up in the South around lots of diverse ethnic food). Sunny and Sophia started their journey to food by dreaming about building and running a food truck in 2013. With the help of a successful Kickstarter, they finished building the truck and started service in 2014 as a truck that sold dumplings and pho cheekily called the 'Dump Pho King Truck'. After a year in operation they were approached by Food Network and invited to compete, along with their high school friend Becca Plumlee, in Season 6 of the reality TV show The Great Food Truck Race with Tyler Florence under the name 'Pho Nomenal Dumpling Truck'. Despite setbacks, including a blown engine in the very first episode, the truck eventually went on to become the first and only all-female team to ever win a season of The Great Food Truck Race. After being crowned champions of Season 6, Sunny and Sophia decided to keep the 'Pho Nomenal Dumpling Truck' name and put their $50,000 winnings from the show towards their brick and mortar restaurant – MOFU Shoppe."
    },
    {
      locationName: "3 Stooges",
      address: "321 S Blount St, Raleigh, NC 27601",
      phone: "(919) 301-8465",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipN0YitmHvg5oIrb1V8DAxomHJ5lBlldBGb2JDN6=w408-h306-k-no",
      summary:
        "MOFU Shoppe derives its name from several sources: 'Fu' means fortune in Mandarin Chinese. MO (more) FU (fortune); more food, more fun.  MOFU Shoppe brings the flavors of Asia to downtown Raleigh, fittingly, in an old car dealership (hence the unique garage doors).  The dishes are inspired by the foods commonly eaten in several Asian countries and represent our identity in a unique way. We like to refer to our approach to food and our identity as nature (Asian Americans) and nurture (who grew up in the South around lots of diverse ethnic food). Sunny and Sophia started their journey to food by dreaming about building and running a food truck in 2013. With the help of a successful Kickstarter, they finished building the truck and started service in 2014 as a truck that sold dumplings and pho cheekily called the 'Dump Pho King Truck'. After a year in operation they were approached by Food Network and invited to compete, along with their high school friend Becca Plumlee, in Season 6 of the reality TV show The Great Food Truck Race with Tyler Florence under the name 'Pho Nomenal Dumpling Truck'. Despite setbacks, including a blown engine in the very first episode, the truck eventually went on to become the first and only all-female team to ever win a season of The Great Food Truck Race. After being crowned champions of Season 6, Sunny and Sophia decided to keep the 'Pho Nomenal Dumpling Truck' name and put their $50,000 winnings from the show towards their brick and mortar restaurant – MOFU Shoppe."
    },
  
  ])
];
