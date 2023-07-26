import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'; 
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row justify-center text-center items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-soft-light bg-top"></div> */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ onde: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent mb-4 mt-6">Sobre mim</h2>
            <h3 className="h3 mb-4">
              Conheça minha jornada tecnológica e paixão pelo desenvolvimento.
            </h3>
            <p className="mb-6">
              Durante o meu desenvolvimento, tive a oportunidade de interagir
              com diversas tecnologias e linguagens de programação, como Swagger
              para documentação de APIs, Git para controle de versão, RabbitMQ
              para mensageria, Spring Boot e Node.js para desenvolvimento de
              aplicações, Python para desenvolvimento de jogos, além de tecnologias front-end como Bootstrap,
               React.js, HTML5, CSS3 e Tailwind CSS para criar
              interfaces web atraentes e responsivas. Ao longo dessa jornada,
              também adquiri experiência com bancos de dados NoSQL, como o
              MongoDB, e bancos de dados relacionais, como o MySQL e PostgreSQL.
              Essas experiências me permitiram enfrentar diversos desafios
              tecnológicos com confiança, e estou sempre entusiasmado em
              aprender e aplicar novas habilidades para criar soluções
              inovadoras e eficientes.
            </p>
            <div className="flex gap-x-6 justify-center items-center lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <div>
                      <CountUp start={-1} end={6} duration={4} />°
                    </div>
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Período da <br />
                  Faculdade
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <div>
                      <CountUp start={-1} end={24} duration={4} />
                    </div>
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Anos de
                  <br />
                  Idade
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <div>
                      <CountUp start={-1} end={9} duration={4} />+
                    </div>
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Média do
                  <br />
                  CR
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <div>
                      <CountUp start={-1} end={40} duration={4} />+
                    </div>
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projetos pessoais
                  <br />
                  Finalizados
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center justify-center">
              <a href='#contact'>
               <button className="btn btn-lg">Contato</button> 
              </a>
              <a
                href="https://github.com/MatheusSouSoa?tab=repositories"
                className="text-gradient btn-link"
              >
                Meu Repositório
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
