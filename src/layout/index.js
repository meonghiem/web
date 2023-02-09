import * as React from 'react'
import AppTab from './app-tab';

export default function Layout({parentTab, childTab}) {
    return (
        <div>
            <AppTab tabName={parentTab} childName={childTab}></AppTab>
            
        </div>
    );
}