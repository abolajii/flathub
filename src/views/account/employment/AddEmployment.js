import React from 'react';

const AddLandlord = () => {
    return (
        <div className=" py-12 bg-white sm:py-16 lg:py-20">
            <div class="">
                <p class="text-base font-bold text-gray-900">What type of apartment do you want to rent?</p>
                <p class="mt-1 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>
            </div>

            <form action="#" method="POST" class="max-w-3xl mt-12">
                <div class="space-y-8">
                    
                   
                    <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Company Name </label>
                        <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                                <div>
                                    <input type="text" name="age" id="" placeholder="" value="Martin" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Industry </label>
                        <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                                <select class="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                    <option>Male</option>
                                    <option>Female</option>

                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Salary Range </label>
                        <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                                <select class="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                    <option>Male</option>
                                    <option>Female</option>

                                </select>
                            </div>
                        </div>
                    </div>
                   

                    <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> City </label>
                        <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <input type="text" name="" id="" placeholder="" value="Software Developer" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />


                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> State </label>
                        <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <input type="text" name="" id="" placeholder="" value="Software Developer" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />


                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Country </label>
                        <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <select class="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                <option>United States</option>
                            </select>
                        </div>
                    </div>
                  
                    <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Country </label>
                        <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <select class="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                <option>SMS</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="mt-6 sm:mt-12">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddLandlord;