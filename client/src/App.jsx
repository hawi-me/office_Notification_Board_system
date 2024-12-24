import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/publicpage/homepage'
import LoginPage from './pages/publicpage/LoginPage'
import SignupPage from './pages/publicpage/SignupPage'
import PostDetails from './pages/publicpage/PostDetails'
import AdminDashboard from './pages/Adminpages/Admin'
import PostManagementPage from './pages/Adminpages/postMangemnetPage'
import UserManagementPage from './pages/Adminpages/UserMangemnetPage'
import SystemSettingsPage from './pages/Adminpages/Systemsetting'
import EditorDashboard from './pages/Editors/Editordashboard'
import CreatePostPage from './pages/Editors/CreatePost'
import SchedulePostPage from './pages/Editors/Schedule'
import CommentsPage from './pages/Authenticateduser/CommentPage'
import UserProfilePage from './pages/Authenticateduser/UserProfile'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/posts/:postId" element={<PostDetails />} />
  
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<UserManagementPage />} />
      <Route path="/admin/posts" element={<PostManagementPage />} />
      <Route path="/admin/settings" element={<SystemSettingsPage />} />
  
      {/* Editor Routes */}
      <Route path="/editor" element={<EditorDashboard />} />
      <Route path="/editor/create" element={<CreatePostPage />} />
      <Route path="/editor/schedule" element={<SchedulePostPage />} />
  
      {/* Authenticated User Routes */}
      <Route path="/comments" element={<CommentsPage />} />
      <Route path="/profile" element={<UserProfilePage />} />
  
      {/* Utility Routes */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  </BrowserRouter>
  
  )
}
