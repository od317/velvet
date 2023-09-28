

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
         size:new Set(['sm','xl']),
         rate:{
          rate:9,
          numrate:5412,
         },
         price:250.00,
         dis:28,
         desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
         brand:'Lauren Ralph Lauren',
         date:'15',
         id:'t1',
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
         simList:['t1','t2','t1','t1','t1','t1','t1','t1','t1','t1','t1','t1']
     },
    {
     name:'Belted Cotton Blend Gabardine Trench Coat',
     size:new Set(['sm','xl','medium']),
     rate:{
          rate:8.8,
          numrate:3125,
     },
     numrate:2031,
     price:'250.00',
     desc:'Water-resistant gabardine enhances the functional fashion of a double-breasted trench coat detailed with epaulets and cinched with a matching belt.',
     brand:'Lauren Ralph Lauren',
     date:'16',
     id:'t2',
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
     name:'Reefer Wool Blend Coat',
     size:new Set(['sm','xl']),
     price:'250.00',
     desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
     brand:'Lauren Ralph Lauren',
     date:'15',
     id:'t3',
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
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#cd9d75',
           name:'cream',    
           imgs:['https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      }
     ],
    },
    {
     name:'Reefer Wool Blend Coat',
     size:new Set(['sm','xl']),
     price:'250.00',
     desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
     brand:'Lauren Ralph Lauren',
     date:'15',
     id:'t4',
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
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#cd9d75',
           name:'cream',    
           imgs:['https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      }
     ],
     
    },
    {
     name:'Reefer Wool Blend Coat',
     size:new Set(['sm','xl']),
     price:'250.00',
     desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
     brand:'Lauren Ralph Lauren',
     date:'15',
     id:'t5',
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
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#cd9d75',
           name:'cream',    
           imgs:['https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      }
     ],
     
    },
    {
     name:'Reefer Wool Blend Coat',
     size:new Set(['sm','xl']),
     price:'250.00',
     desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
     brand:'Lauren Ralph Lauren',
     date:'15',
     id:'t6',
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
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#cd9d75',
           name:'cream',    
           imgs:['https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      }
     ],
     
    },
    {
     name:'Reefer Wool Blend Coat',
     size:new Set(['sm','xl']),
     price:'250.00',
     desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
     brand:'Lauren Ralph Lauren',
     date:'15',
     id:'t7',
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
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#cd9d75',
           name:'cream',    
           imgs:['https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      }
     ],
     
    },
    {
     name:'Reefer Wool Blend Coat',
     size:new Set(['sm','xl']),
     price:'250.00',
     desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
     brand:'Lauren Ralph Lauren',
     date:'15',
     id:'t8',
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
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#cd9d75',
           name:'cream',    
           imgs:['https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      }
     ],
     
    },
    {
     name:'Reefer Wool Blend Coat',
     size:new Set(['sm','xl']),
     price:'250.00',
     desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
     brand:'Lauren Ralph Lauren',
     date:'15',
     id:'t9',
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
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#cd9d75',
           name:'cream',    
           imgs:['https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      }
     ],
     
    },
    {
     name:'Reefer Wool Blend Coat',
     size:new Set(['sm','xl']),
     price:'250.00',
     desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
     brand:'Lauren Ralph Lauren',
     date:'15',
     id:'t10',
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
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#cd9d75',
           name:'cream',    
           imgs:['https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      }
     ],
     
    },
    {
     name:'Reefer Wool Blend Coat',
     size:new Set(['sm','xl']),
     price:'250.00',
     desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
     brand:'Lauren Ralph Lauren',
     date:'15',
     id:'t11',
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
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#cd9d75',
           name:'cream',    
           imgs:['https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      }
     ],
     
    },
    {
     name:'Reefer Wool Blend Coat',
     size:new Set(['sm','xl']),
     price:'250.00',
     desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
     brand:'Lauren Ralph Lauren',
     date:'15',
     id:'t12',
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
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#cd9d75',
           name:'cream',    
           imgs:['https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      }
     ],
     
    },
    {
     name:'Reefer Wool Blend Coat',
     size:new Set(['sm','xl']),
     price:'250.00',
     desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
     brand:'Lauren Ralph Lauren',
     date:'15',
     id:'t13',
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
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#cd9d75',
           name:'cream',    
           imgs:['https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      }
     ],
     
    },
    {
     name:'Reefer Wool Blend Coat',
     size:new Set(['sm','xl']),
     price:'250.00',
     desc:'Saunter in sophisticated style with this single-breasted coat fashioned from a rich wool blend.',
     brand:'Lauren Ralph Lauren',
     date:'15',
     id:'t14',
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
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
           'https://n.nordstrommedia.com/id/sr3/86126cff-97ac-48d4-a257-82bc0ac23763.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2']
      },
      {
           color:'#cd9d75',
           name:'cream',    
           imgs:['https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
           'https://n.nordstrommedia.com/id/sr3/c36e9714-a7f2-4b92-841c-79f931e35f84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196']
      }
     ],
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