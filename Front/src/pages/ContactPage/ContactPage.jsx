

function ContactPage() {
  return (
    <>
  <section class="text-gray-600 body-font py-16 px-4">
    <div class="container mx-auto flex px-5 p-10 md:flex-row flex-col items-center shadow-xl rounded-lg">
          <section class="text-gray-600 body-font relative">
        <div class="container pt-8 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contacta con nosostros</h1>
            <p class="lg:w-11/12 mx-auto leading-relaxed text-base">¡Nos encantaría ayudarte a crear una experiencia culinaria única! En nuestro equipo, contamos con talentosos cocineros listos para diseñar una receta personalizada que se adapte perfectamente a tus gustos y necesidades. No dudes en ponerte en contacto con nosotros para que podamos empezar a cocinar algo delicioso juntos. ¡Esperamos tu mensaje!</p>
          </div>
          <div class=" md:w-11/12 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">Nombre</label>
                  <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">Apellidos</label>
                  <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">Mensaje</label>
                  <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto bg-violet-500 hover:bg-orange-400 px-6 py-1 rounded-2xl text-white font-medium">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="text-gray-600 body-font relative">
    <div class="lg:max-w-5xl lg:w-full md:w-1/2 my-8">
      <img class="object-cover object-center rounded-3xl" alt="hero" src="https://img.freepik.com/foto-gratis/cocinero-sexo-femenino-que-senala-dedo-telefono-inteligente-uniforme-blanco-mirando-alegre-vista-frontal_176474-13431.jpg?w=1380&t=st=1693842010~exp=1693842610~hmac=3f6570e7b77fb676f50cfb2df9979f227870b7c3d4c41621b22385db32ae5fc1"/>
    </div>
    </section>

  </div>
</section>
    </>
  );
}

export default ContactPage;
