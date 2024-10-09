<template>
    <div>
        <div class="relative col-span-1 group">
            <div class="border relative overflow-hidden">
                <div class="p-3 relative">
                    <div class="flex justify-center items-center">
                        <NuxtLink to="">
                            <NuxtImg width="385" height="385" :src="item.image[0]" />
                        </NuxtLink>
                    </div>
                    <div class="lg:hidden block">
                        <button class="my-2 bg-primary py-1 px-3 text-white hover:bg-red-500 w-full ">
                            Nhận Báo Giá
                        </button>
                        <NuxtLink to="">
                            <button class="bg-red-500 py-1 px-3 text-white w-full">
                                Xem Chi Tiết
                            </button>
                        </NuxtLink>
                    </div>
                    <div class="pt-2">
                        <NuxtLink to="">
                            <h2 class="font-semibold text-sm lg:text-base">{{ item.title }}</h2>
                        </NuxtLink>
                    </div>
                    <div class="uppercase pt-2 font-light text-gray-500">
                        Mã SP: {{ item.code }}
                    </div>
                </div>
                <div
                    class="absolute inset-0 bg-white/80 opacity-0 transform -translate-y-full transition-transform duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                </div>
                <div class="absolute inset-0 flex flex-col justify-center items-center">
                    <button @click="showForm = true"
                        class="mb-2 bg-primary py-1 px-3 text-white hover:bg-red-500 w-40 opacity-0 transform translate-y-full transition-all duration-500 delay-[150ms] group-hover:translate-y-0 group-hover:opacity-100">
                        Nhận Báo Giá
                    </button>
                    <NuxtLink to="">
                        <button
                            class=" py-1 px-3 border text-red-500 border-red-500 hover:bg-red-500 hover:text-white w-40 opacity-0 transform translate-y-full transition-all duration-100 delay-[300ms] group-hover:translate-y-0 group-hover:opacity-100">
                            Xem Chi Tiết
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Modal form -->
        <div v-if="showForm" class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div class="bg-white p-6 w-full max-w-3xl max-h-lvh relative">
                <h2 class="text-4xl text-center font-bold mb-4">BÁO GIÁ SẢN PHẨM</h2>
                <form @submit.prevent="submitForm">
                    <!-- Form content -->
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
                        <button type="submit"
                            class="bg-primary text-xl text-white w-44 py-3 hover:bg-red-500 ">Gửi</button>
                    </div>
                </form>
                <button @click="showForm = false" class="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
                    <Icon class="text-4xl" name="fa6-solid:xmark" />
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
});
import { ref } from 'vue';

const showForm = ref(false);

const formData = ref({
    name: '',
    email: '',
    phone: '',
    message: ''
});

const submitForm = () => {
    console.log('Form data:', formData.value);
    showForm.value = false;  // Ẩn form sau khi gửi
};
</script>

<style></style>
