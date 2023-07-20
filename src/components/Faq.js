import React, { useState } from 'react'

const accordionData = [
    {
      title: 'How to create an account? ',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'How can I make payment using Paypal?',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Can I cancel my plan? ',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24" id="faqs">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            {accordionData.map((item, index) => (
 <div  onClick={() => {
    setActiveIndex(index);
  }} key={index} className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
 <button  type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
     <span className="flex text-lg font-semibold text-black"> {item.title} </span>
     {index === activeIndex ? <svg className="w-6 h-6 text-gray-400 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
     </svg> : <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
     </svg>}
     
 </button>
{index === activeIndex && 
 <div className={"px-4 pb-5 sm:px-6 sm:pb-6 transition-all duration-1000 ease-in"}>
     <p>{item.content}</p>
 </div>
}
</div>
            ))}
           

         
        </div>

        <p className="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="/contact" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p>
    </div>
</section>
  )
}
