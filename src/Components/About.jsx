//
export function About () {
  return (
    <section className='flex justify-center h-screen snap-start'>
      <section className='w-1/2 flex flex-col text-center items-end pt-[13%] gap-y-5'>
        <div className='flex justify-center w-full'>
          <h1 className='font-primary text-[1em]'>Hola, soy Ian</h1>
        </div>
        <div className='w-full'>
          <h1 className='font-primary text-[2.3em]'>Web Developer</h1>
        </div>
      </section>
      <section className='w-1/2 bg-hero bg-no-repeat bg-center' />
    </section>
  )
}
