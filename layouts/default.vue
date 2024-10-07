<template>
  <div class="flex flex-col min-h-screen">
    <header
      :class="['fixed top-0 right-0 w-full  z-50 transition-all duration-300', { 'bg-black/90': isScrolled, 'bg-transparent': !isScrolled }]">
      <div class="h-[90px] lg:h-[135px]">
        <div class="max-w-screen-xl mx-auto">
          <div class="lg:flex justify-end items-center pt-4 mb-4 lg:mb-0 hidden">
            <div class="mr-16">
              <NuxtLink :class="{ 'text-white': isScrolled, 'text-black': !isScrolled }" class="mr-8"
                to="tel:+17704559110">+1-770-455-9110</NuxtLink>
              <NuxtLink :class="{ 'text-white': isScrolled, 'text-black': !isScrolled }" to="mailto:info@selcousa.com">
                info@selcousa.com</NuxtLink>
            </div>
          </div>
          <div class="lg:hidden flex">
            <div class="p-5">
              <NuxtLink to="/">
                <NuxtImg width="360" height="37" class="max-w-full h-auto" src="images/SELCO-USA-LOGO-500x51.png" />
              </NuxtLink>
              <div class="text-primary italic text-sm">
                Providing the Offshore Community Technical Solutions
              </div>
            </div>
            <div @click="  isMenuOpen = !isMenuOpen" class="p-5">
              <Icon class="text-3xl text-white " name="fa6-solid:bars" />
            </div>
          </div>
          <div :class="{ 'nav-menu': true, 'active': isMenuOpen }">
            <div class="flex lg:hidden pt-5 pr-5 justify-end" @click="  isMenuOpen = !isMenuOpen">
              <Icon class="text-3xl" name="fa6-solid:xmark" />
            </div>
            <ul class="divide-y mx-3 divide-gray-200">
              <li v-for="(item, index) in menuItems" :key="index" class="pb-2">
                <NuxtLink to="/" @click.prevent="toggleMenu(index)" :class="{
                  'text-gray-700': selectedMenu !== index
                }" class="block py-2 transition duration-300 ease-in-out hover:text-primary">
                  {{ item.name }}
                </NuxtLink>

                <!-- Menu con hiển thị khi click -->
                <div v-if="selectedMenu === index" class="">
                  <ul class="p-0">
                    <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex"
                      class="text-sm text-gray-600 hover:text-gray-800 transition duration-200">
                      {{ subItem }}
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="grid lg:grid-cols-2 lg:pb-8 items-center justify-center lg:justify-between">
            <div class="lg:col-span-1">
              <div class="lg:block hidden">
                <NuxtLink to="/">
                  <NuxtImg width="360" height="37" class="max-w-full h-auto" src="images/SELCO-USA-LOGO-500x51.png" />
                </NuxtLink>
              </div>
              <div class="text-primary italic text-sm lg:block hidden">
                Providing the Offshore Community Technical Solutions
              </div>
            </div>
            <div class="lg:col-span-1 hidden lg:block">
              <ul class="lg:flex text-white ">
                <li class="mr-8 text-primary hover:text-red-500 cursor-pointer"
                  :class="{ 'text-red-500': activeLink === 'Home' }" @click="setActiveLink('Home')">
                  <NuxtLink class="text-lg" to="/">Home</NuxtLink>
                </li>
                <li class="relative mr-8 text-primary hover:text-red-500 cursor-pointer"
                  :class="{ 'text-red-500': activeLink === 'products' }" @click="setActiveLink('products')">
                  <NuxtLink class="text-lg block" to="/Products">Products</NuxtLink>
                  <ul class="menu-hover">
                    <li class="border-t relative border-red-500 hover:bg-red-500 px-6 py-4">
                      <NuxtLink> Ships Alarm & Monitoring</NuxtLink>
                      <!-- Submenu -->
                      <ul class="submenu-hover">
                        <li class="px-6 py-4 border-t border-red-500">
                          <NuxtLink class=" ">Software 1</NuxtLink>
                        </li>
                        <li class="px-6 py-4 border-t">
                          <NuxtLink>Software 2</NuxtLink>
                        </li>
                        <li class="px-6 py-4 border-t">
                          <NuxtLink>Software 3</NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <li class="border-t hover:bg-red-500 px-6 py-4">
                      <NuxtLink> Software</NuxtLink>
                    </li>
                    <li class="border-t hover:bg-red-500 px-6 py-4">
                      <NuxtLink> Software</NuxtLink>
                    </li>
                    <li class="border-t relative hover:bg-red-500 px-6 py-4">
                      <NuxtLink> Software</NuxtLink>
                      <ul class="submenu-hover">
                        <li class="px-6 py-4 border-t border-red-500">
                          <NuxtLink>Software 1</NuxtLink>
                        </li>
                        <li class="px-6 py-4 border-t">
                          <NuxtLink>Software 2</NuxtLink>
                        </li>
                        <li class="px-6 py-4 border-t">
                          <NuxtLink>Software 3</NuxtLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="mr-8 text-primary hover:text-red-500 cursor-pointer"
                  :class="{ 'text-red-500': activeLink === 'documents' }" @click="setActiveLink('documents')">
                  <NuxtLink class="text-lg" to="/documents">Documents and Software</NuxtLink>
                </li>
                <li class="mr-8 text-primary hover:text-red-500 cursor-pointer"
                  :class="{ 'text-red-500': activeLink === 'about' }" @click="setActiveLink('about')">
                  <NuxtLink class="text-lg" to="/about">About</NuxtLink>
                </li>
                <li class="mr-8 text-primary hover:text-red-500 cursor-pointer"
                  :class="{ 'text-red-500': activeLink === 'contact' }" @click="setActiveLink('contact')">
                  <NuxtLink class="text-lg" to="/contact">Contact</NuxtLink>
                </li>
                <li class="mr-8 text-primary hover:text-red-500 cursor-pointer"
                  :class="{ 'text-red-500': activeLink === 'blog' }" @click="setActiveLink('blog')">
                  <NuxtLink class="text-lg" to="/blog">Blog</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="flex-grow"> <!-- This allows the content area to grow -->
      <slot />
    </div>
    <footer>
      <div class="bg-bgfooter lg:py-10 pt-10">
        <div class="max-w-screen-xl mx-auto">
          <div class="p-4">
            <div class="grid grid-cols-1 lg:grid-cols-12">
              <div class="lg:col-span-4">
                <h4 class="font-bold text-xl text-grayTitle uppercase">Social</h4>
                <div class="flex lg:mt-4 lg:mb-6 my-6 mt-4">
                  <button class="border hover:bg-red-500 w-12 h-12 rounded-md mr-2">
                    <Icon class="text-2xl text-grayContent" name="fa6-brands:facebook-f" />
                  </button>
                  <button class="border hover:bg-red-500 w-12 h-12 rounded-md mr-2">
                    <Icon class="text-2xl text-grayContent" name="fa6-brands:facebook-f" />
                  </button>
                  <button class="border hover:bg-red-500 w-12 h-12 rounded-md mr-2">
                    <Icon class="text-2xl text-grayContent" name="fa6-brands:facebook-f" />
                  </button>
                  <button class="border hover:bg-red-500 w-12 h-12 rounded-md mr-2">
                    <Icon class="text-2xl text-grayContent" name="fa6-brands:facebook-f" />
                  </button>
                </div>
                <div class="border-t border-grayContent pt-7" style="width: 360px;">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15338.43487931804!2d108.17844570000001!3d16.033871549999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1728243447637!5m2!1svi!2s"
                    width="360" height="250" style="border:0;" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              <div class="lg:col-span-4">
                <div class="lg:ml-6 mt-4 lg:mt-0">
                  <h4 class="font-bold text-xl text-grayTitle mb-1 uppercase">Quick links</h4>
                  <div class="py-2">
                    <NuxtLink class="text-grayContent hover:text-red-500 " to="">Selco USA</NuxtLink>
                  </div>
                  <div class="py-2">
                    <NuxtLink class="text-grayContent hover:text-red-500 " to="">Ground Fault</NuxtLink>
                  </div>
                  <div class="py-2">
                    <NuxtLink class="text-grayContent hover:text-red-500 " to="">Generator Controller</NuxtLink>
                  </div>
                  <div class="py-2">
                    <NuxtLink class="text-grayContent hover:text-red-500 " to="">Flexgen</NuxtLink>
                  </div>
                  <div class="py-2">
                    <NuxtLink class="text-grayContent hover:text-red-500 " to="">Potentiometer</NuxtLink>
                  </div>
                  <div class="py-2">
                    <NuxtLink class="text-grayContent hover:text-red-500 " to="">Insulation Detection</NuxtLink>
                  </div>
                  <div class="py-2">
                    <NuxtLink class="text-grayContent hover:text-red-500 " to="">Synchroscope</NuxtLink>
                  </div>
                  <div class="py-2">
                    <NuxtLink class="text-grayContent hover:text-red-500 " to="">Arc Protection Relay</NuxtLink>
                  </div>
                  <div class="py-2">
                    <NuxtLink class="text-grayContent hover:text-red-500 " to="">Marine Alarm Panel</NuxtLink>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-4">
                <div class="lg:mr-8 my-4 lg:my-0">
                  <h4 class="font-bold text-xl text-grayTitle my-2 lg:mb-1 uppercase">Search for Products</h4>
                  <div class="lg:my-7 mb-7">
                    <form action="">
                      <input type="text"
                        class="pl-2 py-3 w-full rounded-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Search...">
                    </form>
                  </div>
                  <div class="border-t border-grayContent pt-7">
                    <h6 class="text-grayContent text-sm lg:text-xl">Phone:</h6>
                    <h6>
                      <NuxtLink
                        class="text-sm lg:text-xl text-grayContent hover:text-red-500 underline hover:no-underline"
                        to="">
                        +1-770-455-9110</NuxtLink>
                    </h6>
                  </div>
                  <div class="my-7">
                    <h6 class="text-grayContent text-sm lg:text-xl">Phone:</h6>
                    <h6>
                      <NuxtLink
                        class="text-sm lg:text-xl text-grayContent hover:text-red-500 underline hover:no-underline"
                        to="">
                        4560
                        River Bottom Drive
                        Norcross, GA 30092
                        USA</NuxtLink>
                    </h6>
                  </div>
                  <div class="my-7">
                    <h6 class="text-grayContent text-sm lg:text-xl">Email:</h6>
                    <h6>
                      <NuxtLink
                        class="text-sm lg:text-xl text-grayContent hover:text-red-500 underline hover:no-underline"
                        to="">
                        4560
                        info@selcousa.com</NuxtLink>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-bgfooterBot">
        <div class="max-w-screen-xl mx-auto">
          <div class="py-8 text-center lg:text-left lg:flex lg:justify-between text-grayContent">
            <div class="pb-3 lg:pb-0">
              Copyright © 2024 . All Rights Reserved. Our Policies
            </div>
            <div class=" ">
              SELCO USA, INC. | DUNS: 86-952-7408 | CAGE code 88BF3
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
// -------------------------------- Đóng mở Mobile NAVBAR-----------------
interface MenuItem {
  name: string;
  submenu: string[];
}

