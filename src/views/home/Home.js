import React, { useContext } from "react";
// import { intializePayment } from "../../redux/profile/profileSlice";
import Logo from "../../assets/img/logo.png";
import LogoAlt from "../../assets/img/logo_white.png";
import FHApp from "../../assets/img/fh_app.png";
import Dashboard from "../../assets/img/dashboard_dark.png";
import cw from "../../assets/img/cw.jpg";
import bestwestern from "../../assets/img/bestwestern.jpg";
import homesearch from "../../assets/img/homesearch.png";
import ib_props from "../../assets/img/ib_props.jpg";
import CS from "../../assets/img/cs.jpeg";
import Faq from "../../components/Faq";
const Home = () => {
  const plans = [
    {
      id: "762176b7-836b-47db-ad22-1cc09d875149",
      name: "Standard",
      price: "Free",
      paymentType: "For Life!",
      numb_of_users_and_property: "1 Property // 1 User",
      support_type: "Email Support",
    },
    {
      id: "c6017c37-5e26-489e-9b95-7d24ce017910",
      name: "Professional",
      price: "N4,999",
      paymentType: "Per Annum",
      numb_of_users_and_property: "5 Property // 2 User",
      support_type: "Premium Support",
    },
    {
      id: "a7057c68-6d45-489e-9b95-7d24ce017910",
      name: "Exclusive",
      price: "N9,999",
      paymentType: "Per Annum",
      numb_of_users_and_property: "1 Property // 1 User",
      support_type: "Premium Support",
    },
  ];

  return (
    <>
      <div class="relative bg-gradient-to-b from-green-50 to-green-100">
        <header class="absolute inset-x-0 top-0 z-10 w-full">
          <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
              <div class="flex-shrink-0">
                <a href="/" title="" class="flex">
                  <img class="w-auto h-8" src={Logo} alt="" />
                </a>
              </div>

              <button
                type="button"
                class="inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800"
              >
                {/*<!-- Menu open: "hidden", Menu closed: "block" -->*/}
                <svg
                  class="block w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" -->*/}
                <svg
                  class="hidden w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Menu
              </button>

              <div class="hidden lg:flex lg:items-center lg:justify-center lg:ml-20 lg:mr-auto lg:space-x-10">
                {/* <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> About </a> */}

                <a
                  href="#features"
                  title=""
                  class="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href="#faqs"
                  title=""
                  class="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  FAQs{" "}
                </a>

                <a
                  href="#pricing"
                  title=""
                  class="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Pricing{" "}
                </a>
                <a
                  href="#contact"
                  title=""
                  class="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Contact{" "}
                </a>
              </div>

              {/* <a href="#" title="" class="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Try for free </a> */}
            </div>
          </div>
        </header>

        <section class="overflow-hidden">
          <div class="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
            <div class="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
              <div class="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
                <div class="flex flex-col justify-between flex-1 h-full">
                  <div>
                    <h1 class="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                      Take control of <br /> your rental management
                    </h1>
                    <p class="mt-6 text-base text-black sm:text-xl">
                      Flathub helps you to manage your properties, tenants and
                      collect rents!
                    </p>
                    <a
                      //   onClick={() => setRole(2)}
                      href="#pricing"
                      title=""
                      class="inline-flex items-center px-6 py-5 text-base font-semibold text-white transition-all duration-200 bg-indigo-700 mt-9 hover:bg-indigo-600 focus:bg-indigo-600"
                      role="button"
                    >
                      Landlord
                    </a>
                    <span className="ml-5">
                      <a
                        // onClick={() => setRole(1)}
                        href={`/register?role=1`}
                        title=""
                        class="inline-flex items-center px-6 py-5 text-base font-semibold text-white transition-all duration-200 bg-green-500 mt-9 hover:bg-green-600 focus:bg-green-600 "
                        role="button"
                      >
                        Tenants
                      </a>
                    </span>
                  </div>

                  <div class="mt-8 border-t-2 border-black lg:mt-auto sm:mt-14">
                    <div class="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                      <p class="text-base font-semibold text-black">
                        App available on
                      </p>

                      <div class="flex items-center mt-5 space-x-5 sm:mt-0">
                        <a
                          href="#"
                          title=""
                          class="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                          role="button"
                        >
                          <img
                            class="w-auto rounded h-14 sm:h-16"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png"
                            alt=""
                          />
                        </a>

                        <a
                          href="#"
                          title=""
                          class="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                          role="button"
                        >
                          <img
                            class="w-auto rounded h-14 sm:h-16"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative w-full overflow-hidden lg:w-5/12 lg:order-1">
              <div class="lg:absolute lg:bottom-0 lg:left-0 md:top-20">
                <img class="w-full" src={FHApp} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-xl font-medium text-gray-900">
              Trusted by world class Realtors
            </h2>
          </div>

          <div class="grid items-center grid-cols-2 gap-10 mt-12 md:grid-cols-4 sm:gap-y-16">
            <div>
              <img class="object-contain w-auto mx-auto h-14" src={cw} alt="" />
            </div>

            <div>
              <img
                class="object-contain w-auto mx-auto h-14"
                src={homesearch}
                alt=""
              />
            </div>

            <div>
              <img
                class="object-contain w-auto h-10 mx-auto h-24"
                src={ib_props}
                alt=""
              />
            </div>

            <div>
              <img
                class="object-contain w-auto mx-auto h-20 "
                src={bestwestern}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section
        class="pt-10 overflow-hidden bg-gray-50 sm:pt-16 lg:pt-24"
        id="featured"
      >
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Flathub helps you take care of your business
            </h2>
            <p class="mt-4 text-base leading-relaxed text-gray-600">
              The world is powered by technology, with your real estate business
              all stored in the cloud, you have nothing to worry about.
            </p>
          </div>

          <div class="flex flex-col items-start justify-center max-w-lg px-10 mx-auto mt-8 space-y-8 lg:max-w-xl sm:px-0 sm:space-y-0 sm:flex-row sm:mt-16 sm:space-x-6 lg:space-x-12 sm:items-center">
            <div class="flex items-center lg:flex-1">
              <svg
                class="flex-shrink-0 text-gray-400 w-14 h-14"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                ></path>
              </svg>
              <p class="ml-4 text-lg font-semibold leading-snug text-black">
                Seamlessly manage your properties
              </p>
            </div>

            <div class="flex items-center lg:flex-1">
              <svg
                class="flex-shrink-0 text-gray-400 w-14 h-14"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              <p class="ml-4 text-lg font-semibold leading-snug text-black">
                Rental collection in a breeze!
              </p>
            </div>
          </div>

          <div class="mt-10 sm:mt-16">
            <img
              class="w-full max-w-3xl mx-auto -mb-16 rounded-lg shadow-xl"
              src={Dashboard}
              alt=""
            />
          </div>
        </div>
      </section>
      <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <svg
                  class="text-blue-100"
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z"></path>
                </svg>
                <svg
                  class="absolute text-blue-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  ></path>
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Secured Payments
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <svg
                  class="text-orange-100"
                  width="62"
                  height="64"
                  viewBox="0 0 62 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z"></path>
                </svg>
                <svg
                  class="absolute text-orange-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Fast &amp; Easy to Load
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <svg
                  class="text-green-100"
                  width="66"
                  height="68"
                  viewBox="0 0 66 68"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z"></path>
                </svg>
                <svg
                  class="absolute text-green-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Light &amp; Dark Version
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <svg
                  class="text-purple-100"
                  width="66"
                  height="68"
                  viewBox="0 0 66 68"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z"></path>
                </svg>
                <svg
                  class="absolute text-purple-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Light &amp; Dark Version
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <svg
                  class="text-gray-100"
                  width="65"
                  height="70"
                  viewBox="0 0 65 70"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M64.5 26C64.5 46.4345 56.4345 70 36 70C15.5655 70 0 53.9345 0 33.5C0 13.0655 13.0655 0 33.5 0C53.9345 0 64.5 5.56546 64.5 26Z"></path>
                </svg>
                <svg
                  class="absolute text-gray-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Fast &amp; Easy to Load
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <svg
                  class="text-yellow-100"
                  width="78"
                  height="78"
                  viewBox="0 0 78 78"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.49996 28.0002C4.09993 47.9554 14.1313 66.7885 35.5 71.5002C56.8688 76.2119 68.0999 58.4553 72.5 38.5001C76.9 18.5449 68.3688 12.711 47 7.99931C25.6312 3.28759 12.9 8.04499 8.49996 28.0002Z"></path>
                </svg>
                <svg
                  class="absolute text-yellow-500 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  ></path>
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Secured Payments
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <svg
                  class="text-gray-100"
                  width="62"
                  height="64"
                  viewBox="0 0 62 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z"></path>
                </svg>
                <svg
                  class="absolute text-gray-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Light &amp; Dark Version
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <svg
                  class="text-rose-100"
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z"></path>
                </svg>
                <svg
                  class="absolute text-rose-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  ></path>
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Secured Payments
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <svg
                  class="text-lime-100"
                  width="62"
                  height="65"
                  viewBox="0 0 62 65"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 13.0264C0 33.4609 8.06546 64.0264 28.5 64.0264C48.9345 64.0264 62 50.4604 62 30.0259C62 9.59135 59.4345 4.0256 39 4.0256C18.5655 4.0256 0 -7.40819 0 13.0264Z"></path>
                </svg>

                <svg
                  class="absolute text-lime-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Fast &amp; Easy to Load
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-10 bg-white sm:py-16 lg:py-24" id="pricing">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Pricing &amp; Plans
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Irrespective of your sizes and needs, we got you covered.
            </p>
          </div>

          {/* PLANS */}
          <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
            {plans.map((each, index) => {
              return (
                <div
                  key={index}
                  class={
                    index === 1
                      ? `overflow-hidden bg-white border-2 border-gray-100 rounded-md shadow-lg`
                      : `overflow-hidden bg-white border-2 border-gray-100 rounded-md`
                  }
                >
                  <div class="p-8 xl:px-12">
                    <h3 class="text-base font-semibold text-purple-600">
                      {each.name}
                    </h3>
                    <p class="text-5xl font-bold text-black mt-7">
                      {each.price}
                    </p>
                    <p class="mt-3 text-base text-gray-600">
                      {each.paymentType}
                    </p>

                    <ul class="inline-flex flex-col items-start space-y-5 text-left mt-9">
                      <li class="inline-flex items-center space-x-2">
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="text-base font-medium text-gray-900">
                          {each.numb_of_users_and_property}
                        </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="text-base font-medium text-gray-900">
                          {" "}
                          Landlord Management{" "}
                        </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg
                          class="h-5 text-indigo-500 flex-shrink-0w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="text-base font-medium text-gray-900">
                          {" "}
                          Tenants Maangement{" "}
                        </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg
                          class="h-5 text-indigo-500 flex-shrink-0w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="text-base font-medium text-gray-900">
                          {" "}
                          Rent Management{" "}
                        </span>
                      </li>
                      <li class="inline-flex items-center space-x-2">
                        <svg
                          class="h-5 text-indigo-500 flex-shrink-0w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="text-base font-medium text-gray-900">
                          {" "}
                          Invoicing{" "}
                        </span>
                      </li>
                      <li class="inline-flex items-center space-x-2">
                        <svg
                          class="h-5 text-indigo-500 flex-shrink-0w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="text-base font-medium text-gray-900">
                          {" "}
                          CRM{" "}
                        </span>
                      </li>
                      <li class="inline-flex items-center space-x-2">
                        <svg
                          class="h-5 text-indigo-500 flex-shrink-0w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="text-base font-medium text-gray-900">
                          {" "}
                          Rent Collection{" "}
                        </span>
                      </li>

                      <li class="inline-flex items-center space-x-2">
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed">
                          {" "}
                          {each.support_type}
                        </span>
                      </li>
                    </ul>

                    <a
                      href={`/register?plan_id=${each.id}&role=2`}
                      title=""
                      class="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                      role="button"
                    >
                      {" "}
                      Get full access{" "}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Faq />
      <section class="pt-10 bg-gray-100 sm:pt-16 lg:pt-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Real humans are here to help you building your brand
            </h2>
            <p class="mt-6 text-lg text-gray-900">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
            <a
              href="#contact"
              title=""
              class="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              <svg
                class="w-5 h-5 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              Contact our support
            </a>
          </div>
        </div>

        <div class="container mx-auto 2xl:px-12">
          <img class="w-full mt-6" src={CS} alt="" />
        </div>
      </section>
      <section class="py-10 bg-white sm:py-16 lg:py-20" id="contact">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-8 xl:gap-x-20">
            <div>
              <h3 class="text-2xl font-semibold text-black">Lagos Office</h3>
              <p class="mt-3 text-base text-gray-600">
                Talk to us, let's help you get started!
              </p>

              <div class="mt-10 space-y-5">
                <div class="flex items-start">
                  <svg
                    class="flex-shrink-0 text-blue-600 w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span class="block ml-3 text-base font-medium text-gray-900">
                    {" "}
                    Awolowo Road, Ikoyi, Lagos.{" "}
                  </span>
                </div>

                <div class="flex items-start">
                  <svg
                    class="flex-shrink-0 text-blue-600 w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span class="block ml-3 text-base font-medium text-gray-900">
                    {" "}
                    info@flathub.com{" "}
                  </span>
                </div>
              </div>
            </div>

            {/* <div>
                            <h3 class="text-2xl font-semibold text-black">New York Office</h3>
                            <p class="mt-3 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                            <div class="mt-10 space-y-5">
                                <div class="flex items-start">
                                    <svg class="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span class="block ml-3 text-base font-medium text-gray-900"> 4517 Washington Ave. Manchester, Kentucky 39495 </span>
                                </div>

                                <div class="flex items-start">
                                    <svg class="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <span class="block ml-3 text-base font-medium text-gray-900"> support@example.com </span>
                                </div>
                            </div>
                        </div> */}

            {/* <div>
                            <h3 class="text-2xl font-semibold text-black">Singapore Office</h3>
                            <p class="mt-3 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                            <div class="mt-10 space-y-5">
                                <div class="flex items-start">
                                    <svg class="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span class="block ml-3 text-base font-medium text-gray-900"> 3517 W. Gray St. Utica, Pennsylvania 57867 </span>
                                </div>

                                <div class="flex items-start">
                                    <svg class="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <span class="block ml-3 text-base font-medium text-gray-900"> contact@example.com </span>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </section>
      {/* <section class="py-12 bg-gradient-to-r from-fuchsia-600 to-blue-600"> */}
      <section class="py-12 bg-indigo-700">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
            <div class="xl:flex xl:items-center xl:justify-start">
              <img
                class="w-auto mx-auto h-7"
                src={LogoAlt}
                alt="Flathub Logo"
              />

              <p class="mt-5 text-sm text-white xl:ml-6 xl:mt-0">
                © Copyright 2022 Flathub
              </p>
            </div>

            <div class="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
              {/* <ul class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
                                <li>
                                    <a href="#" title="" class="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> About </a>
                                </li>

                                <li>
                                    <a href="#" title="" class="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Services </a>
                                </li>

                                <li>
                                    <a href="#" title="" class="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Privacy Policy </a>
                                </li>

                                <li>
                                    <a href="#" title="" class="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Terms &amp; Conditions </a>
                                </li>

                                <li>
                                    <a href="#" title="" class="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Support </a>
                                </li>
                            </ul> */}

              <div class="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>

              <ul class="flex items-center justify-center space-x-8 xl:justify-end">
                <li>
                  <a
                    href="https://twitter.com/flathubio"
                    title=""
                    class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://facebook.com/flathubng"
                    title=""
                    class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://instagram.com/flathubng"
                    title=""
                    class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                      <circle cx="16.806" cy="7.207" r="1.078"></circle>
                      <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
