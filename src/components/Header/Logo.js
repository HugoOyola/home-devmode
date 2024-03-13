import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
  <div className="w-[260px] h-[94px] pr-[21px] py-[21px] justify-start items-start inline-flex">
    <div className="w-[239px] h-[52px] relative">
      <div className="w-[238.26px] h-[52px] left-[1px] top-0 absolute">
        <Image src="/logo_unidad.svg" width={100} height={50} alt='Logo de la Unidad'/>
      </div>
    </div>
  </div>
  )
}

export default Logo