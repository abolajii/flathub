import React from 'react';
import LogoWhite from '../../components/LogoWhite';
import Logo from '../../components/Logo';

const Index = ({ children }) => {
    return (
        <div class="flex flex-col">
            <header class="">
                <div class="py-3 bg-gray-900">
                    <div class="container px-4 mx-auto">
                        <div class="flex items-center justify-between">
                            <div class="block -m-2 lg:hidden">
                                <button type="button" class="inline-flex items-center justify-center p-2 text-white bg-gray-900 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500">
                                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>

                            <div class="flex-shrink-0 ml-4 mr-4 lg:ml-0">
                                <a href="#" title="" class="flex items-center">
                                    {/* <img class="block w-auto h-8 lg:hidden" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo-symbol.svg" alt="" /> */}
                                    {/* <img class="hidden w-auto h-8 lg:block" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo-alt.svg" alt="" /> */}
                                    <Logo />
                                </a>
                            </div>

                            <div class="flex-1 max-w-xs ml-auto lg:hidden">
                                <label for="" class="sr-only"> Search </label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </div>

                                    <input type="search" name="" id="" class="block w-full py-2 pl-10 text-white placeholder-gray-400 bg-gray-900 border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search here" />
                                </div>
                            </div>

                            <div class="flex items-center ml-4 lg:ml-0">
                                <button type="button" class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900" id="options-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span class="flex items-center justify-between w-full">
                                        <span class="flex items-center justify-between min-w-0 space-x-3">
                                            <img class="flex-shrink-0 object-cover bg-gray-700 rounded-full w-7 h-7" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/avatar-female-4.png" alt="" />
                                            <span class="flex-1 hidden min-w-0 md:flex">
                                                <span class="text-sm font-medium text-white truncate"> Wade Warren </span>
                                            </span>
                                        </span>
                                        <svg class="flex-shrink-0 w-4 h-4 ml-2 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hidden py-3 bg-white border-b border-gray-200 lg:block">
                    <div class="container px-4 mx-auto">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-4">
                                <a href="/user/dashboard" title="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100">
                                    <svg class="w-6 h-6 mr-2 -ml-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>
                                    Dashboard
                                </a>

                                <a href="/user/profile" title="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100">
                                    <svg class="w-6 h-6 mr-2 -ml-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                    </svg>
                                    Profile
                                    <svg class="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </a>

                                <a href="/user/apartment" title="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100">
                                    <svg class="w-6 h-6 mr-2 -ml-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                                    </svg>
                                    Apartments
                                    <svg class="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </a>

                                <a href="/user/employment" title="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100">
                                    <svg class="w-6 h-6 mr-2 -ml-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                    </svg>
                                    Employment
                                    <svg class="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </a>

                                <a href="/user/support" title="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100">
                                    <svg class="w-6 h-6 mr-2 -ml-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                    </svg>
                                    Support
                                    <svg class="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </a>
                            </div>

                            <div class="flex-1 hidden max-w-xs ml-auto lg:block">
                                <label for="" class="sr-only"> Search </label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </div>

                                    <input type="search" name="" id="" class="block w-full py-2 pl-10 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" placeholder="Search here" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="flex-1 overflow-x-hidden">
                <main>
                    <div class="py-6">
                        <div class="px-4 mx-auto max-w-7xl">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>

    );
};

export default Index;