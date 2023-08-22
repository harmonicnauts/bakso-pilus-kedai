import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import { AnimatePresence } from 'framer-motion';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { useEffect, useState } from 'react';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';

function App() {

  const [{ foodItems }, dispatch] = useStateValue();
  const [idPelanggan, setIdPelanggan] = useState();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    }
    );
  };

  useEffect(() => {
    fetchData();
    setIdPelanggan(localStorage.getItem('idPelanggan'));
  }, []);

  useEffect(() => {
    localStorage.setItem('idPelanggan', idPelanggan);
  }, [idPelanggan]);


  return (
    <AnimatePresence mode='wait'>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/*" element={<Home
              idPelanggan={idPelanggan}
              setIdPelanggan={setIdPelanggan}
            />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
