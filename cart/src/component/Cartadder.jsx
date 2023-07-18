

import React from 'react';
import { StoreProvider, useStore } from "mainapp/store";


function Cartadder() {
  const { count, increment , decrement} = useStore();
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Carts {count}</h1>
     
    </div>
  
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={increment} className="mx-10 mt-10 text-white bg-purple-500 border-0 py-2 px-10 focus:outline-none hover:bg-purple-600 rounded text-lg">Add</button>
      <button onClick={decrement} className="mx-30 mt-10 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Remove</button>
    </div>
  </div>
</section>
    </div>
  );
}

export default Cartadder;







