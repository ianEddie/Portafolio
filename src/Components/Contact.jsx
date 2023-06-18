//
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { GoToTopButton } from './GoToTopButton'
import { ContactFooter } from './ContactFooter'
import { motion } from 'framer-motion'
import { contactButtonAnimation } from '../Animations/animations'
//
export function Contact () {
  const form = useRef()
  const handleReset = () => {
    form.current.reset()
  }
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_gl9g8qw', 'template_zp9sb4n', form.current, 'OCQKY8BQ_mkUA1jR1')
      .then((result) => {
        console.log(result.text)
        handleReset()
      }, (error) => {
        console.log(error.text)
      })
  }
  console.log(sendEmail.length)
  return (
    <section className='h-screen snap-start relative flex flex-col items-center justify-end pb-7 gap-y-5' id='contact'>
      <form ref={form} onSubmit={sendEmail} className='border border-black shadow-lg shadow-stone-500'>
        <div>
          <label>Nombre</label>
          <motion.input
            type='text' name='user_name' required
            whileFocus={{ scale: 1.1 }}
          />
        </div>
        <div>
          <label>Email</label>
          <motion.input
            type='email' name='user_email' required
            whileFocus={{ scale: 1.1 }}
          />
        </div>
        <div>
          <label>Mensaje</label>
          <motion.textarea name='message' required whileFocus={{ scale: 1.1 }} />
        </div>
        <div>
          <motion.input
            {...contactButtonAnimation}
            type='submit' value='Enviar'
            className='w-20 rounded-xl font-primary text-sm border border-black bg-white/70 cursor-pointer hover:shadow-lg hover:shadow-black/20 hover:bg-white'
          />
        </div>
      </form>
      <ContactFooter />
      <GoToTopButton />
    </section>
  )
}
