import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';
import emailJS  from '@emailjs/browser';

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [notification, setNotification] = useState('')
  const [notificationColor, setNotificationColor] = useState('')

  function sendEmail(e) {
    e.preventDefault()

    if(name ==='' || email === '' || message === '') {
      setNotification("Os campos não podem estar vazios.")
      setNotificationColor("text-red-500")
      return false
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailJS.send(
      "service_quv3wps",
      "template_0hq58rm",
      templateParams,
      "_YrQKXZpj8I8dGX7J"
    ).then((response) => {
      console.log(response)
      setNotification("E-mail enviado com sucesso")
      setNotificationColor("text-green-500")
      setEmail('')
      setName('')
      setMessage('')
      return true
    }, (err) => {
      setNotification("Falha ao enviar o email");
      setNotificationColor("text-red-500");
      return false;  
    })
  }

  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ onde: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide">
                Entre em contato
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Entre em
                <br />
                contato!
              </h2>
            </div>
          </motion.div>
          <motion.form
          onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ onde: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Sua mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className='flex items-center w-full justify-between'>
              <button className="btn btn-lg">Enviar mensagem</button>
              <div className={`${notificationColor}`}>
                {notification}
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
