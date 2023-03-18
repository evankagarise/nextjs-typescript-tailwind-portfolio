import React from 'react'
import { DiJavascript1, DiCss3} from 'react-icons/di'
import { SiNextdotjs, SiReact, SiTailwindcss, SiGraphql, SiPostgresql, SiTypescript, SiBlender, SiFigma, SiAdobephotoshop, SiAdobepremierepro, SiAdobeillustrator } from 'react-icons/si'
import {ImHtmlFive} from 'react-icons/im'
import {AiFillGithub} from 'react-icons/ai'
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Skills',
  description: 'VP of Developer Experience at Vercel.',
};
const page = () => {
  return (
    <div>
        <h1 className="font-bold text-3xl font-serif text-white mb-4">Skills</h1>
        <h1 className="font-bold text-2xl font-serif text-white">Programming</h1>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-white'>
            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <DiJavascript1 className='text-xl' />
            <h1>Javascript</h1>
            </div>
            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <ImHtmlFive className='text-xl' />
            <h1>HTML</h1>
            </div>
            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <DiCss3 className='text-xl' />
            <h1>CSS</h1>
            </div>
            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <SiReact className='text-xl' />
            <h1>React</h1>
            </div>
            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <SiNextdotjs className='text-xl' />
            <h1>NextJs</h1>
            </div>
            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <SiTailwindcss className='text-xl' />
            <h1>Tailwind</h1>
            </div>
            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <SiGraphql className='text-xl' />
            <h1>GraphQL</h1>
            </div>
            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <AiFillGithub className='text-xl' />
            <h1>Github</h1>
            </div>
            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <SiPostgresql className='text-xl' />
            <h1>PostGreSQL</h1>
            </div>
            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <SiTypescript className='text-xl' />
            <h1>Typescript</h1>
            </div>
          



        </div>
        <h1 className="font-bold text-2xl font-serif text-white">Design</h1>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-white'>
        <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <SiBlender className='text-xl' />
            <h1>Blender</h1>
            </div>
            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <SiFigma className='text-xl' />
            <h1>Figma</h1>
            </div>

            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <SiAdobephotoshop className='text-xl' />
            <h1>PhotoShop</h1>
            </div>

            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <SiAdobeillustrator className='text-xl' />
            <h1>Illustrator</h1>
            </div>

            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <SiAdobepremierepro className='text-xl' />
            <h1>Premier Pro</h1>
            </div>
            
        </div>
    </div>
  )
}

export default page