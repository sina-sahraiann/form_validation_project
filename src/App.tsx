import './App.css'
import Form1 from './components/Form1'
import NavBar from './components/navBar'
import bgImage from './sony-xperia-5-iii-3840x2160-android-12-4k-23876.jpeg'
function App() {

  return (
    <>
      {/* <div className="relative h-screen flex justify-around items-center">
        <img src={bgImage} className='absolute  w-full h-full object-cover' alt="not found" />
        <div className='absolute w-full h-full backdrop-blur-sm object-cover bg-slate-800 mix-blend-overlay'></div>
        <div className='z-30 text-zinc-100 hover:-translate-y-5 transition-all hover:text-zinc-400 hover:scale-105'>
          <h1 className='md:text-5xl text-3xl font-medium'>I'm Sina Sahraian</h1>
          <h4 className='md:text-3xl opacity-50 bold text-xl font-thin'>I'm a web developer</h4>
        </div>
      </div> */}
      <Form1 />
      {/* <NavBar /> */}

    </>
  )
}

export default App
