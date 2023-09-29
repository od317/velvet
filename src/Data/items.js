

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

let Indexes = ["asdoasjd",1,2,3,4,5,6,7]



const items = [
    {
         name:'Reefer Wool Blend Coat',
         size:new Set(['sm','large','xl','2xl']),
         rate:{
          rate:9,
          numrate:5412,
         },
         price:250.00,
         dis:28,
         frees:true,
         desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
         brand:'Lauren Ralph Lauren',
         date:'15',
         id:'t1',
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
         simList:['t1','t2','t3','t1','t1','t1','t1','t1','t1','t1','t1','t1']
    },
    {
     name:'Fall Away Tie Belt Coat',
     size:new Set(['sm','medium','large','xl','2xl']),
     rate:{
      rate:8,
      numrate:4518,
     },
     price:180.00,
     frees:true,
     desc:`Smooth goldtone buttons line the asymmetric placket of a stately tie-belt coat that'll keep you chic and cozy when temperatures dip.`,
     brand:'Lauren Ralph Lauren',
     date:'11',
     id:'t10',
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
     size:new Set(['sm','medium','large','xl']),
     rate:{
          rate:8.8,
          numrate:3125,
     },
     price:250.00,
     frees:false,
     desc:'Water-resistant gabardine enhances the functional fashion of a double-breasted trench coat detailed with epaulets and cinched with a matching belt.',
     brand:'Lauren Ralph Lauren',
     date:'16',
     id:'t2',
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
     size:new Set(['medium','lg','2xl']),
     rate:{
      rate:9,
      numrate:4213,
     },
     price:220.00,
     frees:true,
     desc:`Opt for a sophisticated look on your urban excursions in this wool-blend coat made with an insulated lining for extra comfort.`,
     brand:'Lauren Ralph Lauren',
     date:'70',
     id:'t9',
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
     size:new Set(['sm','xl','2xl']),
     rate:{
      rate:9,
      numrate:5113,
     },
     price:350.00,
     frees:true,
     desc:`This refined coat fashioned from a soft wool blend falls to a classic knee length.`,
     brand:'Lauren Ralph Lauren',
     date:'11',
     id:'t11',
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
     size:new Set(['sm','medium','large','2xl']),
     rate:{
      rate:8,
      numrate:3681,
     },
     price:240.00,
     frees:true,
     dis:37,
     desc:`Belted cuffs, tonal piping and logo buttons add winning style points to an endlessly wearable coat designed with a water-repellent finish.`,
     brand:'Lauren Ralph Lauren',
     date:'80',
     id:'t12',
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
     size:new Set(['sm','large','2xl']),
     rate:{
      rate:9.8,
      numrate:4332,
     },
     price:1395.00,
     frees:true,
     desc:'This water-resistant parka with down insulation will get you through harsh cold and winds with extended coverage on the hood, ribbed cuffs and a drawcord waist.',
     brand:'Canada Goose',
     date:'8',
     id:'t14',
     type:'coat',
     img:[
      {
           color:'#060405',    
           name:'navy',
           imgs:['https://n.nordstrommedia.com/id/sr3/043f9d9e-30ab-43d5-ab4a-fa7fdcd57d77.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/ad577eae-aa8c-4eec-8eda-35a756da1210.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/ae6fb9c9-bdf4-40b4-8abf-f47b1162ee3c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#1b1b1b',   
           name:'black', 
           imgs:['https://n.nordstrommedia.com/id/sr3/e54be0d8-958f-460c-9eb2-6f9e855eb779.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           ]
      },
     ],
     simList:['t1','t2','t3','t1','t1','t1','t1','t1','t1','t1','t1','t1']
},


    {
     name:'Double Breasted Wool Blend Coat',
     size:new Set(['medium','large','2xl','xl']),
     rate:{
          rate:9,
          numrate:5783,
     },
     price:350.00,
     frees:true,
     dis:55,
     desc:'This refined coat fashioned from a soft wool blend falls to a classic knee length.',
     brand:'Lauren Ralph Lauren',
     date:'25',
     id:'t3',
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
     size:new Set(['sm','medium','2xl']),
     rate:{
          rate:7,
          numrate:4321,
     },
     price:310.00,
     frees:true,
     dis:25,
     desc:'Sleek faux-leather trim on the pockets and collar elevates a sophisticated houndstooth coat made with a back vent for easy movement.',
     brand:'Lauren Ralph Lauren',
     date:'54',
     id:'t4',
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
     size:new Set(['medium','large','2xl']),
     rate:{
      rate:8,
      numrate:1412,
     },
     price:320.00,
     dis:34,
     frees:true,
     desc:'Crisp notched lapels and a zoomed-in glen plaid define the look of a modern coat that takes after blazer and trench styles.',
     brand:'Lauren Ralph Lauren',
     date:'20',
     id:'t5',
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
     size:new Set(['sm','large','xl','2xl']),
     rate:{
      rate:8.5,
      numrate:2312,
     },
     price:300.00,
     frees:true,
     desc:`A crest patch and matching statement buttons distinguish a classic wool-blend coat you'll wear forever.`,
     brand:'Lauren Ralph Lauren',
     date:'48',
     id:'t6',
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
     size:new Set(['sm','medium','2xl']),
     rate:{
      rate:8.8,
      numrate:3591,
     },
     price:300.00,
     frees:true,
     desc:`Buttery faux-leather accents polish this wool-blend coat that's perfectly suited to workdays and weekend jaunts.`,
     brand:'Lauren Ralph Lauren',
     date:'60',
     id:'t7',
     type:'coat',
     img:[
      {
           color:'#060405',    
           name:'black',
           imgs:['https://n.nordstrommedia.com/id/sr3/c5b450c9-2bab-421e-b641-bdc25aac0ae0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/abb43a53-ba23-492b-8a6f-173a9f8b30a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/1ff675c8-3f7e-4f8d-8939-e43ef0b09dc8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      },
   
     ],
     simList:['t1','t2','t3','t4','t5','t6','t7','t1','t1','t1','t1','t1']
    },    
    {
     name:'Tailored Wool Blend Coat',
     size:new Set(['sm','medium','lg']),
     rate:{
      rate:8.8,
      numrate:2352,
     },
     price:240.00,
     frees:true,
     desc:`Look classy while staying comfortably covered up in this handsome longline coat crafted from a warm wool blend.`,
     brand:'Lauren Ralph Lauren',
     date:'31',
     id:'t8',
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
     size:new Set(['large','xl','2xl']),
     rate:{
      rate:9.6,
      numrate:5122,
     },
     price:210.00,
     dis:33,
     frees:true,
     desc:'Semiglossy faux-leather trim traces the edges of a longline quilted coat finished with tonal buttons and a monogram plaque on the sleeve.',
     brand:'Lauren Ralph Lauren',
     date:'61',
     id:'t13',
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
     simList:['t1','t2','t3','t1','t1','t1','t1','t1','t1','t1','t1','t1']
    },





  


 

]
let m = new Map()
for(let i of items){
     m[i.id] = i
     if(!i.rate){
          i.rate = {
               rate:5,
               numrate:215,
          }
     }
     if(!i.dis){
          i.dis = null
     }
}
export {m}
export default items