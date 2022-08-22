import React from 'react'

import Link from 'next/link'

import Newsletter from './Newsletter'

export const Partners = () => {
  return (
    <>
      <div className="flex flex-col bg-gray mx-auto items-center pt-20">
        <h2 className="basis-full text-lg text-slate-500 mb-12">
          Nossos parceiros
        </h2>
        <div className="container flex flex-wrap sm:flex-nowrap mx-auto pb-24 items-center">
          <Link href="https://inova.imd.ufrn.br/parque/inova/" passHref>
            <a className="object-scale-down w-1/2 sm:w-1/4 px-6">
              <img src="/images/logo-inova.png" alt="logo-inova" />
            </a>
          </Link>
          <Link
            href="https://www.sebrae.com.br/sites/PortalSebrae/ufs/rn?codUf=21"
            passHref
          >
            <a className="object-scale-down w-1/2 sm:w-1/4 px-6">
              <img src="/images/logo-sebrae.png" alt="logo-inova" />
            </a>
          </Link>
          <Link href="https://programacentelha.com.br/rn/" passHref>
            <a className="object-scale-down w-1/2 sm:w-1/4 px-6">
              <img src="/images/logo-centelha.png" alt="logo-inova" />
            </a>
          </Link>
          <Link href="https://www.pongrn.com.br/" passHref>
            <a className="object-scale-down w-1/2 sm:w-1/4 px-6">
              <img src="/images/logo-pong.png" alt="logo-inova" />
            </a>
          </Link>
        </div>
      </div>
      <Newsletter />
    </>
  )
}

export default Partners
