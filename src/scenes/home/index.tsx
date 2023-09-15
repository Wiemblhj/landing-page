import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePage.png";
import Background from "@/assets/Bg.png";
import Smile from "@/assets/Smile.png";
import Base from "@/assets/Base.png";

import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <>
      <section
        id="home"
        style={{
          backgroundImage: `url(${Background}) `,
        }}
        className="gap-50  bg-contain bg-center bg-no-repeat py-20 md:h-full  md:pb-0"
      >
        {/* IMAGE AND MAIN HEADER */}
        <motion.div
          className="mx-auto  w-5/6 items-center justify-center md:flex md:h-5/6"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {/* MAIN HEADER */}
          <div className="z-10 mt-32 md:basis-3/5 ">
            {/* HEADINGS */}
            <div className="md:-mt-20 ">
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] ">
                  <h1 className="w-520px h-130px top-188px left-133px  leading-11 text-left text-4xl font-black tracking-normal">
                    Vous êtes un Professionnel en Art Dentaire,{" "}
                    <span className="font-black text-primary-100">EasyLab</span>{" "}
                    c’est conçu pour Vous !
                    <img alt="smile" src={Smile} className="ml-5 inline" />
                  </h1>
                </div>
              </div>

              <p className="mt-8 text-sm">
                Collaborer, Informer et s’informer de l’état instantanné de vos
                travaux, Gérer vos Projets Prothétiques pour une ergonomie
                organisationnelle Maximale. Accomplissez toutes vos tâches grace
                à votre Compte{" "}
                <span className="text-xl font-black ">#EasyLab</span>{" "}
                <a href="#" className="text-primary-100 underline">
                  {" "}
                  Voir Plus..
                </a>
              </p>
            </div>

            {/* ACTIONS */}
            <div className="mt-8 flex items-center gap-8">
              <ActionButton setSelectedPage={setSelectedPage}>
                Découvrez
              </ActionButton>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
            <img
              alt="Base"
              src={Base}
              className="absolute  inset-0 object-cover"
            />
            <img
              alt="home-pageGraphic"
              src={HomePageGraphic}
              className="relative"
            />
          </div>
        </motion.div>

        {/* Pour faire Simple */}
      </section>
      <section className="  w-1441px h-378px t-680px bg-gray-20 text-center">
        <div className="mx-auto  w-5/6 p-20">
        <h1 className="w-520px h-130px text-4xl font-black ">
          Pour Faire Simple
        </h1>
        <p className=" p-8 ">
          Avoir un compte à<span className="text-primary-100 font-black"> EasyLab.tn</span> vous aide à reprendre l’Artiste caché en
          vous et votre compte EasyLab vous facilite toute vos tâches
          orgnisationnelles Quotidienne en un click de façon tres simpifiée,
          Intuitive, dynamique, Multi-utilisateurs et EASY-To-USE.
        </p>
        </div>
      </section>
    </>
  );
};

export default Home;
