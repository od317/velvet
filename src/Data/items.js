

const colors = [
     '#0985de',
     '#000000',
     '#de0707',
     '#e009b2',
     '#27d117',
     '#d4ca0f',
     '#9b0ac7',
     '#FFFDD0'
]

let Indexes = [1,2,3,4,5,6,7]



let items = 
[
     {
         "name": "Reefer Wool Blend Coat",
         "price": 250,
         "dis": 28,
         "desc": "Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.",
         "type": "coat",
         "img": [
             {
                 "color": "#060405",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/904ba27d-ac1c-4240-b755-0c171ea98421.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/bb3d2316-46b5-4f98-9fe9-ee100cd4663e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/1ff675c8-3f7e-4f8d-8939-e43ef0b09dc8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "#c6c4c5",
                 "name": "gray",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/3798e2a8-8b6a-4e93-a4d7-ed206bbb34ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "#cd9d75",
                 "name": "cream",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/812c6c7a-4d10-4e96-b182-4ebdca5ba880.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/614bc188-19cd-48b1-9a7a-afda947b3844.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/1faa2162-9e19-417d-9836-1ca71ad71114.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t1",
         "rate": {
             "rate": 5.4,
             "numrate": 4980
         },
         "brand": "Canada Goose",
         "date": 313,
         "frees": true,
         "size": {}
     },
     {
         "name": "Fall Away Tie Belt Coat",
         "price": 180,
         "desc": "Smooth goldtone buttons line the asymmetric placket of a stately tie-belt coat that'll keep you chic and cozy when temperatures dip.",
         "type": "coat",
         "img": [
             {
                 "color": "#0e1822",
                 "name": "navy",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/fa66cd27-0f01-4efc-bf81-904081168b38.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/58db5a4d-3728-4fb6-8908-bac3a7120a69.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/4a077aab-1cbd-49d8-b94f-1b2c31fb05f0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#9f6a49",
                 "name": "brown",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/3dfd6fe8-95a3-4771-b4ed-f582f7d1540d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/7b518e27-6938-4a03-9885-b57b627f17a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/f8f284d7-532c-445b-91f7-1f614361e34b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#131315",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/c2bc365a-c91c-4c8f-a20f-1041525bc6b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/cff4f467-7891-44bc-bf9d-de0840581db1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/fcd17e9d-5593-4a39-bc6e-1457aecdc186.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2"
                 ]
             }
         ],
         "simList": [
             "t1",
             "t2",
             "t3",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1"
         ],
         "id": "t2",
         "rate": {
             "rate": 9.7,
             "numrate": 3165
         },
         "brand": "Canada Goose",
         "date": 180,
         "frees": true,
         "size": {}
     },
     {
         "name": "Belted Cotton Blend Gabardine Trench Coat",
         "rate": {
             "rate": 7.5,
             "numrate": 3910
         },
         "price": 250,
         "desc": "Water-resistant gabardine enhances the functional fashion of a double-breasted trench coat detailed with epaulets and cinched with a matching belt.",
         "type": "coat",
         "img": [
             {
                 "color": "#d4bb9d",
                 "name": "beige",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/78b61e7d-86e5-4062-a643-ad1aab595304.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/01b4086e-88f5-4eac-b2b5-fab7afa2d8ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/cbd41978-4a1d-4bdc-827b-364e8334e98a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "simList": [
             "t1",
             "t2",
             "t2",
             "t2",
             "t2",
             "t2",
             "t3",
             "t4",
             "t5",
             "t6",
             "t7",
             "t8",
             "t9",
             "t10",
             "t11",
             "t12",
             "t13",
             "t14"
         ],
         "id": "t3",
         "brand": "Canada Goose",
         "date": 789,
         "frees": true,
         "size": {}
     },
     {
         "name": "Wool Blend Notch Collar Coat",
         "price": 220,
         "desc": "Opt for a sophisticated look on your urban excursions in this wool-blend coat made with an insulated lining for extra comfort.",
         "type": "coat",
         "img": [
             {
                 "color": "#e2d5e7",
                 "name": "lilac",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/23f4f81f-ed9d-4f82-88d2-a59ecf512cdc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/c9c90dd5-0404-45ef-b33d-ec70d4c8783c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/ff961e51-990b-4c3f-9ecc-83b9995e1e71.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#de1a64",
                 "name": "magenta",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/64812d8c-aa9e-4221-b13b-c7c7a96f48cc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/f71a433c-66f5-4cb1-988b-afe03a0ab726.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "simList": [
             "t1",
             "t2",
             "t3",
             "t4",
             "t5",
             "t6",
             "t7",
             "t8",
             "t1",
             "t1",
             "t1",
             "t1"
         ],
         "id": "t4",
         "rate": {
             "rate": 4,
             "numrate": 4288
         },
         "brand": "Canada Goose",
         "date": 810,
         "frees": true,
         "size": {}
     },
     {
         "name": "Double Breasted Wool Blend Coat",
         "price": 350,
         "desc": "This refined coat fashioned from a soft wool blend falls to a classic knee length.",
         "type": "coat",
         "img": [
             {
                 "color": "#e2d5e7",
                 "name": "navy",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/614be209-8f75-42d1-839b-dd3686c83937.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/6d3c1749-6477-43bf-b5e4-aa6b09eb8cbf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/b88e6cc1-35c6-4429-972c-0b7513e7f8dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "simList": [
             "t1",
             "t2",
             "t3",
             "t4",
             "t5",
             "t6",
             "t7",
             "t8",
             "t1",
             "t1",
             "t1",
             "t1"
         ],
         "id": "t5",
         "rate": {
             "rate": 6.9,
             "numrate": 3499
         },
         "brand": "Canada Goose",
         "date": 585,
         "frees": true,
         "size": {}
     },
     {
         "name": "Water Repellent Cotton Blend Belted Trench Coat",
         "price": 240,
         "dis": 37,
         "desc": "Belted cuffs, tonal piping and logo buttons add winning style points to an endlessly wearable coat designed with a water-repellent finish.",
         "type": "coat",
         "img": [
             {
                 "color": "#050503",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/63a28436-7615-4e81-8b01-eb3023b618d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/242160f3-85bd-40b8-a01d-9630127af752.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/44124249-4c03-4cb4-ac34-34cf64db64e2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#d6b596",
                 "name": "sand",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/062e1509-c88d-414a-a836-d0d092e27fc0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/c4668f1d-222e-4fca-828c-9784b3632d16.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/0b853bba-c82b-4dbf-b080-29c08cd601a4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "simList": [
             "t1",
             "t2",
             "t3",
             "t4",
             "t5",
             "t6",
             "t7",
             "t8",
             "t9",
             "t11",
             "t12",
             "t1"
         ],
         "id": "t6",
         "rate": {
             "rate": 8.6,
             "numrate": 1350
         },
         "brand": "Canada Goose",
         "date": 757,
         "frees": true,
         "size": {}
     },
     {
         "name": "Women's Rossclair Water Resistant 625 Fill Power Down Parka",
         "price": 1395,
         "desc": "This water-resistant parka with down insulation will get you through harsh cold and winds with extended coverage on the hood, ribbed cuffs and a drawcord waist.",
         "type": "coat",
         "img": [
             {
                 "color": "#060405",
                 "name": "white",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/c683f0be-b71c-4a01-8a0d-546d9ad7292e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/6138e2d2-01fc-49c1-bef6-2cc4bb083c3a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/121c0275-47b9-4ef8-9191-ec36a7d13c65.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "simList": [
             "t1",
             "t2",
             "t3",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1"
         ],
         "id": "t7",
         "rate": {
             "rate": 9.5,
             "numrate": 4102
         },
         "brand": "Canada Goose",
         "date": 873,
         "frees": true,
         "size": {}
     },
     {
         "name": "Alliston Packable Down Jacket",
         "price": 995,
         "desc": "Packable into its own pocket, this lightweight yet durable and toasty-warm jacket is perfect for travel.",
         "type": "coat",
         "img": [
             {
                 "color": "#faf9f7",
                 "name": "white",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/f6473c6f-f1f2-4593-acf9-8aad224f49ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/7b7fc910-e2ea-41e0-8a0f-ca7c037c2be7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/88540f8a-10b1-43f6-b308-b0f8fbd2e77f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "simList": [
             "t1",
             "t2",
             "t3",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1"
         ],
         "id": "t8",
         "rate": {
             "rate": 7.9,
             "numrate": 3737
         },
         "brand": "Lauren Ralph Lauren",
         "date": 112,
         "frees": true,
         "size": {}
     },
     {
         "name": "Shelburne Water Resistant 625 Fill Power Down Parka",
         "price": 1395,
         "desc": "Navigate fluctuations in weather in this water-resistant parka with powerful down insulation, removable hood-extending trim and a back vent with snap closures.",
         "type": "coat",
         "img": [
             {
                 "color": "#060405",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/5959557b-34b9-4bcd-ad61-40a148b9e101.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/3c2cb4f2-8ae9-4cfc-90a5-6b0de5949069.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "simList": [
             "t1",
             "t2",
             "t3",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1"
         ],
         "id": "t9",
         "rate": {
             "rate": 4.4,
             "numrate": 4379
         },
         "brand": "Canada Goose",
         "date": 203,
         "frees": true,
         "size": {}
     },
     {
         "name": "Double Breasted Wool Blend Coat",
         "price": 350,
         "dis": 55,
         "desc": "This refined coat fashioned from a soft wool blend falls to a classic knee length.",
         "type": "coat",
         "img": [
             {
                 "color": "#b0794f",
                 "name": "beige",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/7c6f8072-3655-46fd-9b03-c54f12dd18c1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/702ccd26-0da2-4bd1-9ec7-53b8eaeba27c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "#1c1920",
                 "name": "navy",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/614be209-8f75-42d1-839b-dd3686c83937.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/6d3c1749-6477-43bf-b5e4-aa6b09eb8cbf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "simList": [
             "t1",
             "t2",
             "t3",
             "t2",
             "t2",
             "t2",
             "t3",
             "t4",
             "t5",
             "t6",
             "t7",
             "t8",
             "t9",
             "t10",
             "t11",
             "t12",
             "t13",
             "t14"
         ],
         "id": "t10",
         "rate": {
             "rate": 6.6,
             "numrate": 424
         },
         "brand": "Lauren Ralph Lauren",
         "date": 865,
         "frees": true,
         "size": {}
     },
     {
         "name": "Houndstooth Single Breasted Insulated Coat",
         "price": 310,
         "dis": 25,
         "desc": "Sleek faux-leather trim on the pockets and collar elevates a sophisticated houndstooth coat made with a back vent for easy movement.",
         "type": "coat",
         "img": [
             {
                 "color": "#b0794f",
                 "name": "beige",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/843b9ad6-3a50-4048-8c8c-db263f076f0c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/b94679b3-205f-4211-904b-8ad8b084f02f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/e60327bb-0d2f-4e3c-8374-05f994a9f0da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "simList": [
             "t1",
             "t2",
             "t3",
             "t4",
             "t2",
             "t2",
             "t3",
             "t4",
             "t5",
             "t6",
             "t7",
             "t8",
             "t9",
             "t10",
             "t11",
             "t12",
             "t13",
             "t14"
         ],
         "id": "t11",
         "rate": {
             "rate": 7.8,
             "numrate": 1565
         },
         "brand": "Canada Goose",
         "date": 174,
         "frees": true,
         "size": {}
     },
     {
         "name": "Glen Plaid Belted Wool Blend Coat",
         "price": 320,
         "dis": 34,
         "desc": "Crisp notched lapels and a zoomed-in glen plaid define the look of a modern coat that takes after blazer and trench styles.",
         "type": "coat",
         "img": [
             {
                 "color": "#dbdac5",
                 "name": "white",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/9dad0193-92ac-4d2b-b841-a88fa29095ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/1ac9b93e-1929-4021-9a0c-0a4ace25ad7f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "simList": [
             "t1",
             "t2",
             "t3",
             "t4",
             "t5",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1"
         ],
         "id": "t12",
         "rate": {
             "rate": 4.9,
             "numrate": 4184
         },
         "brand": "Canada Goose",
         "date": 54,
         "frees": true,
         "size": {}
     },
     {
         "name": "Crest Wool Blend Coat",
         "price": 300,
         "desc": "A crest patch and matching statement buttons distinguish a classic wool-blend coat you'll wear forever.",
         "type": "coat",
         "img": [
             {
                 "color": "#181619",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/8c935329-6355-428d-903c-d433b773aace.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/99220a0d-d5c9-4dd9-804b-c2c9fe376555.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/c2a1310d-d309-4f68-a3e5-17da5368701c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "simList": [
             "t1",
             "t2",
             "t3",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1"
         ],
         "id": "t13",
         "rate": {
             "rate": 6.1,
             "numrate": 4121
         },
         "brand": "Lauren Ralph Lauren",
         "date": 573,
         "frees": true,
         "size": {}
     },
     {
         "name": "Faux Leather Trim Wool Blend Longline Coat",
         "price": 300,
         "desc": "Buttery faux-leather accents polish this wool-blend coat that's perfectly suited to workdays and weekend jaunts.",
         "type": "coat",
         "img": [
             {
                 "color": "#060405",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/c5b450c9-2bab-421e-b641-bdc25aac0ae0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/abb43a53-ba23-492b-8a6f-173a9f8b30a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "simList": [
             "t1",
             "t2",
             "t3",
             "t4",
             "t5",
             "t6",
             "t7",
             "t1",
             "t1",
             "t1",
             "t1",
             "t1"
         ],
         "id": "t14",
         "rate": {
             "rate": 3,
             "numrate": 5734
         },
         "brand": "Lauren Ralph Lauren",
         "date": 376,
         "frees": true,
         "size": {}
     },
     {
         "name": "Tailored Wool Blend Coat",
         "price": 240,
         "desc": "Look classy while staying comfortably covered up in this handsome longline coat crafted from a warm wool blend.",
         "type": "coat",
         "img": [
             {
                 "color": "#252527",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/860d2b03-159f-41bf-b68b-d92cf08e8348.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/2ae88f9a-a693-428b-98ce-eb2c99346a7d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/433c3a49-5e08-4650-8ff7-9f4e94a9d606.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "simList": [
             "t1",
             "t2",
             "t3",
             "t4",
             "t5",
             "t6",
             "t7",
             "t8",
             "t1",
             "t1",
             "t1",
             "t1"
         ],
         "id": "t15",
         "rate": {
             "rate": 7.3,
             "numrate": 5601
         },
         "brand": "Canada Goose",
         "date": 744,
         "frees": true,
         "size": {}
     },
     {
         "name": "Faux Leather Trim Longline Quilted Jacket",
         "price": 210,
         "dis": 33,
         "desc": "Semiglossy faux-leather trim traces the edges of a longline quilted coat finished with tonal buttons and a monogram plaque on the sleeve.",
         "type": "coat",
         "img": [
             {
                 "color": "#060405",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/f8e3be0c-d716-46d2-a4cf-12a0fb16d48a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/3039ebd9-316b-4797-ac43-ec8d20638816.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t16",
         "rate": {
             "rate": 8.8,
             "numrate": 4921
         },
         "brand": "Canada Goose",
         "date": 476,
         "frees": true,
         "size": {}
     },
     {
         "name": "Alliston Packable Down Jacket",
         "price": 1050,
         "desc": "Packable into its own pocket, this lightweight yet durable and toasty-warm jacket is perfect for travel.",
         "type": "coat",
         "img": [
             {
                 "color": "#faf9f7",
                 "name": "white",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/6b55a67f-d2a8-46be-9d9d-f199d99b0b6a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/27cff166-b1a1-4c62-9a0f-84e7b085c448.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/cc3b2fef-f7d7-4953-992c-e45b81fbe31b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t17",
         "rate": {
             "rate": 6.4,
             "numrate": 1598
         },
         "brand": "Lauren Ralph Lauren",
         "date": 5,
         "frees": true,
         "size": {}
     },
     {
         "name": "Rosalind Quilted Belted Trench Coat",
         "price": 430,
         "desc": "Saunter through the seasons in soft sophistication with this lovely trench coat blanketed in cozy box quilting and finished with classic epaulets.",
         "type": "coat",
         "img": [
             {
                 "color": "#beb4b3",
                 "name": "Earl Gray",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/894b8faa-596a-4056-a97f-562ba6eaf69b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990",
                     "https://n.nordstrommedia.com/id/sr3/c3abb1e4-2baf-4892-a409-83feea2ad9fb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/8ed28338-241a-4ff8-b44c-0872be6cd9e9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#3b3947",
                 "name": "navy",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/4f7d8e0a-3e71-469f-96a8-7206355fa2c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/80311d78-c747-4a79-847d-9b82d8de3aaf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t18",
         "rate": {
             "rate": 8.2,
             "numrate": 4399
         },
         "brand": "Canada Goose",
         "date": 839,
         "frees": true,
         "size": {}
     },
     {
         "name": "Longline Coat",
         "price": 239,
         "dis": 37,
         "desc": "A contrast lining adds an extra flash of contemporary style to a blazer-inspired coat featuring shoulder pads, peaked lapels and classic flap pockets.",
         "type": "coat",
         "img": [
             {
                 "color": "#dc5486",
                 "name": "Fuschia",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/255ddcb4-7a55-47df-884d-db24cbdea642.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/f2169da4-a43f-4aab-a461-2065ba4caa5d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/f2169da4-a43f-4aab-a461-2065ba4caa5d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "#a54c31",
                 "name": "Cinnamon",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/f82e6d51-1471-457a-bc8f-022a3a965449.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/33e5ae30-0296-4dc8-b490-ca5b7c5ad8ce.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t19",
         "rate": {
             "rate": 6.1,
             "numrate": 3254
         },
         "brand": "Lauren Ralph Lauren",
         "date": 598,
         "frees": true,
         "size": {}
     },
     {
         "name": "Drape Trench Coat",
         "price": 179,
         "desc": "A wide notched collar accentuates the draped effect of an open-front trench coat tied with a matching belt.",
         "type": "coat",
         "img": [
             {
                 "color": "#272532",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/278e331b-496c-4afa-941f-f9acc7be7706.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/278e331b-496c-4afa-941f-f9acc7be7706.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/10b7f30b-ce7a-4f98-ac34-20cf288f4db4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990"
                 ]
             },
             {
                 "color": "#5e513e",
                 "name": "Mushroom",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/720c06d8-80e5-4a0e-b020-90cd2cd28171.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990",
                     "https://n.nordstrommedia.com/id/sr3/809be536-2332-4bd5-8f1d-5ff8803a7899.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/1cf4fdd8-5358-41c8-9d98-135d176c7c80.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t20",
         "rate": {
             "rate": 9.1,
             "numrate": 5479
         },
         "brand": "Canada Goose",
         "date": 736,
         "frees": true,
         "size": {}
     },
     {
         "name": "Phoenix Fleece Crewneck Sweatshirt",
         "price": 70,
         "desc": "Dropped shoulders and an oversized fit bring throwback charm to a cozy fleece sweatshirt with an embroidered Swoosh on the chest.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#f1f1e9",
                 "name": "white",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/688e70b0-8231-4f65-a22c-25b93f2554bf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/4defdd4a-0554-4981-b8a1-eeb91133e149.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990"
                 ]
             },
             {
                 "color": "#008095",
                 "name": "teal",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/5ca14b82-020d-4fd1-a1b1-db52975e0fdd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/d3219485-4e5b-4761-8ff3-2715fad273a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/c7b755bf-a064-4bec-830a-5d2622ce3a5f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#262628",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/95a9d029-e7fc-4a6e-9593-8c9bff60bd1d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990",
                     "https://n.nordstrommedia.com/id/sr3/d7765f97-dfb2-4e83-8f27-b1b64c850909.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t21",
         "rate": {
             "rate": 4.1,
             "numrate": 1151
         },
         "brand": "Lauren Ralph Lauren",
         "date": 701,
         "frees": true,
         "size": {}
     },
     {
         "name": "Drew Crewneck Sweatshirt",
         "price": 49,
         "desc": "Do your casual lineup a solid with this supersoft and cozy, classic crewneck sweatshirt because it's essential for the gym, coffee runs or couch lounging.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#f5f4f2",
                 "name": "white",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/8e6746ce-8f7b-474e-9fbf-faf89342979f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/32779fb3-5d06-4dfe-b304-b5039c0a38f3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#49494b",
                 "name": "gray",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/98fb3fbf-f69e-4f38-b10c-ebff3b288f88.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/c5544bbd-ea49-490b-9d39-969f12495918.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/d45213bd-f390-460c-ad5f-1d4df6d20547.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2"
                 ]
             },
             {
                 "color": "#28293e",
                 "name": "navy",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/423787cf-c57b-4e47-a2c8-73f934474896.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/1b220f72-35ba-403f-b484-88972ab6dfac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t22",
         "rate": {
             "rate": 9.1,
             "numrate": 4935
         },
         "brand": "Canada Goose",
         "date": 676,
         "frees": true,
         "size": {}
     },
     {
         "name": "Sportswear Tech Fleece Zip Hoodie",
         "price": 135,
         "desc": "Celebrate the 10-year anniversary of Nike Tech Fleece in an elevated zip hoodie inspired by the colors and textures of natural minerals.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#262628",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/0981bbc2-efef-43db-969d-1ac200f2d0af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/39a6a9cb-6388-48bc-8788-b314fbe0aaf9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#cabc95",
                 "name": "olive",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/688b509f-8c60-492d-99f8-1dcd03697308.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/0492e366-7b7f-4c21-b429-cf6aeba3ebd8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/066b943a-be1e-40c8-b5b0-db57284281d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t23",
         "rate": {
             "rate": 7.8,
             "numrate": 810
         },
         "brand": "Canada Goose",
         "date": 393,
         "frees": true,
         "size": {}
     },
     {
         "name": "Oversize Cotton Blend Zip-Up Hoodie",
         "price": 49.5,
         "desc": "This lightweight zip-up hoodie cut from a supersoft cotton-blend in an oversized fit makes the perfect layering piece.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#628a89",
                 "name": "green pine",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/b3c9a796-08b9-4299-90f1-93200581b047.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "#2a292e",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/c2070be8-1e39-492d-941e-98e94d017f94.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t24",
         "rate": {
             "rate": 6.7,
             "numrate": 3358
         },
         "brand": "Lauren Ralph Lauren",
         "date": 625,
         "frees": true,
         "size": {}
     },
     {
         "name": "Freya Funnel Neck Sweatshirt",
         "price": 148,
         "dis": "30",
         "desc": "A supremely soft knit provides endless comfort in a contemporary sweatshirt with a funnel neck, slit hem and adjustable drawcord-toggle at the waist.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#ccc7c3",
                 "name": "white",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/9d90698b-2937-4249-a754-7c64c0a5c5b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "#1d2238",
                 "name": "blue",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/66472d46-8aca-4a04-8942-a46c9dc05d73.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t25",
         "rate": {
             "rate": 9.6,
             "numrate": 5393
         },
         "brand": "Lauren Ralph Lauren",
         "date": 698,
         "frees": true,
         "size": {}
     },
     {
         "name": "Milton Cowl Neck Sweatshirt",
         "price": 158,
         "dis": 10,
         "desc": "Raised mini ribs texture a boxy, oversize sweatshirt with an exaggerated cowl neck and zipped sides to adjust the volume.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#746152",
                 "name": "stone olive",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/7fbf6ccd-fd6b-4fb6-bed7-88eec0cdccec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/b9072b7e-7694-4bc0-8370-e26b9abf4b4d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t26",
         "rate": {
             "rate": 9.3,
             "numrate": 1444
         },
         "brand": "Canada Goose",
         "date": 567,
         "frees": true,
         "size": {}
     },
     {
         "name": "Wool & Cashmere Knit Hoodie",
         "price": 159,
         "desc": "Layering gets a little dreamy in this hoodie knit from luxuriously warm wool and decadent cashmere for cool-weather coziness.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#b9866b",
                 "name": "tan smoke",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/073f8e13-5ecf-4e7a-b173-1c1de9e352f0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/3434ab7f-eba8-4817-b82e-45e0c2b52cab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "#8f323f",
                 "name": "red tibetan",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/908a864a-9a75-4268-b4fe-741308755076.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/556ca17a-7e2e-4e60-92a9-914e11ced0f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t27",
         "rate": {
             "rate": 8.3,
             "numrate": 1806
         },
         "brand": "Lauren Ralph Lauren",
         "date": 566,
         "frees": true,
         "size": {}
     },
     {
         "name": "Harmonise Luxe Sweatshirt",
         "price": 130,
         "dis": 35,
         "desc": "A slouchy funnel neck tops this soft and cuddly sweatshirt framed by easy dropped-shoulder sleeves.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#02834b",
                 "name": "green",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/63f0d7fa-c340-4f21-8ab4-4760398df074.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/2a24a8c8-3f62-4ae2-bcfc-bc4d4298af86.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/4d36e2cf-ceb9-406c-903d-6ae6246c95f6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#dde0d5",
                 "name": "Glacier Green",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/fc4aadd9-d96d-4a07-aa46-0a5bc9575e9a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/baaceb54-bc22-4025-8f52-91ce7a2b3cbe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t28",
         "rate": {
             "rate": 7.9,
             "numrate": 1063
         },
         "brand": "Lauren Ralph Lauren",
         "date": 508,
         "frees": true,
         "size": {}
     },
     {
         "name": "Mae Oversize Sweatshirt",
         "price": 148,
         "desc": "A textured Ottoman knit brings rich depth, elevating this gym-class staple made with dropped shoulders that emphasize its roomy, layer-ready fit.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#cac5bf",
                 "name": "Egret",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/07d6639b-ae14-4036-9cb8-bd0812da02d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/68f681bc-7da8-4e2b-a5af-0126bc16cf0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#291b1b",
                 "name": "Coffee Bean",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/598c5e2b-e4c5-40b3-8a8c-8b6a91b844ed.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/0859cf3a-e3b0-4635-84bd-e7158f94ebed.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t29",
         "rate": {
             "rate": 7.9,
             "numrate": 2944
         },
         "brand": "Canada Goose",
         "date": 646,
         "frees": true,
         "size": {}
     },
     {
         "name": "Anya Ottoman Rib Hoodie",
         "price": 79,
         "desc": "Ottoman ribbing textures a raglan-sleeve hoodie cut from a lightweight and stretchy cotton blend you'll love wearing whether you're working out or hanging out.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#e5e6e8",
                 "name": "Blue Dawn",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/6bd52249-9fcb-4f06-8099-f66b740ee7ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/49b1e5f2-63cc-433a-aa02-046106b7fdc1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#9a493e",
                 "name": "Red Jelly",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/d33984e3-b854-4401-9255-7980f1518020.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/10d90178-1cd9-4473-b526-23b24c15a8f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t30",
         "rate": {
             "rate": 3.4,
             "numrate": 2409
         },
         "brand": "Canada Goose",
         "date": 472,
         "frees": true,
         "size": {}
     },
     {
         "name": "Shelbe Fleece Lined Full Zip Hoodie",
         "price": 150,
         "desc": "A durable water-repellent finish on a highly wind-resistant WindWall® shell provides powerful protection in this slim full-zip hoodie warmed with fleece lining.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#2b2b2b",
                 "name": "Tnf Black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/b977205e-bcb3-4fdd-adbf-00c7afed48c3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/2ca43acf-2024-43b3-a7c3-3ae099c5bf51.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/d960efc2-cbf8-4750-a40b-b407a834eef3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#e9f3f4",
                 "name": "Skylight Blue",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/8ec5535a-f573-490d-af7f-dd131c988309.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/9c0a3cd4-592a-4027-92d5-b07a10f48a98.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t31",
         "rate": {
             "rate": 7.9,
             "numrate": 143
         },
         "brand": "Lauren Ralph Lauren",
         "date": 699,
         "frees": true,
         "size": {}
     },
     {
         "name": "Crop Cotton Blend Zip-Up Hoodie",
         "price": 40,
         "desc": "A soft cotton-blend keeps you feeling cozy as you go about your day in this cropped hoodie with handy pockets.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#f1ede1",
                 "name": "Beige Angora",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/6e4fb51b-f3cf-4864-b1eb-f528883faa77.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2"
                 ]
             },
             {
                 "color": "#222023",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/c8c891d0-a66d-4f83-90f6-4972430f06f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t32",
         "rate": {
             "rate": 7.5,
             "numrate": 2709
         },
         "brand": "Canada Goose",
         "date": 346,
         "frees": true,
         "size": {}
     },
     {
         "name": "Quarter Zip Sweatshirt",
         "price": 39.5,
         "desc": "A neck-warming stand collar tops this quarter-zip sweatshirt made from a comfy cotton blend.",
         "dis": 50,
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#f4eee2",
                 "name": "Beige Angora",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/c24ca88c-7268-462f-b399-e10c89eecd9d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#5f8383",
                 "name": "Green Pine",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/18804a0c-5686-4580-8c4a-5c6f689b1e98.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990"
                 ]
             },
             {
                 "color": "#d59f8e",
                 "name": "Brown Topaz",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/050c16d1-6e1f-4549-b2ad-9868328f92dc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990"
                 ]
             }
         ],
         "id": "t33",
         "rate": {
             "rate": 9.8,
             "numrate": 4514
         },
         "brand": "Lauren Ralph Lauren",
         "date": 721,
         "frees": true,
         "size": {}
     },
     {
         "name": "Sportswear Tech Fleece Windrunner Zip Hoodie",
         "price": 145,
         "desc": "Stay cozy and warm without the extra bulk in a full-zip hoodie made from lightweight tech fleece and finished with convenient zippered pockets.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#29292b",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/7a6f9dfd-0917-4e3d-b3c3-706aa85379f2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/08ea0695-9142-476d-813c-20103b5897f3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#b5a583",
                 "name": "Neutral Olive",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/00aa8d4d-2b1e-489f-af6b-7a6c4561f0ac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/6a03f1cf-0ce6-4be7-8690-e4914df57369.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t34",
         "rate": {
             "rate": 6.1,
             "numrate": 1571
         },
         "brand": "Lauren Ralph Lauren",
         "date": 951,
         "frees": true,
         "size": {}
     },
     {
         "name": "Recycled Polyester Blend Hoodie",
         "price": 150,
         "dis": 30,
         "desc": "This wardrobe-staple hoodie made with a recycled-polyester blend keeps you comfortable pre- and post-workout.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#431f21",
                 "name": "Mulberry",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/01fbe9e1-60dc-4f28-b7db-5dfc841c3e06.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/0f814feb-d5da-4c26-abb8-960868b9360d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#29292b",
                 "name": "Black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/4b44a4c0-bfe8-4606-8f63-6297fec8918a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/a3e0b0fa-7176-475c-9fd6-e68680b1fca6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/1c4566b4-5bd5-42bd-bdc1-5efc623235da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t35",
         "rate": {
             "rate": 9.4,
             "numrate": 3588
         },
         "brand": "Lauren Ralph Lauren",
         "date": 848,
         "frees": true,
         "size": {}
     },
     {
         "name": "Watering My Own Grass Embroidered Graphic Sweatshirt",
         "price": 97,
         "desc": "Whatever the goal, make it happen for you in this oversized sweatshirt finished with rich and colorful embroidery.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#f3eee7",
                 "name": "Ecru",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/ba5bee31-7cf1-475f-887f-5c7010e38f85.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/c94f7fe2-b03c-438c-ad93-db5f939e763e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/9e33e980-17c5-411e-bce1-659ec32b7608.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t36",
         "rate": {
             "rate": 6.8,
             "numrate": 1102
         },
         "brand": "Canada Goose",
         "date": 864,
         "frees": true,
         "size": {}
     },
     {
         "name": "Z.N.E. Zip Hoodie",
         "price": 110,
         "desc": "Moisture-wicking tech lends distraction-free comfort to a playfully cropped full-zip hoodie cut from cozy, four-way stretch fabrics.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#fdbbc5",
                 "name": "Pink Fusion",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/55be3d6a-9d51-4a5f-aba9-824db62bbc3f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2"
                 ]
             }
         ],
         "id": "t37",
         "rate": {
             "rate": 9.3,
             "numrate": 2591
         },
         "brand": "Canada Goose",
         "date": 82,
         "frees": true,
         "size": {}
     },
     {
         "name": "Quilted Patchwork Hoodie",
         "price": 119,
         "dis": 20,
         "desc": "Perfect for pre- and post yoga, this loose-fitting hoodie is designed with dropped shoulders and vented panels so you stay cool while on-the-go.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#706569",
                 "name": "Raven Multi",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/344082e8-5905-4f4a-9fd6-68a5ca9cddb0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2"
                 ]
             }
         ],
         "id": "t38",
         "rate": {
             "rate": 7.3,
             "numrate": 2563
         },
         "brand": "Canada Goose",
         "date": 239,
         "frees": true,
         "size": {}
     },
     {
         "name": "Yoga Dri-FIT Hoodie",
         "price": 75,
         "dis": 45,
         "desc": "Perfect for pre- and post yoga, this loose-fitting hoodie is designed with dropped shoulders and vented panels so you stay cool while on-the-go.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#2a2a2a",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/f1879224-13bc-46c7-8a08-a2025ffbb655.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/2d1812ee-2350-4fc7-bc9b-4e8ba7513a31.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/76093258-9e6d-4840-9ff1-54fb98b24dd1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#3c6da5",
                 "name": "Dark Marina Blue",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/6ed2b202-8e56-44fb-9914-b3ac7e1ca416.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/401de0aa-6a91-43ff-8758-ca71e525cb44.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "#b0397b",
                 "name": "Dynamic Berry",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/8fbc5af4-4e71-4054-b7a2-9b54f321e1d2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/7cd86f90-0347-45b6-9740-270d24cb9fdb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t39",
         "rate": {
             "rate": 4.9,
             "numrate": 5991
         },
         "brand": "Lauren Ralph Lauren",
         "date": 276,
         "frees": true,
         "size": {}
     },
     {
         "name": "The Drop Square Tunic Sweatshirt",
         "price": 168,
         "desc": "This slouchy oversized sweatshirt is crafted in a bold graphic with dropped shoulders.",
         "type": "sweatshirt",
         "img": [
             {
                 "color": "#44434b",
                 "name": "Mother Cares ",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/fb92bcff-ec85-4c3d-8184-db684f47b5ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/fb92bcff-ec85-4c3d-8184-db684f47b5ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t40",
         "rate": {
             "rate": 4.3,
             "numrate": 945
         },
         "brand": "Lauren Ralph Lauren",
         "date": 628,
         "frees": true,
         "size": {}
     },
     {
         "name": "Kelsey Knit Trousers",
         "price": 98,
         "dis": 40,
         "desc": "Polished enough for work and comfortable enough for anything, these slim-cut pants are cut for a smooth fit in a ponte knit with plenty of stretch.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/cbfba3c0-1776-4e73-88b9-bfc0ee958971.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/164e8c76-f806-4343-bffc-fa9cc720bf9c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/88960806-16f1-4e1e-be2f-4caad0e3a9ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "",
                 "name": "Cadet Blue",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/06f32479-a02e-48b5-9cdc-58102d9be37d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/24bba5b7-32db-4bf6-a5cd-ab233dcaf77c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/a2e71c3c-7782-41a7-b760-62d387dacc0c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Pink Perfection",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/3dcaf4b2-6045-4fdf-b3d6-bcf1937c887f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/d790094f-3d42-429a-98f4-561a5a43d1e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/e256d2e2-d750-4484-80af-ee22d0d2dccc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t45",
         "rate": {
             "rate": 7.3,
             "numrate": 283
         },
         "brand": "Canada Goose",
         "date": 780,
         "frees": true,
         "size": {}
     },
     {
         "name": "The Favorite Pant Pleat Pants",
         "price": 218,
         "desc": "Carefully tucked pleats accent these polished workday pants punctuated with elongating front seams and wide legs.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Beige",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/7d8a4914-5a9b-475c-88b1-0a312fff1500.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/de7ece5f-2901-472f-9f75-8a03ea8a4ddc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/8843189d-77c3-4bd2-846b-7a8a2d5a2d30.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/93034f6b-ad8f-445c-bd15-f816a1c3873d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990",
                     "https://n.nordstrommedia.com/id/sr3/ee4f05ed-c1e0-4ab3-bead-28335340b039.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t46",
         "rate": {
             "rate": 6.4,
             "numrate": 4119
         },
         "brand": "Canada Goose",
         "date": 637,
         "frees": true,
         "size": {}
     },
     {
         "name": "stretch-kissed pants",
         "price": 99,
         "dis": 30,
         "desc": "Achieve desk-to-dinner perfection in these sophisticated stretch-kissed pants designed with a high waist and flowy wide legs.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/db38452c-28f2-4109-992c-ee51cbce3562.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990",
                     "https://n.nordstrommedia.com/id/sr3/db38452c-28f2-4109-992c-ee51cbce3562.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990",
                     "https://n.nordstrommedia.com/id/sr3/8b6f00ad-c2ab-4be0-8cd7-ac7244e0535e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "",
                 "name": "Tan Cobblestone",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/b94efa1b-5ae4-4de7-b28d-3344a7cbb15f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990",
                     "https://n.nordstrommedia.com/id/sr3/0d23cd3e-457e-410e-bf40-0c32b99ec8af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/bbdd7a03-edf7-45b7-b539-c8d60a18de2e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Navy Midnight",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/8f3fdf7c-36a8-43f9-814c-f57adae8f93d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/5b3a1878-daab-4cee-81d2-7593fd23e1df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/fbd96d54-d9bd-4448-89ca-ee6a5d57a2ca.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t47",
         "rate": {
             "rate": 5.9,
             "numrate": 3310
         },
         "brand": "Canada Goose",
         "date": 29,
         "frees": true,
         "size": {}
     },
     {
         "name": "Ricki Plaid Blazer",
         "price": 188,
         "dis": 25,
         "desc": "Bold plaid covers this boxy coat-like blazer framed by notched lapels.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "navy plaid",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/ed2e00bf-b0fa-4703-b8e8-0211c7834e44.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/38478f1e-ff06-4a7c-9193-2ea0f1a4c364.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t48",
         "rate": {
             "rate": 7.9,
             "numrate": 4466
         },
         "brand": "Lauren Ralph Lauren",
         "date": 620,
         "frees": true,
         "size": {}
     },
     {
         "name": "Mixed Plaid Double Breasted Blazer",
         "price": 200,
         "desc": "This preppy and polished blazer is updated in a double-breasted silhouette with a mix of a woolly plaid and herringbone pattern.     ",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Black Navy Plaid",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/cde4757e-7532-4da1-a607-6aec67e20b91.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/0879b88d-dc05-4fc6-aab4-0693af942139.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t49",
         "rate": {
             "rate": 8,
             "numrate": 2822
         },
         "brand": "Canada Goose",
         "date": 70,
         "frees": true,
         "size": {}
     },
     {
         "name": "Berkshire Houndstooth Dickey Jacket",
         "price": 689,
         "desc": "A classic check delivers zippy zigs and zags to a wear-everywhere jacket.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "White/ Blue Multi",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/1298ffd5-53ac-4881-b500-723278539c8e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2"
                 ]
             }
         ],
         "id": "t50",
         "rate": {
             "rate": 8.3,
             "numrate": 2493
         },
         "brand": "Lauren Ralph Lauren",
         "date": 859,
         "frees": true,
         "size": {}
     },
     {
         "name": "Stretch Bootcut Pants",
         "price": 345,
         "dis": 25,
         "desc": "Expand your desk-to-dinner wardrobe with trouser-inspired pants designed in a bootcut silhouette and made from a stretchy cotton blend.     ",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/3cab48af-fc64-4b9e-b721-62ec74013111.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990",
                     "https://n.nordstrommedia.com/id/sr3/e7b62395-27c9-4737-b61b-579d158fa02c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Sesame",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/21e45727-b6f0-4d8a-bd82-762511a5f172.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/46f0b726-830a-483e-bc42-c4e11a8bc141.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t51",
         "rate": {
             "rate": 9.5,
             "numrate": 5027
         },
         "brand": "Lauren Ralph Lauren",
         "date": 602,
         "frees": true,
         "size": {}
     },
     {
         "name": "Collarless Knit Wrap Jacket",
         "price": 428,
         "dis": 25,
         "desc": "A textured knit in a mélange of neutral hues gives a tweedy look to a surplice wrap jacket that ties neatly at one side.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/7d8f63ca-7215-4ce5-ac7d-d3ab5663bc38.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/29a10208-ccae-4d6b-8d25-30001e05bf62.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t52",
         "rate": {
             "rate": 8.7,
             "numrate": 3814
         },
         "brand": "Canada Goose",
         "date": 674,
         "frees": true,
         "size": {}
     },
     {
         "name": "Wide Leg Plaid Trousers",
         "price": 109,
         "dis": 35,
         "desc": "Kissed with stretch and covered in plaid, these wide-leg trousers promise to keep you polished and comfortable from desk to dinner.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Rich Black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/f62c43bc-7393-4c66-a9e2-91413a7cece4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990",
                     "https://n.nordstrommedia.com/id/sr3/c997f8db-e452-4774-93d0-8a8e503f78f0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/c8d8b196-6b50-479e-97ab-cffb06d57e5e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t53",
         "rate": {
             "rate": 6.9,
             "numrate": 1217
         },
         "brand": "Lauren Ralph Lauren",
         "date": 767,
         "frees": true,
         "size": {}
     },
     {
         "name": "The Shortie Favorite Pants",
         "price": 218,
         "desc": "These wide-leg trousers are fashioned from smooth woven fabric and gently pleated at the waist to further the flowy fit.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "beige",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/b9b3e0fb-b743-4095-8318-23c741f2c557.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/b8f44459-cce7-4983-9f96-d437d954735e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/1cc02a6b-1556-4d39-9364-49f6c78d877a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/eeea51bd-e2dd-4994-8f05-5aff4b17ba67.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/7c18ea4d-e28a-4588-b929-4d84ec582d7c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/5d6f7a53-6201-4d94-bad3-861da981ce1d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t54",
         "rate": {
             "rate": 8.5,
             "numrate": 1764
         },
         "brand": "Canada Goose",
         "date": 662,
         "frees": true,
         "size": {}
     },
     {
         "name": "Elastic Back Wide Leg Trousers",
         "price": 89,
         "dis": 50,
         "desc": "Wide legs lend graceful movement to crisp trousers made with an elasticized back waist for added comfort.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Navy",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/52f16ccc-d794-484a-bba3-2ca4b128934f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/d9933cca-6ed9-4aac-b052-b6b28b349db9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/f54fecc3-366d-4d7a-bc84-9c33fa9fbd8d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/05ec2c3e-5ef1-41c6-9b82-ec779122fcdc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/a1988aeb-ea77-40db-b78c-8d9c2fb5ec25.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/1516ca28-70f0-45ee-bcac-8f5160727c51.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t55",
         "rate": {
             "rate": 8.9,
             "numrate": 3468
         },
         "brand": "Canada Goose",
         "date": 780,
         "frees": true,
         "size": {}
     },
     {
         "name": "Metallic Pinstripe Jacket",
         "price": 1590,
         "desc": "Suiting that sizzles is the design directive behind a pinstriped power jacket that's shot through with shine.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Black-Metallic",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/43160d91-077d-4efc-b763-4e28572c1a0c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/e06f8317-c7c2-457f-b8e6-7abad8e5524d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/95e87084-1dc1-484c-818e-1728d91ded86.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t56",
         "rate": {
             "rate": 5.4,
             "numrate": 3446
         },
         "brand": "Canada Goose",
         "date": 56,
         "frees": true,
         "size": {}
     },
     {
         "name": "Pleated Straight Leg Trousers",
         "price": 149,
         "desc": "A widened waistband adds a modern mood to staple trousers done in a straight-leg silhouette.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Light Olive",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/8d3d138b-0ace-44a4-b15a-64be21191960.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/31304b34-2d24-4020-8952-8c177196eaac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/e5d66803-dcb4-4649-88b6-830acfe10bf8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Chocolate Trot",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/ebe0373c-ba6a-4191-abbf-91cd970d1da4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/90b6e081-1aee-4a67-951f-4e254df2cc00.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     ""
                 ]
             },
             {
                 "color": "",
                 "name": "Fall Camel",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/6cd8ee63-ebd7-4e62-85e7-41d278ccbbab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/e87c83e3-48c2-42c9-8410-a459bb2b6b36.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t57",
         "rate": {
             "rate": 6.8,
             "numrate": 684
         },
         "brand": "Lauren Ralph Lauren",
         "date": 563,
         "frees": true,
         "size": {}
     },
     {
         "name": "Janorda Double Breasted Blazer",
         "price": 545,
         "dis": 40,
         "desc": "Make power moves in this polished double-breasted blazer fashioned in a modern fit with strong shoulders and flap pockets.     ",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "curt green",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/be053d21-df3f-4db4-92d1-cf2cc547e7d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/58577495-6b1b-43ce-8721-b88610faa1b4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/4a7197ba-e8a3-4cce-a96b-6d8c1de35d47.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t58",
         "rate": {
             "rate": 5.1,
             "numrate": 5263
         },
         "brand": "Lauren Ralph Lauren",
         "date": 700,
         "frees": true,
         "size": {}
     },
     {
         "name": "Houndstooth Virgin Wool Crop Jacket",
         "price": 3990,
         "desc": "A houndstooth check polishes this expertly tailored jacket crafted in Italy from pure virgin wool.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Greige-Black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/6f3b3b82-1b31-401b-801b-334d2d8c0cda.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/a81f03d5-6fa2-4923-9b3a-b480cfa2f1e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/ccb31394-6d6d-4680-acf8-53661b8d5723.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t59",
         "rate": {
             "rate": 7.8,
             "numrate": 5941
         },
         "brand": "Lauren Ralph Lauren",
         "date": 346,
         "frees": true,
         "size": {}
     },
     {
         "name": "Abbot Herringbone Blazer",
         "price": 495,
         "dis": 25,
         "desc": "A timeless herringbone pattern defines this wool-and-linen–blend blazer with handy pockets and notched lapels.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Black Multi",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/f72649f1-2918-4671-a650-5bdfe1f80b08.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/5fc6aeb9-107d-44aa-9734-19e00f428cba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/1ce19a04-8199-472b-bb5a-af2e228fddb9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t60",
         "rate": {
             "rate": 3.8,
             "numrate": 362
         },
         "brand": "Canada Goose",
         "date": 133,
         "frees": true,
         "size": {}
     },
     {
         "name": "Gabi Blazer",
         "price": 330,
         "desc": "A rich hue and expert tailoring define a power jacket you'll wear everywhere.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Berry",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/9dddaaae-17f4-4d9f-8532-24e64de28851.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/a9532e26-eb7e-40f5-85f0-b4058d91bee8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/36b04a45-dcd4-4fc8-ac02-9e5375e1cb5b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t61",
         "rate": {
             "rate": 4.3,
             "numrate": 4817
         },
         "brand": "Lauren Ralph Lauren",
         "date": 395,
         "frees": true,
         "size": {}
     },
     {
         "name": "Naomi Wool Blend Blazer",
         "price": 475,
         "dis": 40,
         "desc": "An expertly tailored blazer is cut from a wool blend and ready to work for desk days and drinks dates.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Green",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/aa8a03fd-fc8a-44d9-9adf-3e6628318aef.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/f35a96b2-d0be-4c5a-9216-a62096cae6e5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/a53d1229-3620-4c27-a512-bd94f1e1b2f1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t62",
         "rate": {
             "rate": 9.8,
             "numrate": 3021
         },
         "brand": "Lauren Ralph Lauren",
         "date": 694,
         "frees": true,
         "size": {}
     },
     {
         "name": "Warren Double Breasted Wool Blend Blazer",
         "price": 625,
         "desc": "A double-breasted silhouette puts the final polish on this wool-blend blazer framed with classic notched lapels.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Hthrgry",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/fb193d37-03c1-4a6f-8337-dbde6541fa39.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/4e25277d-8da7-46ae-bb9a-cf4a99681dff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t63",
         "rate": {
             "rate": 9.7,
             "numrate": 2667
         },
         "brand": "Lauren Ralph Lauren",
         "date": 410,
         "frees": true,
         "size": {}
     },
     {
         "name": "'Ab'Solution Skyrise Wide Leg Pants'",
         "price": 88,
         "desc": "Crisp front pleats accentuate the wide-leg silhouette of these office-ready pants.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/ebb064ee-b14c-49f8-9803-199177f1742a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/b78537e6-eb44-4720-89e2-9778f146c721.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/b78537e6-eb44-4720-89e2-9778f146c721.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Duffel Green",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/8f020c8c-a166-4125-9f04-e962173368ca.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/3b592c54-a2f8-4dc3-923e-7355ca6cf3bf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/8f020c8c-a166-4125-9f04-e962173368ca.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "",
                 "name": "Ultra Navy",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/b6f67e96-74df-4d5a-a514-452ab12e7719.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/760108aa-4b69-42d2-8d99-d509c170ef32.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/daa41131-fb0d-4078-9af0-fa8732db85a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t64",
         "rate": {
             "rate": 8.5,
             "numrate": 4370
         },
         "brand": "Canada Goose",
         "date": 392,
         "frees": true,
         "size": {}
     },
     {
         "name": "Le High Waist Slit Front Flare Trousers",
         "price": 348,
         "desc": "A groovy mix of vintage and modern, these high-waist flare pants streamline your look with front seams that fall to slit hems.",
         "type": "suit",
         "img": [
             {
                 "color": "",
                 "name": "Navy",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/e7b82023-737f-4398-b574-0aa282346057.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/584a874c-218c-46df-bdfc-aceab833903e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/cdf8e165-b158-4164-af90-71d72848a10e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "",
                 "name": "Espresso",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/38c42211-007b-41bc-b811-9bc08c8ca3f0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/d7aca06a-8675-4a77-abfc-6f1d577a4b11.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/61de9636-f0db-4aab-85ba-914c6371ce80.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Noir",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/a4a41a30-3f0d-44b6-a50a-92936da6879c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/a4a41a30-3f0d-44b6-a50a-92936da6879c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/e95b4964-d423-4e33-bfba-78c69ac5a68c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t65",
         "rate": {
             "rate": 4.6,
             "numrate": 943
         },
         "brand": "Canada Goose",
         "date": 579,
         "frees": true,
         "size": {}
     },
     {
         "name": "One-Button Knit Blazer",
         "price": 69,
         "dis": 45,
         "desc": "Sharp lines and a one-button silhouette make this all-cotton blazer a smart and comfortable standby.",
         "type": "jacket",
         "img": [
             {
                 "color": "",
                 "name": "Olive Sarma",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/847019fa-79f0-4558-b56d-08f4abc37c22.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/299098e5-fcf1-4785-9125-8b7b73650e17.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/a0793b94-98b5-4498-966a-5508190798df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/9b235d82-c4c1-44c9-bf0d-db45b3f1a25a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/2ade10f9-d258-4481-abb4-06f23f1f5de8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/dfade0b2-2cd2-4771-a918-fa46cd77b981.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990"
                 ]
             },
             {
                 "color": "",
                 "name": "Navy Night",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/bae8a366-5fe9-4df7-9250-a65c3cfba77c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/690b075a-d1e6-473b-88b0-637a4a6a7b7c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/212bde2d-7042-4883-afc1-4d315696a356.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990"
                 ]
             }
         ],
         "id": "t66",
         "rate": {
             "rate": 4,
             "numrate": 5503
         },
         "brand": "Lauren Ralph Lauren",
         "date": 827,
         "frees": true,
         "size": {}
     },
     {
         "name": "Mighty High Waist Wide Leg Jeans",
         "price": 69,
         "desc": "Baggy but not sloppy, these relaxed jeans have a high waist and floor-grazing hems for an elongated look, plus sustainably sourced fibers for a modern update.",
         "type": "jeans",
         "img": [
             {
                 "color": "",
                 "name": "Dark Retro",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/dc9d360d-e5c7-4383-86ba-e47f0e35ebd1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/079a0ba8-8536-4a0e-8073-129b5c9242df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     ""
                 ]
             },
             {
                 "color": "",
                 "name": "Light Retro",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/eaa5fa93-dba6-4e07-8527-54cbd8ecde58.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/eb50e620-4db4-4034-a044-b49462400ab9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t67",
         "rate": {
             "rate": 8.3,
             "numrate": 5584
         },
         "brand": "Lauren Ralph Lauren",
         "date": 446,
         "frees": true,
         "size": {}
     },
     {
         "name": "Meg Fab Ab High Waist Raw Hem Ankle Wide Leg Jeans",
         "price": 99,
         "desc": "A casual classic, these wide-leg jeans complement your figure with soft, low-stretch denim and Fab Ab front pockets that comfortably shape.",
         "type": "jeans",
         "img": [
             {
                 "color": "",
                 "name": "Exhibited",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/c89f1510-d422-4e21-a67a-f06c11f0a701.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/d1b59d1d-1f85-4189-9621-e3ffe28ca042.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t68",
         "rate": {
             "rate": 3.6,
             "numrate": 428
         },
         "brand": "Lauren Ralph Lauren",
         "date": 578,
         "frees": true,
         "size": {}
     },
     {
         "name": "Ribcage Ripped High Waist Ankle Straight Leg Jeans",
         "price": 100,
         "dis": 50,
         "desc": "Take your casual look up a notch with sky-high, nonstretch jeans that define your waist and relax into a true straight-leg profile.",
         "type": "jeans",
         "img": [
             {
                 "color": "",
                 "name": "Hang Up",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/39728721-8730-4b88-96c0-7f77e790ccd2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/e089cf2a-c6b5-4df0-98c0-ad7394970e92.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t69",
         "rate": {
             "rate": 5.2,
             "numrate": 4140
         },
         "brand": "Lauren Ralph Lauren",
         "date": 75,
         "frees": true,
         "size": {}
     },
     {
         "name": "Mia Palazzo High Waist Flare Jeans",
         "price": 119,
         "dis": 50,
         "desc": "Make a bold, breezy statement in superflared, floor-sweeping jeans designed with Lift Tuck® Technology that comfortably slims from within.",
         "type": "jeans",
         "img": [
             {
                 "color": "",
                 "name": "Fairmont",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/6241f72f-9373-4a0e-b86b-6b7c2a30aac5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/597af5f4-eac9-4cad-84f5-2e06b021e46e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Westminster",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/3a730dbe-54d5-4923-ab95-91d6ea1cdefe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/2e251496-5293-4fb7-a548-72e3dcab9ded.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/c4496b67-0364-4a00-a8a4-8e0c16669f34.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Northbridge",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/1965f816-493d-4fc4-9b74-627d377d984a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/767746ab-8b7f-40d6-9ef7-0271ccbeb793.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990"
                 ]
             }
         ],
         "id": "t70",
         "rate": {
             "rate": 7.5,
             "numrate": 3695
         },
         "brand": "Lauren Ralph Lauren",
         "date": 320,
         "frees": true,
         "size": {}
     },
     {
         "name": "The Lasso High Waist Wide Leg Jeans",
         "price": 315,
         "desc": "With a slouchy fit and faded finish, these stretch wide-leg jeans throw it back to the '90s and give you plenty of room to move.",
         "type": "jeans",
         "img": [
             {
                 "color": "",
                 "name": "dark blue",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/3e44072b-7b70-4486-bd75-74e7f74aca85.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/9a1c94e1-7f28-47fb-8666-75982ff86a80.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "light blue",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/05404f6c-0f2d-450e-ad3d-615668fc282c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/7f0b8aae-28dc-4b1a-8335-2126e45ea233.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t71",
         "rate": {
             "rate": 4.6,
             "numrate": 938
         },
         "brand": "Canada Goose",
         "date": 915,
         "frees": true,
         "size": {}
     },
     {
         "name": "Daily Denim Trousers",
         "price": 112,
         "desc": "A tailored high waist and modern wide leg take these denim trousers and your workwear wardrobe to the next level.",
         "type": "jeans",
         "img": [
             {
                 "color": "",
                 "name": "Washed Blue",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/1e083a2f-81fc-4105-837e-b1b5539e9c7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/bf6d53eb-b971-47a7-9d92-f02621dbf559.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Dark Blue",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/2d82b2d7-6665-4fa2-bc75-36d4861f112b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/7762433c-985b-45b0-872d-ba4e6b07b2f3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     ""
                 ]
             }
         ],
         "id": "t72",
         "rate": {
             "rate": 6,
             "numrate": 3902
         },
         "brand": "Lauren Ralph Lauren",
         "date": 211,
         "frees": true,
         "size": {}
     },
     {
         "name": "Mona High Waist Wide Leg Trouser Jeans",
         "price": 119,
         "desc": "Trendy wide-leg denim trousers with work-to-weekend polish offer a fit you'll love with soft stretch denim and Lift Tuck® technology that slims the silhouette.",
         "type": "jeans",
         "img": [
             {
                 "color": "",
                 "name": "Lightweight Rinse",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/63974ee8-e186-48bd-b32f-ba51ec482709.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/94bc6ef8-197a-4607-8b7d-9a8877a96add.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "",
                 "name": "Reminiscent",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/7a08f2d8-cfd1-4853-af9e-c82a9677db1f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/b2b09b9f-93fc-4f55-917a-af190e163bd5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t73",
         "rate": {
             "rate": 8.3,
             "numrate": 5729
         },
         "brand": "Lauren Ralph Lauren",
         "date": 732,
         "frees": true,
         "size": {}
     },
     {
         "name": "The Allana High Waist Wide Leg Jeans",
         "price": 248,
         "dis": 60,
         "desc": "Flaunt retro-inspired style in these fabulous jeans featuring a superhigh waist and full-length wide legs.",
         "type": "jeans",
         "img": [
             {
                 "color": "",
                 "name": "Almond",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/c0e05eb9-aabd-497e-8bae-adcb512ada9d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990",
                     "https://n.nordstrommedia.com/id/sr3/8d976191-01a3-4da8-b81f-6a648cd58b8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/828c976b-c927-40da-b948-61e2ae08ad11.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990",
                     "https://n.nordstrommedia.com/id/sr3/6011795b-b341-4cff-8866-cda7ac4477d5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t74",
         "rate": {
             "rate": 6.5,
             "numrate": 256
         },
         "brand": "Lauren Ralph Lauren",
         "date": 245,
         "frees": true,
         "size": {}
     },
     {
         "name": "Beadnell Fleece Lined Quilted Jacket",
         "price": 295,
         "desc": "The perfect companion for long walks in the country or quick errands around town, this quilted jacket pairs modern comfort and timeless style.",
         "type": "jacket",
         "img": [
             {
                 "color": "",
                 "name": "brown",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/9951d950-3454-4874-befa-d816c49c6306.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/b088078a-71f6-4f8e-b40d-07fd7ab4e820.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/c852917f-42ba-4a39-81fe-e0ff105cfffc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "",
                 "name": "navy",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/783b2a41-f1ca-4947-86c1-8a79dc1587ff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/3ddff23b-9aaa-4eab-b1f3-5a32a8f67c71.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990",
                     "https://n.nordstrommedia.com/id/sr3/b0bd2fce-fd55-46aa-a945-66933b609e26.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "",
                 "name": "black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/1aa46c92-4575-40c7-9260-262c3b0adb80.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/9765c6dc-5785-4867-af7a-704447b05d78.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/26b39b08-bf1e-4edd-af81-e53e61145025.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t75",
         "rate": {
             "rate": 9.4,
             "numrate": 2656
         },
         "brand": "Canada Goose",
         "date": 472,
         "frees": true,
         "size": {}
     },
     {
         "name": "Utility Jacket",
         "price": 59,
         "desc": "With plentiful pockets and a crisp spread collar, this cotton stretch-twill jacket channels contemporary utilitarian style",
         "type": "jacket",
         "img": [
             {
                 "color": "",
                 "name": "Kasey",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/1b909be5-991a-4b9f-a128-cbf008f2b63c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/cf91ca40-7042-42a9-8338-52fd1c064297.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/93c4c4b2-da2b-4ad5-b4eb-9f3ac13716ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "",
                 "name": "Magnet",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/b5fb0d3b-9bbf-45cd-b993-b3f6fdf31fbe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/84a4e502-7ed0-49ea-9485-de3718d2d925.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/64325d7d-bbaa-45d3-9a83-b7535d7fcadd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Maple",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/0475a812-5e47-487e-a642-45fa57518e4e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/f1842503-f359-4e2f-98f0-106a98844278.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t76",
         "rate": {
             "rate": 8.8,
             "numrate": 5055
         },
         "brand": "Lauren Ralph Lauren",
         "date": 928,
         "frees": true,
         "size": {}
     },
     {
         "name": "Hoodie Dickey",
         "price": 175,
         "desc": "A Veronica Beard bestseller, this French terry hooded inset zips into any of the label's dickey jackets to create a cool layered look without added bulk.",
         "type": "jacket",
         "img": [
             {
                 "color": "",
                 "name": "Heather Grey",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/cf41a2a1-208a-4679-bc99-ce103681b81e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/07ae18ea-d71c-4469-aa2d-66aa7ec31423.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "",
                 "name": "Black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/2691d886-696e-471f-aad6-5d1e368dcb2b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/c93086da-b1f1-4ac0-9661-4be6e623a694.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t77",
         "rate": {
             "rate": 3.1,
             "numrate": 2792
         },
         "brand": "Canada Goose",
         "date": 940,
         "frees": true,
         "size": {}
     },
     {
         "name": "Mina Tie Belt Jacket",
         "price": 168,
         "desc": "An oversized silhouette defines this bold jacket with an open front secured by a removable tie belt.",
         "type": "jacket",
         "img": [
             {
                 "color": "",
                 "name": "Black",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/760e85e9-921d-4116-b154-64ba6200d4c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/c5675161-07e0-4009-9641-dd06a8640a5c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Heathered Coffee",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/58d0599c-a70b-41ee-aec9-518c8d2a9399.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/2d883cfc-adb5-4980-b1f3-b5e9694a77d7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/5a0f4668-d25f-4baf-b30e-443b9c40acbc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Narcissus",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/a1a9f068-a384-4b3b-9963-6c72d1248e1e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990",
                     "https://n.nordstrommedia.com/id/sr3/9e53f503-effa-42dd-a89d-a0c69c5f1223.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t78",
         "rate": {
             "rate": 8.7,
             "numrate": 1289
         },
         "brand": "Lauren Ralph Lauren",
         "date": 836,
         "frees": true,
         "size": {}
     },
     {
         "name": "Slade Ponte Blazer",
         "price": 495,
         "desc": "A smart stand collar crowns this tightly fitted blazer that features gleaming buttons and pockets aplenty.",
         "type": "jacket",
         "img": [
             {
                 "color": "",
                 "name": "Camel",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/0e42fdc8-ce77-4960-832c-6760f95d6e2f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/a2b48bdb-0676-4920-ad8b-bb19f4450c4a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/e6d7cca2-1084-42c6-85ef-a78ee81fda87.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             },
             {
                 "color": "",
                 "name": "Sal",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/f54b46a8-dc88-49ba-bb19-8e9e39c25670.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                     "https://n.nordstrommedia.com/id/sr3/b94e7857-b589-418d-bfdd-9f3b79b7006f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                 ]
             }
         ],
         "id": "t79",
         "rate": {
             "rate": 8.8,
             "numrate": 5222
         },
         "brand": "Canada Goose",
         "date": 158,
         "frees": true,
         "size": {}
     },
     {
         "name": "Faux Shearling Collar Dad Jacket",
         "price": 35,
         "dis": 40,
         "desc": "Take your look to new heights in this quilted, aviator-style jacket featuring a relaxed fit, a zip closure and a plush faux-shearling collar.",
         "type": "jacket",
         "img": [
             {
                 "color": "",
                 "name": "Very Berry",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/ebe4fea4-d0b1-4ec4-93fb-d115ecff24a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/65f3da62-a368-4ca7-8154-f8de59ca184b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             },
             {
                 "color": "",
                 "name": "Burnt Olive",
                 "imgs": [
                     "https://n.nordstrommedia.com/id/sr3/4218fe8c-962c-4188-b20a-d3db4a04746f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                     "https://n.nordstrommedia.com/id/sr3/0d4fedd4-6b29-4d16-b64c-62da66a9a957.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                 ]
             }
         ],
         "id": "t80",
         "rate": {
             "rate": 9.2,
             "numrate": 1988
         },
         "brand": "Lauren Ralph Lauren",
         "date": 856,
         "frees": true,
         "size": {}
     },
     {
          "name":`'Two Palms' Linen Raw Edge Jacket `,
          "price":138,
          "dis":10,
          "desc": "A classic trucker jacket lightens up for summer in a pure linen fabrication in your choice of four versatile hues.",
          "type": "jacket",
          "img": [
              {
                  "color": "",
                  "name": "Island Navy",
                  "imgs": [
                      "https://n.nordstrommedia.com/id/sr3/19b99ac0-22d7-4f53-9d80-7d35964b302b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                  ]
              },
              {
                  "color": "",
                  "name": "Natural",
                  "imgs": [
                      "https://n.nordstrommedia.com/id/sr3/34a3d954-4fa8-4608-81bf-371b3c2088aa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                      ""
                  ]
              },
            
          ],
     },
     {
          "name": "Sancho Organic Stretch Cotton Utility Jacket",
          "price":140,
          "desc": "Made from garment-dyed cotton, this wear-anywhere jacket features a high collar, a boxy fit with a defined waist and plenty of pockets for all your essentials. ",
          "type": "jacket",
          "img": [
              {
                  "color": "",
                  "name": "Antique Bronze",
                  "imgs": [
                      "https://n.nordstrommedia.com/id/sr3/b5faaa27-6735-4cc3-80f9-bec436117c81.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                      "https://n.nordstrommedia.com/id/sr3/694326c5-39d8-43b4-8e8d-290d20939044.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                  ]
              },
              {
                  "color": "",
                  "name": "Sancho Organic Stretch Cotton Utility Jacket",
                  "imgs": [
                      "https://n.nordstrommedia.com/id/sr3/6b272ad4-f864-46e5-91ed-22feec931dd6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                      "https://n.nordstrommedia.com/id/sr3/5dea3e09-bb0e-4481-9fe8-76042ccc8ea0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990"
                  ]
              },
              {
                  "color": "",
                  "name": " Cargo Green",
                  "imgs": [
                      "https://n.nordstrommedia.com/id/sr3/d83e5a99-bfa9-4122-bf6e-8acd4d9bc4ed.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990",
                  ]
              }
          ],
     },
     {
          "name": "Leah Quilted Stand Collar Jacket",
          "price":85,
          "desc": "Keep your neck warm out there in the wilds wearing this lightweight quilted jacket designed with a high stand collar.",
          "type": "jacket",
          "img": [
              {
                  "color": "",
                  "name": "black",
                  "imgs": [
                      "https://n.nordstrommedia.com/id/sr3/a70d4ee7-db56-4438-8389-958c328f2fb6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                  ]
              },
              {
                  "color": "",
                  "name": "Kombu Green",
                  "imgs": [
                      "https://n.nordstrommedia.com/id/sr3/fae9d61f-281b-4bd5-8513-5eae23e7abb5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                  ]
              },
              {
                  "color": "",
                  "name": "Nomad",
                  "imgs": [
                      "https://n.nordstrommedia.com/id/sr3/d058f131-ea83-4667-b3a5-3413f456c281.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                  ]
              }
          ],
     },
     {
          "name": "Relaxed Fit Faux-Ever Leather™ Bomber Jacket",
          "price":179,
          "dis":60,
          "desc": "Go for an edgy look in this faux-leather bomber jacket sporting a dropped shoulders, an oversized fit and a vivid animal-print lining.",
          "type": "jacket",
          "img": [
              {
                  "color": "",
                  "name": "Black",
                  "imgs": [
                      "https://n.nordstrommedia.com/id/sr3/efd7368c-c254-4963-9c26-4be468734f75.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                      "https://n.nordstrommedia.com/id/sr3/b9e6d023-a080-4452-84d7-3f15cbeeadb5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                  ]
              },
              {
                  "color": "",
                  "name": "Zinfandel",
                  "imgs": [
                      "https://n.nordstrommedia.com/id/sr3/9771ecba-09b2-48c9-b492-5e8c411e52b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                      "https://n.nordstrommedia.com/id/sr3/9a7586f3-59a4-410a-9954-b680903fac44.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                  ]
              },
          ],
     },
     {
        "name": "Oversize Plaid Blazer",
        "price":99,
        "dis":55,
        "desc": "Allover plaid enlivens this oversized blazer designed in a tailored two-button silhouette.",
        "type": "jacket",
        "img": [
            {
                "color": "",
                "name": "Tan Avery Plaid",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/f9eb8df0-5f27-4e15-991a-602311df8a08.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                    "https://n.nordstrommedia.com/id/sr3/f10a054c-e6be-4492-9377-ed4ea9dbdc64.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                    "https://n.nordstrommedia.com/id/sr3/a3fcecfd-afac-4e14-bdc4-1315c53e0455.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2"
                ]
            },
            {
                "color": "",
                "name": "Grey Avery Plaid",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/50628741-e4b9-4078-826a-7ead3bd872b7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/f47d8dda-a1f4-41fb-9950-3aafe921c7f2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                ]
            },
        ],
     },
     {
        "name": "Classic Ultra Mini Platform Boot",
        "price": 160,
        "desc": "Overlock-stitch detailing on the seams elevates the look of a cozy boot set atop a head-turning platform for sky-high style.",
        "type": "boot",
        "img": [
            {
                "color": "#232323",
                "name": "black",
                "sm":"https://n.nordstrommedia.com/id/sr3/78833124-20b3-49f6-962a-687a11ee682c.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/78833124-20b3-49f6-962a-687a11ee682c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=1950&h=2095&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/571b15ac-007c-461a-b96e-6da9e9d41bd1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2"
                ]
            },
            {
                "color": "#936648",
                "name": "Chestnut",
                "sm":"https://n.nordstrommedia.com/id/sr3/674a5d67-d7a5-4735-a1c3-4b114e0dea68.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/674a5d67-d7a5-4735-a1c3-4b114e0dea68.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/eb58797f-514f-4259-b755-820c9bed7a4e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            }
        ],
        "id": "t42",
        "rate": {
            "rate": 5.1,
            "numrate": 3013
        },
        "brand": "Lauren Ralph Lauren",
        "date": 862,
        "frees": true,
        "size": {}
    },
    {
        "name": "Flin Knee High Boot",
        "price": 260,
        "dis": 55,
        "desc": "A block heel adds just the right amount of lift to this suave and streamlined knee-high boot.",
        "type": "boot",
        "img": [
            {
                "color": "#1d1d1d",
                "name": "black",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/d86e8927-b881-4457-afc5-38f578072dbd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/a3eb151b-fabf-4c31-8199-c89691caf200.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/4d3583f7-8177-4cb5-a671-097ca6a6b976.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            }
        ],
        "id": "t43",
        "rate": {
            "rate": 5.9,
            "numrate": 1561
        },
        "brand": "Lauren Ralph Lauren",
        "date": 184,
        "frees": true,
        "size": {}
    },
    {
        "name": "Flexa Fabiene Bootie",
        "price": 200,
        "desc": "A square toe and block heel ground this burnished leather bootie in contemporary-chic style, while lightweight and flexible cushioning adds everyday comfort.",
        "type": "boot",
        "img": [
            {
                "color": "#50231c",
                "name": "Brown",
                "sm":'https://n.nordstrommedia.com/id/sr3/2d89c34f-e2a0-46f3-9dc9-6c3622f47989.jpeg?h=365&w=240&dpr=2',
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/2d89c34f-e2a0-46f3-9dc9-6c3622f47989.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/42008aeb-c440-4f84-aec7-d332d407f7aa.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    ""
                ]
            },
            {
                "color": "#282924",
                "name": "black",
                "sm":'https://n.nordstrommedia.com/id/sr3/81eff3be-aa2c-47bc-96f5-5e7829468c2c.jpeg?h=365&w=240&dpr=2',
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/81eff3be-aa2c-47bc-96f5-5e7829468c2c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/bed0d8d6-94b7-4917-b4d9-531df6445a87.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/81db41ce-b40c-454c-b2d0-8fbdfeb42125.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2"
                ]
            }
        ],
        "id": "t44",
        "rate": {
            "rate": 8.3,
            "numrate": 3116
        },
        "brand": "Canada Goose",
        "date": 285,
        "frees": true,
        "size": {}
    },
    {
        "name": "Lannie Knee High Boot",
        "price":299,
        "dis":10,
        "desc": "An almond toe and stacked block heel balance a rich leather boot shaped in a knee-high silhouette for timeless appeal.",
        "type": "boot",
        "img": [
            {
                "color": "",
                "name": "Black 001",
                "sm":"https://n.nordstrommedia.com/id/sr3/78c30eeb-de7b-4a27-ad37-080679af73a5.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/78c30eeb-de7b-4a27-ad37-080679af73a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/16aa03ad-d3d8-4552-8242-cc8894fd7878.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/3d189cb6-59d9-4c96-aa35-9866c1e07eb9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "Dark Red",
                "sm":"https://n.nordstrommedia.com/id/sr3/0a5cda47-23d9-43b0-9a36-a2b19c83d380.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/0a5cda47-23d9-43b0-9a36-a2b19c83d380.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/0dfe6b4e-62f6-4ddf-b87f-c542bdfba95f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
        ],
    },
    {
        "name": "Shale Knee High Boot",
        "price":275,
        "dis":45,
        "desc": "An almond toe and stacked block heel balance a versatile knee-high boot fitted with a side sipper and goring inset for easy wear.",
        "type": "boot",
        "img": [
            {
                "color": "",
                "name": "Modern Ivory",
                "sm":"https://n.nordstrommedia.com/id/sr3/564e2cc9-d12e-4767-9d17-8700f2e195b5.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/564e2cc9-d12e-4767-9d17-8700f2e195b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/9e5348c3-9b89-4fb1-b804-229d49877422.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/8298ff9c-0e65-4967-8993-9e2645b7372a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "Black",
                "sm":"https://n.nordstrommedia.com/id/sr3/42054636-14d4-4e44-83b0-c1b386d82ed0.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/42054636-14d4-4e44-83b0-c1b386d82ed0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/eac96a24-8152-4957-9c42-da8b89b3153e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "Caramel",
                "sm":"https://n.nordstrommedia.com/id/sr3/8a869f06-8ace-4e0c-8efe-604fa0e1e248.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/8a869f06-8ace-4e0c-8efe-604fa0e1e248.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/c4196bcb-5a92-46fd-a8cc-69a9058ac64f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                ]
            }
        ],
    },
    {
        "name": "Miller 2 Water Resistant Boot",
        "price":99,
        "dis":29,
        "desc": "This water-resistant leather boot features a lug sole and a minimalist design, making it a fashionable and durable shoe to be worn with a variety of looks.",
        "type": "boot",
        "img": [
            {
                "color": "",
                "name": "Black",
                "sm":"https://n.nordstrommedia.com/id/sr3/1772a05e-aace-496d-bdfa-30bc13b72b34.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/1772a05e-aace-496d-bdfa-30bc13b72b34.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=1950&h=2095&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/f3ca8c38-2f6b-4ef2-b73a-48a1a000fb8f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/dba5ff24-8bab-414e-b322-5fb26095ed24.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2"
                ]
            },
            {
                "color": "",
                "name": "Ivory Birch",
                "sm":"https://n.nordstrommedia.com/id/sr3/b2e427ba-a7cf-4ad6-acbf-1c85ad147a2c.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/b2e427ba-a7cf-4ad6-acbf-1c85ad147a2c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=1950&h=2095",
                    "https://n.nordstrommedia.com/id/sr3/6c9207f1-288b-4afc-ab2b-ef9981ceb6f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "Burgundy",
                "sm":"https://n.nordstrommedia.com/id/sr3/fb6ddb48-cc83-40b5-85e8-236ba6880729.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/fb6ddb48-cc83-40b5-85e8-236ba6880729.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/ed0f9832-fa54-4feb-b608-90fc38025b91.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                ]
            }
        ],
    },
    {
        "name": "Sway Knee High Boot",
        "price":178,
        "desc": "Exposed stitching highlights the slightly slouchy shaft of this chic, modern knee-high boot.",
        "type": "boot",
        "img": [
            {
                "color": "",
                "name": "Black",
                "sm":"https://n.nordstrommedia.com/id/sr3/0cd6cd28-c650-41ac-8941-fdb27acd18a1.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/0cd6cd28-c650-41ac-8941-fdb27acd18a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/aa02067a-56d2-4b24-9dd7-54111301d002.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                ]
            },
            {
                "color": "",
                "name": "Tan",
                "sm":"https://n.nordstrommedia.com/id/sr3/f56d226c-6b6d-4432-beef-53af1f343b45.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/f56d226c-6b6d-4432-beef-53af1f343b45.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/62d0a6da-221a-4639-9363-dde054c55c89.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=1950&h=2095"
                ]
            },
        ],
    },
    {
        "name": "Laguna Waterproof Lug Sole Chelsea Boot",
        "price":170,
        "desc": "A heavily lugged sole lends a utilitarian update to a classic Chelsea boot with stretchy gore insets at each side.",
        "type": "boot",
        "img": [
            {
                "color": "",
                "name": "Black",
                "sm":"https://n.nordstrommedia.com/id/sr3/1a198f6f-b974-4db4-9d20-7e2c47a2dfad.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/1a198f6f-b974-4db4-9d20-7e2c47a2dfad.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/30ace878-0437-4b91-a336-164de4f01b06.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/077242f9-2b84-4bfa-ac3f-ff5e8c6d5c11.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "Golden Caramel",
                "sm":"https://n.nordstrommedia.com/id/sr3/ed9a33eb-0fbf-4b4a-9ef4-f730188197fc.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/ed9a33eb-0fbf-4b4a-9ef4-f730188197fc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/a39dd67a-7410-45fb-b3e5-ab2ad4163bbe.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2"
                ]
            },
         
        ],
    },
    {
        "name": "Darleen Waterproof Bootie",
        "price":149,
        "dis":55,
        "desc": "A lug sole and buckle detail amplify the utilitarian appeal of a waterproof bootie that's both practical and stylish.",
        "type": "boot",
        "img": [
            {
                "color": "",
                "name": "Black Nubuck",
                "sm":"https://n.nordstrommedia.com/id/sr3/2b6872f8-a273-47c0-bfe9-66215a7dbd86.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/2b6872f8-a273-47c0-bfe9-66215a7dbd86.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/a6c31d6f-07d0-4ad7-9460-d1d681e16ffb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/a45b4588-ad38-42f9-a15d-857f661f434c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "Sand Suede",
                "sm":"https://n.nordstrommedia.com/id/sr3/5dde5421-9f75-4a76-b62a-617e8ef93436.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/5dde5421-9f75-4a76-b62a-617e8ef93436.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/c8abc765-658d-4a52-8f95-e991f6707800.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2"
                ]
            },
        ],
    },
    {
        "name": "Everly Cutout Boot",
        "price":119,
        "desc": "Transition through seasons in this almond-toe ankle boot crafted from soft leather with notched sides and a stacked block heel.",
        "type": "boot",
        "img": [
            {
                "color": "",
                "name": "Black",
                "sm":"https://n.nordstrommedia.com/id/sr3/1de93843-a4c9-4252-9ebb-79bf8020d57c.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/1de93843-a4c9-4252-9ebb-79bf8020d57c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/1b9f1a8b-d622-462f-8bb5-638b217ef434.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                ]
            },
            {
                "color": "",
                "name": "Natural",
                "sm":"https://n.nordstrommedia.com/id/sr3/e5adcf41-218c-4583-8032-214cf4e39818.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/e5adcf41-218c-4583-8032-214cf4e39818.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/51de68a9-44be-43b4-a1f0-6c54fb462f62.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/2f2a9cff-ad58-47a4-811e-7b00ae19f2b7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "Dark Brown",
                "sm":"https://n.nordstrommedia.com/id/sr3/6ed76ffd-22b8-4f7d-aae1-98e026f05cd5.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/6ed76ffd-22b8-4f7d-aae1-98e026f05cd5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/dc56d628-c8e8-46dd-9600-a9a6a1cf5687.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                ]
            }
        ],
    },
    {
        "name": "Stevie Bootie",
        "price":180,
        "desc": "A block heel elevates the profile of a streamlined leather bootie finished with a squared off toe.",
        "type": "boot",
        "img": [
            {
                "color": "",
                "name": "Black Leather",
                "sm":"https://n.nordstrommedia.com/id/sr3/e5132708-16d4-4f6b-ac64-1afde5eccf87.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/e5132708-16d4-4f6b-ac64-1afde5eccf87.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/f0e4f831-e4a7-41e9-abd4-cdb426b46f03.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/4b9a2add-a973-430c-802b-5fe174dd394b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "Graphite",
                "sm":"https://n.nordstrommedia.com/id/sr3/79ef2497-5c44-4f80-854f-5a7547fe3ac6.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/79ef2497-5c44-4f80-854f-5a7547fe3ac6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/0cc4caf6-b06d-433f-ba10-ac4e07c8d479.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2"
                ]
            },
            {
                "color": "",
                "name": "Putty Leather",
                "sm":"https://n.nordstrommedia.com/id/sr3/509a6a53-d0e1-4f43-9e98-d9a17ed52f39.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/509a6a53-d0e1-4f43-9e98-d9a17ed52f39.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/80ec4f28-303e-4ad5-8612-d7f17d9a47a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                ]
            }
        ],
    },
    {
        "name": "Gender Inclusive Jadon Pisa Platform Boot",
        "price":210,
        "desc": "A chunky Quad Retro platform sole enhances the throwback vibe of an iconic lace-up boot shaped from richly grained leather.",
        "type": "boot",
        "img": [
            {
                "color": "",
                "name": "black",
                "sm":"https://n.nordstrommedia.com/id/sr3/460694ec-399d-49cb-9696-d5c5c5d054d3.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/460694ec-399d-49cb-9696-d5c5c5d054d3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/9ddd3cc6-76ae-4a85-9985-c1902f1dae3f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/6f566a26-04b6-460f-a9b1-b9af6e1961a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "Vintage Taupe Pisa",
                "sm":"https://n.nordstrommedia.com/id/sr3/42d62007-ff4b-4672-bceb-7beab2e099c0.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/42d62007-ff4b-4672-bceb-7beab2e099c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/fe77116b-c8de-4f5f-9103-395dbb155503.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
        ],
    },
    {
        "name": "Brooklyn Platform Chelsea Boot",
        "price":170,
        "desc": "Ribbed side panels lend cozy texture to a platform Chelsea boot boasting a lugged sole for steady traction and trendy logo details along the cuff.",
        "type": "boot",
        "img": [
            {
                "color": "",
                "name": "Black",
                "sm":"https://n.nordstrommedia.com/id/sr3/c4fe43f7-3221-47db-bfcb-4e400e5561cd.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/c4fe43f7-3221-47db-bfcb-4e400e5561cd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/b74647ef-c1bc-4d0f-8a8b-91eb818bcb76.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/8bcc74f5-bb2e-474b-8c9d-8123e979bca8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "Forest Night",
                "sm":"https://n.nordstrommedia.com/id/sr3/a660c845-7e74-4201-9788-d2dbbcc73899.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/a660c845-7e74-4201-9788-d2dbbcc73899.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/8ac1920b-0813-4ed9-b759-2ccc416405ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
        ],
    },
    {
        "name": "Hampshire Waterproof Riding Boot",
        "price":300,
        "dis":25,
        "desc": "A low block heel grounds this waterproof riding boot crafted from smooth leather and finished with a handy ankle zip and easy-on pull tabs.",
        "type": "boot",
        "img": [
            {
                "color": "",
                "name": "black",
                "sm":"https://n.nordstrommedia.com/id/sr3/4e50d84c-0d60-4bf1-8b9c-0b4be1b18c97.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/4e50d84c-0d60-4bf1-8b9c-0b4be1b18c97.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/6f71c5e9-caab-44d5-8ebd-ae417b2d5909.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/4aaeaa45-61c9-4451-952f-a089a6733537.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "",
                "sm":"https://n.nordstrommedia.com/id/sr3/a45d34b6-d07b-4ec5-802a-8831eccee9d5.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/a45d34b6-d07b-4ec5-802a-8831eccee9d5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/e73072b8-944c-4a0e-b1b3-24d9e6521a54.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2"
                ]
            },
        ],
    },
    {
        "name": "Waffle Debut Sneaker",
        "price":80,
        "desc": "Experience ultimate comfort and arch support with every stride you take in this lightweight sneaker by Nike.",
        "type": "sneakers",
        "img": [
            {
                "color": "",
                "name": "Black",
                "sm":"https://n.nordstrommedia.com/id/sr3/b27db94b-7d34-4af2-8d57-0eab78ff1ffb.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/b27db94b-7d34-4af2-8d57-0eab78ff1ffb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/b7e49f03-02ac-422a-990d-8d185e9e7eba.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                ]
            },
            {
                "color": "",
                "name": "White  ",
                "sm":"https://n.nordstrommedia.com/id/sr3/2389b779-63ad-4481-99e9-8e45940f3190.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/2389b779-63ad-4481-99e9-8e45940f3190.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/8b019018-621f-454a-9b5b-dd31a69ce43d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "Fuchsia",
                "sm":"https://n.nordstrommedia.com/id/sr3/1e3752e9-91bc-460d-8d75-5a5691f98e02.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/1e3752e9-91bc-460d-8d75-5a5691f98e02.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/10897d6e-89a9-4930-94b3-f9ddb39360da.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/b55d4f4d-df1a-4c58-aa73-4e5d6a1ca7e5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                ]
            }
        ],
    },
    {
        "name": "Cloud 5 Running Shoe",
        "price":139.99,
        "desc": "Runner-tech performance meets all-day comfort in a hybrid running/lifestyle shoe that goes the distance on the road, in the game or around town.",
        "type": "sneakers",
        "img": [
            {
                "color": "",
                "name": "Pearl",
                "sm":"https://n.nordstrommedia.com/id/sr3/c0eee7b4-f35a-4ad3-8276-6ab92d7d9b21.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/c0eee7b4-f35a-4ad3-8276-6ab92d7d9b21.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/39c35ca0-5dc6-430c-99b2-d8ceda846836.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "black",
                "sm":"https://n.nordstrommedia.com/id/sr3/c278c449-39db-4aec-8c96-317d9dddc049.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/c278c449-39db-4aec-8c96-317d9dddc049.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/7e6e9fa8-8cf0-462a-b2a2-9a96d899be44.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "Zinc",
                "sm":"https://n.nordstrommedia.com/id/sr3/49e9deac-e34a-4e18-82c1-528df6ec5dfc.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/49e9deac-e34a-4e18-82c1-528df6ec5dfc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=1950&h=2095",
                    "https://n.nordstrommedia.com/id/sr3/a4586dae-4cd0-481b-8a64-da3cdef596b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/8b4388a1-0465-46eb-bef8-09e35ddd741e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            }
        ],
    },
    {
        "name": "Clifton 9 Running Shoe",
        "price":145,
        "desc": "Spring off to the park in this breezy running shoe engineered with responsive foam for all-day comfort and a handy reflective heel panel.",
        "type": "sneakers",
        "img": [
            {
                "color": "",
                "name": "Ice Water",
                "sm":"https://n.nordstrommedia.com/id/sr3/181be1a2-5c9d-4c00-ae07-9e2de0426ad2.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/181be1a2-5c9d-4c00-ae07-9e2de0426ad2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/87600009-0fca-4d61-89dd-64df087a2065.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                    "https://n.nordstrommedia.com/id/sr3/883cf5b1-506f-43df-973e-ba42b3d05f4d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                ]
            },
            {
                "color": "",
                "name": "Copper",
                "sm":"https://n.nordstrommedia.com/id/sr3/4f6907a6-f3e4-48ee-b677-25c3854795ee.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/4f6907a6-f3e4-48ee-b677-25c3854795ee.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/b19e1a50-53fc-484f-bad8-9823b410bb9a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=1950&h=2095&dpr=2"
                ]
            },
            {
                "color": "",
                "name": "black",
                "sm":"https://n.nordstrommedia.com/id/sr3/31bf0fbc-eec2-41ca-9364-014fc8daa07a.jpeg?h=365&w=240&dpr=2",
                "imgs": [
                    "https://n.nordstrommedia.com/id/sr3/31bf0fbc-eec2-41ca-9364-014fc8daa07a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
                    "https://n.nordstrommedia.com/id/sr3/06451050-68fa-4305-b1cb-8b62dcfed80f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
                ]
            }
        ],
    },

    //   {
    //       "name": "",
    //       "price":,
    //       "dis":,
    //       "desc": "",
    //       "type": "sneakers",
    //       "img": [
    //           {
    //               "color": "",
    //               "name": "",
    //               "sm":"",
    //               "imgs": [
    //                   "",
    //                   "",
    //                   ""
    //               ]
    //           },
    //           {
    //               "color": "",
    //               "name": "",
    //               "sm":"",
    //               "imgs": [
    //                   "",
    //                   ""
    //               ]
    //           },
    //           {
    //               "color": "",
    //               "name": "",
    //               "sm":"",
    //               "imgs": [
    //                   "",
    //                   "",
    //                   "",
    //                   ""
    //               ]
    //           }
    //       ],
    //   },
 ]
 






 function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


// shuffle(items)

const rates = [
     "3.0",
     "3.1",
     "3.2",
     "3.3",
     "3.4",
     "3.5",
     "3.6",
     "3.7",
     "3.8",
     "3.9",
     "4.0",
     "4.1",
     "4.2",
     "4.3",
     "4.4",
     "4.5",
     "4.6",
     "4.7",
     "4.8",
     "4.9",
     "5.0",
     "5.1",
     "5.2",
     "5.3",
     "5.4",
     "5.5",
     "5.6",
     "5.7",
     "5.8",
     "5.9",
     "6.1",
     "6.2",
     "6.3",
     "6.4",
     "6.5",
     "6.6",
     "6.7",
     "6.8",
     "6.9",
     "7.0",
     "7.1",
     "7.2",
     "7.3",
     "7.4",
     "7.5",
     "7.6",
     "7.7",
     "7.8",
     "7.9",
     "8.0",
     "8.1",
     "8.2",
     "8.3",
     "8.4",
     "8.5",
     "8.6",
     "8.7",
     "8.8",
     "8.9",
     "9.0",
     "9.1",
     "9.2",
     "9.3",
     "9.4",
     "9.5",
     "9.6",
     "9.7",
     "9.8",
     "9.9",
     "6.0",
     "6.1",
     "6.2",
     "6.3",
     "6.4",
     "6.5",
     "6.6",
     "6.7",
     "6.8",
     "6.9",
     "7.0",
     "7.1",
     "7.2",
     "7.3",
     "7.4",
     "7.5",
     "7.6",
     "7.7",
     "7.8",
     "7.9",
     "8.0",
     "8.1",
     "8.2",
     "8.3",
     "8.4",
     "8.5",
     "8.6",
     "8.7",
     "8.8",
     "8.9",
     "9.0",
     "9.1",
     "9.2",
     "9.3",
     "9.4",
     "9.5",
     "9.6",
     "9.7",
     "9.8",
     "9.9"
]

let ids = [
     "t1",
     "t2",
     "t3",
     "t4",
     "t5",
     "t6",
     "t7",
     "t8",
     "t9",
     "t10",
     "t11",
     "t12",
     "t13",
     "t14",
     "t15",
     "t16",
     "t17",
     "t18",
     "t19",
     "t20",
     "t21",
     "t22",
     "t23",
     "t24",
     "t25",
     "t26",
     "t27",
     "t28",
     "t29",
     "t30",
     "t31",
     "t32",
     "t33",
     "t34",
     "t35",
     "t36",
     "t37",
     "t38",
     "t39",
     "t40",
     "t41",
     "t42",
     "t43",
     "t44",
     "t45",
     "t46",
     "t47",
     "t48",
     "t49",
     "t50",
     "t51",
     "t52",
     "t53",
     "t54",
     "t55",
     "t56",
     "t57",
     "t58",
     "t59",
     "t60",
     "t61",
     "t62",
     "t63",
     "t64",
     "t65",
     "t66",
     "t67",
     "t68",
     "t69",
     "t70",
     "t71",
     "t72",
     "t73",
     "t74",
     "t75",
     "t76",
     "t77",
     "t78",
     "t79",
     "t80",
     "t81",
     "t82",
     "t83",
     "t84",
     "t85",
     "t86",
     "t87",
     "t88",
     "t89",
     "t90",
     "t91",
     "t92",
     "t93",
     "t94",
     "t95",
     "t96",
     "t97",
     "t98",
]

const brands = ['Lauren Ralph Lauren','Canada Goose']
const sizes = ['sm','large','medium','xl','2xl']
let lrl = 0
let cgs = 0
let m = new Map()
let l = 0 
for(let i of items){
     let tmp = sisses(sizes)
     i.size = new Set(tmp)
     i.simList = maylikelist(ids)
     i.maylike = maylikelist(ids)
     i.id = `t${++l}`
     let r = Math.floor(Math.random()*(rates.length))
     i.rate = {
               rate:parseFloat(rates[r]),
               numrate:Math.ceil(Math.random()*((6000-1000)+1000)),
          }     
     i.brand = brands[Math.floor(Math.random()*brands.length)]    
     i.date = Math.floor(Math.random()*(1000))
     i.frees = true
     let ck = l
     for(let c of i.img){
        c.key = ck++
     }
     if(i.brand === brands[0]){
          lrl+=1
     }
     else
        cgs+=1
    m[i.id] = i
}


function sisses(sizes){
     let tmp = [...sizes]
     let s = Math.floor(Math.random()*(5 - 2)+2)
     s = 5-s
     while (s>0){
          let cur = Math.floor(Math.random()*(tmp.length))
          tmp.splice(cur,1)
          s-=1
     }
     return tmp
}

function maylikelist(ids){
     let tmpids = [...ids]
     let num = Math.floor(Math.random()* (48-25)+25)
     let start = Math.floor(Math.random()* num)
     let end = start + num
     shuffle(tmpids)
     let val = tmpids.slice(start,end+1)    
     console.log(val)
     return val
}

console.log(lrl," ",cgs)
console.log(items)




// console.log(lrl,cgs)
// console.log(items)

export {m}
export default items



// frees:true,
// simlist




