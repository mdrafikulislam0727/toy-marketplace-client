import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCart from '../../ShopCart/ShopCart';
const TabSh = () => {

  const [toys, setToys] =useState([])
  const [activeTab,setActiveTab] =useState("sportscar")

  useEffect(()=>{
    fetch(`https://toy-marketplace-server-ivory.vercel.app/toyCars/category/${activeTab}`)
    .then(res => res.json())
    .then(result =>{
      setToys(result)
    })
  },[activeTab])

  const handelTabClick =(tabName)=>{
    setActiveTab(tabName)
  }
  
    return (
       <div>
        <h2 className='text-3xl font-bold text-center'>Shop By Category</h2>
         <Tabs className="text-center my-5">
        <TabList>
          <Tab onClick={()=>handelTabClick("sportcar")}>sportscar</Tab>
          <Tab onClick={()=>handelTabClick("minipolicecar")}>minipolicecar</Tab>
          <Tab onClick={()=>handelTabClick("regularcar")}>regularcar</Tab>
        </TabList>
       <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
       {
          toys.map(toy=><ShopCart
          key={toy._id}
          toy={toy}
          >

          </ShopCart>)
        }
       </div>
      </Tabs>
       </div>
    );
};

export default TabSh;