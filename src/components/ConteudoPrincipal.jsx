import Banner from "./Banner";
import ButtonPlay from "./ButtonPlay";
import Description from "./Description";
import LogoImagens from "./LogoImages";
import Sections from "./Sections";
import Subtitle from "./Subtitle";
import Title from "./Title";

export default function ConteudoPrincipal({ logos, textButton, sectionStyle, subtitleStyle, description }){

    const titleHome = "Mergulhe no universo das Corridas Sustentáveis"

    const aboutLogos = [
        {
        search: "/logo-formula-e.svg",
        altImg: "Logotipo da Fóromula E",       
        },
        {
        search: "/logo-mahindra.svg",
        altImg: "Logotipo da Tech Mahindra"   ,    
        }
    ]

    const textButtonPlay = [
        {
         text: "Corra agora"
        }
    ]

    const styleOfSections = [
        {
        style: 'flex flex-col-reverse relative w-full min-w-56 bg-custom-radial rotate-180 lg:px-20 lg:py-20 lg:gap-5 md:px-40 md:py-30 md:gap-5 px-10 py-20'
        }
    ]

    const textAndStyleSubtitle = [
        {
        style: 'text-white font-russo lg:text-4xl md:text-3xl sm:text-2xl text-1xl lg:py-5 md:py-4 sm:py-3 py-2',
        text: 'Carros Sustentáveis'
        }
    ]

    const textAndStyleDescription = [
        {
        text: 'Emitem 1% de CO²'
        },
        {
        text: 'Carregados com Energia Renovável'
        },
        {
        text: 'Recarrega na frenagem'
        },
        {
        text: 'Mais de 322 km/h'
        }
    ]
    
    return(
        <>
            <Banner>
                <div className="flex flex-col items-center">
                    <Title title={titleHome}/>
                    <div className="flex gap-3 w-full h-auto justify-center items-center lg:w-3/4 md:w-4/5 sm:w-full">
                        <LogoImagens logotipos={aboutLogos}/>
                    </div>
                </div>
                <ButtonPlay playButton={textButtonPlay}/>
            </Banner>
            <Sections forSections={styleOfSections}>
                <div className="rotate-180 w-full text-start">
                    <Subtitle forSubtitle={textAndStyleSubtitle}/>
                </div>
                <div>
                    <div className="rotate-180">
                        <Description forDescription={textAndStyleDescription}/>
                    </div>
                </div>
            </Sections>
        </>
    )
}