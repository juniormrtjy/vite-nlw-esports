export default function Header() {
  return (
    <header className="text-center pt-8">
      <div className="w-[12rem] m-auto p-[0.3rem] rounded-full hover:scale-105 transition hover:duration-[0.3s] relative animate-[fromTop_0.8s_0.3s_backwards]">
        <div className="absolute top-0 left-0 w-full h-full bg-cyan-50 z-[-1] bg-gradient-to-r from-[red] to-[blue] rounded-full"></div>
        <a href="">
          <img
            src="https://www.github.com/juniormrtjy.png"
            className="w-full rounded-full "
          />
        </a>
      </div>
    </header>
  )
}
