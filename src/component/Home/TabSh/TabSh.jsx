import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TabSh = () => {
  
    return (
       <div>
        <h2 className='text-3xl font-bold text-center'>Shop By Category</h2>
         <Tabs className="text-center my-5">
        <TabList>
          <Tab>sports car</Tab>
          <Tab>mini police car</Tab>
          <Tab>regular car</Tab>
        </TabList>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
       </div>
    );
};

export default TabSh;