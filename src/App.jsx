import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'
import Quiz from './components/Quiz/Quiz'
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
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
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
          element: <Blog></Blog>,
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>,
        },
      ],
    },
    {
      path: '*',
      element: <div>Path Not Found</div>,
    },
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
