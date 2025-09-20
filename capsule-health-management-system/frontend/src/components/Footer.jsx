import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="capsule-logo" />
          <p className='w-full md:w-11/12 text-gray-600 leading-6'>Capsule is a user-friendly hospital management web application designed to streamline healthcare experiences. With Capsule, patients can effortlessly search for doctors by specialty or location, explore detailed profiles, and book appointments in just a few clicks. Our intuitive interface ensures that users have easy access to vital information, helping them make informed decisions about their healthcare. Whether you're seeking routine check-ups or specialized care, Capsule is your go-to platform for managing healthcare appointments efficiently and conveniently.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ Prescripto.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
