import vimg from '../assets/vimg.jpg'
import vimg2 from '../assets/vimg2.jpg'

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

let Indexes = [0,1,2,3,4,5,6,7]



const items = [
    {
         name:'shirt',
         size:new Set(['sm','xl']),
         price:'10',
         date:'15',
         id:'t1',
         img:vimg,
         colors:['s']
    },
    {
         name:'tshirt',
         size:new Set(['medium','2xl']),
         price:'30',
         date:'1',
         id:'t2',
         img:vimg2
    
    },
    {
         name:'jacket',
         size:new Set(['3xl','lg']),
         price:'15',
         date:'13',
         id:'t10',
         img:vimg
    
    },
    {
         name:'shirt',
         size:new Set(['sm','medium']),
         price:'120',
         date:'10',
         id:'t4',
         img:vimg
    
    },
    {
         name:'tshirt',
         size:new Set(['lg','sm']),
         price:'20',
         date:'100',
         id:'t5',
         img:vimg
    
    },
    {
         name:'shirt',
         size:new Set(['sm','xl']),
         price:'13',
         date:'12',
         id:'t6',
         img:vimg
    
    },
    {
         name:'jacket',
         size:new Set(['2xl','medium']),
         price:'30',
         date:'1',
         id:'t7',
         img:vimg
    
    },
    {
         name:'jacket',
         size:new Set(['lg','3xl']),
         price:'11',
         date:'15',
         id:'t8',
         img:vimg
    
    },
    {
         name:'tshirt',
         size:new Set(['sm','xl']),
         price:'50',
         date:'21',
         id:'t9',
         img:vimg
    },
    {
         name:'tshirt',
         size:new Set(['medium']),
         price:'150',
         date:'22',
         id:'t15',
         img:vimg
    },
]

for(let i of items){
     
     let tcolors = new Array(Math.floor(Math.random() * (5 - 1) + 1))
     let newI = [...Indexes]
     for(let j=0;j<tcolors.length;j++){
        let r = newI[(Math.floor(Math.random() * newI.length))]
        tcolors[j] = colors[r]
        newI = newI.filter((v,index)=>{
          return index !== r
        })
     }
     i.colors = tcolors
}
export default items