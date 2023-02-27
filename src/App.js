import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSuperhero, savehero } from './features/superhero/superheroSlice';
import './App.css';


function App() {

  const dispatch = useDispatch();
  const superheros = useSelector((state) => state.superhero?.value);

  useEffect(() => {
      dispatch(fetchSuperhero()).then((res) => {
          dispatch(savehero(res))
      })
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  return (
      <div className="App">

          <div className="photo-grid grid grid-cols-2 gap-4 text-slate-200 ml-2 mr-2">
              {superheros.payload?.map((item, index) => {
                  return (
                      <div className="md:flex flex-col rounded-xl  p-0 text-slate-100 items-center relative" key={index}>
                          <img src={item.images.sm} alt={item.name} className="w-full rounded-xl" />
                          <div className="photo-info absolute bottom-0 text-left  bg-slate-800/[.35] p-2 w-full rounded-b-xl">
                              <h2 className='font-extrabold mb-1 drop-shadow-lg'>{item.name}</h2>

                              <div className="font-light drop-shadow-lg">
                                  <p> Height: {item.appearance.height[1]}</p>
                                  <p> Weight: {item.appearance.weight[1]}</p>
                              </div>
                          </div>
                      </div>
                  )
              }
              )}
          </div>

      </div>
  );
}

export default App;
