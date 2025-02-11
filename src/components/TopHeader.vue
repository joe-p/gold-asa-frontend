<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import Badge from 'primevue/badge'
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'
const router = useRouter()
const store = useAppStore()
console.log('store', store)
console.log('router', router)
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    route: '/'
  },
  {
    label: 'Trade gold token',
    icon: 'pi pi-fw pi-money-bill',
    route: '/trade-gold'
  },
  {
    label: 'Buy gold coins',
    icon: 'pi pi-fw pi-shopping-cart',
    route: '/buy-gold-coins'
  },
  {
    label: 'Proof of reserves',
    icon: 'pi pi-fw pi-verified',
    route: '/proof-of-reserve'
  },
  {
    label: 'About ASA.Gold',
    icon: 'pi pi-fw pi-users',
    route: '/about-asa-gold'
  },
  {
    label: 'Contact us',
    icon: 'pi pi-fw pi-send',
    route: '/contact-us'
  }
])

function logout() {
  if (!store.state.authComponent) {
    console.error('Unable to logout, authcomponent not initialized', store.state.authComponent)
    return
  }
  console.log('sending logout')
  store.state.authComponent?.logout()
  store.state.authState.isAuthenticated = false
  store.state.authState.arc76email = ''
  store.state.authState.arc14Header = ''
  store.state.authState.account = ''
  router.push('/')
  console.log('logout sent')
}
</script>

<template>
  <header>
    <div class="flex flex-row">
      <Button class="logo m-4" severity="link" @click="$router.push('/')">ASA - Real gold</Button>
      <div class="flex-grow-1"></div>
      <div class="flex flex-column m-4">
        <Badge
          v-if="store.state.env == 'testnet-v1.0'"
          value="Testnet"
          severity="warn"
          class="align-self-center m-1"
        ></Badge>
        <Badge
          v-else-if="store.state.env == 'mainnet-v1.0'"
          value="Mainnet"
          severity="success"
          class="align-self-center m-1"
        ></Badge>
        <Badge
          v-else
          :value="store.state.algodHost"
          severity="warn"
          class="align-self-center m-1"
        ></Badge>
        <Badge value="IN DEVELOPMENT" severity="danger" class="align-self-center m-1"></Badge>
      </div>
      <Button
        severity="link"
        class="flex flex-column align-content-center align-items-center align-self-center my-4 p-2 w-4rem"
        @click="$router.push('/settings')"
      >
        <span class="pi pi-cog"></span>
        <div class="m-1">Settings</div>
      </Button>
      <Button
        severity="link"
        class="flex flex-column align-content-center align-items-center align-self-center m-4 p-2 w-4rem"
        @click="store.state.authComponent?.auth()"
        v-if="!store.state.authState.isAuthenticated"
      >
        <span class="pi pi-user"></span>
        <div class="m-1">Login</div>
      </Button>
      <Button
        severity="link"
        class="flex flex-column align-content-center align-items-center align-self-center m-4 p-2 w-4rem"
        @click="logout"
        v-if="store.state.authState.isAuthenticated"
      >
        <span class="pi pi-user"></span>
        <div class="m-1">Logout</div>
      </Button>
    </div>
    <Menubar :model="items">
      <template #item="{ label, item, props }">
        <RouterLink v-if="item.route" v-slot="routerProps" :to="item.route">
          <a :href="routerProps.href" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
          </a>
        </RouterLink>
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" />
      </template>
    </Menubar>
  </header>
</template>
