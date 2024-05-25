import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { useState } from "react";
import profile from "../public/profile.png";
import php from "../public/php.png";
import delphi from "../public/delphi.png";
import csharp from "../public/csharp.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Leonardo Reis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Leonardo Reis</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <BsApple
                  onClick={() => setLanguage(!language)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Leonardo Braga dos Reis
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              {language ? (
                <div>Backend Developer</div>
              ) : (
                <div>Desenvolvedor Backend</div>
              )}
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              {language ? (
                <div>
                  Backend developer with solid experience in C#, Delphi, and
                  PHP. Committed to delivering quality and scalable solutions.
                </div>
              ) : (
                <div>
                  Desenvolvedor backend com experiência sólida em C#, Delphi e
                  PHP. Comprometido em entregar soluções de qualidade e
                  escaláveis.
                </div>
              )}
            </p>

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={profile} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              <span className="text-teal-500">
                {language ? (
                  <div>My Value Proposition</div>
                ) : (
                  <div> Minha Proposta de Valor</div>
                )}
              </span>
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              {language ? (
                <div>
                  I am a professional specialized in system development, with
                  expertise in backend, primarily using PHP and Delphi. My
                  experience spans a variety of projects, where I have been
                  responsible for creating and maintaining robust and efficient
                  solutions. I have solid skills in software architecture,
                  database design, and performance optimization. Additionally, I
                  am always up-to-date with industry best practices and trends,
                  ensuring that my projects are aligned with the needs and
                  expectations of clients. I am passionate about solving complex
                  problems and constantly seeking challenges that allow me to
                  enhance my skills and contribute to the success of the
                  projects I am involved in.
                </div>
              ) : (
                <div>
                  Sou um profissional especializado no desenvolvimento de
                  sistemas, com expertise em backend, utilizando principalmente
                  PHP e Delphi. Minha experiência abrange uma variedade de
                  projetos, onde fui responsável por criar e manter soluções
                  robustas e eficientes. Tenho habilidades sólidas em
                  arquitetura de software, design de banco de dados e otimização
                  de desempenho. Além disso, estou sempre atualizado com as
                  melhores práticas e tendências da indústria, garantindo que
                  meus projetos estejam alinhados com as necessidades e
                  expectativas dos clientes. Sou apaixonado por resolver
                  problemas complexos e estou sempre em busca de desafios que me
                  permitam aprimorar minhas habilidades e contribuir para o
                  sucesso dos projetos em que estou envolvido.
                </div>
              )}
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={delphi} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">Delphi</h3>
              <p className="py-2">
                {language ? (
                  <div>
                    Currently, I am involved in the development and maintenance
                    of systems focused on public management. I am responsible
                    for modules including accounting, procurement, public
                    assets, fleet management, and warehouse management.
                  </div>
                ) : (
                  <div>
                    Atualmente, estou envolvido no desenvolvimento e manutenção
                    de sistemas voltados para a gestão pública. Sou responsável
                    pelos módulos de contabilidade, compras, patrimônio público,
                    frotas e almoxarifado.
                  </div>
                )}
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={php} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">PHP</h3>
              <p className="py-2">
                {language ? (
                  <div>
                    Currently, I am one of the individuals responsible for the
                    development of the fleet management system, utilizing PHP
                    with the Laravel framework.
                  </div>
                ) : (
                  <div>
                    Atualmente, sou um dos responsáveis pelo desenvolvimento do
                    sistema de gestão de frotas, utilizando PHP com o framework
                    Laravel.
                  </div>
                )}
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={csharp} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">C#</h3>
              <p className="py-2">
                {language ? (
                  <div>
                    Recently, I have been exploring the language and
                    capabilities of .NET. I dedicate daily time to studies, and
                    soon I will have a project to share here.
                  </div>
                ) : (
                  <div>
                    Recentemente, tenho explorado a linguagem e as
                    potencialidades do .NET. Dedico tempo diário aos estudos e
                    em breve terei um projeto para compartilhar aqui.
                  </div>
                )}
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              {language ? <div>Portfolio</div> : <div> Portfólio</div>}
            </h3>
            {language ? (
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Since the beginning of my career, I have worked with{" "}
                <span className="text-teal-500"> proprietary </span>
                systems. However, I have set aside time to develop some personal
                projects and build my portfolio. Through these projects, I aim
                to demonstrate my{" "}
                <span className="text-teal-500"> attention </span> to detail,
                knowing that they make all the difference in the final outcome.
              </p>
            ) : (
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Desde o início da minha carreira, trabalhei com sistemas
                <span className="text-teal-500"> proprietários </span>. No
                entanto, reservei um tempo para desenvolver alguns projetos
                pessoais e compor meu portfólio. Através desses projetos,
                procuro demonstrar minha{" "}
                <span className="text-teal-500">atenção </span> aos detalhes,
                sabendo que eles fazem toda a diferença no resultado final.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a
                href="https://github.com/leoReiis/SaiyanProject"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                  title={
                    language
                      ? "Sayan Project DashBoard"
                      : "Dashboard do Saiyan Project"
                  }
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/leoReiis/SaiyanProject"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                  title={
                    language
                      ? "Sayan Project"
                      : "Treino montado através do Saiyan Project"
                  }
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"150%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                title={
                  language
                    ? "Consuming API with axios"
                    : "Consumindo API usando axios"
                }
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"150%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                title={
                  language
                    ? "Private Project Contribution"
                    : "Contribuição em Projeto Privado"
                }
              />
            </div>
          </div>
        </section>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a
            href="https://www.linkedin.com/in/leoreiis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/leoReiis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </div>
      </main>
    </div>
  );
}
