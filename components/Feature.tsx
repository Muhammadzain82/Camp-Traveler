import React from 'react'
import Image from 'next/image'

const Feature = () => {
  return (
    <section className="border-2 border-red-500 flex-col flexCenter overflow-hidden bg-feature bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-center">
        <div className="flex flex-1 lg:min-h-[900px] justify-center items-center">
          <Image src="/phone.png" alt="phone" width={400} height={1000} className="feature-phone items-center"/>
        </div>
      </div>
    </section>
  )
}

export default Feature