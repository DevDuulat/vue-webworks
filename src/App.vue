<template>
  <div id="app">
    <header class="bg-opacity-50 backdrop-filter backdrop-blur-sm fixed top-0 left-0 w-full z-50">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12">
            <a class="block text-teal-600" href="#">
              <span class="sr-only">Главная</span>
              <!--Logo-->
            </a>
          </div>

          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a class="text-white transition" href=""> Главная </a>
                </li>

                <li>
                  <a class="text-white transition" href=""> О нас </a>
                </li>

                <li>
                  <a class="text-white transition" href=""> FAQ </a>
                </li>

                <li>
                  <a class="text-white transition" href=""> Новости </a>
                </li>

                <li>
                  <a class="text-white transition" href=""> Партнёры </a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <a
                class="bg-[#333533] rounded-md px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-opacity-80"
                href="#"
              >
                Войти
              </a>

              <div class="hidden sm:flex">
                <a
                  class="bg-[#FFD100] rounded-md bg-background px-5 py-2.5 text-sm font-medium text-black transition duration-300 hover:bg-opacity-80"
                  href="#"
                >
                  Регистрация
                </a>
              </div>
            </div>

            <div class="block md:hidden">
              <button
                class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav> -->
    </header>

    <router-view />
  </div>
</template>

<script setup></script>

<style scoped></style>
