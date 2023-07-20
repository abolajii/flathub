import React from 'react';

const CompanyProfile = () => {
    return (
        <div>


            <div class="flex flex-col flex-1 xl:pl-10">

                <main>
                    <div class="py-6">
                        <div class="px-4 mx-auto sm:px-6 md:px-8">
                            <h1 class="text-2xl font-bold text-gray-900">Business Profile</h1>
                        </div>

                        <div class="px-4 mx-auto mt-8 sm:px-6 md:px-8">
                            <div class="w-full pb-1 overflow-x-auto">
                                <div class="border-b border-gray-200">
                                    <nav class="flex -mb-px space-x-10">
                                        <a href="#" class="py-4 text-sm font-medium text-indigo-600 transition-all duration-200 border-b-2 border-indigo-600 whitespace-nowrap"> Profile </a>

                                        <a href="#" class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"> Password </a>

                                        {/* <a href="#" class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"> Team </a> */}

                                        {/* <a href="#" class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"> Notification </a> */}

                                        <a href="#" class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"> Subscription </a>

                                        {/* <a href="#" class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"> Licenses </a> */}
                                    </nav>
                                </div>
                            </div>

                           <div className="hidden profile">
                                <div class="mt-6">
                                    <p class="text-base font-bold text-gray-900">Profile</p>
                                    <p class="mt-1 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>
                                </div>

                                <form action="#" method="POST" class="max-w-3xl mt-12">
                                    <div class="space-y-8">
                                        <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                            <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Company Logo </label>
                                            <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                <div class="flex items-center space-x-6">
                                                    <img class="flex-shrink-0 object-cover w-12 h-12 rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/4/avatar-male.png" alt="" />
                                                    <button type="button" class="text-sm font-semibold text-gray-400 transition-all duration-200 bg-white rounded-md hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">Remove</button>

                                                    <button type="button" class="text-sm font-semibold text-indigo-600 transition-all duration-200 bg-white rounded-md hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Update</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                            <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Corporate Name </label>
                                            <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                                                    <div>
                                                        <input type="text" name="" id="" placeholder="" value="Martin" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                            <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Phone </label>
                                            <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                <input type="email" name="" id="" placeholder="0801234556" value="" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                            </div>
                                        </div>
                                        <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                            <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> WhatsApp Number </label>
                                            <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                <input type="email" name="" id="" placeholder="08012344566" value="" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                            </div>
                                        </div>
                                        <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                            <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Email Address </label>
                                            <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                <input type="email" name="" id="" placeholder="email@company.com" value="" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                            </div>
                                        </div>

                                        <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                            <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Describe your company </label>
                                            <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                <textarea
                                                    name=""
                                                    id=""
                                                    placeholder="Write about you"
                                                    value=""
                                                    rows="4"
                                                    class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                    spellcheck="false"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                            <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Address </label>
                                            <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                <textarea
                                                    name=""
                                                    id=""
                                                    placeholder="Write about you"
                                                    value=""
                                                    rows="4"
                                                    class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                    spellcheck="false"
                                                ></textarea>
                                            </div>
                                        </div>

                                        {/* <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                        <div class="sm:mt-px sm:pt-2">
                                            <label for="" class="block text-sm font-bold text-gray-900"> Username </label>
                                            <p class="mt-1 text-sm font-medium text-gray-500">You can change it later</p>
                                        </div>
                                        <div class="mt-2 sm:mt-0 sm:col-span-2">
                                            <div class="relative flex">
                                                <div class="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">rareblocks.co/user/</div>

                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    placeholder=""
                                                    value="martin.janiter"
                                                    class="border flex-1 block w-full min-w-0 px-4 py-3 placeholder-gray-500 border-gray-300 rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                />
                                            </div>
                                        </div>
                                    </div> */}

                                        <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                            <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Website </label>
                                            <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                <div class="relative flex">
                                                    <div class="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">https://</div>

                                                    <input
                                                        type="url"
                                                        name=""
                                                        id=""
                                                        placeholder=""
                                                        value="postcrafts.co"
                                                        class="border flex-1 block w-full min-w-0 px-4 py-3 placeholder-gray-500 border-gray-300 rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                    />
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
                                    </div>

                                    <div class="mt-6 sm:mt-12">
                                        <button
                                            type="submit"
                                            class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>
                           </div>
                           <div className="hidden password">
                                <div class="py-8 bg-white mt-10">
                                    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                                        <div class="max-w-xl mx-auto">
                                            <div>
                                                <label for="" class="block text-sm font-medium text-gray-600"> Password </label>
                                                <div class="relative mt-2">
                                                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                                        <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                        </svg>
                                                    </div>

                                                    <input type="password" name="" id="" placeholder="" value="************" class="border block w-full py-3 pl-12 pr-4 text-gray-500 placeholder-gray-500 border-red-500 rounded-lg focus:ring-red-60500 focus:border-red-500 sm:text-sm caret-red-600" />
                                                </div>
                                                <label for="" class="block text-sm font-medium text-gray-600"> Confirm Password </label>
                                                <div class="relative mt-2">
                                                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                                        <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                        </svg>
                                                    </div>

                                                    <input type="password" name="" id="" placeholder="" value="gg" class="border block w-full py-3 pl-12 pr-4 text-gray-500 placeholder-gray-500 border-red-500 rounded-lg focus:ring-red-60500 focus:border-red-500 sm:text-sm caret-red-600" />
                                                </div>

                                                <ul class="pl-4 mt-2 text-sm font-medium text-red-500 list-disc list-outside">
                                                    <li>Use at least one Capital letter</li>
                                                    <li>Use at least one Special character</li>
                                                </ul>
                                                <div class="mt-6 sm:mt-12">
                                                    <button
                                                        type="submit"
                                                        class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                                                    >
                                                        Change Password
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
                           {/* <div className="notification"></div> */}
                           <div className="subscription">
                                <section class="py-10 bg-white sm:py-16 lg:py-24">
                                    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                        <div class="max-w-2xl mx-auto text-center">
                                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Subscription</h2>
                                            <p class="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">See subscription options for you</p>
                                        </div>

                                        <div class="grid grid-cols-1 gap-6 mx-auto mt-8 text-center md:max-w-5xl sm:grid-cols-3 md:gap-8 sm:mt-16">
                                            <div class="relative overflow-hidden bg-transparent border-2 border-gray-100 rounded-md">
                                                <div class="absolute hidden top-3 right-3">
                                                    <svg class="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>

                                                <div class="px-4 py-5 lg:p-8">
                                                    <p class="text-lg font-medium text-gray-500">1 Week</p>
                                                    <p class="mt-4 text-6xl font-bold text-black">$4</p>
                                                    <ul class="flex flex-col mt-8 space-y-1">
                                                        <li class="text-base font-medium text-gray-900 lg:text-xl">Less than $1 a day</li>
                                                        <li class="text-base font-medium text-gray-600 lg:text-xl">Billed every week</li>
                                                        <li class="text-base font-medium text-gray-600 lg:text-xl">Cancel anytime</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="relative overflow-hidden bg-transparent border-2 border-gray-100 rounded-md">
                                                <div class="absolute hidden top-3 right-3">
                                                    <svg class="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>

                                                <div class="px-4 py-5 lg:p-8">
                                                    <p class="text-lg font-medium text-gray-500">1 Month</p>
                                                    <p class="mt-4 text-6xl font-bold text-black">$19</p>
                                                    <ul class="flex flex-col mt-8 space-y-1">
                                                        <li class="text-base font-medium text-gray-900 lg:text-xl">Less than $5 a week</li>
                                                        <li class="text-base font-medium text-gray-600 lg:text-xl">Billed every month</li>
                                                        <li class="text-base font-medium text-gray-600 lg:text-xl">Cancel anytime</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="relative overflow-hidden bg-white border-2 border-gray-900 rounded-md shadow">
                                                <div class="absolute top-3 right-3">
                                                    <svg class="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>

                                                <div class="px-4 py-5 lg:p-8">
                                                    <p class="text-lg font-medium text-gray-500">1 Year</p>
                                                    <p class="mt-4 text-6xl font-bold text-black">$99</p>
                                                    <ul class="flex flex-col mt-8 space-y-1">
                                                        <li class="text-base font-medium text-gray-900 lg:text-xl">Less than $2 a week</li>
                                                        <li class="text-base font-medium text-gray-600 lg:text-xl">Billed every year</li>
                                                        <li class="text-base font-medium text-gray-600 lg:text-xl">Cancel anytime</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div class="mt-8 text-center md:mt-16">
                                            <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:opacity-80 hover:opacity-80" role="button"> Create your account </a>
                                            <p class="mt-4 text-sm text-gray-700">No Credit Card Required</p>
                                        </div> */}
                                    </div>
                                </section>

                           </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>

    );
};

export default CompanyProfile;