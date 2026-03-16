import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";

const useRecipes = () => {
    
  const [recipes, setRecipes] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRecipes = async () => {
    try {
      setLoading(true);

      const { data } = await axiosInstance.get("/recipes");

      setRecipes(data);

      const categories = data.map((recipe) => recipe.categories);
      const uniqueCategories = [...new Set(categories.flat())];

      setUniqueCategories(uniqueCategories.sort());

    } catch (err) {
      console.error("Error al obtener recetas:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return {
    recipes,
    uniqueCategories,
    loading,
    error,
    refetch: getRecipes
  };
};

export default useRecipes;