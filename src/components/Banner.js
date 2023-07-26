import React from 'react';
import Image from '../assets/AvatarSiteBanner.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Hello <span>World!!</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col lg:gap-5 mr-4 mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leadding-[1]"
            >
              <span className="text-white">Sou desenvolvedor </span>
              <TypeAnimation
                sequence={[
                  "Back-end em Node.js e Springboot",
                  1000,
                  "Front-end em React.js",
                  1000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Sou um estudante de Sistemas de Informação na Unilasalle-RJ,
              Niterói. Meu foco são projetos em Node.js, React e Spring Boot. No
              meu portfólio, você pode encontrar mais sobre mim, acessando meu
              perfil no LinkedIn e também explorar alguns dos meus projetos no
              GitHub. Apaixonado por tecnologia e sempre em busca de soluções
              inovadoras. Fique à vontade para conhecer mais sobre o meu
              trabalho!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a
                href="https://github.com/MatheusSouSoa?tab=repositories"
                className="text-gradient btn-link"
              >
                Meu repositório
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.linkedin.com/in/matheussouzasoares/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/MatheusSouSoa">
                <FaGithub />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
