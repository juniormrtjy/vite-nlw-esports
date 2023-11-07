export default function SectionGame() {
  return (
    <div>
      {/* TIBIA */}
      <section className="bg-gradient-to-r from-[red] to-[blue] pt-[0.4rem] mt-[2.4rem] rounded-[1.5rem]">
        {/* BOX */}
        <div className="bg-neutral-800 rounded-[0.8rem] p-[3.4rem]">
          {/* TITLE */}
          <h2 className="text-neutral-400 font-bold text-[3.6rem]">Tibia</h2>
          {/* IMG */}
          <img src="https://3.bp.blogspot.com/-nyus8VfJSfQ/XGxUhS8AiEI/AAAAAAAANmc/Tfj44yln3xMjcjSA2Z4KpaYKNpJSbMBJgCLcBGAs/s640/hq720.jpg" alt="" className="max-w-[90%] w-[45rem] rounded-lg border-neutral-500 border-[0.1rem] my-5"/>
          {/* TEXT */}
          <p className="text-[1.8rem] text-neutral-500">
            Tibia é um jogo eletrônico de RPG multijogador (MMORPG) gratuito,
            desenvolvido pela CipSoft. Criado em 1997, é um dos jogos mais
            antigos do gênero. Nele, os jogadores podem desenvolver as
            habilidades de seus personagens, buscar tesouros, resolver enigmas e
            explorar áreas como cidades, masmorras, florestas, desertos, ilhas,
            praias, minas, etc. Os personagens podem disputar lutas entre si ou
            com criaturas, tais como monstros, dragões, demônios, orcs,
            utilizando armas e magias, enquanto os NPCs não podem ser atacados
          </p>

          {/* OFICIAL LINKS */}
          <ul className="flex items-center flex-wrap gap-6 mt-4">
            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200 my-[2rem] inline-flex border border-neutral-200 py-[0.5rem] px-[1.5rem] rounded-[0.8rem]">
              <a href="#">Site Oficial</a>
            </li>

            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200">
              <a href="#">Twitch</a>
            </li>
          </ul>

          {/* TEXTO */}
          <h4 className="text-[1.8rem] mt-[1.5rem] font-bold">Alguns Streamers</h4>
          {/* SOME STREAMERS */}

          <ul className="flex items-center flex-wrap gap-6 mt-4">

            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200 my-[2rem] inline-flex border border-neutral-200 rounded-full">
                <a href="#">
                  <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/54370750-20bd-44cc-971f-8e24c7049830-profile_image-150x150.png" alt="" className="block rounded-full w-[5rem]" />
                </a>
            </li>
            {/* ... */}

          </ul>

          <a href="#games">Games</a>
        </div>
      </section>
    </div>
  )
}