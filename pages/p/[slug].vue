<template>
    <div>
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
                        <h1>
                            0012420 – ÖLFLEX EB 2X0,75 CÁP ĐIỀU KHIỂN ÖLFLEX EB 2X0.75 – JJ-LAPP – TIENHUNGTECH
                        </h1>
                        <div class="flex">
                            <div>
                                <swiper :style="{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }" :loop="true" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper.value }" :modules="modules"
                                    class="mySwiper2">
                                    <swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-10.jpg" /></swiper-slide>
                                </swiper>
                                <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="4"
                                    :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="mySwiper">
                                    <swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide><swiper-slide><img
                                            src="https://swiperjs.com/demos/images/nature-10.jpg" /></swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const thumbsSwiper = ref(null);

        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };

        return {
            thumbsSwiper,
            setThumbsSwiper,
            modules: [FreeMode, Navigation, Thumbs],
        };
    },
};
</script>

<style>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

body {
    background: #000;
    color: #000;
}

.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

.mySwiper2 {
    height: 80%;
    width: 100%;
}

.mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>