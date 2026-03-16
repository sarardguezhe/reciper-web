const TopRecipeSkeleton = () => {
    
  return (
    <section className="text-gray-600 body-font animate-pulse">
      <div className="container px-5 mx-auto">
        <div className="flex justify-center flex-wrap m-4">
          <div className="p-4 w-4/5">
            <div className="h-full rounded-lg overflow-hidden border-solid border-2 border-violet-500 shadow-xl bg-white">

              {/* Imagen */}
              <div className="lg:h-48 md:h-36 bg-gray-300 w-full"></div>

              {/* Contenido */}
              <div className="p-6 space-y-4">

                <div className="h-3 bg-gray-300 rounded w-1/3"></div>

                <div className="h-5 bg-gray-300 rounded w-3/4"></div>

                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>

                <div className="flex items-center justify-between pt-4">

                  <div className="h-4 bg-gray-300 rounded w-20"></div>

                  <div className="flex gap-4">
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                    <div className="h-4 bg-gray-300 rounded w-20"></div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRecipeSkeleton;