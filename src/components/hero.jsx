import { logo } from '../assets';

const hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

            <button type="button" onClick={() => window.open('https://github.com/marshaweru')} className="black_btn">
                Github
            </button>
        </nav>
    </header>
  )
}

export default hero