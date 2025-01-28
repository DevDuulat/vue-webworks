<template>
  <section class="px-4 py-8 section_hero md:px-0 font-montserrat">
    <div class="container mx-auto max-w-7xl">
      <div class="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div class="hero-content">
            <h1 class="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Мы с другом создаем уникальные проекты
            </h1>
            <p class="mb-6 text-lg md:text-xl">
              Разработаем для вас лучшие веб-сайты и решения, сочетая креативность и технологии.
            </p>
            <a
              href="#"
              target="_blank"
              class="inline-block px-8 py-3 mr-4 text-white transition duration-300 bg-red-600 rounded-lg shadow-lg hover:bg-red-700"
            >
              Посмотреть проекты
            </a>
            <a
              href="#"
              target="_blank"
              class="inline-block px-8 py-3 text-white transition duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
            >
              Связаться с нами
            </a>
          </div>

        </div>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
          <img
            alt=""
            src="../assets/ivan.jpg"
            class="h-40 w-full object-cover rounded-xl sm:h-56 md:h-full"
          />

          <img
            alt=""
            src="../assets/dula.jpg"
            class="h-40 w-full object-cover rounded-xl sm:h-56 md:h-full"
          />
        </div>
        <div>
          <crypto-converter-widget
            amount="1"
            symbol="true"
            live="true"
            fiat="united-states-dollar"
            crypto="bitcoin"
            font-family="inherit"
            background-color="hsl(120, 2%, 20%, 20%)"
            decimal-places="2"
            border-radius="0.7rem"
            class="dark-bg"
          >
          </crypto-converter-widget>
        </div>
      </div>
    </div>
  </section>
</template>
