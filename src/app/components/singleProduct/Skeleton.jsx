
export default function SingleProductSkeleton() {
  return (
    <div role='status' className=' bg-white p-8 rounded-md '>
      <div className='animate-pulse h-full'>
        <div className='  flex flex-col md:grid md:grid-cols-2 gap-8 '>
          {/* --------- IMG ----------- */}
          <div className='flex flex-col justify-between h-full gap-4'>
            <div className=' w-full  h-[150px] md:flex-1 rounded-md bg-gray-200 '></div>
            <div className='flex aspect-square h-[70px] md:h-[80px] gap-4'>
              <div className=' rounded-md aspect-square w-[70px] md:w-[80px] bg-gray-200'></div>
              <div className=' rounded-md aspect-square w-[70px] md:w-[80px] bg-gray-200'></div>
            </div>
          </div>
          {/* --------- Details ----------- */}
          <div className='flex flex-col'>
            <div className='w-full h-6 rounded-md bg-gray-200 mb-2'></div>
            <div className='w-1/4 h-6 rounded-md bg-gray-200 mb-4'></div>
            <div className='flex items-center gap-4 mb-8'>
              <div className='w-[100px] h-2 rounded-md bg-gray-200'></div>
              <div className='w-[100px] h-2 rounded-md bg-gray-200'></div>
              <div className='w-[100px] h-2 rounded-md bg-gray-200'></div>
            </div>
            <div className='w-[100px] h-6 rounded-md bg-gray-200 mb-6'></div>
            <div className='mb-6 flex flex-col gap-4'>
              <div className='w-full h-3 rounded-md bg-gray-200'></div>
              <div className='w-1/2 h-3 rounded-md bg-gray-200'></div>
              <div className='w-1/3 h-3 rounded-md bg-gray-200'></div>
            </div>
            <div className='w-full h-10 rounded-md bg-gray-200 mb-6'></div>
            <div className='grid grid-cols-[1fr_2fr] gap-4'>
              <p className='w-[100px] h-2 rounded-md bg-gray-200'></p>
              <p className='w-[100px] h-2 rounded-md bg-gray-200'></p>
              <p className='w-[100px] h-2 rounded-md bg-gray-200'></p>
              <p className='w-[100px] h-2 rounded-md bg-gray-200'></p>
              <p className='w-[100px] h-2 rounded-md bg-gray-200'></p>
              <p className='w-[100px] h-2 rounded-md bg-gray-200'></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
