<template>
  <div class="pt-[80px] lg:pt-[135px]">
    <div class="container px-4 lg: lg:max-w-screen-xl mx-auto">
      <BreadCumb />
      <div class="grid lg:grid-cols-12">
        <h2 class="font-bold py-2 block lg:hidden">Danh mục :</h2>
        <div class="lg:col-span-3 hidden lg:block">
          <h2 class="font-bold py-2">Danh mục</h2>
          <div class="bg-gray-200 p-2 font-light mr-4">
            Danh mục sản phẩm
          </div>
        </div>
        <div class="lg:col-span-9">
          <h2 class="font-bold py-2">CHỐNG SÉT LAN TRUYỀN WEIDMULLER</h2>
          <div class="lg:m-2 mb-2">
            <div class="grid lg:grid-cols-3 grid-cols-2 gap-4">
              <div v-for="(item, index) in ProductList" :key="index">
                <ProductItem :item="item"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const ProductList = [
  {
    image: [
      'images/XAPD1201-website-385x385 (1).jpg',
      'images/XAPD1201-website-385x385 (1).jpg',
      'images/XAPD1201-website-385x385 (1).jpg',
      'images/XAPD1201-website-385x385 (1).jpg',
    ],
    title: 'XAPD1201 – HỘP RỖNG KIM LOẠI – SCHNEIDER – TIENHUNGTECH',
    code: 135258000,
  },
  {
    image: [
      'images/XAPD1201-website-385x385 (1).jpg',
      'images/XAPD1201-website-385x385 (1).jpg',
      'images/XAPD1201-website-385x385 (1).jpg',
      'images/XAPD1201-website-385x385 (1).jpg',
    ],
    title: 'XAPD1201 – HỘP RỖNG KIM LOẠI – SCHNEIDER – TIENHUNGTECH',
    code: 135258000,
  },
  {
    image: [
      'images/XAPD1201-website-385x385 (1).jpg',
      'images/XAPD1201-website-385x385 (1).jpg',
      'images/XAPD1201-website-385x385 (1).jpg',
      'images/XAPD1201-website-385x385 (1).jpg',
    ],
    title: 'XAPD1201 – HỘP RỖNG KIM LOẠI – SCHNEIDER – TIENHUNGTECH',
    code: 135258000,
  },
  {
    image: [
      'images/XAPD1201-website-385x385 (1).jpg',
      'images/XAPD1201-website-385x385 (1).jpg',
      'images/XAPD1201-website-385x385 (1).jpg',
      'images/XAPD1201-website-385x385 (1).jpg',
    ],
    title: 'XAPD1201 – HỘP RỖNG KIM LOẠI – SCHNEIDER – TIENHUNGTECH',
    code: 135258000,
  },
]
</script>

<style></style>