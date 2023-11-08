import { Link } from 'react-scroll'

export default function GameLinks() {
  return (
    <section
      name="games"
      className="bg-gradient-to-r from-[red] to-[blue] pt-[0.4rem] mt-[2.4rem] rounded-[1.5rem] animate-[fromLeft_1s_0.5s_backwards]"
    >
      <div className="bg-neutral-800 rounded-[0.8rem] p-[3.4rem]">
        <h2 className="text-neutral-400 font-bold text-[3.6rem]">Games</h2>

        <ul className="flex items-center flex-wrap gap-6 mt-4">
          {/* LINK */}
          <li>
            <Link to="tibia" offset={-15} className="cursor-pointer">
              <img
                className="w-[15rem] rounded-lg border-[0.1rem] border-neutral-500 hover:-translate-y-4 transition hover:duration-200"
                src="https://static-cdn.jtvnw.net/ttv-boxart/19619_IGDB-285x380.jpg"
              />
            </Link>
          </li>

          {/* LINK */}
          <li>
            <Link to="counter-strike" offset={-15} className="cursor-pointer">
              <img
                className="w-[15rem] rounded-lg border-[0.1rem] border-neutral-500 hover:-translate-y-4 transition hover:duration-200"
                src="https://static-cdn.jtvnw.net/ttv-boxart/32399-285x380.jpg"
              />
            </Link>
          </li>

          {/* LINK */}
          <li>
            <Link to="guild-wars" offset={-15} className="cursor-pointer">
              <img
                className="w-[15rem] rounded-lg border-[0.1rem] border-neutral-500 hover:-translate-y-4 transition hover:duration-200"
                src="https://static-cdn.jtvnw.net/ttv-boxart/19357_IGDB-285x380.jpg"
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
