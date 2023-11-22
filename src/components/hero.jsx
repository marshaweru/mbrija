import { logo } from '../assets';

const hero = () => {
  return (
    <head className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

            <button type="button" onClick={() => window.open('https://github.com/marshaweru')} className="black_btn">
                Github
            </button>
        </nav>
        <h1 className="head_text">Condense Articles With <br /><span>OpenAI GPT-3.5</span>
        </h1>
        <h2 className="desc">An Open-Source article condenser that changes long articles into succinct and clear reviews. </h2>
    </head>
  )
}

export default hero