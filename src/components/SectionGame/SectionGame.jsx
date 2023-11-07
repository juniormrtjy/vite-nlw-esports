import { TwitchLogo } from '@phosphor-icons/react'

export default function SectionGame() {
  return (
    <div>
      {/* ========== TIBIA ========== */}
      <section
        id="tibia"
        className="bg-gradient-to-r from-[red] to-[blue] pt-[0.4rem] mt-[2.4rem] rounded-[1.1rem]"
      >
        {/* BOX */}
        <div className="bg-neutral-800 rounded-[0.8rem] p-[3.4rem]">
          {/* TITLE */}
          <h2 className="text-neutral-400 font-bold text-[3.6rem]">Tibia</h2>
          {/* IMG */}
          <img
            src="https://3.bp.blogspot.com/-nyus8VfJSfQ/XGxUhS8AiEI/AAAAAAAANmc/Tfj44yln3xMjcjSA2Z4KpaYKNpJSbMBJgCLcBGAs/s640/hq720.jpg"
            alt=""
            className="max-w-[90%] w-[45rem] rounded-lg border-neutral-500 border-[0.1rem] my-5"
          />
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
              <a
                href="https://www.tibia.com/mmorpg/free-multiplayer-online-role-playing-game.php"
                target="_blank"
              >
                Site Oficial
              </a>
            </li>

            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200">
              <a
                href="https://www.twitch.tv/directory/category/tibia"
                target="_blank"
              >
                <TwitchLogo />
              </a>
            </li>
          </ul>

          {/* TEXTO */}
          <h4 className="text-[1.8rem] mt-[1.5rem] font-semibold">
            Alguns Streamers
          </h4>
          {/* SOME STREAMERS */}

          <ul className="flex items-center flex-wrap gap-6 mt-4">
            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200 my-[2rem] inline-flex border border-neutral-200 rounded-full">
              <a
                href="https://www.twitch.tv/nakamacomtibia/videos"
                target="_blank"
              >
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/54370750-20bd-44cc-971f-8e24c7049830-profile_image-150x150.png"
                  alt=""
                  className="block rounded-full w-[5rem]"
                />
              </a>
            </li>
            {/* ... */}

            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200 my-[2rem] inline-flex border border-neutral-200 rounded-full">
              <a
                href="https://www.twitch.tv/willzeraa__/videos"
                target="_blank"
              >
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/45df5094-4976-4885-ba30-28553229004c-profile_image-150x150.png"
                  alt=""
                  className="block rounded-full w-[5rem]"
                />
              </a>
            </li>
            {/* ... */}

            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200 my-[2rem] inline-flex border border-neutral-200 rounded-full">
              <a href="https://www.twitch.tv/rafatny10/videos" target="_blank">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/0f131f2a-3257-441a-bfa2-9a6495e5a1f6-profile_image-150x150.png"
                  alt=""
                  className="block rounded-full w-[5rem]"
                />
              </a>
            </li>
            {/* ... */}
          </ul>

          <a
            href="#games"
            className="underline text-neutral-500 hover:text-neutral-400"
          >
            Games
          </a>
        </div>
      </section>

      {/* ========== COUNTER-STRIKE 2 ========== */}
      <section
        id="counter-strike"
        className="bg-gradient-to-r from-[red] to-[blue] pt-[0.4rem] mt-[2.4rem] rounded-[1.1rem]"
      >
        {/* BOX */}
        <div className="bg-neutral-800 rounded-[0.8rem] p-[3.4rem]">
          {/* TITLE */}
          <h2 className="text-neutral-400 font-bold text-[3.6rem]">
            Counter-Strike 2
          </h2>
          {/* IMG */}
          <img
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1696513856"
            alt=""
            className="max-w-[90%] w-[45rem] rounded-lg border-neutral-500 border-[0.1rem] my-5"
          />
          {/* TEXT */}
          <p className="text-[1.8rem] text-neutral-500">
            Há mais de duas décadas, o Counter-Strike oferece uma experiência
            competitiva de elite moldada por milhões de jogadores mundialmente.
            Agora, o próximo capítulo da história do CS vai começar. Isso é
            Counter-Strike 2.
          </p>

          {/* OFICIAL LINKS */}
          <ul className="flex items-center flex-wrap gap-6 mt-4">
            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200 my-[2rem] inline-flex border border-neutral-200 py-[0.5rem] px-[1.5rem] rounded-[0.8rem]">
              <a
                href="https://store.steampowered.com/app/730/CounterStrike_2/"
                target="_blank"
              >
                Página na steam
              </a>
            </li>

            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200">
              <a
                href="https://www.twitch.tv/directory/category/counter-strike"
                target="_blank"
              >
                <TwitchLogo />
              </a>
            </li>
          </ul>

          {/* TEXTO */}
          <h4 className="text-[1.8rem] mt-[1.5rem] font-semibold">
            Alguns Streamers
          </h4>
          {/* SOME STREAMERS */}

          <ul className="flex items-center flex-wrap gap-6 mt-4">
            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200 my-[2rem] inline-flex border border-neutral-200 rounded-full">
              <a href="https://www.twitch.tv/gaules" target="_blank">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-150x150.png"
                  alt=""
                  className="block rounded-full w-[5rem]"
                />
              </a>
            </li>
            {/* ... */}

            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200 my-[2rem] inline-flex border border-neutral-200 rounded-full">
              <a href="https://www.twitch.tv/michel/videos" target="_blank">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/dfb0cef3-87ca-4f09-9f52-7d7de319afbb-profile_image-150x150.png"
                  alt=""
                  className="block rounded-full w-[5rem]"
                />
              </a>
            </li>
            {/* ... */}

            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200 my-[2rem] inline-flex border border-neutral-200 rounded-full">
              <a href="https://www.twitch.tv/stewie2k/videos" target="_blank">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/00563f70-d05b-4786-addd-5a3b43c2e5b4-profile_image-150x150.png"
                  alt=""
                  className="block rounded-full w-[5rem]"
                />
              </a>
            </li>
            {/* ... */}
          </ul>

          <a
            href="#games"
            className="underline text-neutral-500 hover:text-neutral-400"
          >
            Games
          </a>
        </div>
      </section>

      {/* ========== GUILD WARS 2 ========== */}
      <section
        id="guild-wars"
        className="bg-gradient-to-r from-[red] to-[blue] pt-[0.4rem] mt-[2.4rem] rounded-[1.1rem]"
      >
        {/* BOX */}
        <div className="bg-neutral-800 rounded-[0.8rem] p-[3.4rem]">
          {/* TITLE */}
          <h2 className="text-neutral-400 font-bold text-[3.6rem]">
            Guild Wars 2
          </h2>
          {/* IMG */}
          <img
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1284210/header.jpg?t=1698088260"
            alt=""
            className="max-w-[90%] w-[45rem] rounded-lg border-neutral-500 border-[0.1rem] my-5"
          />
          {/* TEXT */}
          <p className="text-[1.8rem] text-neutral-500">
            Guild Wars 2 é um MMORPG premiado com combate dinâmico,
            personalização de personagens detalhada e sem a necessidade de
            assinatura. Escolha entre uma variedade de profissões e armas,
            explore um vasto mundo aberto, dispute em modos PVP e muito mais.
            Junte-se agora a mais de 16 milhões de jogadores!
          </p>

          {/* OFICIAL LINKS */}
          <ul className="flex items-center flex-wrap gap-6 mt-4">
            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200 my-[2rem] inline-flex border border-neutral-200 py-[0.5rem] px-[1.5rem] rounded-[0.8rem]">
              <a href="https://www.guildwars2.com/en/" target="_blank">
                Site oficial
              </a>
            </li>

            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200">
              <a
                href="https://www.twitch.tv/directory/category/guild-wars-2"
                target="_blank"
              >
                <TwitchLogo />
              </a>
            </li>
          </ul>

          {/* TEXTO */}
          <h4 className="text-[1.8rem] mt-[1.5rem] font-semibold">
            Alguns Streamers
          </h4>
          {/* SOME STREAMERS */}

          <ul className="flex items-center flex-wrap gap-6 mt-4">
            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200 my-[2rem] inline-flex border border-neutral-200 rounded-full">
              <a
                href="https://www.twitch.tv/livedochamp/videos"
                target="_blank"
              >
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/db575c96-f2d6-4f19-84d9-b4d766562b02-profile_image-150x150.png"
                  alt=""
                  className="block rounded-full w-[5rem]"
                />
              </a>
            </li>
            {/* ... */}

            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200 my-[2rem] inline-flex border border-neutral-200 rounded-full">
              <a href="https://www.twitch.tv/grimjacke/videos" target="_blank">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/5797417c-b2a5-4265-87fd-9d8309c66244-profile_image-150x150.png"
                  alt=""
                  className="block rounded-full w-[5rem]"
                />
              </a>
            </li>
            {/* ... */}

            {/* LINK */}
            <li className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200 my-[2rem] inline-flex border border-neutral-200 rounded-full">
              <a href="https://www.twitch.tv/novahh/videos" target="_blank">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/195e21d8-dee4-4f30-95d2-874b3d172bf7-profile_image-150x150.png"
                  alt=""
                  className="block rounded-full w-[5rem]"
                />
              </a>
            </li>
            {/* ... */}
          </ul>

          <a
            href="#games"
            className="underline text-neutral-500 hover:text-neutral-400"
          >
            Games
          </a>
        </div>
      </section>

      {/* ========== GUILD WARS 2 ========== */}
      <section
        id="guild-wars"
        className="bg-gradient-to-r from-[red] to-[blue] pt-[0.4rem] mt-[2.4rem] rounded-[1.1rem]"
      >
        {/* BOX */}
        <div className="bg-neutral-800 rounded-[0.8rem] p-[3.4rem]">
          {/* TITLE */}
          <h2 className="text-neutral-400 font-bold text-[3.6rem]">
            Rocketseat
          </h2>
          {/* TEXT */}
          <p className="text-[1.8rem] text-neutral-500">
            A{' '}
            <a
              href="https://www.rocketseat.com.br/"
              target="_blank"
              className="text-neutral-400 underline hover:text-neutral-300"
            >
              Rocketseat
            </a>{' '}
            é uma empresa que tem ajudado milhares de pessoas a iniciarem suas
            carreiras como dev. Este evento que participei, foi organizado por
            esta empresa. Como era de se esperar, o evento foi magnifico e me
            ajudou bastante. Pelos depoimentos na comunidade do discord, muitas
            outras pessoas puderam aprender bastante e se apaixonar por esta
            área que tem crescido muito. Creio que todo tipo de pessoa
            participou: pessoas que tinham algum conhecimento, como pessoas que
            estavam iniciando do 0. Se você ficou interessado, acesse o site
            para mais informações.
          </p>

          {/* LINK */}
          <a
            href="https://www.rocketseat.com.br/"
            target="_blank"
            className="hover:-translate-y-4 transition hover:duration-200 text-[2.4rem] text-neutral-200 my-[2rem] flex w-fit border border-neutral-200 py-[0.5rem] px-[1.5rem] rounded-[0.8rem]"
          >
            Rocketseat{' '}
          </a>

          <a
            href="#games"
            className="underline text-neutral-500 hover:text-neutral-400"
          >
            Games
          </a>
        </div>
      </section>
    </div>
  )
}
