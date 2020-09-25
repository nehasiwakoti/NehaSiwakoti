export function seed(knex){
    return knex('rooms').insert(
                  {
                   id: "1",
                  name: "single economy",
                slug: "single-economy",
                type: "single",
                price: 1000,
                size: 200,
                capacity: 1,
                pets: false,
                breakfast: false,
                featured: false,
                description:
                " These rooms have been recently refurbished and are fully ensuite with toilet, shower and bath and toileteries. Also available in the room is Tea and Coffee making Facilities, Flat Screen TV, Hairdryer and Free Wifi. Iron and ironing board available upon request.",
                extras: [
                  "Shampoo", "hair rinse", "body shampoo", "tooth brush set", "Japanese gown", "towel",
                  "bath towel", "slipper and a Japanese tea."
                ]
               
                   },
            
            {
              
                id: "2",
                           
                name: "single basic",
                slug: "single-basic",
                type: "single",
                price: 1500,
                size: 250,
                capacity: 1,
                pets: false,
                breakfast: false,
                featured: false,
                description:
                  " These rooms have been recently refurbished and are fully ensuite with toilet, shower and bath and toileteries. Also available in the room is Tea and Coffee making Facilities, Flat Screen TV, Hairdryer and Free Wifi. Iron and ironing board available upon request.",
                extras: [
                  "Shampoo", "hair rinse", "body shampoo", "tooth brush set", "Japanese gown", "towel",
                  "bath towel", "slipper and a Japanese tea."
                ],
            
            },
            {
              
                id: "3",
              
              
                name: "single standard",
                slug: "single-standard",
                type: "single",
                price: 2500,
                size: 300,
                capacity: 1,
                pets: true,
                breakfast: false,
                featured: false,
                description:
                 " These rooms have been recently refurbished and are fully ensuite with toilet, shower and bath and toileteries. Also available in the room is Tea and Coffee making Facilities, Flat Screen TV, Hairdryer and Free Wifi. Iron and ironing board available upon request.",
                extras: [
                  "Shampoo", "hair rinse", "body shampoo", "tooth brush set", "Japanese gown", "towel",
                  "bath towel", "slipper and a Japanese tea."
                ]
                                
            
              
            },
            {
              
               id: "4",
                      
                name: "single deluxe",
                slug: "single-deluxe",
                type: "single",
                price: 3000,
                size: 400,
                capacity: 1,
                pets: true,
                breakfast: true,
                featured: false,
                description:
                 " These rooms have been recently refurbished and are fully ensuite with toilet, shower and bath and toileteries. Also available in the room is Tea and Coffee making Facilities, Flat Screen TV, Hairdryer and Free Wifi. Iron and ironing board available upon request.",
                extras: [
                  "Shampoo", "hair rinse", "body shampoo", "tooth brush set", "Japanese gown", "towel",
                  "bath towel", "slipper and a Japanese tea."
                ]
                     
              
            },
            {
              
                id: "5",
              
              
                name: "double economy",
                slug: "double-economy",
                type: "double",
                price: 2000,
                size: 300,
                capacity: 2,
                pets: false,
                breakfast: false,
                featured: false,
                description:
                  "Most suitable for couples and the size enables you to relax and feel at home.",
                  
                extras: [
                  "Television", "electric hot water pot", "refrigerator", "dryer", "table lamp", "humidifier",
           "broadband connection (free)", "air conditioning.",
           "Shampoo", "hair rinse", "body shampoo", "tooth brush set", "Japanese gown", "towel",
                  "bath towel", "slipper and a Japanese tea."],
                          
                
              
            },
            {
              
                id: "6",
              
              
                name: "double basic",
                slug: "double-basic",
                type: "double",
                price: 2500,
                size: 350,
                capacity: 2,
                pets: false,
                breakfast: false,
                featured: false,
                description:
                 "Most suitable for couples and the size enables you to relax and feel at home.",
                extras: [
                  "Television", "electric hot water pot", "refrigerator", "dryer", "table lamp", "humidifier",
                  "broadband connection (free)", "air conditioning.",
                  "Shampoo", "hair rinse", "body shampoo", "tooth brush set", "Japanese gown", "towel",
                         "bath towel", "slipper and a Japanese tea."
                 
                ],
                
                 
              
            },
            {
              
                id: "7",
              
              
                name: "double standard",
                slug: "double-standard",
                type: "double",
                price: 3000,
                size: 400,
                capacity: 2,
                pets: true,
                breakfast: false,
                featured: false,
                description:      
                "Most suitable for couples and the size enables you to relax and feel at home.",
                  
                extras: [
                  "Television", "electric hot water pot", "refrigerator", "dryer", "table lamp", "humidifier",
           "broadband connection (free)", "air conditioning.",
           "Shampoo", "hair rinse", "body shampoo", "tooth brush set", "Japanese gown", "towel",
                  "bath towel", "slipper and a Japanese tea."
                ]
              
            },
            {
               
                id: "8",
                        
               name: "double deluxe",
                slug: "double-deluxe",
                type: "double",
                price: 4000,
                size: 500,
                capacity: 2,
                pets: true,
                breakfast: true,
                featured: true,
                description:
                 
                 "Most suitable for couples and the size enables you to relax and feel at home.",
                extras: [
                  
                  "Television", "electric hot water pot", "refrigerator", "dryer", "table lamp", "humidifier",
           "broadband connection (free)", "air conditioning.",
           "Shampoo", "hair rinse", "body shampoo", "tooth brush set", "Japanese gown", "towel",
                  "bath towel", "slipper and a Japanese tea."
                ],
               
              
            },
            {
              
                id: "9",
              
                name: "family economy",
                slug: "family-economy",
                type: "family",
                price: 3000,
                size: 500,
                capacity: 3,
                pets: false,
                breakfast: false,
                featured: false,
                description:
                  "Deluxe family rooms with sofa bed, are modern decorated and offering comfortable hospitality to a family with 2 children, or a company of 4 adults. They are totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system.",
                extras: [
                  "Free internet",
                  "Coffee / Tea maker",
                  "Soundproof walls",
                  "Individually air conditioning system",
                  "Smart TV with satellite channels",
                  "Electronic safe box",
                  "Branded bathroom amenities",
                  "Bathrobe and slippers",
                  "Hair dryer",
                  "Weighting scale",
                  "Gym dumbbells",
                 " Mini bar",
                  "Daily maid services",
                ],
              
              
            },
            {
              
                id: "10",
              
              
                name: "family basic",
                slug: "family-basic",
                type: "family",
                price: 3500,
                size: 550,
                capacity: 4,
                pets: false,
                breakfast: false,
                featured: false,
                description:
                 "Deluxe family rooms with sofa bed, are modern decorated and offering comfortable hospitality to a family with 2 children, or a company of 4 adults. They are totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system.",
                extras: [
                  "Free internet",
                  "Coffee / Tea maker",
                  "Soundproof walls",
                  "Individually air conditioning system",
                  "Smart TV with satellite channels",
                  "Electronic safe box",
                  "Branded bathroom amenities",
                  "Bathrobe and slippers",
                  "Hair dryer",
                  "Weighting scale",
                  "Gym dumbbells",
                 " Mini bar",
                  "Daily maid services",
                ]                
                  
              
            },
            {
              
                id: "11",
              
              
                name: "family standard",
                slug: "family-standard",
                type: "family",
                price: 4000,
                size: 600,
                capacity: 5,
                pets: true,
                breakfast: false,
                featured: false,
                description:
                  "Deluxe family rooms with sofa bed, are modern decorated and offering comfortable hospitality to a family with 2 children, or a company of 4 adults. They are totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system.",
                extras: [
                  "Free internet",
                  "Coffee / Tea maker",
                  "Soundproof walls",
                  "Individually air conditioning system",
                  "Smart TV with satellite channels",
                  "Electronic safe box",
                  "Branded bathroom amenities",
                  "Bathrobe and slippers",
                  "Hair dryer",
                  "Weighting scale",
                  "Gym dumbbells",
                 " Mini bar",
                  "Daily maid services",
                ]
                  
              
            },
            {
              
                id: "12",
              
              
                name: "family deluxe",
                slug: "family-deluxe",
                type: "family",
                price: 5000,
                size: 700,
                capacity: 6,
                pets: true,
                breakfast: true,
                featured: true,
                description:
                  "Deluxe family rooms with sofa bed, are modern decorated and offering comfortable hospitality to a family with 2 children, or a company of 4 adults. They are totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system.",
                extras: [
                  "Free internet",
                  "Coffee / Tea maker",
                  "Soundproof walls",
                  "Individually air conditioning system",
                  "Smart TV with satellite channels",
                  "Electronic safe box",
                  "Branded bathroom amenities",
                  "Bathrobe and slippers",
                  "Hair dryer",
                  "Weighting scale",
                  "Gym dumbbells",
                 " Mini bar",
                  "Daily maid services",
                ]
                
            },
            {
              
                id: "13",
                           
                name: "presidential",
                slug: "presidential-room",
                type: "presidential",
                price: 6000,
                size: 1000,
                capacity: 10,
                pets: true,
                breakfast: true,
                featured: true,
                description:
                  "Deluxe family rooms with sofa bed, are modern decorated and offering comfortable hospitality to a family with 2 children, or a company of 4 adults. They are totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system.",
                extras: [
                  "Free internet",
                  "Coffee / Tea maker",
                  "Soundproof walls",
                  "Individually air conditioning system",
                  "Smart TV with satellite channels",
                  "Electronic safe box",
                  "Branded bathroom amenities",
                  "Bathrobe and slippers",
                  "Hair dryer",
                  "Weighting scale",
                  "Gym dumbbells",
                 " Mini bar",
                  "Daily maid services",
                ]
              }
            
          
    );
}