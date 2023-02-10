// import clsx from 'clsx'
// import Link from 'next/link'
import ChildTab from "../app-childtab";
import "./tab.css";
// import Button from '../../components/button'

// import { TabType } from '..'
import { adminTabs, employeeTabs } from "../Tabs.js";
import { addminTabs } from "../Tabs.js";
import Refresh from "public/refresh.png";
// import Button from '../../components/button';
import IconButton from "../../components/iconButton";
// import {adminTabs} from '../Tabs.js'

let tabs = employeeTabs;

function refresh() {
  window.location.reload();
}

export default function AppTab({ tabName, childName, isAdmin = false }) {
  // console.log(tabs);
  let hasChild = false;
  let childTab = undefined;
  isAdmin ? (tabs = adminTabs) : (tabs = employeeTabs);
  for (let i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    console.log(tab.text + " " + tabName);
    if (tab.text === tabName) {
      tab.active = true;
      if (tab.active === true && tab.child !== undefined) {
        hasChild = true;
        childTab = tab.child;
      }
    } else tab.active = false;
    // console.log(tab.active)
    // console.log(tab.child)
    // console.log(tab.text)
  }

  let iconStyle = {
    width: "2.5rem",
  };
  return (
    <>
      <div className="tabSlide">
        <ul id="myTab">
          {tabs.map((tab) => {
            return (
              <li key={tab.text} className="tabChild">
                <a href={`${tab.url}`}>
                  <button
                    className={`tab
                    ${tab.active ? "tabActive" : "tabUnactive"}
                  `}
                    id="profile-tab"
                    type="button"
                  >
                    {tab.text}
                  </button>
                </a>
              </li>
            );
          })}
          <li style={{ width: "30vw", textAlign: "right" }}>
            <IconButton
              icon={Refresh}
              iconStyle={iconStyle}
              children="Refresh"
              onClick={refresh}
            ></IconButton>
          </li>
        </ul>

        {hasChild ? (
          <div className="childTabs">
            <ChildTab childTabs={childTab} active={childName} />{" "}
          </div>
        ) : null}
      </div>
    </>
  );
}
