import React from 'react'

export const Newsletter = () => {
  return (
    <div className="container flex flex-wrap bg-pink p-7 rounded-xl relative mx-auto -top-16 sm:-top-8 w-11/12 sm:w-full shadow-xl">
      <h2 className="text-white text-lg sm:text-3xl text-center font-bold basis-full lg:basis-1/2 self-center">
        Newsletter da Game Mind
      </h2>
      <div className="flex flex-wrap justify-center sm:flex-nowrap w-full lg:w-1/2 text-center items-center py-6 mt-4 sm:p-2 px-4">
        <input
          className="w-full md:w-3/4 rounded-full leading-8 py-2 px-6 mb-6 text-center md:text-start sm:mt-6 sm:mr-6 shadow-md focus:outline-none"
          type="text"
          placeholder="Digite seu melhor e-mail"
        />
        <button className="sm:w-56 xl:w-1/3 btn-outline">Inscreva-se</button>
      </div>
    </div>
  )
}

export default Newsletter
