import React from "react";
import CountUp from "react-countup";
import { InView, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FiDownload } from "react-icons/fi";

const Work = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="work" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row justify-center text-center items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-soft-light bg-top"></div> */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ onde: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent mb-4 mt-6">Experiências</h2>
            <motion.div
              variants={fadeIn("right", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ onde: false, amount: 0.3 }}
            >
              <h3 className="h3 mb-4">
                AUTO VIACAO ABC S/A (VIACAO MAUA) <br />
                <div className="flex justify-center gap-x-2">
                  <span className="flex gap-1 text-[15px] justify-center item">
                    Julho/{" "}
                    <div className="text-[18px] font-tertiary text-gradient mb-2">
                      {inView ? (
                        <div>
                          <CountUp start={-1} end={20} duration={2} />
                          <CountUp start={-1} end={21} duration={4} />
                        </div>
                      ) : null}
                    </div>
                  </span>
                  -
                  <span className="flex gap-1 text-[15px] justify-center item-center">
                    Julho/{" "}
                    <div className="text-[18px] font-tertiary text-gradient mb-2">
                      {inView ? (
                        <div>
                          <CountUp start={-1} end={20} duration={2} />
                          <CountUp start={-1} end={22} duration={4} />
                        </div>
                      ) : null}
                    </div>
                  </span>
                </div>
              </h3>
              <p className="mb-6">
                Assistente administrativo com atuação nos setores de CFTV e T.i,
                realizando manutenção de hardware, software e impressoras.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ onde: false, amount: 0.3 }}
              className="flex-1"
            >
              <h3 className="h3 mb-4">
                Cartão VerdeCard (Lojas Quero-Quero) <br />
                <div className="flex justify-center gap-x-2">
                  <span className="flex gap-1 text-[15px] justify-center item">
                    Julho/{" "}
                    <div className="text-[18px] font-tertiary text-gradient mb-2">
                      {inView ? (
                        <div>
                          <CountUp start={-1} end={20} duration={2} />
                          <CountUp start={-1} end={23} duration={4} />
                        </div>
                      ) : null}
                    </div>
                  </span>
                  -
                  <span className="flex gap-1 text-[15px] justify-center item-center">
                    Até o momento
                  </span>
                </div>
              </h3>
              <p className="mb-6">-</p>
            </motion.div>

            <div className="flex gap-x-8 items-center justify-center">
              <button className="flex items-center gap-x-2 px-4 py-4 btn btn-sm mb-5">
                Baixar Currículo
                <FiDownload size={30} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
