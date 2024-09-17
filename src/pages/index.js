import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { FaPlus } from "react-icons/fa6";
import FileIcon from '@/icons/FileIcon';
import ArrowIcon from '@/icons/arrowIcon';

export default function Home() {
  return (
    <>
      <div className='bg-[#1b1b1b] px-10 py-10 h-screen'>

        <div className='flex gap-4'>

          <div className='flex items-center justify-center gap-2 text-white border w-fit px-2 border-[#6949FF] bg-[#393939] font-semibold rounded-md py-2'>
            <FaPlus className='w-3' />
            <span>
              Create New With AI
            </span>
          </div>

          <div className='flex items-center justify-center gap-2 text-white border w-fit px-2 border-[#6949FF] bg-[#393939] font-semibold rounded-md py-2'>
            <FaPlus className='w-3' />
            <span>
              New from Blank
            </span>
          </div>

          <div className='flex items-center justify-center gap-2 text-white border w-fit px-2 border-[#6949FF] bg-[#393939] font-semibold rounded-md py-2'>
            <FileIcon />
            <span>
              Import
            </span>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </>
  )
}
