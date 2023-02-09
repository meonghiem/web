// import clsx from 'clsx'
// import Link from 'next/link'
import ChildTab from '../app-childtab';
import './tab.css'
// import Button from '../../components/button'

// import { TabType } from '..'
import {employeeTabs} from '../Tabs.js'
import {adminTabs} from '../Tabs.js'

let tabs = employeeTabs;


export default function AppTab({tabName, childName}) {
  // console.log(tabs);
  let hasChild = false;
  let childTab = undefined;
  for(let i = 0; i < tabs.length; i++) {
    let tab = tabs[i]
    console.log(tab.text + " " + tabName)
    if(tab.text === tabName) {
      tab.active = true;
      if(tab.active === true && tab.child !== undefined) {
        hasChild = true;
        childTab = tab.child;
      }
    }
    else tab.active = false; 
    // console.log(tab.active)
    // console.log(tab.child)
    // console.log(tab.text)
    
  }
  return (
    <>
      <div className="tabSlide">
        <ul id="myTab" >
          {tabs.map((tab) => {
            return (
              <li key={tab.text} className='tabChild'>
                <a href={`${tab.url}`}>
                  <button className={`tab
                    ${ tab.active ? 'tabActive' : 'tabUnactive' }
                  `}
                    id="profile-tab"
                    type="button"
                  >
                    {tab.text}
                  </button>
                </a>
              </li>
            )
          })}
        </ul>
        <hr></hr>
        <div className='childTabs'>
          {hasChild ? <ChildTab childTabs={childTab} active={childName}/> : null} 
        </div>
      </div>
    </>
  )
}
