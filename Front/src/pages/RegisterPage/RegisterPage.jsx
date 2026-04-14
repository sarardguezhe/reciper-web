import { useState } from "react";
import { axiosInstance } from "../../utils/axios.js";
import { useNavigate} from "react-router-dom"

function UserRegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const passwordRules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[@$!%*?&.#_-]/.test(password)
  };

  const isPasswordValid = Object.values(passwordRules).every(Boolean);

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!isPasswordValid) {
      setMessage("La contraseña no cumple los requisitos.");
      return;
    }

    try {
      const response = await axiosInstance.post("/user/register", {
        email,
        password,
        name
      })

      if (response.status === 201) {
        setMessage("User registered successfully!");
        navigate("/login");
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Ha ocurrido un error. Inténtalo de nuevo más tarde.");
      }
    }
  };

  return (
    <div className="p-16">
      <div class="flex justify-center">
        <div class="flex flex-col justify-center">
          <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div class="overflow-hidden w-full m-4 flex justify-center bg-gray-50 rounded-lg shadow-xl">
              <div class="flex flex-col md:flex-row items-center shadow-md h-full  ">
                <div class="  md:w-1/2 overflow-hidden ">
                  <div class="flex flex-col items-center justify-center text-stone-400">
                    <ion-icon
                      name="logo-amplify"
                      class="text-5xl text-fuchsia-600"
                    ></ion-icon>
                    <div class="flex flex-col">
                    <div class="mb-16">
                      <section class="text-gray-600 body-font">
                        <div class="container px-5  mx-auto">
                          <div class="text-center">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Crea una cuenta</h1>
                            <div class="flex mt-6 justify-center">
                              <div class="w-16 h-1 rounded-full bg-violet-500 inline-flex"></div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>

                    {/* Formulario de registro */}
                      <form onSubmit={handleRegistration}>

                        <div class="m-2">NOMBRE</div>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            class="border-b border-violet-500 m-2  bg-gray-50 focus:outline-none"
                          />

                        <div class="m-2">EMAIL</div>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            class="border-b border-violet-500 m-2  bg-gray-50  focus:outline-none"
                          />

                         <div class="m-2">CONTRASEÑA</div>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            class="border-b border-violet-500 m-2  bg-gray-50  focus:outline-none"
                          />

                          {/* Requisitos de contraseña */}
                          <div class="m-2 text-sm">
                            <div class={passwordRules.length ? "text-green-500" : "text-gray-400"}>
                              • Mínimo 8 caracteres
                            </div>

                            <div class={passwordRules.uppercase ? "text-green-500" : "text-gray-400"}>
                              • Una letra mayúscula
                            </div>

                            <div class={passwordRules.lowercase ? "text-green-500" : "text-gray-400"}>
                              • Una letra minúscula
                            </div>

                            <div class={passwordRules.number ? "text-green-500" : "text-gray-400"}>
                              • Un número
                            </div>

                            <div class={passwordRules.special ? "text-green-500" : "text-gray-400"}>
                              • Un carácter especial (@$!%*?&.#_-)
                            </div>
                          </div>

                      <div class="flex my-4">
                        <button 
                        type="submit"
                        class="w-40 bg-violet-500 hover:bg-orange-400 text-white px-6 py-1 rounded-2xl font-medium">
                          REGISTRARSE
                        </button>
                      </div>

                      </form>

                      {message && <p className="mb-2 text-red">{message}</p>}

                      <a href="/login" class="m-2 hover:text-purple-700">¿Ya tienes una cuenta? Inicia sesión</a>
                    </div>
                  </div>
                </div>
                <div class=" md:w-1/2 overflow-hidden ">
                  <img
                    src="https://res.cloudinary.com/dc3pogjef/image/upload/v1693650432/food_menu_hmxsec.jpg"
                    alt=""
                    class=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}

export default UserRegistrationForm;