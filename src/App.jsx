import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import Topic from './components/Topic/Topic'
import Common from './layout/common'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Common></Common>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/topic',
          element: <Topic></Topic>,
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ],
    },
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
