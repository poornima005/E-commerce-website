import React from 'react'
import bus from '../images/bus.png'
import lock from '../images/lock.png'
import call from '../images/call.png'
import money from '../images/money.png'
const data = [
    {
        id : 1,
        img: {bus},
        titel : "Free Shipping",
        desc : "Order above $200"
    },
    {
        id : 2,
        img : {money},
        titel : "Money-back",
        desc : "30 days guarantee"
    },
    {
        id : 3,
        img : {lock},
        titel : "Secure Payments",
        desc : "Secured by Stripe"
    },
    {
        id : 4,
        img : {call},
        titel : "24/7 Support",
        desc : "Phone and Email support"
    },
]

const Features = () => {
  return (
    <div className='flex overflow-scroll lg:overflow-hidden px-10 lg:px-40 gap-6 box-content lg:gap-10 my-10'>
      {
        data.map((item )=> (
            <div key={item.id} className='w-[200px] h-[200px] lg:w-[250px] lg:h-[200px] flex flex-col items-start justify-center box-content bg-[#F3F5F7] p-4'>
                <img src={item.img} alt={item.titel} className='lg:w-16'/>
                <p className='text-2xl'>{item.titel}</p>
                <p>{item.desc}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Features
