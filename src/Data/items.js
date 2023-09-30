

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



let items = [
    {
         name:'Reefer Wool Blend Coat',
         price:250.00,
         dis:28,
         desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
         type:'coat',
         img:[
          {
               color:'#060405',    
               name:'black',
               imgs:['https://n.nordstrommedia.com/id/sr3/904ba27d-ac1c-4240-b755-0c171ea98421.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/bb3d2316-46b5-4f98-9fe9-ee100cd4663e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/1ff675c8-3f7e-4f8d-8939-e43ef0b09dc8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
          },
          {
               color:'#c6c4c5',   
               name:'gray', 
               imgs:['https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/3798e2a8-8b6a-4e93-a4d7-ed206bbb34ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               ]
          },
          {
               color:'#cd9d75',
               name:'cream',    
               imgs:['https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/812c6c7a-4d10-4e96-b182-4ebdca5ba880.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/614bc188-19cd-48b1-9a7a-afda947b3844.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/1faa2162-9e19-417d-9836-1ca71ad71114.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
          }
         ],
    },
    {
     name:'Fall Away Tie Belt Coat',
     price:180.00,
     desc:`Smooth goldtone buttons line the asymmetric placket of a stately tie-belt coat that'll keep you chic and cozy when temperatures dip.`,
     type:'coat',
     img:[
      {
           color:'#0e1822',    
           name:'navy',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/fa66cd27-0f01-4efc-bf81-904081168b38.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/58db5a4d-3728-4fb6-8908-bac3a7120a69.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/4a077aab-1cbd-49d8-b94f-1b2c31fb05f0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#9f6a49',   
           name:'brown', 
           imgs:['https://n.nordstrommedia.com/id/sr3/3dfd6fe8-95a3-4771-b4ed-f582f7d1540d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/7b518e27-6938-4a03-9885-b57b627f17a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/f8f284d7-532c-445b-91f7-1f614361e34b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
           ]
      },
      {
           color:'#131315',
           name:'black',    
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/c2bc365a-c91c-4c8f-a20f-1041525bc6b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/cff4f467-7891-44bc-bf9d-de0840581db1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/fcd17e9d-5593-4a39-bc6e-1457aecdc186.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2',]
      }
     ],
     simList:['t1','t2','t3','t1','t1','t1','t1','t1','t1','t1','t1','t1']
    },
    {
     name:'Belted Cotton Blend Gabardine Trench Coat',
     rate:{
          rate:8.8,
          numrate:3125,
     },
     price:250.00,
     desc:'Water-resistant gabardine enhances the functional fashion of a double-breasted trench coat detailed with epaulets and cinched with a matching belt.',
     type:'coat',
     img:[
      {
           color:'#d4bb9d',    
           name:'beige',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/78b61e7d-86e5-4062-a643-ad1aab595304.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/01b4086e-88f5-4eac-b2b5-fab7afa2d8ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/cbd41978-4a1d-4bdc-827b-364e8334e98a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      }, 
     ],
     simList:['t1','t2','t2','t2','t2','t2','t3','t4','t5','t6','t7','t8','t9','t10','t11','t12','t13','t14']
    },
    {
     name:'Wool Blend Notch Collar Coat',
     price:220.00,
     desc:`Opt for a sophisticated look on your urban excursions in this wool-blend coat made with an insulated lining for extra comfort.`,
     type:'coat',
     img:[
      {
           color:'#e2d5e7',    
           name:'lilac',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/23f4f81f-ed9d-4f82-88d2-a59ecf512cdc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/c9c90dd5-0404-45ef-b33d-ec70d4c8783c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/ff961e51-990b-4c3f-9ecc-83b9995e1e71.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },    
     {
          color:'#de1a64',    
          name:'magenta',
          imgs:[
          'https://n.nordstrommedia.com/id/sr3/64812d8c-aa9e-4221-b13b-c7c7a96f48cc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
          'https://n.nordstrommedia.com/id/sr3/f71a433c-66f5-4cb1-988b-afe03a0ab726.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           ]
     },
   
     ],
     simList:['t1','t2','t3','t4','t5','t6','t7','t8','t1','t1','t1','t1']
    },
    {
     name:'Double Breasted Wool Blend Coat',
     price:350.00,
     desc:`This refined coat fashioned from a soft wool blend falls to a classic knee length.`,
     type:'coat',
     img:[
      {
           color:'#e2d5e7',    
           name:'navy',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/614be209-8f75-42d1-839b-dd3686c83937.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/6d3c1749-6477-43bf-b5e4-aa6b09eb8cbf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/b88e6cc1-35c6-4429-972c-0b7513e7f8dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },    
     ],
     simList:['t1','t2','t3','t4','t5','t6','t7','t8','t1','t1','t1','t1']
    },
    {
     name:'Water Repellent Cotton Blend Belted Trench Coat',
     price:240.00,
     dis:37,
     desc:`Belted cuffs, tonal piping and logo buttons add winning style points to an endlessly wearable coat designed with a water-repellent finish.`,
     type:'coat',
     img:[
      {
           color:'#050503',    
           name:'black',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/63a28436-7615-4e81-8b01-eb3023b618d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/242160f3-85bd-40b8-a01d-9630127af752.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/44124249-4c03-4cb4-ac34-34cf64db64e2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },    
      {
          color:'#d6b596',
          name:'sand',
          imgs:[
               'https://n.nordstrommedia.com/id/sr3/062e1509-c88d-414a-a836-d0d092e27fc0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/c4668f1d-222e-4fca-828c-9784b3632d16.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/0b853bba-c82b-4dbf-b080-29c08cd601a4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'     
          ]
      }
     ],
     simList:['t1','t2','t3','t4','t5','t6','t7','t8','t9','t11','t12','t1']
    },
    {
     name:`Women's Rossclair Water Resistant 625 Fill Power Down Parka`,
     price:1395.00,
     desc:'This water-resistant parka with down insulation will get you through harsh cold and winds with extended coverage on the hood, ribbed cuffs and a drawcord waist.',
     type:'coat',
     img:[
      {
           color:'#060405',    
           name:'white',
           imgs:['https://n.nordstrommedia.com/id/sr3/c683f0be-b71c-4a01-8a0d-546d9ad7292e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/6138e2d2-01fc-49c1-bef6-2cc4bb083c3a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/121c0275-47b9-4ef8-9191-ec36a7d13c65.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
     ],
     simList:['t1','t2','t3','t1','t1','t1','t1','t1','t1','t1','t1','t1']
    },
    {
     name:'Alliston Packable Down Jacket',
     price:995.00,
     desc:'Packable into its own pocket, this lightweight yet durable and toasty-warm jacket is perfect for travel.',
     type:'coat',
     img:[
      {
           color:'#faf9f7',    
           name:'white',
           imgs:['https://n.nordstrommedia.com/id/sr3/f6473c6f-f1f2-4593-acf9-8aad224f49ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/7b7fc910-e2ea-41e0-8a0f-ca7c037c2be7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/88540f8a-10b1-43f6-b308-b0f8fbd2e77f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
     ],
     simList:['t1','t2','t3','t1','t1','t1','t1','t1','t1','t1','t1','t1']
    },
    {
         name:'Shelburne Water Resistant 625 Fill Power Down Parka',
         price:1395.00,
         desc:'Navigate fluctuations in weather in this water-resistant parka with powerful down insulation, removable hood-extending trim and a back vent with snap closures.',
         type:'coat',
         img:[
          {
               color:'#060405',    
               name:'black',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/5959557b-34b9-4bcd-ad61-40a148b9e101.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/3c2cb4f2-8ae9-4cfc-90a5-6b0de5949069.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',]
          },
         ],
         simList:['t1','t2','t3','t1','t1','t1','t1','t1','t1','t1','t1','t1']
    },
    {
     name:'Double Breasted Wool Blend Coat',
     price:350.00,
     dis:55,
     desc:'This refined coat fashioned from a soft wool blend falls to a classic knee length.',
     type:'coat',
     img:[
      {
           color:'#b0794f',    
           name:'beige',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/7c6f8072-3655-46fd-9b03-c54f12dd18c1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/702ccd26-0da2-4bd1-9ec7-53b8eaeba27c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           ]
      }, 
      {
          color:'#1c1920',    
          name:'navy',
          imgs:[
          'https://n.nordstrommedia.com/id/sr3/614be209-8f75-42d1-839b-dd3686c83937.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
          'https://n.nordstrommedia.com/id/sr3/6d3c1749-6477-43bf-b5e4-aa6b09eb8cbf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
          ]
     }, 
     ],
     simList:['t1','t2','t3','t2','t2','t2','t3','t4','t5','t6','t7','t8','t9','t10','t11','t12','t13','t14']
    },  
    {
     name:'Houndstooth Single Breasted Insulated Coat',
     price:310.00,
     dis:25,
     desc:'Sleek faux-leather trim on the pockets and collar elevates a sophisticated houndstooth coat made with a back vent for easy movement.',
     type:'coat',
     img:[
      {
           color:'#b0794f',    
           name:'beige',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/843b9ad6-3a50-4048-8c8c-db263f076f0c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/b94679b3-205f-4211-904b-8ad8b084f02f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/e60327bb-0d2f-4e3c-8374-05f994a9f0da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           ]
      }, 
     ],
     simList:['t1','t2','t3','t4','t2','t2','t3','t4','t5','t6','t7','t8','t9','t10','t11','t12','t13','t14']
    },
    {
     name:'Glen Plaid Belted Wool Blend Coat',
     price:320.00,
     dis:34,
     desc:'Crisp notched lapels and a zoomed-in glen plaid define the look of a modern coat that takes after blazer and trench styles.',
     type:'coat',
     img:[
      {
           color:'#dbdac5',    
           name:'white',
           imgs:['https://n.nordstrommedia.com/id/sr3/9dad0193-92ac-4d2b-b841-a88fa29095ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/1ac9b93e-1929-4021-9a0c-0a4ace25ad7f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',]
      },
     ],
     simList:['t1','t2','t3','t4','t5','t1','t1','t1','t1','t1','t1','t1']
    },  
    {
     name:'Crest Wool Blend Coat',
     price:300.00,
     desc:`A crest patch and matching statement buttons distinguish a classic wool-blend coat you'll wear forever.`,
     type:'coat',
     img:[
      {
           color:'#181619',    
           name:'black',
           imgs:['https://n.nordstrommedia.com/id/sr3/8c935329-6355-428d-903c-d433b773aace.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/99220a0d-d5c9-4dd9-804b-c2c9fe376555.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/c2a1310d-d309-4f68-a3e5-17da5368701c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
     ],
     simList:['t1','t2','t3','t1','t1','t1','t1','t1','t1','t1','t1','t1']
    },    
    {
     name:'Faux Leather Trim Wool Blend Longline Coat',
     price:300.00,
     desc:`Buttery faux-leather accents polish this wool-blend coat that's perfectly suited to workdays and weekend jaunts.`,
     type:'coat',
     img:[
      {
           color:'#060405',    
           name:'black',
           imgs:['https://n.nordstrommedia.com/id/sr3/c5b450c9-2bab-421e-b641-bdc25aac0ae0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/abb43a53-ba23-492b-8a6f-173a9f8b30a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
          ]
      },
   
     ],
     simList:['t1','t2','t3','t4','t5','t6','t7','t1','t1','t1','t1','t1']
    },    
    {
     name:'Tailored Wool Blend Coat',
     price:240.00,
     desc:`Look classy while staying comfortably covered up in this handsome longline coat crafted from a warm wool blend.`,
     type:'coat',
     img:[
      {
           color:'#252527',    
           name:'black',
           imgs:['https://n.nordstrommedia.com/id/sr3/860d2b03-159f-41bf-b68b-d92cf08e8348.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/2ae88f9a-a693-428b-98ce-eb2c99346a7d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/433c3a49-5e08-4650-8ff7-9f4e94a9d606.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      },
   
     ],
     simList:['t1','t2','t3','t4','t5','t6','t7','t8','t1','t1','t1','t1']
    },
    {
     name:'Faux Leather Trim Longline Quilted Jacket',
     price:210.00,
     dis:33,
     desc:'Semiglossy faux-leather trim traces the edges of a longline quilted coat finished with tonal buttons and a monogram plaque on the sleeve.',
     type:'coat',
     img:[
      {
           color:'#060405',    
           name:'black',
           imgs:['https://n.nordstrommedia.com/id/sr3/f8e3be0c-d716-46d2-a4cf-12a0fb16d48a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/3039ebd9-316b-4797-ac43-ec8d20638816.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
            ]
      },
     ],
    },
    {
     name:'Alliston Packable Down Jacket',
     price:1050.00,
     desc:'Packable into its own pocket, this lightweight yet durable and toasty-warm jacket is perfect for travel.',
     type:'coat',
     img:[
      {
           color:'#faf9f7',    
           name:'white',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/6b55a67f-d2a8-46be-9d9d-f199d99b0b6a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/27cff166-b1a1-4c62-9a0f-84e7b085c448.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/cc3b2fef-f7d7-4953-992c-e45b81fbe31b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
     ],
    },
    {
     name:'Rosalind Quilted Belted Trench Coat',
     price:430.00,
     desc:'Saunter through the seasons in soft sophistication with this lovely trench coat blanketed in cozy box quilting and finished with classic epaulets.',
     type:'coat',
     img:[
      {
           color:'#beb4b3',    
           name:'Earl Gray',
           imgs:['https://n.nordstrommedia.com/id/sr3/894b8faa-596a-4056-a97f-562ba6eaf69b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990',
           'https://n.nordstrommedia.com/id/sr3/c3abb1e4-2baf-4892-a409-83feea2ad9fb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/8ed28338-241a-4ff8-b44c-0872be6cd9e9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#3b3947',   
           name:'navy', 
           imgs:['https://n.nordstrommedia.com/id/sr3/4f7d8e0a-3e71-469f-96a8-7206355fa2c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/80311d78-c747-4a79-847d-9b82d8de3aaf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           ]
      },

     ],
    },   
    {
     name:'Longline Coat',
     price:239.00,
     dis:37,
     desc:'A contrast lining adds an extra flash of contemporary style to a blazer-inspired coat featuring shoulder pads, peaked lapels and classic flap pockets.',
     type:'coat',
     img:[
      {
           color:'#dc5486',    
           name:'Fuschia',
           imgs:['https://n.nordstrommedia.com/id/sr3/255ddcb4-7a55-47df-884d-db24cbdea642.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/f2169da4-a43f-4aab-a461-2065ba4caa5d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/f2169da4-a43f-4aab-a461-2065ba4caa5d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      },
      {
           color:'#a54c31',   
           name:'Cinnamon', 
           imgs:['https://n.nordstrommedia.com/id/sr3/f82e6d51-1471-457a-bc8f-022a3a965449.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/33e5ae30-0296-4dc8-b490-ca5b7c5ad8ce.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           ]
      },

     ],
    },   
    {
     name:'Drape Trench Coat',
     price:179.00,
     desc:'A wide notched collar accentuates the draped effect of an open-front trench coat tied with a matching belt.',
     type:'coat',
     img:[
      {
           color:'#272532',    
           name:'black',
           imgs:['https://n.nordstrommedia.com/id/sr3/278e331b-496c-4afa-941f-f9acc7be7706.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/278e331b-496c-4afa-941f-f9acc7be7706.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/10b7f30b-ce7a-4f98-ac34-20cf288f4db4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990']
      },
      {
           color:'#5e513e',   
           name:'Mushroom', 
           imgs:['https://n.nordstrommedia.com/id/sr3/720c06d8-80e5-4a0e-b020-90cd2cd28171.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990',
           'https://n.nordstrommedia.com/id/sr3/809be536-2332-4bd5-8f1d-5ff8803a7899.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/1cf4fdd8-5358-41c8-9d98-135d176c7c80.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
           ]
      },

     ],
    },   
    {
     name:'Phoenix Fleece Crewneck Sweatshirt',
     price:70.00,
     desc:'Dropped shoulders and an oversized fit bring throwback charm to a cozy fleece sweatshirt with an embroidered Swoosh on the chest.',
     type:'sweatshirt',
     img:[
      {
           color:'#f1f1e9',    
           name:'white',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/688e70b0-8231-4f65-a22c-25b93f2554bf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/4defdd4a-0554-4981-b8a1-eeb91133e149.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990',
            ]
      },
      {
           color:'#008095',   
           name:'teal', 
           imgs:['https://n.nordstrommedia.com/id/sr3/5ca14b82-020d-4fd1-a1b1-db52975e0fdd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/d3219485-4e5b-4761-8ff3-2715fad273a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/c7b755bf-a064-4bec-830a-5d2622ce3a5f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
           ]
      },
      {
          color:'#262628',
          name:'black',
          imgs:[
               'https://n.nordstrommedia.com/id/sr3/95a9d029-e7fc-4a6e-9593-8c9bff60bd1d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990',
               'https://n.nordstrommedia.com/id/sr3/d7765f97-dfb2-4e83-8f27-b1b64c850909.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
          ]
      }

     ],
    },   
    {
     name:'Drew Crewneck Sweatshirt',
     price:49.00,
     desc:`Do your casual lineup a solid with this supersoft and cozy, classic crewneck sweatshirt because it's essential for the gym, coffee runs or couch lounging.`,
     type:'sweatshirt',
     img:[
      {
           color:'#f5f4f2',    
           name:'white',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/8e6746ce-8f7b-474e-9fbf-faf89342979f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/32779fb3-5d06-4dfe-b304-b5039c0a38f3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
            ]
      },
      {
           color:'#49494b',   
           name:'gray', 
           imgs:[
            'https://n.nordstrommedia.com/id/sr3/98fb3fbf-f69e-4f38-b10c-ebff3b288f88.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c5544bbd-ea49-490b-9d39-969f12495918.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/d45213bd-f390-460c-ad5f-1d4df6d20547.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2'
           ]
      },
      {
          color:'#28293e',
          name:'navy',
          imgs:[
               'https://n.nordstrommedia.com/id/sr3/423787cf-c57b-4e47-a2c8-73f934474896.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/1b220f72-35ba-403f-b484-88972ab6dfac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
          ]
      }

     ],
    },  
    {
     name:'Sportswear Tech Fleece Zip Hoodie',
     price:135.00,
     desc:`Celebrate the 10-year anniversary of Nike Tech Fleece in an elevated zip hoodie inspired by the colors and textures of natural minerals.`,
     type:'sweatshirt',
     img:[
      {
           color:'#262628',    
           name:'black',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/0981bbc2-efef-43db-969d-1ac200f2d0af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/39a6a9cb-6388-48bc-8788-b314fbe0aaf9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
            ]
      },
      {
           color:'#cabc95',   
           name:'olive', 
           imgs:[
            'https://n.nordstrommedia.com/id/sr3/688b509f-8c60-492d-99f8-1dcd03697308.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/0492e366-7b7f-4c21-b429-cf6aeba3ebd8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/066b943a-be1e-40c8-b5b0-db57284281d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'
           ]
      },
     ],
    },
    {
     name:'Oversize Cotton Blend Zip-Up Hoodie',
     price:49.50,
     desc:`This lightweight zip-up hoodie cut from a supersoft cotton-blend in an oversized fit makes the perfect layering piece.`,
     type:'sweatshirt',
     img:[
      {
           color:'#628a89',    
           name:'green pine',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/b3c9a796-08b9-4299-90f1-93200581b047.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
            ]
      },
      {
           color:'#2a292e',   
           name:'black', 
           imgs:[
            'https://n.nordstrommedia.com/id/sr3/c2070be8-1e39-492d-941e-98e94d017f94.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           ]
      },
     ],
    },
    {
     name:'Freya Funnel Neck Sweatshirt',
     price:148.00,
     dis:'30',
     desc:`A supremely soft knit provides endless comfort in a contemporary sweatshirt with a funnel neck, slit hem and adjustable drawcord-toggle at the waist.`,
     type:'sweatshirt',
     img:[
      {
           color:'#ccc7c3',    
           name:'white',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/9d90698b-2937-4249-a754-7c64c0a5c5b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
            ]
      },
      {
           color:'#1d2238',   
           name:'blue', 
           imgs:[
            'https://n.nordstrommedia.com/id/sr3/66472d46-8aca-4a04-8942-a46c9dc05d73.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           ]
      },
     ],
    },
    {
     name:'Wool & Cashmere Knit Hoodie',
     price:159.00,
     desc:`Layering gets a little dreamy in this hoodie knit from luxuriously warm wool and decadent cashmere for cool-weather coziness.`,
     type:'sweatshirt',
     img:[
      {
           color:'#b9866b',    
           name:'tan smoke',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/073f8e13-5ecf-4e7a-b173-1c1de9e352f0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/3434ab7f-eba8-4817-b82e-45e0c2b52cab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'
            ]
      },
      {
           color:'#8f323f',   
           name:'red tibetan', 
           imgs:[
            'https://n.nordstrommedia.com/id/sr3/908a864a-9a75-4268-b4fe-741308755076.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
            'https://n.nordstrommedia.com/id/sr3/556ca17a-7e2e-4e60-92a9-914e11ced0f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
           ]
      },
     ],
    },
]


items = items.sort((a,b)=>{
     return 0.5 - Math.random
})

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
     "5.9",,
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

const brands = ['Lauren Ralph Lauren','Canada Goose']
let lrl = 0
let cgs = 0
let m = new Map()
let l = 0 
for(let i of items){
     i.id = `t${++l}`
     i.rate = {
               rate:parseFloat(rates[Math.floor(Math.random()*rates.length)]),
               numrate:Math.ceil(Math.random()*((6000-1000)+1000)),
          }
     i.brand = brands[Math.floor(Math.random()*brands.length)]    
     i.date = Math.floor(Math.random()*(1000))
     i.size = new Set(['sm','large','medium','xl','2xl'])
     i.simList = ['t1','t2','t3','t4','t5','t6','t7','t8','t9','t10','t11','t12','t13','t14','t15','t16','t17']
     i.frees = true
     if(i.brand === brands[0]){
          lrl+=1
     }
     else
        cgs+=1
     m[i.id] = i
}




// console.log(lrl,cgs)
// console.log(items)

export {m}
export default items



// frees:true,
// simlist




