import SectionIntro from './SectionIntro/Intro'
import GameLinks from './GameLinks/GameLinks'
import SectionGame from './SectionGame/SectionGame'

export default function MainContent() {
  return (
    <main className="max-w-[72rem] w-11/12 mx-auto my-8">
      <SectionIntro />
      <GameLinks />
      <SectionGame/>
    </main>
  )
}