<template>
  <div :class="{'dark': isDarkMode}" class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800">
    <!-- Sidebar Overlay -->
    <div
        v-if="isSidebarOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-20"
        @click="toggleSidebar"
    ></div>

    <!-- Sidebar -->
    <aside
        :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
        class="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 shadow-lg z-30 transform transition-transform duration-300 ease-in-out"
    >
      <div class="p-4 flex justify-between items-center dark:text-white">
        <h2 class="text-xl font-semibold">Menu</h2>
        <button @click="toggleSidebar" class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav class="mt-4">
        <router-link
            to="/"
            class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white dark:hover:bg-gray-700 dark:text-white"
            @click="toggleSidebar"
        >
          Home
        </router-link>
        <router-link
            to="/applications"
            class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-white dark:hover:bg-gray-700 dark:text-white"
            @click="toggleSidebar"
        >
          Job Applications
        </router-link>
        <router-link
            to="/cv-templates"
            class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r from-pink-400 to-red-500 hover:text-white dark:hover:bg-gray-700 dark:text-white"
            @click="toggleSidebar"
        >
          CV Templates
        </router-link>
        <router-link
            to="/motivation-letters"
            class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r from-yellow-400 to-orange-500 hover:text-white dark:hover:bg-gray-700 dark:text-white"
            @click="toggleSidebar"
        >
          Motivation Letters
        </router-link>
      </nav>
    </aside>

    <!-- Header -->
    <header class="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center relative">
      <!-- Left: Hamburger Menu Icon -->
      <div class="flex items-center space-x-4">
        <button @click="toggleSidebar" class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <!-- Sayfa Başlığı -->
        <span class="text-xl font-semibold text-gray-800 dark:text-gray-200">{{ pageTitle }}</span>
      </div>

      <!-- Right: Profile and Settings -->
      <div class="flex items-center space-x-4">
        <div class="relative">
          <button @click="toggleProfileDropdown" class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 18.364A9 9 0 1118.364 5.121 9 9 0 015.121 18.364z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </button>

          <!-- Profile Dropdown Menu -->
          <div v-if="isProfileDropdownOpen" class="absolute right-0 mt-2 pb-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20">
            <div class="p-4 flex items-center">
              <img src="https://via.placeholder.com/40" alt="Profile Picture" class="rounded-full h-10 w-10">
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-800 dark:text-gray-200">John Doe</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">johndoe@example.com</p>
              </div>
            </div>
            <div class="border-t border-gray-200 dark:border-gray-600"></div>
            <router-link
                to="/profile"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                @click="toggleProfileDropdown"
            >
              Profile
            </router-link>
            <router-link
                to="/settings"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                @click="toggleProfileDropdown"
            >
              Settings
            </router-link>

            <!-- Dark Mode Toggle -->
            <div class="px-4 py-2 flex items-center justify-between">
              <span class="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
              <label class="flex items-center cursor-pointer">
                <div class="relative">
                  <input
                      type="checkbox"
                      id="dark-mode-toggle"
                      class="sr-only"
                      @click.stop="toggleDarkMode"
                      v-model="isDarkMode"
                  />
                  <div class="block bg-gray-300 dark:bg-gray-600 w-10 h-6 rounded-full"></div>
                  <div
                      :class="isDarkMode ? 'translate-x-4 bg-blue-500' : 'translate-x-0 bg-white dark:bg-gray-400'"
                      class="dot absolute left-1 top-1 w-4 h-4 rounded-full transition transform"
                  ></div>
                </div>
              </label>
            </div>

            <router-link
                to="/feedback"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                @click="toggleProfileDropdown"
            >
              Feedback
            </router-link>
            <div class="border-t border-gray-200 dark:border-gray-600"></div>
            <button
                @click="logout"
                class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 p-4 dark:bg-gray-800 dark:text-gray-200" @click="closeProfileDropdown">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

defineProps({
  pageTitle: {
    type: String,
    required: true,
  },
});

// Sidebar ve profil dropdown menüsü durumunu izlemek için ref oluşturuyoruz
const isSidebarOpen = ref(false);
const isProfileDropdownOpen = ref(false);
const isDarkMode = ref(false); // Dark mode durumu

// Sidebar açma/kapama fonksiyonu
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Profil dropdown açma/kapama fonksiyonu
const toggleProfileDropdown = () => {
  isProfileDropdownOpen.value = !isProfileDropdownOpen.value;
};

// Profil dropdown menüsünü kapatma fonksiyonu
const closeProfileDropdown = () => {
  if (isProfileDropdownOpen.value) {
    isProfileDropdownOpen.value = false;
  }
};

// Sayfa yüklendiğinde window'da click olayını dinlemek için event listener ekliyoruz
onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

// Sayfadan çıkıldığında event listener'ı kaldırıyoruz
onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside);
});

// Sayfa dışında bir yere tıklandığında profil dropdown'ı kapatır
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement;
  if (target && !target.closest('.relative')) {
    closeProfileDropdown();
  }
};

// Dark mode toggle fonksiyonu
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;

  // HTML elementine dark sınıfını ekliyoruz
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Logout fonksiyonu (örnek olarak console.log kullanıyoruz)
const logout = () => {
  console.log('User logged out');
  toggleProfileDropdown(); // Logout yapıldığında profil dropdown'ı kapat
};
</script>

<style scoped>
/* Flipswitch için gerekli stiller */
.dot {
  transition: transform 0.2s;
}

.dark-mode {
  background-color: #1a202c; /* Dark mode arka plan rengi */
  color: #cbd5e0; /* Dark mode metin rengi */
}

.dark .bg-gray-100 {
  background-color: #2d3748;
}

.dark .text-gray-800 {
  color: #cbd5e0;
}
</style>
