'use client'
import { TypeAnimation } from "react-type-animation"
export default function Home() {
  return (
   <section className="">
    <h1 className="font-bold text-3xl font-serif text-white">Evan Kagarise</h1>
    <div className="flex flex-col items-center justify-center mt-16">
      <h2 className="text-2xl text-white">I'm a <span> </span>
      <TypeAnimation 
            sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Creator',
              2000,
            ]}
            speed={50}
            className='text-purple-500'
            wrapper='span' 
            repeat={Infinity}
            /></h2>

      <p className="mt-8 m-4 text-white text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus perferendis ullam repudiandae numquam, culpa dolorem dicta harum incidunt hic porro cupiditate maxime recusandae earum corporis similique laborum dignissimos, soluta fugit! Omnis cum dolorum, autem harum minus quibusdam consectetur recusandae, alias deserunt fugit ipsa architecto ut!</p>
    </div>
   </section>
  )
}
