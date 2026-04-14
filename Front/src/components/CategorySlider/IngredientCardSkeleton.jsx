const IngredientCardSkeleton = () => {
  return (
    <div className="h-[360px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col animate-pulse">

      {/* Imagen */}
      <div className="w-full h-44 bg-gray-300"></div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>

        <div className="mt-auto">
          <div className="h-4 bg-gray-300 rounded w-24"></div>
        </div>
      </div>

    </div>
  );
};

export default IngredientCardSkeleton;