import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCart from '../../ShopCart/ShopCart';
const TabSh = () => {

  const [toys, setToys] =useState([])
  // const [activeTab,setActiveTab] =useState("sportscar")

  useEffect(()=>{
    fetch(`https://toy-marketplace-server-ivory.vercel.app/toyCars/`)
    .then(res => res.json())
    .then(result =>{
      setToys(result)
    })
  },[])

  const handelTabClick =(tabName)=>{
    console.log(tabName)
  }
  
    return (
       <div>
        <h2 className='text-3xl font-bold text-center'>Shop By Category</h2>
         <Tabs className="text-center my-5">
        <TabList>
          <Tab onClick={()=>handelTabClick("sportscar")}>sportscar</Tab>
          <Tab onClick={()=>handelTabClick("minipolicecar")}>minipolicecar</Tab>
          <Tab onClick={()=>handelTabClick("regularcar")}>regularcar</Tab>
        </TabList>
        {
          toys.map(toy=><ShopCart
          key={toy._id}
          toy={toy}
          >

          </ShopCart>)
        }
      </Tabs>
       </div>
    );
};

export default TabSh;