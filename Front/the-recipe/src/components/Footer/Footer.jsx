export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow mt-4">
      <div className="max-w-screen-xl mx-auto px-4 py-6 md:py-8">

        
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dc3pogjef/image/upload/v1693815536/bowl-with-spoon-svgrepo-com_1_mvy5p5.svg"
              className="h-8 mr-3"
              alt="Reciper Logo"
            />
            <span className="text-2xl font-semibold text-black">
              Reciper
            </span>
          </a>

          {/* Enlaces a GitHub */}
          <ul className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-sm font-medium text-gray-500 text-center sm:text-left">
            <li>
              <a href="https://github.com/sarardguezhe" className="hover:underline">
                Sara Rodríguez
              </a>
            </li>
            <li>
              <a href="https://github.com/dayecharry" className="hover:underline">
                Alvaro Cabrera
              </a>
            </li>
            <li>
              <a href="https://github.com/pablosierra-dev" className="hover:underline">
                Pablo Sierra
              </a>
            </li>
            <li>
              <a href="https://github.com/JuanFelipeCB01" className="hover:underline">
                Juan Felipe
              </a>
            </li>
          </ul>

        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

        <div className="text-center sm:text-left text-sm text-gray-500">
          <p>© 2023 Reciper. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
