import { useState } from "react";
import { useRouter } from "next/router";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  return (
    <div>
      <div className="flex  text-sm md:text-base font-medium border-b border-gray-100 text-zuta">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={` ${
              index === activeTab
                ? "p-2 md:p-4 -mb-px border-b border-current hover:cursor-pointer transition-all duration-300 bg-zuta text-white"
                : "p-2 md:p-4 -mb-px border-b border-transparent hover:cursor-pointer   transition-all duration-300 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.key}
          </div>
        ))}
      </div>
      <div>
    
        
       <ul className="flex flex-col items-start text-left -mb-1 space-y-2.5 mt-2">
            {tabs[activeTab].value.split(";").map((polazak, index) => (
              <li className="list-none" key={index}>
                <span className="bg-zuta text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                {polazak}
              </li>
            ))}
       </ul>
      </div>
    </div>
  );
}
