<template>
    <div>
        <div class="pt-[80px] lg:pt-[135px]">
            <div class="container px-4 lg:max-w-screen-xl mx-auto my-4">
                <BreadCumb />
                <div class="grid lg:grid-cols-12">
                    <h2 class="font-bold py-2 block lg:hidden">Danh mục :</h2>
                    <div class="lg:col-span-3 hidden lg:block">
                        <h2 class="font-bold py-2">Danh mục</h2>
                        <div class="bg-gray-200 p-2 font-light mr-4">Danh mục sản phẩm</div>
                    </div>
                    <div class="lg:col-span-9">
                        <h1 class="text-4xl font-bold">
                            0012420 – ÖLFLEX EB 2X0,75 CÁP ĐIỀU KHIỂN ÖLFLEX EB 2X0.75
                        </h1>
                        <div class="grid grid-cols-2 mt-4">
                            <div class="flex">
                                <div class="w-full">
                                    <swiper :pagination="false" :loop="true" :spaceBetween="10"
                                        :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiper2">
                                        <swiper-slide v-for="(image, index) in images" :key="index">
                                            <NuxtImg width="640" height="640" :src="image" />
                                        </swiper-slide>
                                    </swiper>
                                    <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="4"
                                        :freeMode="true" :watchSlidesProgress="true" :modules="modules"
                                        class="mySwiper">
                                        <swiper-slide v-for="(image, index) in images" :key="index">
                                            <NuxtImg width="204" height="208" :src="image" />
                                        </swiper-slide>
                                    </swiper>
                                </div>
                            </div>
                            <div class="ml-3">
                                <div class="text-primary text-2xl">
                                    Mã sản phẩm: XAPD1201
                                </div>
                                <div class="my-4">
                                    <div class="flex justify-between max-w-96">
                                        <div class="text-xl">
                                            <b class="text-xl">Tình trạng hàng: </b>Còn hàng
                                        </div>
                                        <div class="text-xl">
                                            <b class="text-xl">Xuất xứ:</b> Morocco
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <NuxtLink class="text-lg" to="">Liên hệ để có giá tốt nhất: <br>
                                        Mr Vũ: 0908 878 633 <br>
                                        Mr Hoàng: 0933 441 466 <br>
                                        Mr Di: 0933 744 776 <br>
                                        Email: info@tienhungtech.com <br>
                                        sales@tienhungtech.comsales@tienhungtech.com</NuxtLink>
                                </div>
                                <div class="font-bold text-2xl my-3">Mô tả sản phẩm
                                </div>
                                <div class="my-3">
                                    HỘP RỖNG KIM LOẠI 1 LỖ <br>
                                    Empty control station, Harmony XAP, XB2 SL, zinc alloy, grey, M20, 1 cut out 22mm,
                                    80x80x51,5mm, UL cULus
                                    XAPD1201 – HỘP RỖNG KIM LOẠI – SCHNEIDER – TIENHUNGTECH
                                </div>
                                <button @click="showForm = true"
                                    class="mb-2 bg-primary py-3 px-3 text-xl text-white hover:bg-red-500 w-60 ">
                                    Liên Hệ Báo Giá
                                </button>
                                <div class="flex gap-2 text-lg items-center mt-5">
                                    Chia sẻ sản phẩm
                                    <Icon class="text-xl" name="fa6-brands:square-facebook" />
                                    <Icon class="text-xl" name="fa6-brands:linkedin" />
                                    <Icon class="text-xl" name="fa6-brands:square-twitter" />
                                </div>
                            </div>
                        </div>
                        <div v-if="showForm" class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                            <div class="bg-white p-6 w-full max-w-3xl max-h-lvh relative">
                                <h2 class="text-4xl text-center font-bold mb-4">BÁO GIÁ SẢN PHẨM</h2>
                                <form @submit.prevent="submitForm">
                                    <div class="mb-4">
                                        <label class="block text-xl font-light">Họ Tên</label>
                                        <input type="text" v-model="formData.name"
                                            class="w-full bg-gray-100 outline-primary outline-1 outline-offset-0 focus:ring-0 p-3" />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-xl font-light">Số điện thoại</label>
                                        <input type="text" v-model="formData.phone"
                                            class="w-full bg-gray-100 outline-primary outline-1 outline-offset-0 focus:ring-0 p-3" />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-xl font-light">Email</label>
                                        <input type="email" v-model="formData.email"
                                            class="w-full bg-gray-100 outline-primary outline-1 outline-offset-0 focus:ring-0 p-3" />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-xl font-light">Tin nhắn</label>
                                        <textarea v-model="formData.message"
                                            class="w-full bg-gray-100 outline-primary outline-1 outline-offset-0 focus:ring-0 p-10"></textarea>
                                    </div>
                                    <div class="text-center">
                                        <button @click="showForm = false"
                                            class="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
                                            <Icon class="text-4xl" name="fa6-solid:xmark" />
                                        </button>

                                    </div>
                                </form>
                                <button @click="showForm = false"
                                    class="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
                                    <Icon class="text-4xl" name="fa6-solid:xmark" />
                                </button>
                            </div>
                        </div>
                        <div class="my-4">
                            <div class="flex gap-2 relative">
                                <div v-for="(tab, index) in tabs" :key="index" class="relative">
                                    <button :class="['py-4 px-6 text-2xl relative',
                                        { 'text-black': currentTab === index, 'text-gray-400': currentTab !== index }]" @click="currentTab = index">
                                        {{ tab.name }}
                                        <!-- Đường viền dưới chạy ngang -->
                                        <span
                                            class="absolute left-0 bottom-0 w-full h-1 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out"
                                            :class="{ 'scale-x-100': currentTab === index }">
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <!-- Nội dung tab -->
                            <div v-for="(tab, index) in tabs" :key="index" v-show="currentTab === index" class="mt-4">
                                <p>{{ tab.content }}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            quantity: 1,
            currentTab: 0,
            tabs: [
                { name: 'Descripción 1', content: 'Contenido 1...' },
                { name: 'Descripción 2', content: 'Contenido 2...' },
                { name: 'Descripción 3', content: 'Contenido 3...' },
            ],
        };
    },
    setup() {
        const thumbsSwiper = ref(null);
        const images = ref(["/images/XAPD1201-website.jpg"]);

        const showForm = ref(false); // Khởi tạo showForm ở đây
        const formData = ref({
            name: '',
            email: '',
            phone: '',
            message: '',
        });

        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
            console.log('Thumbs swiper set:', thumbsSwiper.value); // Debug
        };

        const submitForm = () => {
            console.log('Form data:', formData.value);
            showForm.value = false;  // Ẩn form sau khi gửi
        };

        return {
            thumbsSwiper,
            setThumbsSwiper,
            modules: [FreeMode, Thumbs],
            images,
            thumbsSwiperInitialized: computed(() => {
                return thumbsSwiper.value ? thumbsSwiper.value : null;
            }),
            showForm,      // Thêm showForm vào đây
            formData,      // Thêm formData vào đây
            submitForm,    // Thêm submitForm vào đây
        };
    },
};

</script>

<style>
.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.mySwiper2 {
    height: 80%;
    width: 100%;
}

.mySwiper {
    height: 20%;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.7;
    cursor: pointer;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}

.swiper-slide NuxtImg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>