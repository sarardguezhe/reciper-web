import React, { useState } from "react";
import FormCreateIngredient from "../../components/FormCreateIngredient/FormCreateIngredient";
import CategorySlider from "../../components/CategorySlider/CategorySlider";
import { useAuth } from "../../shared/AuthContext";

function IngredientsPage() {

  const auth = useAuth();
  const { user } = useAuth();
  const [display, setDisplay] = useState(false);

  const displayForm = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div className="ingredients shadow-xl mt-16 pb-16">
        <div className="container px-5 pt-8 mx-auto">
          <div className="text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Los ingredientes de nuestras recetas:
            </h1>
            <div className="flex mt-6 justify-center"></div>
          </div>
        </div>
        {auth.isAuthenticated && user.role === "admin" && (
          <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
              <button
                onClick={displayForm}
                className="flex mx-auto mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-0"
              >
                + Agregar Ingrediente
              </button>
            </div>
          </section>
        )}
        {display && (
          <div>
            <FormCreateIngredient />
          </div>
        )}

          <CategorySlider category="Vegetales" />
          <CategorySlider category="Fruta" />
          <CategorySlider category="Cereales" />
          <CategorySlider category="Carne" />
          <CategorySlider category="Especias" />
        
      </div>

    </>
  );
}

export default IngredientsPage;
