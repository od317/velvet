import React, { useContext,useEffect } from 'react'
import { SbContext,handleSbSflChangeContext,handleSbChangeContext} from '../../contexts/cartContext'
import items from '../../Data/items'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
import Card from '../store/Card'
import { useState } from 'react'
import SavedForLater from './SavedForLater'
import ShoppingBag from './ShoppingBag'
import BottomContent from './BottomContent'
function WishlistLayout() {
  const [curPage,setCurPage] = useState('bag')
  const sb = useContext(SbContext)
  const handleSbSflChange = useContext(handleSbSflChangeContext)
  let items = Array.from(sb)
  let sim = []
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  let shopingBagContent = items.filter(i=>{
      let cur = i.split('-') 
      sim = [...sim,cur[0]]
      if(cur[cur.length-1]==='sb')
          return i  
  })

  let savedForLaterContent = items.filter(i=>{
    let cur = i.split('-') 
    if(cur[cur.length-1]==='sfl')
      return i  
  })

  useEffect(()=>{
    const handleWindowResize = ()=>{
        setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)
    return ()=>{
        window.removeEventListener('resize',handleWindowResize)
    }
  })



  return (
    <>   
        <div className='   flex flex-col h-full items-center justify-center phone:py-[2%] w-full pt-[5%] bg-p1'>
          <div className='flex flex-row w-full mid:w-[50%]  px-[4%]'>
                <button className={`w-[50%] text-center ${ curPage==='bag' ? 'border-b-[2px]  border-b-black font-semibold phone:bg-gray4':'border-b-[1px] border-gray'}  phone:border-[1px] phone:border-gray3 py-[5%] phone:py-[3%] text-[105%]`} onClick={()=>setCurPage('bag')}>
                  Shoping Bag {shopingBagContent.length?(<>({shopingBagContent.length})</>):''}</button>
                <button className={`w-[50%] text-center ${ curPage==='sfl' ? 'border-b-[2px]  border-black font-semibold phone:bg-gray4 ':' border-b-[1px] border-gray '} phone:border-[1px] phone:border-gray3  py-[5%] phone:py-[3%] text-[105%]`} onClick={()=> setCurPage('sfl')}>
                  Saved For Later {savedForLaterContent.length?(<>({savedForLaterContent.length})</>):''}
                </button>
          </div>
          <p className=' px-[4%] py-[3%] phone:py-[1%] w-full mid:w-[50%] phone:text-[90%] phone:text-center'>
            Items in your bag are not on hold. <br />
            <ion-icon name="gift-outline"></ion-icon> Choose gift options when you check out.
          </p>
        </div>
        
        <br />
        <div className=''>
            {curPage ==='bag'?
            <ShoppingBag handleSbSflChange={handleSbSflChange} items={shopingBagContent} handlePageChange={setCurPage}>
            {windowWidth >= 800 &&<BottomContent sim={sim}/>}
            </ShoppingBag>:
            <SavedForLater handleSbSflChange={handleSbSflChange} items={savedForLaterContent} handlePageChange={setCurPage}>
            {windowWidth >= 800 &&<BottomContent sim={sim}/>}
            </SavedForLater>
            }
        </div>
        <div className='px-[1.5%] hidden mid:flex flex-row mid:float-right mid:w-[32%] py-[1.5%]  bg-p1'>
             <div className='mr-[5%]'>
             <svg width="30" height="40" focusable="false" className="nui-icon nui-icon-large-card-nordstrom-visa " role="img" title="Nordstrom Credit Card Icon" viewBox="0 0 30 40"><path d="M25.37.5c.63.005 1.136.52 1.13 1.15v36.7a1.14 1.14 0 0 1-1.13 1.15H1.63A1.14 1.14 0 0 1 .5 38.35V1.65A1.14 1.14 0 0 1 1.63.5z" fill="#898989" stroke="#898989" strokeMiterlimit="10"></path><path d="M19.993 4.507c0-.55.45-1 1-1h1.5c.55 0 1 .45 1 1v2.5c0 .55-.45 1-1 1h-1.5c-.55 0-1-.45-1-1z" fill="#e0e0e0"></path><path d="M19.972 4.507c0-.55.45-1 1-1h1.5c.55 0 1 .45 1 1v2.5c0 .55-.45 1-1 1h-1.5c-.55 0-1-.45-1-1z" fill="none" stroke="#e0e0e0" strokeMiterlimit="10"></path><path d="M19.223 29.906v-15.68h-2.331v9.739L7.735 13.906v15.612h2.324v-9.593l.084.089z" fill="#fff"></path></svg>
             </div>
             <div className='text-[80%]'>
               <span className=' font-semibold text-[110%]'>Get a $60 Bonus Note</span> when you use a new Nordstrom credit card. See Restrictions & Apply
             </div>
        </div>
        <div className='px-[4%] mid:float-right mid:px-[1.5%] mid:w-[32%] py-[5%] mid:py-[1.5%] mb-[5%] flex flex-col'>
              <label className='text-[90%]' htmlFor="">Have a question? Call ####### ir chat with us</label>
               <label className='text-[80%] text-gray' htmlFor="">Accepted payment methods</label> 
               <div className='flex flex-row w-full'>
               <svg width="24" height="24" focusable="false" className="mr-[1%]" role="img" title="Nordstrom Credit Card Icon" viewBox="0 0 40 40"><path d="M39.5 31.87A1.14 1.14 0 0 1 38.35 33H1.65A1.14 1.14 0 0 1 .5 31.87V8.13A1.14 1.14 0 0 1 1.65 7h36.7a1.14 1.14 0 0 1 1.15 1.13z" fill="#e9e9e9" stroke="#e9e9e9" strokeMiterlimit="10"></path><path d="M29.75 27.91a2.28 2.28 0 0 1-2.29 2.26H12.54a2.28 2.28 0 0 1-2.29-2.26V12.09a2.28 2.28 0 0 1 2.29-2.26h14.92a2.28 2.28 0 0 1 2.29 2.26z" fill="#272122"></path><path d="M25.385 27.5V12.8H23.2v9.13l-8.585-9.43v14.636h2.179v-8.993l.079.083z" fill="#fff"></path></svg>
               <svg width="24" height="24" focusable="false" className="mr-[1%]" viewBox="0 0 40 38" role="img" title="After Pay Icon"><path d="M36.842 7.368H3.158A3.158 3.158 0 0 0 0 10.526v18.947a3.158 3.158 0 0 0 3.158 3.158h33.684A3.158 3.158 0 0 0 40 29.473V10.526a3.158 3.158 0 0 0-3.158-3.158z" fill="#b2fce4"></path><path d="m38.021 17.895-1.116-.642-1.116-.674a1.126 1.126 0 0 0-1.684.979v.137c0 .08.039.155.105.2l.526.295c.1.059.229.027.289-.073l.006-.011a.208.208 0 0 0 0-.105v-.337a.221.221 0 0 1 .21-.232h.126l1.053.6 1.053.589a.233.233 0 0 1 .074.316l-.074.074-1.052.589-1.053.6a.22.22 0 0 1-.304-.072l-.001-.002a.245.245 0 0 1 0-.126v-.168a1.127 1.127 0 0 0-1.684-.979l-1.137.653-1.116.642a1.137 1.137 0 0 0-.421 1.537c.097.178.243.324.421.421l1.116.642 1.137.642a1.126 1.126 0 0 0 1.684-.979v-.137a.242.242 0 0 0-.105-.2l-.526-.305a.211.211 0 0 0-.289.073l-.006.011a.253.253 0 0 0 0 .116v.337a.221.221 0 0 1-.21.232h-.001a.297.297 0 0 1-.126 0l-1.053-.6-1.053-.589a.232.232 0 0 1-.116-.295l.074-.074 1.053-.589 1.053-.6a.22.22 0 0 1 .304.072l.001.002a.245.245 0 0 1 0 .126v.168a1.127 1.127 0 0 0 1.684.979l1.137-.653L38 19.842c.525-.323.689-1.01.366-1.535l-.008-.012a1.053 1.053 0 0 0-.337-.4zM30.674 18.084l-2.621 5.411H27l.979-2.021-1.537-3.389h1.116l.989 2.263 1.053-2.263h1.074zM4.474 20a1.052 1.052 0 1 0 0 .052zm0 1.926v-.505a1.569 1.569 0 0 1-1.221.568 1.884 1.884 0 0 1-1.842-1.925V20a1.916 1.916 0 0 1 1.839-1.989h.003c.463-.003.904.202 1.2.558v-.484h.937v3.842h-.916zM10.021 21.053c-.337 0-.421-.126-.421-.442v-1.663h.6v-.832h-.6v-.968h-.968v.937H7.368v-.389c0-.316.126-.442.463-.442h.211v-.747h-.453c-.8 0-1.179.263-1.179 1.053v.516h-.536v.874h.537v3.011h.958V18.95h1.263v1.884c0 .789.295 1.126 1.053 1.126h.526v-.905h-.19zM13.495 19.653a.915.915 0 0 0-.958-.789.936.936 0 0 0-.968.789zm-1.916.6a.958.958 0 0 0 .989.895c.367.004.711-.183.905-.495h.989a1.885 1.885 0 0 1-1.916 1.337 1.895 1.895 0 0 1-2.021-1.758V20a1.99 1.99 0 1 1 3.979-.001V20a.98.98 0 0 1 0 .242zM20.695 20a1.053 1.053 0 1 0 0 .053zm-3.042 3.495v-5.411h.937v.495a1.569 1.569 0 0 1 1.221-.568c1.04.017 1.87.875 1.853 1.915V20a1.916 1.916 0 0 1-1.839 1.989h-.003a1.512 1.512 0 0 1-1.168-.516v2.021zM25.074 20a1.052 1.052 0 1 0-1.105 1.105h.053c.581 0 1.053-.471 1.053-1.053V20m-.001 1.926v-.505a1.535 1.535 0 0 1-1.211.568 1.885 1.885 0 0 1-1.853-1.915V20a1.916 1.916 0 0 1 1.839-1.989h.003c.46-.003.897.202 1.189.558v-.484h.947v3.842h-.914zM15.947 18.463a.959.959 0 0 1 .832-.453.927.927 0 0 1 .411.084v.989a1.21 1.21 0 0 0-.684-.179.673.673 0 0 0-.526.747v2.274H15v-3.842h.947z"></path></svg>
               <svg width="24" height="23" focusable="false" className="mr-[1%]" viewBox="0 0 40 38" role="img" title="Visa Card Icon"><path d="M15.187 13.769 9.95 26.264H6.534l-2.577-9.971c-.157-.614-.292-.839-.768-1.098-.777-.422-2.06-.817-3.189-1.063l.077-.363h5.5c.701 0 1.331.467 1.49 1.274l1.361 7.23 3.364-8.504zm13.387 8.415c.014-3.298-4.56-3.479-4.529-4.952.01-.448.437-.925 1.371-1.047.463-.061 1.739-.107 3.187.559l.568-2.649a8.69 8.69 0 0 0-3.023-.554c-3.195 0-5.443 1.698-5.462 4.13-.021 1.799 1.605 2.802 2.829 3.4 1.26.612 1.682 1.005 1.678 1.553-.009.838-1.005 1.208-1.935 1.223-1.625.025-2.567-.44-3.319-.789l-.586 2.737c.755.347 2.149.649 3.594.664 3.396 0 5.617-1.677 5.627-4.275m8.437 4.08H40l-2.609-12.495h-2.759a1.47 1.47 0 0 0-1.375.917l-4.85 11.578H31.8l.674-1.866h4.147zm-3.607-4.427 1.701-4.691.979 4.691zm-13.599-8.068-2.673 12.495H13.9l2.674-12.495z" fill="#1434cb"></path></svg>
               <svg width="24" height="23" focusable="false" className="mr-[1%]" viewBox="0 0 40 38" role="img" title="Mastercard Card Icon"><g fillRule="nonzero" fill="none"><path d="M7.645 34.22v-2.04c.023-.348-.1-.688-.34-.936a1.17 1.17 0 0 0-.91-.357 1.222 1.222 0 0 0-1.118.578 1.161 1.161 0 0 0-1.051-.578 1.044 1.044 0 0 0-.931.483v-.401h-.692v3.25H3.3v-1.788a.773.773 0 0 1 .19-.62.737.737 0 0 1 .589-.244c.458 0 .691.306.691.857v1.81h.699V32.43a.776.776 0 0 1 .191-.618.74.74 0 0 1 .587-.246c.472 0 .698.306.698.857v1.81l.699-.015Zm10.333-3.251H16.84v-.986h-.699v.986h-.632v.646h.645v1.496c0 .755.286 1.204 1.105 1.204.305 0 .605-.087.864-.252l-.2-.605a1.257 1.257 0 0 1-.611.183c-.333 0-.46-.217-.46-.544v-1.482h1.132l-.007-.646Zm5.9-.082a.934.934 0 0 0-.838.476v-.394h-.685v3.25h.691v-1.822c0-.537.227-.837.666-.837.148-.002.294.026.432.082l.213-.68a1.45 1.45 0 0 0-.492-.088l.013.013Zm-8.92.34a2.337 2.337 0 0 0-1.297-.34c-.805 0-1.33.395-1.33 1.04 0 .531.386.858 1.097.96l.333.047c.379.055.559.157.559.34 0 .252-.253.395-.725.395a1.668 1.668 0 0 1-1.058-.34l-.333.55a2.26 2.26 0 0 0 1.377.422c.918 0 1.45-.442 1.45-1.06 0-.62-.419-.871-1.11-.973l-.333-.048c-.3-.04-.539-.102-.539-.32 0-.217.226-.38.605-.38.35.004.694.1.998.278l.306-.57Zm18.528-.34a.934.934 0 0 0-.838.476v-.394h-.685v3.25h.692v-1.822c0-.537.226-.837.665-.837.148-.002.295.026.432.082l.213-.68a1.45 1.45 0 0 0-.492-.088l.013.013Zm-8.913 1.7c-.017.462.158.91.48 1.234.323.323.765.493 1.216.466a1.64 1.64 0 0 0 1.144-.387l-.332-.571c-.24.186-.531.289-.832.292a1.035 1.035 0 0 1-.939-1.04c0-.544.409-.997.94-1.04.3.002.591.105.83.291l.333-.57a1.64 1.64 0 0 0-1.144-.388 1.587 1.587 0 0 0-1.215.467 1.662 1.662 0 0 0-.481 1.233v.013Zm6.479 0V30.97h-.692v.394a1.197 1.197 0 0 0-.998-.476c-.918 0-1.663.761-1.663 1.7 0 .94.745 1.7 1.663 1.7.388.015.76-.162.998-.476v.395h.692v-1.619Zm-2.575 0a.97.97 0 0 1 .996-.924c.522.02.933.464.925.998a.972.972 0 0 1-.956.967.944.944 0 0 1-.705-.305.989.989 0 0 1-.26-.736Zm-8.347-1.7c-.919.013-1.653.785-1.64 1.724.013.94.768 1.69 1.686 1.676.479.026.95-.132 1.32-.442l-.332-.523a1.493 1.493 0 0 1-.925.34.887.887 0 0 1-.95-.796h2.36v-.272c0-1.02-.618-1.7-1.51-1.7l-.01-.007Zm0 .633a.779.779 0 0 1 .562.224c.15.148.238.35.243.565h-1.663a.825.825 0 0 1 .844-.79h.014Zm17.33 1.074v-2.93h-.665v1.7a1.197 1.197 0 0 0-.998-.477c-.918 0-1.662.761-1.662 1.7 0 .94.744 1.7 1.662 1.7.389.015.76-.162.998-.476v.395h.665v-1.612Zm1.154 1.153a.326.326 0 0 1 .23.092.323.323 0 0 1 0 .456.332.332 0 0 1-.23.094.332.332 0 0 1-.299-.197.326.326 0 0 1 0-.251.332.332 0 0 1 .173-.17.326.326 0 0 1 .136-.024h-.01Zm0 .574a.232.232 0 0 0 .173-.074.256.256 0 0 0 0-.34.235.235 0 0 0-.27-.054.242.242 0 0 0-.079.054.256.256 0 0 0 0 .34.246.246 0 0 0 .186.074h-.01Zm.02-.404a.131.131 0 0 1 .087.027c.02.018.032.044.03.071a.083.083 0 0 1-.024.062.115.115 0 0 1-.07.03l.097.112h-.076l-.09-.112h-.03v.112h-.063v-.299l.14-.003Zm-.073.058v.081h.073a.068.068 0 0 0 .04 0 .035.035 0 0 0 0-.03.035.035 0 0 0 0-.031.068.068 0 0 0-.04 0l-.073-.02Zm-3.658-1.38a.97.97 0 0 1 .995-.925c.523.02.934.463.925.998a.972.972 0 0 1-.956.967.944.944 0 0 1-.705-.305.989.989 0 0 1-.26-.736Zm-23.357 0v-1.626h-.692v.394a1.197 1.197 0 0 0-.998-.476c-.918 0-1.663.761-1.663 1.7 0 .94.745 1.7 1.663 1.7.388.015.76-.162.998-.476v.395h.692v-1.612Zm-2.574 0a.97.97 0 0 1 .995-.925c.523.02.934.463.925.998a.972.972 0 0 1-.956.967.944.944 0 0 1-.71-.302.989.989 0 0 1-.26-.739h.006Z" fill="#231F20"></path><path fill="#FF5F00" d="M14.729 6.198h10.476v19.249H14.729z"></path><path d="M15.394 15.824c-.004-3.757 1.682-7.306 4.573-9.626-4.91-3.944-11.959-3.37-16.194 1.32-4.236 4.69-4.236 11.92 0 16.61 4.235 4.689 11.285 5.263 16.194 1.319-2.89-2.319-4.576-5.867-4.573-9.623Z" fill="#EB001B"></path><path d="M39.34 15.824c0 4.687-2.618 8.962-6.741 11.01-4.124 2.048-9.029 1.51-12.632-1.387 2.888-2.32 4.574-5.869 4.574-9.625 0-3.755-1.686-7.303-4.574-9.624 3.603-2.897 8.508-3.435 12.632-1.387 4.123 2.048 6.74 6.323 6.74 11.01v.003ZM38.194 23.398v-.387h.155v-.08h-.393v.08h.168v.387h.07Zm.764 0v-.467h-.12l-.138.334-.14-.334h-.105v.467h.086v-.35l.129.303h.09l.128-.303v.353l.07-.003Z" fill="#F79E1B"></path></g></svg>
               <svg width="24px" height="24px" focusable="false" className="mr-[1%]" role="img" title="Paypal Icon"><path d="M0 0h24v24H0z" fill="none"></path><image height="127" overflow="visible" transform="matrix(.12 0 0 .12 0 4.38)" width="200" href="data:image/jpeg;base64,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 hERKPGY2itPQVrZIUXmEe99R/9k="></image></svg>
               </div>
        </div>
        {windowWidth < 800 &&<BottomContent sim={sim}/>}
    </>
  )
}


export default WishlistLayout