// Khai báo biến và kiểu dữ liệu
const selectedMenu = ref<number | null>(null)

// Dữ liệu menu với kiểu MenuItem[]
const menuItems: MenuItem[] = [
  {
    name: 'Home',
    submenu: ['Submenu 1', 'Submenu 2', 'Submenu 3']
  },
  {
    name: 'Nail Polishes',
    submenu: ['Nail Color 1', 'Nail Color 2', 'Nail Color 3']
  },
  {
    name: 'Manicure',
    submenu: ['Manicure 1', 'Manicure 2']
  },
  {
    name: 'Kits',
    submenu: ['Kit 1', 'Kit 2', 'Kit 3']
  },
  {
    name: 'Outlet',
    submenu: ['Outlet 1', 'Outlet 2']
  },
  {
    name: 'Learn With Us',
    submenu: ['Lesson 1', 'Lesson 2']
  }
]
// Hàm toggleMenu để thay đổi selectedMenu
const toggleMenu = (index: number) => {
  selectedMenu.value = selectedMenu.value === index ? null : index
}
const isMenuOpen = ref(false)
// -------------------------------------------------------------------
import { ref, onMounted, onBeforeUnmount } from 'vue';
const activeLink = ref('home'); // Khởi tạo biến activeLink
const isScrolled = ref(false); // Khởi tạo biến để theo dõi trạng thái cuộn

// Hàm để cập nhật activeLink khi nhấp vào một item
const setActiveLink = (link: string) => {
  activeLink.value = link; // Cập nhật giá trị activeLink
};

// Hàm để kiểm tra trạng thái cuộn
const handleScroll = () => {
  isScrolled.value = window.scrollY > 135; // Cập nhật giá trị isScrolled dựa vào vị trí cuộn
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll); // Thêm sự kiện cuộn khi component được gắn
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll); // Xóa sự kiện cuộn khi component bị hủy
});
</script>

<style></style>
