const RecipeCardSkeleton = () => {
  return (
    <div className="p-4 md:w-1/2 lg:w-1/3 w-full">
      <div className="h-full border-opacity-60 rounded-xl shadow-xl overflow-hidden animate-pulse">

        {/* Imagen */}
        <div className="w-full h-48 bg-gray-300"></div>

        {/* Contenido */}
        <div className="p-6 space-y-4">

          {/* Chef */}
          <div className="h-3 bg-gray-300 rounded w-1/4"></div>

          {/* Título */}
          <div className="h-5 bg-gray-300 rounded w-3/4"></div>

          {/* Descripción */}
          <div className="space-y-2 h-20">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>

          {/* Botones */}
          <div className="flex items-center flex-wrap pt-4">

            <div className="h-8 w-24 bg-gray-300 rounded"></div>

            <div className="flex gap-4 ml-auto">
              <div className="h-4 w-10 bg-gray-300 rounded"></div>
              <div className="h-4 w-10 bg-gray-300 rounded"></div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default RecipeCardSkeleton;