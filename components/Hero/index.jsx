// import { StyledDivContainer, StyledDivHero, StyledDivWelcome, StyledDivColumn, StyledPTag, StyledH2Title, StyledATitle, StyledPEntry} from './Hero.styles'

export const Hero = () => {
  return (
    <div className="bg-black px-8 text-white text-xl leading-7">
      <div className="py-14 my-0 mx-auto text-start md:py-20 lg:py-28 md:w-full lg:w-4/5">
        <div className="flex items-stretch gap-20 content-between lg:gap-10 md:flex-col">
          <div className="flex-1 break-words text-start">
              <p className="text-sm py-1">
                ÚLTIMO EPISODIO // 
                7 de septiembre de 2022
              </p>
              <h2 className="mt-7 mb-5 text-xl tracking-tight leading-6 md:text-2xl lg:text-4xl">
                <a>
                  JOSÉ DOMINGO DÍAZ
                </a>
              </h2>
              <p>
                En este Corito Histórico, los muchachos Javier Lara (en Twitter @vzla_apesta) y Doriann Márquez (en Twitter @Hostioso0294) traen a un poco conocido villano de la Guerra de Independencia, quién por […]
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}