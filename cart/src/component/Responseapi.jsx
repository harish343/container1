

import React from 'react';
import { StoreProvider, useStore } from "mainapp/store";


function Responseapi() {
  const { state} = useStore();
  console.log("State", state);
  return (
<div>



<div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div class=" items-center justify-center">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
        {state.todo.data && state.todo.data.map((e) => 
            <li class="py-3 sm:py-4">

            
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {e.name}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {e.email}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {e.age}
                    </div>
                </div>
                
            </li>
            )}


        </ul>
        
       
   </div>
</div>


</div>
  );
}

export default Responseapi;







