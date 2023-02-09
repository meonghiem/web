import * as React from 'react'
import avatar from 'public/Kid.jpg'
import companyLogo from 'public/Pionero.png'
// import LogoutIcon from 'public/svg/logout_icon.svg'
const Sidebar = function Sidebar({data}) {
  const inClick = () => {
    alert('In')
    const btn = document.getElementById('in-btn')
    btn.style.display = 'none'
    const box = document.getElementById('out-btn')
    box.style.display = 'block'
  }
  const outClick = () => {
    alert('Out')
    const btn = document.getElementById('out-btn')
    btn.style.display = 'none'
    const box = document.getElementById('in-btn')
    box.style.display = 'block'
  }
  const restClick = () => {
    alert('Rest')
    const btn = document.getElementById('rest-btn')
    btn.style.display = 'none'
    const box = document.getElementById('back-btn')
    box.style.display = 'block'
  }
  const backClick = () => {
    alert('Back')
    const btn = document.getElementById('back-btn')
    btn.style.display = 'none'
    const box = document.getElementById('rest-btn')
    box.style.display = 'block'
  }
  return (
    <>
      
      <div className="h-screen tablet:hidden bg-[#004B8F] text-[#fff] relative">
        <div className="flex justify-center py-2">
          <img src={companyLogo} alt="Company's Logo" />
        </div>
        <div className="flex justify-center py-2">
          <img src={avatar} alt="Avatar" width={72} height={72} className="rounded-[50%]" />
        </div>

        <div>
          <h2 className="py-2 text-base text-center text-white">
            <p>Welcome back,</p>
            <p>Minh Dung</p>
          </h2>
        </div>
        <div>
          <h3 className="py-2 text-xs text-center text-[#FFFFFF]">PM</h3>
        </div>
        <hr className="w-[90%] mx-auto" />
        <h2 className="pt-6 text-base text-center text-white pb-">
          <p>Total time today</p>
        </h2>

        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-2xl font-medium text-center text-white mx-2">05:54</h1>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 12,
            paddingBottom: 12,
          }}
        >
          <button
            id="in-btn"
            className="w-1/2 px-4 py-2 font-bold text-white bg-red-500 border-b-4 border-red-700 rounded hover:bg-red-400 hover:border-red-500"
            onClick={inClick}
          >
            In
          </button>
          <button
            id="out-btn"
            className="hidden w-1/2 px-4 py-2 font-bold text-white bg-purple-500 border-b-4 border-purple-700 rounded hover:bg-purple-400 hover:border-purple-500"
            onClick={outClick}
          >
            Out
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 12,
            paddingBottom: 36,
          }}
        >
          <button
            id="rest-btn"
            className="w-1/2 px-4 py-2 font-bold text-white bg-green-500 border-b-4 border-green-700 rounded hover:bg-green-400 hover:border-green-500"
            onClick={restClick}
          >
            Rest
          </button>
          <button
            id="back-btn"
            className="hidden w-1/2 px-4 py-2 font-bold text-white bg-yellow-500 border-b-4 border-yellow-700 rounded hover:bg-yellow-400 hover:border-yellow-500"
            onClick={backClick}
          >
            Back
          </button>
        </div>
        <div className="bottom-4 mt-[200px]">
          <hr className="w-[90%] mx-auto my-6" />
          <div className="flex justify-around my-auto center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-1/4 px-4 py-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>

            <button className="w-1/2 px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500">
              Log out
            </button> */

            }

            <button className='pl-4'>
              {/* <LogoutIcon></LogoutIcon> */}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
