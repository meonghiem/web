import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../Pages/User/Login/Login'

const User = () =>{
    return (
        <Routes>
        <Route
          path=""
          element={
            true ? <Navigate to={'/login'} /> : <Navigate to={'/menu_post'} />
          }
        />
        <Route path="login" element={<Login />} />
        {/* <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="register_user_info" element={<RegisterUserInfo />} />
        <Route path="password_forgot" element={<PasswordForgot />} />
        <Route path="notes_14" element={<Note1_4 />} />
        <Route path="notes_pre" element={<NotesPre />} />
        <Route path="menu_pre" element={<MainMenuPre />} />
        <Route path="menu_post" element={<MainMenuPost />} />
        <Route path="setting" element={<Setting />} />
        <Route path="question/:page" element={<Question />} />
        <Route path="twitter_share" element={<TwitterShare />} />
        <Route path="message_history" element={<MessageHistory />} />
        <Route path="character" element={<Character />} />
        <Route path="404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/user/404" replace />} /> */}
      </Routes>
    )
}

export default User