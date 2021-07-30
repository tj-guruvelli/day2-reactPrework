function NavBar() {
  return (
    <header
      class="fixed opacity-75 w-full bg-gray-900 text-white md:flex md:justify-between"
      
    >
      <a class="font-bold block px-8 py-4" href="#top">
        Teja Guruvelli
      </a>
      <nav>
        <ul class="md:flex">
          <li>
            <a
              class="block px-8 py-4 hover:bg-black text-white px-8 py4 inline-block"
              
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              class="block px-8 py-4 hover:bg-black text-white px-8 py4 inline-block"
              
              href="#hobbies"
            >
              Interests/Hobbies
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
