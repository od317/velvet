

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
     name:'Milton Cowl Neck Sweatshirt',
     price:158.00,
     dis:10,
     desc:`Raised mini ribs texture a boxy, oversize sweatshirt with an exaggerated cowl neck and zipped sides to adjust the volume.`,
     type:'sweatshirt',
     img:[
      {
           color:'#746152',    
           name:'stone olive',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/7fbf6ccd-fd6b-4fb6-bed7-88eec0cdccec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/b9072b7e-7694-4bc0-8370-e26b9abf4b4d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'
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
    {
     name:'Harmonise Luxe Sweatshirt',
     price:130.00,
     dis:35,
     desc:`A slouchy funnel neck tops this soft and cuddly sweatshirt framed by easy dropped-shoulder sleeves.`,
     type:'sweatshirt',
     img:[
      {
           color:'#02834b',    
           name:'green',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/63f0d7fa-c340-4f21-8ab4-4760398df074.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/2a24a8c8-3f62-4ae2-bcfc-bc4d4298af86.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/4d36e2cf-ceb9-406c-903d-6ae6246c95f6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#dde0d5',   
           name:'Glacier Green', 
           imgs:[
            'https://n.nordstrommedia.com/id/sr3/fc4aadd9-d96d-4a07-aa46-0a5bc9575e9a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
            'https://n.nordstrommedia.com/id/sr3/baaceb54-bc22-4025-8f52-91ce7a2b3cbe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
           ]
      },
     ],
    },
    {
     name:'Mae Oversize Sweatshirt',
     price:148.00,
     desc:`A textured Ottoman knit brings rich depth, elevating this gym-class staple made with dropped shoulders that emphasize its roomy, layer-ready fit.`,
     type:'sweatshirt',
     img:[
      {
           color:'#cac5bf',    
           name:'Egret',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/07d6639b-ae14-4036-9cb8-bd0812da02d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/68f681bc-7da8-4e2b-a5af-0126bc16cf0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           ]
          },
      {
           color:'#291b1b',   
           name:'Coffee Bean', 
           imgs:[
            'https://n.nordstrommedia.com/id/sr3/598c5e2b-e4c5-40b3-8a8c-8b6a91b844ed.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
            'https://n.nordstrommedia.com/id/sr3/0859cf3a-e3b0-4635-84bd-e7158f94ebed.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
           ]
      },
     ],
    },
    {
     name:'Anya Ottoman Rib Hoodie',
     price:79.00,
     desc:`Ottoman ribbing textures a raglan-sleeve hoodie cut from a lightweight and stretchy cotton blend you'll love wearing whether you're working out or hanging out.`,
     type:'sweatshirt',
     img:[
      {
           color:'#e5e6e8',    
           name:'Blue Dawn',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/6bd52249-9fcb-4f06-8099-f66b740ee7ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/49b1e5f2-63cc-433a-aa02-046106b7fdc1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           ]
          },
      {
           color:'#9a493e',   
           name:'Red Jelly', 
           imgs:[
            'https://n.nordstrommedia.com/id/sr3/d33984e3-b854-4401-9255-7980f1518020.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
            'https://n.nordstrommedia.com/id/sr3/10d90178-1cd9-4473-b526-23b24c15a8f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
           ]
      },
     ],
    },
    {
     name:'Shelbe Fleece Lined Full Zip Hoodie',
     price:150.00,
     desc:`A durable water-repellent finish on a highly wind-resistant WindWall® shell provides powerful protection in this slim full-zip hoodie warmed with fleece lining.`,
     type:'sweatshirt',
     img:[
          {
           color:'#2b2b2b',    
           name:'Tnf Black',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/b977205e-bcb3-4fdd-adbf-00c7afed48c3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/2ca43acf-2024-43b3-a7c3-3ae099c5bf51.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/d960efc2-cbf8-4750-a40b-b407a834eef3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
           ]
          },
          {
               color:'#e9f3f4',    
               name:'Skylight Blue',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/8ec5535a-f573-490d-af7f-dd131c988309.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/9c0a3cd4-592a-4027-92d5-b07a10f48a98.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               ]
          },
     ],
    },
    {
     name:'Crop Cotton Blend Zip-Up Hoodie',
     price:40.00,
     desc:`A soft cotton-blend keeps you feeling cozy as you go about your day in this cropped hoodie with handy pockets.`,
     type:'sweatshirt',
     img:[
          {
           color:'#f1ede1',    
           name:'Beige Angora',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/6e4fb51b-f3cf-4864-b1eb-f528883faa77.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2',
           ]
          },
          {
               color:'#222023',    
               name:'black',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/c8c891d0-a66d-4f83-90f6-4972430f06f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               ]
          },
     ],
    },
    {
     name:'Quarter Zip Sweatshirt',
     price:39.50,
     desc:`A neck-warming stand collar tops this quarter-zip sweatshirt made from a comfy cotton blend.`,
     dis:50,
     type:'sweatshirt',
     img:[
          {
           color:'#f4eee2',    
           name:'Beige Angora',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/c24ca88c-7268-462f-b399-e10c89eecd9d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           ]
          },
          {
               color:'#5f8383',    
               name:'Green Pine',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/18804a0c-5686-4580-8c4a-5c6f689b1e98.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990',
               ]
          },
          {
               color:'#d59f8e',    
               name:'Brown Topaz',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/050c16d1-6e1f-4549-b2ad-9868328f92dc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990',
               ]
          },
     ],
    },
    {
     name:'Sportswear Tech Fleece Windrunner Zip Hoodie',
     price:145.00,
     desc:`Stay cozy and warm without the extra bulk in a full-zip hoodie made from lightweight tech fleece and finished with convenient zippered pockets.`,
     type:'sweatshirt',
     img:[
          {
           color:'#29292b',    
           name:'black',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/7a6f9dfd-0917-4e3d-b3c3-706aa85379f2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/08ea0695-9142-476d-813c-20103b5897f3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           ]
          },
          {
               color:'#b5a583',    
               name:'Neutral Olive',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/00aa8d4d-2b1e-489f-af6b-7a6c4561f0ac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/6a03f1cf-0ce6-4be7-8690-e4914df57369.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               ]
          },
     ],
    }, 
    {
     name:'Recycled Polyester Blend Hoodie',
     price:150.00,
     dis:30,
     desc:`This wardrobe-staple hoodie made with a recycled-polyester blend keeps you comfortable pre- and post-workout.`,
     type:'sweatshirt',
     img:[
          {
           color:'#431f21',    
           name:'Mulberry',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/01fbe9e1-60dc-4f28-b7db-5dfc841c3e06.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/0f814feb-d5da-4c26-abb8-960868b9360d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           ]
          },
          {
               color:'#29292b',    
               name:'Black',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/4b44a4c0-bfe8-4606-8f63-6297fec8918a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/a3e0b0fa-7176-475c-9fd6-e68680b1fca6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/1c4566b4-5bd5-42bd-bdc1-5efc623235da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
               ]
          },
     ],
    },
    {
     name:'Watering My Own Grass Embroidered Graphic Sweatshirt',
     price:97,
     desc:`Whatever the goal, make it happen for you in this oversized sweatshirt finished with rich and colorful embroidery.`,
     type:'sweatshirt',
     img:[
          {
           color:'#f3eee7',    
           name:'Ecru',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/ba5bee31-7cf1-475f-887f-5c7010e38f85.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/c94f7fe2-b03c-438c-ad93-db5f939e763e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/9e33e980-17c5-411e-bce1-659ec32b7608.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'
           ]
          },
     ],
    },
    {
     name:'Z.N.E. Zip Hoodie',
     price:110,
     desc:`Moisture-wicking tech lends distraction-free comfort to a playfully cropped full-zip hoodie cut from cozy, four-way stretch fabrics.`,
     type:'sweatshirt',
     img:[
          {
           color:'#fdbbc5',    
           name:'Pink Fusion',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/55be3d6a-9d51-4a5f-aba9-824db62bbc3f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2',
           ]
          },
     ],
    },
    {
     name:'Quilted Patchwork Hoodie',
     price:119.00,
     dis:20,
     desc:`Perfect for pre- and post yoga, this loose-fitting hoodie is designed with dropped shoulders and vented panels so you stay cool while on-the-go.`,
     type:'sweatshirt',
     img:[
          {
           color:'#706569',    
           name:'Raven Multi',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/344082e8-5905-4f4a-9fd6-68a5ca9cddb0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2',
           ]
          },
     ],
    },
    {
     name:'Yoga Dri-FIT Hoodie',
     price:75,
     dis:45,
     desc:`Perfect for pre- and post yoga, this loose-fitting hoodie is designed with dropped shoulders and vented panels so you stay cool while on-the-go.`,
     type:'sweatshirt',
     img:[
          {
           color:'#2a2a2a',    
           name:'black',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/f1879224-13bc-46c7-8a08-a2025ffbb655.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/2d1812ee-2350-4fc7-bc9b-4e8ba7513a31.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/76093258-9e6d-4840-9ff1-54fb98b24dd1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
           ]
          },
          {
               color:'#3c6da5',    
               name:'Dark Marina Blue',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/6ed2b202-8e56-44fb-9914-b3ac7e1ca416.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/401de0aa-6a91-43ff-8758-ca71e525cb44.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               ]
          },
          {
               color:'#b0397b',    
               name:'Dynamic Berry',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/8fbc5af4-4e71-4054-b7a2-9b54f321e1d2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/7cd86f90-0347-45b6-9740-270d24cb9fdb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               ]
          },
     ],
    },
    {
     name:'The Drop Square Tunic Sweatshirt',
     price:168,
     desc:`This slouchy oversized sweatshirt is crafted in a bold graphic with dropped shoulders.`,
     type:'sweatshirt',
     img:[
          {
           color:'#44434b',    
           name:'Mother Cares ',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/fb92bcff-ec85-4c3d-8184-db684f47b5ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/fb92bcff-ec85-4c3d-8184-db684f47b5ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           ]
          },
     ],
    },
    {
     name:'Ultra Mini Classic Boot',
     price:150,
     desc:`An ultra-short shaft adds a twist to this abbreviated version of a classic UGG boot.`,
     type:'boot',
     img:[
          {
           color:'#6b493f',    
           name:'Burnt Cedar',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/8e101e1c-9579-4e78-95c1-f92f6bd1b0c8.jpeg?h=365&w=240&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/8e101e1c-9579-4e78-95c1-f92f6bd1b0c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/0067a2bd-3b98-4ac7-bd7a-cf0f1fb9d9f2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2'
           ]
          },
          {
               color:'#ec3750',    
               name:'Samba Red Tonal',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/c6d15fed-f2e2-454e-ba40-cd1df1841bf9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/30631fcc-154a-4bdf-adbc-a0ca3aeb3bc8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/6d4d3200-630c-43dd-8b70-c98ca1b8e9bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2'
               ]
          },
          {
               color:'#1e1a19',    
               name:'Black Suede',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/14fc68f8-e46f-4b27-8466-af29652b031a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/d76ec802-2e91-4349-85b4-480c283cf26f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/087550b4-2ecb-4712-8652-f8246810c569.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2'
               ]
          },
     ],
    },
    {
     name:'Classic Ultra Mini Platform Boot',
     price:160,
     desc:`Overlock-stitch detailing on the seams elevates the look of a cozy boot set atop a head-turning platform for sky-high style.`,
     type:'boot',
     img:[
          {
           color:'#232323',    
           name:'black',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/78833124-20b3-49f6-962a-687a11ee682c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=1950&h=2095&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/571b15ac-007c-461a-b96e-6da9e9d41bd1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2',
           ]
          },
          {
               color:'#936648',    
               name:'Chestnut',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/674a5d67-d7a5-4735-a1c3-4b114e0dea68.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838',
               'https://n.nordstrommedia.com/id/sr3/eb58797f-514f-4259-b755-820c9bed7a4e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838',
               ]
          },
     ],
    },
    {
     name:'Flin Knee High Boot',
     price:260,
     dis:55,
     desc:`A block heel adds just the right amount of lift to this suave and streamlined knee-high boot.`,
     type:'boot',
     img:[
          {
           color:'#1d1d1d',    
           name:'black',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/d86e8927-b881-4457-afc5-38f578072dbd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/a3eb151b-fabf-4c31-8199-c89691caf200.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/4d3583f7-8177-4cb5-a671-097ca6a6b976.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838'
           ]
          },
     ],
    },
    {
     name:'Flexa Fabiene Bootie',
     price:200,
     desc:`A square toe and block heel ground this burnished leather bootie in contemporary-chic style, while lightweight and flexible cushioning adds everyday comfort.`,
     type:'boot',
     img:[
          {
           color:'#50231c',    
           name:'Brown',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/2d89c34f-e2a0-46f3-9dc9-6c3622f47989.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838',
           'https://n.nordstrommedia.com/id/sr3/42008aeb-c440-4f84-aec7-d332d407f7aa.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2',
           ''
           ]
          },
          {
               color:'#282924',    
               name:'black',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/81eff3be-aa2c-47bc-96f5-5e7829468c2c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838',
               'https://n.nordstrommedia.com/id/sr3/bed0d8d6-94b7-4917-b4d9-531df6445a87.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/81db41ce-b40c-454c-b2d0-8fbdfeb42125.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2'
               ]
          },
          {
               color:'',    
               name:'',
               imgs:[
               '',
               '',
               ''
               ]
          },
     ],
    },



    {
     name:'Kelsey Knit Trousers',
     price:98,
     dis:40,
     desc:`Polished enough for work and comfortable enough for anything, these slim-cut pants are cut for a smooth fit in a ponte knit with plenty of stretch.`,
     type:'suit',
     img:[
          {
           color:'',    
           name:'Black',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/cbfba3c0-1776-4e73-88b9-bfc0ee958971.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/164e8c76-f806-4343-bffc-fa9cc720bf9c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/88960806-16f1-4e1e-be2f-4caad0e3a9ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'
           ]
          },
          {
               color:'',    
               name:'Cadet Blue',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/06f32479-a02e-48b5-9cdc-58102d9be37d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/24bba5b7-32db-4bf6-a5cd-ab233dcaf77c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/a2e71c3c-7782-41a7-b760-62d387dacc0c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
               ]
          },
          {
               color:'',    
               name:'Pink Perfection',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/3dcaf4b2-6045-4fdf-b3d6-bcf1937c887f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/d790094f-3d42-429a-98f4-561a5a43d1e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/e256d2e2-d750-4484-80af-ee22d0d2dccc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'
               ]
          },
     ],
    },
    {
     name:'The Favorite Pant Pleat Pants',
     price:218,
     desc:`Carefully tucked pleats accent these polished workday pants punctuated with elongating front seams and wide legs.`,
     type:'suit',
     img:[
          {
           color:'',    
           name:'Beige',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/7d8a4914-5a9b-475c-88b1-0a312fff1500.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/de7ece5f-2901-472f-9f75-8a03ea8a4ddc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/8843189d-77c3-4bd2-846b-7a8a2d5a2d30.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'
           ]
          },
          {
               color:'',    
               name:'black',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/93034f6b-ad8f-445c-bd15-f816a1c3873d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990',
               'https://n.nordstrommedia.com/id/sr3/ee4f05ed-c1e0-4ab3-bead-28335340b039.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               ]
          },
     ],
    },
    {
     name:'https://n.nordstrommedia.com/id/sr3/e256d2e2-d750-4484-80af-ee22d0d2dccc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
     price:99,
     dis:30,
     desc:`Achieve desk-to-dinner perfection in these sophisticated stretch-kissed pants designed with a high waist and flowy wide legs.`,
     type:'suit',
     img:[
          {
           color:'',    
           name:'black',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/db38452c-28f2-4109-992c-ee51cbce3562.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990',
           'https://n.nordstrommedia.com/id/sr3/db38452c-28f2-4109-992c-ee51cbce3562.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990',
           'https://n.nordstrommedia.com/id/sr3/8b6f00ad-c2ab-4be0-8cd7-ac7244e0535e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'
           ]
          },
          {
               color:'',    
               name:'Tan Cobblestone',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/b94efa1b-5ae4-4de7-b28d-3344a7cbb15f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990',
               'https://n.nordstrommedia.com/id/sr3/0d23cd3e-457e-410e-bf40-0c32b99ec8af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/bbdd7a03-edf7-45b7-b539-c8d60a18de2e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
               ]
          },
          {
               color:'',    
               name:'Navy Midnight',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/8f3fdf7c-36a8-43f9-814c-f57adae8f93d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/5b3a1878-daab-4cee-81d2-7593fd23e1df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/fbd96d54-d9bd-4448-89ca-ee6a5d57a2ca.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'
               ]
          },
     ],
    },
    {
     name:'Ricki Plaid Blazer',
     price:188,
     dis:25,
     desc:`Bold plaid covers this boxy coat-like blazer framed by notched lapels.`,
     type:'suit',
     img:[
          {
           color:'',    
           name:'navy plaid',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/ed2e00bf-b0fa-4703-b8e8-0211c7834e44.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/38478f1e-ff06-4a7c-9193-2ea0f1a4c364.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           ]
          },
     ],
    },
    {
     name:'Mixed Plaid Double Breasted Blazer',
     price:200,
     desc:`This preppy and polished blazer is updated in a double-breasted silhouette with a mix of a woolly plaid and herringbone pattern.     `,
     type:'suit',
     img:[
          {
           color:'',    
           name:'Black Navy Plaid',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/cde4757e-7532-4da1-a607-6aec67e20b91.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/0879b88d-dc05-4fc6-aab4-0693af942139.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           ]
          },
     ],
    },
    {
     name:'Berkshire Houndstooth Dickey Jacket',
     price:689.00,
     desc:`A classic check delivers zippy zigs and zags to a wear-everywhere jacket.`,
     type:'suit',
     img:[
          {
           color:'',    
           name:'White/ Blue Multi',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/1298ffd5-53ac-4881-b500-723278539c8e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990&dpr=2',
           ]
          },
     ],
    },
    {
     name:'Stretch Bootcut Pants',
     price:345,
     dis:25,
     desc:`Expand your desk-to-dinner wardrobe with trouser-inspired pants designed in a bootcut silhouette and made from a stretchy cotton blend.     `,
     type:'suit',
     img:[
          {
           color:'',    
           name:'black',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/3cab48af-fc64-4b9e-b721-62ec74013111.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990',
           'https://n.nordstrommedia.com/id/sr3/e7b62395-27c9-4737-b61b-579d158fa02c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           ]
          },
          {
               color:'',    
               name:'Sesame',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/21e45727-b6f0-4d8a-bd82-762511a5f172.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/46f0b726-830a-483e-bc42-c4e11a8bc141.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               ]
          },
     ],
    },
    {
     name:'Collarless Knit Wrap Jacket',
     price:428.00,
     dis:25,
     desc:`A textured knit in a mélange of neutral hues gives a tweedy look to a surplice wrap jacket that ties neatly at one side.`,
     type:'suit',
     img:[
          {
           color:'',    
           name:'Black',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/7d8f63ca-7215-4ce5-ac7d-d3ab5663bc38.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/29a10208-ccae-4d6b-8d25-30001e05bf62.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           ]
          },
     ],
    },
    {
     name:'Wide Leg Plaid Trousers',
     price:109,
     dis:35,
     desc:`Kissed with stretch and covered in plaid, these wide-leg trousers promise to keep you polished and comfortable from desk to dinner.`,
     type:'suit',
     img:[
          {
           color:'',    
           name:'Rich Black',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/f62c43bc-7393-4c66-a9e2-91413a7cece4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1950&h=2990',
           'https://n.nordstrommedia.com/id/sr3/c997f8db-e452-4774-93d0-8a8e503f78f0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c8d8b196-6b50-479e-97ab-cffb06d57e5e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
           ]
          },
     ],
    },
    {
     name:'The Shortie Favorite Pants',
     price:218,
     desc:`These wide-leg trousers are fashioned from smooth woven fabric and gently pleated at the waist to further the flowy fit.`,
     type:'suit',
     img:[
          {
           color:'',    
           name:'beige',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/b9b3e0fb-b743-4095-8318-23c741f2c557.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/b8f44459-cce7-4983-9f96-d437d954735e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/1cc02a6b-1556-4d39-9364-49f6c78d877a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
           ]
          },
          {
               color:'',    
               name:'black',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/eeea51bd-e2dd-4994-8f05-5aff4b17ba67.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/7c18ea4d-e28a-4588-b929-4d84ec582d7c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/5d6f7a53-6201-4d94-bad3-861da981ce1d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'
               ]
          },
     ],
    },
    {
     name:'Elastic Back Wide Leg Trousers',
     price:89.00,
     dis:50,
     desc:`Wide legs lend graceful movement to crisp trousers made with an elasticized back waist for added comfort.`,
     type:'suit',
     img:[
          {
           color:'',    
           name:'Navy',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/52f16ccc-d794-484a-bba3-2ca4b128934f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/d9933cca-6ed9-4aac-b052-b6b28b349db9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/f54fecc3-366d-4d7a-bc84-9c33fa9fbd8d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'
           ]
          },
          {
               color:'',    
               name:'black',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/05ec2c3e-5ef1-41c6-9b82-ec779122fcdc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/a1988aeb-ea77-40db-b78c-8d9c2fb5ec25.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               'https://n.nordstrommedia.com/id/sr3/1516ca28-70f0-45ee-bcac-8f5160727c51.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
               ]
          },
     ],
    },
    {
     name:'Metallic Pinstripe Jacket',
     price:1590,
     desc:`Suiting that sizzles is the design directive behind a pinstriped power jacket that's shot through with shine.`,
     type:'suit',
     img:[
          {
           color:'',    
           name:'Black-Metallic',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/43160d91-077d-4efc-b763-4e28572c1a0c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/e06f8317-c7c2-457f-b8e6-7abad8e5524d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/95e87084-1dc1-484c-818e-1728d91ded86.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'
           ]
          },
     ],
    },
    {
     name:'Pleated Straight Leg Trousers',
     price:149,
     desc:`A widened waistband adds a modern mood to staple trousers done in a straight-leg silhouette.`,
     type:'suit',
     img:[
          {
           color:'',    
           name:'Light Olive',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/8d3d138b-0ace-44a4-b15a-64be21191960.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/31304b34-2d24-4020-8952-8c177196eaac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/e5d66803-dcb4-4649-88b6-830acfe10bf8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
           ]
          },
          {
               color:'',    
               name:'Chocolate Trot',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/ebe0373c-ba6a-4191-abbf-91cd970d1da4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/90b6e081-1aee-4a67-951f-4e254df2cc00.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               ''
               ]
          },
          {
               color:'',    
               name:'Fall Camel',
               imgs:[
               'https://n.nordstrommedia.com/id/sr3/6cd8ee63-ebd7-4e62-85e7-41d278ccbbab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
               'https://n.nordstrommedia.com/id/sr3/e87c83e3-48c2-42c9-8410-a459bb2b6b36.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
               ]
          },
     ],
    },
    {
     name:'Janorda Double Breasted Blazer',
     price:545,
     dis:40,
     desc:`Make power moves in this polished double-breasted blazer fashioned in a modern fit with strong shoulders and flap pockets.     `,
     type:'suit',
     img:[
          {
           color:'',    
           name:'curt green',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/be053d21-df3f-4db4-92d1-cf2cc547e7d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/58577495-6b1b-43ce-8721-b88610faa1b4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/4a7197ba-e8a3-4cce-a96b-6d8c1de35d47.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'
           ]
          },
     ],
    },
    {
     name:'Houndstooth Virgin Wool Crop Jacket',
     price:3990,
     desc:`A houndstooth check polishes this expertly tailored jacket crafted in Italy from pure virgin wool.`,
     type:'suit',
     img:[
          {
           color:'',    
           name:'Greige-Black',
           imgs:[
           'https://n.nordstrommedia.com/id/sr3/6f3b3b82-1b31-401b-801b-334d2d8c0cda.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/a81f03d5-6fa2-4923-9b3a-b480cfa2f1e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/ccb31394-6d6d-4680-acf8-53661b8d5723.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2'
           ]
          },
     ],
    },
    

//     {
//      name:'',
//      price:,
//      dis:,
//      desc:``,
//      type:'suit',
//      img:[
//           {
//            color:'',    
//            name:'',
//            imgs:[
//            '',
//            '',
//            ''
//            ]
//           },
//           {
//                color:'',    
//                name:'',
//                imgs:[
//                '',
//                '',
//                ''
//                ]
//           },
//           {
//                color:'',    
//                name:'',
//                imgs:[
//                '',
//                '',
//                ''
//                ]
//           },
//      ],
//     },
]




try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error("er"+error);
}

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




