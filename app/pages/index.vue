<template>
    <div class="min-h-screen bg-dark flex items-center justify-center p-4">
        <div class="max-w-2xl w-full">
            <div class="text-center mb-12">
                <div class="w-20 h-20 mx-auto mb-6 text-secondary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
                </div>
                <h1 class="text-5xl font-bold text-white mb-4">
                Certificate Verification
                </h1>
                <p class="text-gray-300 text-lg">
                Verify authentic Atsba bootcamp certificates
                </p>
            </div>

            <form @submit.prevent="handleSubmit" class="relative">
                <div class="relative">
                    <input
                        v-model="certId"
                        type="text"
                        placeholder="Enter Certificate ID"
                        class="w-full px-6 py-5 pr-14 rounded-2xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border-2 border-transparent focus:border-secondary focus:outline-none transition-all text-lg"
                    />
                    <button
                        type="submit"
                        class="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary hover:bg-secondary/80 text-white p-3 rounded-xl transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
                
                <p class="text-gray-400 text-sm mt-4 text-center">
                Example: 6775c3a4f1b29d3ad4c0e8f0
                </p>
            </form>
            <div class="flex mx-auto mt-7">
                <img src="/atsba.svg" alt="" class="mx-auto">
            </div>
        </div>
        
    </div>
</template>

<script setup>
const certId = ref('')

const handleSubmit = () => {
    if (certId.value.trim()) {
        navigateTo(`/${certId.value.trim()}`)
    }
}
</script>