import { Route, Routes } from 'react-router-dom';
import { NotFound } from './components/HttpError.tsx';
import { Home } from './components/Home.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/index.css';
import { Safely } from './components/Safely.tsx';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/safely' element={<Safely />} />

        <Route path='*' element={<NotFound />} />

      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App