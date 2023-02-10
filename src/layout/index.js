import * as React from 'react'
import AppTab from './app-tab';
import './layout.css'

export default function Layout({tab, content}) {
    return (
        <div className='full'>
            <div className='someDiv'>HH</div>
            <div className='content'>
                <AppTab tabName={tab.parent} childName={tab.child}></AppTab>
                <br/>
                <div>
                    {content}
                </div>
            </div>
        </div>
    );
}