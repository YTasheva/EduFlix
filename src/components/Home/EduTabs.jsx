import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import EduCards from "./EduCards";
import TitleSection from "./TitleSection";

export default function EduTabs() {
  return (
    <Tabs className="sm:mt-0 mt-14">
      <div className="flex items-center sm:justify-between justify-center flex-wrap my-8">
        <TitleSection title="hot education" />
        <TabList className="flex overflow-auto">
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
            All
          </Tab>
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
            Technology
          </Tab>
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
            AI
          </Tab>
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
            Maths
          </Tab>
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
            Front-End Web Development
          </Tab>
        </TabList>
      </div>
      <TabPanel>
        <EduCards />
      </TabPanel>
      <TabPanel>
        <p>New - Available Soon!</p>
      </TabPanel>
      <TabPanel>
        <EduCards />
      </TabPanel>
      <TabPanel>
        <p>New - Available Soon!</p>
      </TabPanel>
      <TabPanel>
        <EduCards />
      </TabPanel>
    </Tabs>
  );
}
