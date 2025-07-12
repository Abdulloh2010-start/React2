export default function Header () {
  return (
    <header className="bg-[#1F242D] max-w-[1440px] mx-auto">
      <nav className="flex items-center justify-between h-[78px] px-[100px] py-[50px]">
        <img src="./src/Components/img/Link → Portfolio.png" alt="Logo" />
        <ul className="hidden lg:flex items-center gap-[42px] text-white">
          <li className="hover:text-cyan-400 transition-all duration-[0.3s] cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 transition-all duration-[0.3s] cursor-pointer">About</li>
          <li className="hover:text-cyan-400 transition-all duration-[0.3s] cursor-pointer">Services</li>
          <li className="hover:text-cyan-400 transition-all duration-[0.3s] cursor-pointer">Portfolio</li>
          <li className="hover:text-cyan-400 transition-all duration-[0.3s] cursor-pointer">Contact</li>
        </ul>
        <img className="block lg:hidden" src="./src/Components/img/Icon (3).png" alt="Menu" />
      </nav>
      <section className="flex flex-col lg:flex-row justify-between items-center px-[30px] lg:px-[129px] py-8">
        <div className="text-white">
          <h3 className="text-[32px] font-bold py-2">Hello It's Me</h3>
          <h2 className="text-[56px] font-bold">John Kendric</h2>
          <h3 className="text-[32px] font-bold py-2">And I'm a <span className="text-cyan-400">Frontend Develo|</span></h3>
          <p className="max-w-[636px] text-[16px] font-normal py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla libero labore exercitationem, iste iusto unde eos.</p>
          <ul className="flex gap-[20px] py-2">
            <li>
              <img src="./src/Components/img/Link (3).png" alt="icon" className="cursor-pointer"/>
            </li>
            <li>
              <img src="./src/Components/img/Link (2).png" alt="icon" className="cursor-pointer"/>
            </li>
            <li>
              <img src="./src/Components/img/Link (1).png" alt="icon" className="cursor-pointer"/>
            </li>
            <li>
              <img src="./src/Components/img/Link.png" alt="icon" className="cursor-pointer"/>
            </li>
          </ul>
          <button className="w-[176px] h-[45px] mt-[20px] cursor-pointer rounded-full bg-cyan-400 text-[#323946] font-semibold shadow-[0_0_10px_rgba(0,238,255,1)]">Download CV</button>
        </div>
        <img src="./src/Components/img/Снимок экрана 2024-11-19 183005.png" alt="profile" className="w-[504px] h-[600px] mt-8 lg:mt-0"/>
      </section>
    </header>
  );
};