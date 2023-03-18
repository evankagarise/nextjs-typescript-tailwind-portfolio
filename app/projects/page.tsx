import React from 'react'
import type { Metadata } from 'next';
import { GraphQLClient, gql} from 'graphql-request'
import Link from 'next/link';
import social from '@/assets/social.png'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'VP of Developer Experience at Vercel.',
};
const page = () => {
  return (
    <>
    <h1 className="font-bold text-3xl font-serif text-white">Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 m-2 gap-4 ' >
       
        <Link href="./projects/project1">
 <div className='w-[300px] h-[200px] '> 
 <Image src={social} alt="twitter UI" className="w-[300px] h-[200px]" />
         </div> </Link>
      
        <div className='w-[300px] h-[200px] bg-white'> 

        </div>
        <div className='w-[300px] h-[200px] bg-white'> 

        </div>
        <div className='w-[300px] h-[200px] bg-white'> 

        </div>
    </div>
    </>
  
  )
}

export default page