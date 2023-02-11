import * as React from "react";
import AppTab from "./app-tab";
import AppSidebar from "./app-sidebar";
import "./layout.css";

export default function Layout({ tab, content, isAdmin = false }) {
  return (
    // <div>
    //     <AppTab tabName={parentTab} childName={childTab}></AppTab>

    // </div>
    <>
      <div id="main-content">
        <div id="sidebar">
          <AppSidebar />
        </div>
        <div id="top-content">
          {/* {parentTab && <AppTabs role="parent" tabs={parentTab}></AppTabs>} */}
          {/* {childTab && <AppTabs role="children" tabs={childTab}></AppTabs>} */}
          <AppTab
            tabName={tab.parent}
            childName={tab.child}
            isAdmin={isAdmin}
          ></AppTab>
          <div id="content">{content}</div>
        </div>
      </div>
    </>
  );
}
