import { useState } from "react";
import { axiosInstance } from "../../utils/axios.js";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

function FormCreateIngredient() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [energeticValue, setEnergeticValue] = useState("");
  const [totalFat, setTotalFat] = useState("");
  const [saturatedFat, setSaturatedFat] = useState("");
  const [carbs, setCarbs] = useState("");
  const [sugars, setSugars] = useState("");
  const [sodium, setSodium] = useState("");
  const [image, setImage] = useState("");
  const [ , setMessage] = useState("");

  const navigate = useNavigate();


  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/ingredients", {
        name,
        description,
        totalFat,
        saturatedFat,
        energeticValue,
        carbs,
        sugars,
        sodium,
        image,
      });

      if (response.status === 200) {
        setMessage("UIngrdient added successfully!");
        navigate("/ingredients");
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <section class="text-gray-600 body-font relative ">
        <div class="container px-5 pb-24 pt-8 mx-auto shadow-lg ">
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="block flex-wrap -m-2 ">
            <form onSubmit={handleRegistration}>
                {/* Name */}
                <div class="p-2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Nombre:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)} 
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div class="p-2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                    Categoría:
                    </label>
                    <Form.Select
                    aria-label="Default select example"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>Vegetales</option>
                    <option>Fruta</option>
                    <option>Carne</option>
                    <option>Cereales</option>
                    <option>Aceites</option>
                  </Form.Select>
                  </div>
                </div>

                <div class="p-2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                    Descripción:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)} 
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div class="p-2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                    Valor energético:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={energeticValue}
                      onChange={(e) => setEnergeticValue(e.target.value)} 
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div class="p-2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                    Grasas:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={totalFat}
                      onChange={(e) => setTotalFat(e.target.value)} 
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div class="p-2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                    Grasas saturadas:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={saturatedFat}
                      onChange={(e) => setSaturatedFat(e.target.value)}
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div class="p-2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                    Carbohidratos:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={carbs}
                      onChange={(e) => setCarbs(e.target.value)} 
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div class="p-2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                    Azúcares:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={sugars}
                      onChange={(e) => setSugars(e.target.value)} 
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>


                <div class="p-2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                    Sodio:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={sodium}
                      onChange={(e) => setSodium(e.target.value)}
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>


                <div class="p-2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                    Imagen:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div class="p-2 w-full">
                  <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Agregar ingrediente
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormCreateIngredient;
