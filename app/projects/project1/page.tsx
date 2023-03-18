import React from 'react'
import social from '@/assets/social.png'
import Image from 'next/image'
import { SiReact, SiTailwindcss} from 'react-icons/si'
import {
    GitHubIcon,
    YoutubeIcon,
    ArrowIcon,
    TwitterIcon,
  } from 'components/icons';
const Page = () => {
  return (
    <div>
        <h1 className="font-bold text-3xl font-serif text-white">Twitter UI</h1>
      <Image alt=" twitter UI" src={social} className="object-cover" />
      <div className='flex text-white mt-4 gap-4'>
        <div className='max-w-xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae repellat repellendus iusto quae quibusdam ad sapiente voluptate quasi totam, ut expedita ullam deleniti quia! Nulla dignissimos quae deleniti ea animi quis debitis? Illum accusantium soluta, odio repudiandae, ipsam, provident quod qui facere aliquid perspiciatis nobis impedit obcaecati eveniet? Fugiat, veritatis sint! Illo, fuga, necessitatibus veniam ea distinctio et quaerat laboriosam atque aperiam itaque reprehenderit dolore in. Rerum eius doloribus maiores, perferendis odit fugit harum alias dignissimos magni nobis repellendus. Quaerat atque consequuntur sit consectetur. Eligendi.
        </div>
        <div className='grow flex flex-col items-center '>
            <h1>Tech Stack</h1>
            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <SiReact className='text-xl' />
            <h1>React</h1>
            </div>
            <div className='flex gap-2 text-xl items-center bg-zinc-800 justify-center'>
            <SiTailwindcss className='text-xl' />
            <h1>Tailwind</h1>
            </div>
        </div>
      </div>
      <div className='mt-4 flex flex-col gap-2 md:flex-row md:gap-2'>
      <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/leerob"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">Source</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/leerob"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">Live</div>
            </div>
            <ArrowIcon />
          </a>
      </div>
    </div>
  )
}

export default Page