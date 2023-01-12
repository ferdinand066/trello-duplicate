<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div v-if="authStore.id" class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex-shrink-0 flex items-center text-2xl font-semibold italic">
            Trello
          </div>
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <!-- <a
              href="#"
              class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Dashboard
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Team
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Boards
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Calendar
            </a> -->
          </div>
        </div>
        <div class="flex items-center">
          <AuthButton v-if="!authStore.id" />
          <div v-else class="flex-1 flex flex-row">
            <div class="flex-shrink-0">
              <button type="button" @click="openNewBoardPopup = !openNewBoardPopup"
                class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                <span>Insert Board</span>
              </button>
            </div>

            <div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
              <!-- Profile dropdown -->
              <Menu as="div" class="ml-3 relative">
                <div>
                  <MenuButton
                    class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" :src="authStore.googleUser.picture" alt="" />
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-200"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-slot="{ active }">
                    <a href="#" :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]">Your Profile</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <a href="#" :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]">Settings</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <span :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
                    ]" @click="handleLogout">Sign out</span>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel v-if="authStore.id" class="md:hidden">
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4 sm:px-6">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" :src="authStore.googleUser.picture">
          </div>
          <div class="ml-3 flex flex-row justify-between flex-1 items-center">
            <div>
              <div class="text-base font-medium text-gray-800">{{ authStore.googleUser.name }}</div>
              <div class="text-sm font-medium text-gray-500">{{ authStore.googleUser.email }}</div>
            </div>
            <ArrowUturnRightIcon class="w-5 h-5" title="Sign Out" @click="handleLogout" />
          </div>
        </div>
        <div class="mt-3 space-y-1">
          <!-- <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
            >Your Profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
            >Settings</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
            >Sign out</a
          > -->
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
  <CreateBoardPopup v-if="openNewBoardPopup" />
</template>

<script lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon, ArrowUturnRightIcon } from "@heroicons/vue/24/outline";
import { PlusIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import CreateBoardPopup from "./popup/CreateBoardPopup.vue";
import AuthButton from "./auth/AuthButton.vue";
import { useAuthStore } from "../stores/auth-store";
import { googleLogout } from "vue3-google-login";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    Bars3Icon,
    PlusIcon,
    XMarkIcon,
    ArrowUturnRightIcon,
    CreateBoardPopup,
    AuthButton
  },
  setup() {
    const open = ref(false);
    const openNewBoardPopup = ref(false);
    const authStore = useAuthStore();

    const handleLogout = () => {
      authStore.id = null;
      authStore.googleUser = null;

      document.cookie = "g_state=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      console.log(document.cookie);
    }

    return {
      open,
      openNewBoardPopup,
      authStore,
      handleLogout
    };
  },
};
</script>
