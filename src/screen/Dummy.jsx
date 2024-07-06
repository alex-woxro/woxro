import { BackgroundGradientAnimation } from "@/components/animation/BackgroundGradientAnimation"
import TextRevealByWord from "@/components/animation/TextRevealByWord"


const Dummy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <header className="w-full">
        <TextRevealByWord text="Hello world! This is a text reveal by word effect." />
      </header>
    </div>



  )
}

export default Dummy