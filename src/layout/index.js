import * as React from "react";
import AppTab from "./app-tab";
import AppSidebar from "./app-sidebar";

export default function Layout({ parentName, childName, children }) {
  return (
    // <div>
    //     <AppTab tabName={parentTab} childName={childTab}></AppTab>

    // </div>
    <>
      <div id="wrapper">
        <div id="main-content">
          <div id="sidebar">
            <AppSidebar />
          </div>
          <div id="content">
            {/* {parentTab && <AppTabs role="parent" tabs={parentTab}></AppTabs>} */}
            {/* {childTab && <AppTabs role="children" tabs={childTab}></AppTabs>} */}
            <AppTab tabName={parentName} childName={childName} />
            <div>{children}</div>
          </div>
        </div>
      </div>
      <style>{`
        #wrapper {
          max-width: 100vw;
          height: 100vh;
        }
        #main-content {
          display: flex;
        }
        #sidebar {
          flex-basis: 10%;
          padding-right: 5px;
          // position:fixed;
        }
        #content {
          // padding-left: 10%;
          flex-basis: 90%;
        }
      `}</style>
    </>
  );
}
