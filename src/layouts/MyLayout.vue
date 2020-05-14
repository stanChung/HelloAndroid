<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Stan的行動應用展示間
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" :mini="drawerministate" @mouseover="drawerministate=false" @mouseout="drawerministate=true" bordered>
      <!-- drawer content -->
      <q-scroll-area class="fit">
          <q-list v-for="(menuItem, index) in menuList" :key="index">

            <q-item clickable :active="menuItem.label === 'Outbox'" :to="menuItem.routePath" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" v-bind:style="menuItem.styleObject" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>

           <q-separator v-if="menuItem.separator" />

          </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
// eslint-disable-next-line no-unused-vars

const menuList = [
  {
    icon: 'home',
    label: '主頁',
    routePath: 'Home',
    separator: true,
    styleObject: {
      fontSize: '1.4em'
    }
  },
  {
    icon: 'person_add',
    label: '會員註冊',
    routePath: 'RegisterMember',
    separator: true,
    styleObject: {
      fontSize: '1.4em'
    }
  },
    {
    icon: 'fas fa-cloud-sun-rain',
    label: '目前天氣',
    routePath: 'MyWeather',
    separator: true,
    styleObject: {
      fontSize: '1.4em'
    }
  }
]
export default {
  data () {
    return {
      left: false,
      drawer: false,
      drawerministate: true,
      menuList
    }
  }
}
</script>