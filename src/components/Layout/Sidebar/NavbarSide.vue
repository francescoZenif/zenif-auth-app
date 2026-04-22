<script setup>
import {onMounted, reactive, ref} from "vue";
import axios from "@/services/axios-config";
import layoutState from "@/store/layoutState";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const navItems = ref([]);
const openMenus = reactive({}); // Tracks open state for any level

// Utility to generate a unique key for each menu (using name + parent path)
const menuKey = (item, parentKey = "") => (parentKey ? `${parentKey}__${item.name}` : item.name);

onMounted(async () => {
  let nav = await axios.get("/api/v1/zenif/side-navbar");
  if (nav.status == 200) {
    navItems.value = nav.data.navbar;
    // Initialize openMenus for all items with submenus
    const initMenus = (items, parentKey = "") => {
      if (items) {
        if (items.sub && items.sub.length) {
          openMenus[menuKey(item, parentKey)] = false;
          initMenus(item.sub, menuKey(item, parentKey));
        }
      }
    };
    initMenus(navItems.value);
  }
});

const toggleMenu = (key) => {
  openMenus[key] = !openMenus[key];
};
</script>

<template>
  <nav>
    <ul>
      <template v-for="(item, key) in navItems" :key="key">
        <li>
          <!-- Parent item -->
          <div v-if="item.sub && item.sub.length" @click="toggleMenu(menuKey(item))" class="py-2 text-white mb-1 mt-2 text-start flex gap-2 w-full items-center hover:opacity-65 px-2 cursor-pointer">
            <font-awesome-icon v-if="item?.icon" :icon="item?.icon" class="w-[20px]" />
            <span class="text-xs" v-if="!layoutState.sidebarMini">{{ item.name }}</span>
            <span class="ml-auto text-xs">
              <font-awesome-icon
                icon="fa-regular fa-angle-right"
                :class="{
                  'rotate-90': openMenus[menuKey(item)],
                }"
              />
            </span>
          </div>

          <router-link exact v-else :to="item.slug" active-class="bg-[#BBFF00] !text-black rounded-lg" class="py-2 text-white mb-1 mt-2 text-start flex gap-2 w-full items-center hover:opacity-65 px-2 w-full">
            <font-awesome-icon v-if="item?.icon" :icon="item?.icon" class="w-[20px]" />
            <span class="text-xs" v-if="!layoutState.sidebarMini">{{ item.name }}</span>
          </router-link>

          <!-- Submenus -->
          <ul v-if="item.sub && openMenus[menuKey(item)]" class="ms-6">
            <template v-for="subItem in item.sub" :key="subItem.slug">
              <li>
                <div v-if="subItem.sub && subItem.sub.length" @click="toggleMenu(menuKey(subItem, menuKey(item)))" class="py-2 text-white mb-1 mt-2 text-start flex gap-2 w-full items-center hover:opacity-65 px-2 cursor-pointer">
                  <font-awesome-icon v-if="subItem?.icon" :icon="subItem?.icon" class="w-[16px]" />
                  <span class="text-xs" v-if="!layoutState.sidebarMini">{{ subItem.name }}</span>
                  <span class="ml-auto text-xs">
                    <font-awesome-icon
                      icon="fa-regular fa-angle-right"
                      :class="{
                        'rotate-90': openMenus[menuKey(subItem, menuKey(item))],
                      }"
                    />
                  </span>
                </div>

                <router-link v-else exact :to="subItem.slug" active-class="font-semibold !text-[#BBFF00]" class="text-white mb-1 inline-block text-xs hover:opacity-65 px-2 w-full">
                  {{ subItem.name }}
                </router-link>

                <!-- Third level -->
                <ul v-if="subItem.sub && openMenus[menuKey(subItem, menuKey(item))]" class="ms-6">
                  <li v-for="thirdItem in subItem.sub" :key="thirdItem.slug">
                    <router-link :to="thirdItem.slug" exact active-class="font-semibold !text-[#BBFF00]" class="text-white mb-1 inline-block text-xs hover:opacity-65 px-2 w-full">
                      {{ thirdItem.name }}
                    </router-link>
                  </li>
                </ul>
              </li>
            </template>
          </ul>
        </li>
      </template>
    </ul>
  </nav>
</template>
