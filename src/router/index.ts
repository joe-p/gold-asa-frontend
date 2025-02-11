import { createRouter, createWebHistory } from 'vue-router'
import PublicHomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta?.env?.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PublicHomeView
    },
    {
      path: '/trade-gold',
      name: 'auth-trade-gold-token',
      component: () => import('../views/TradeGoldTokenView.vue')
    },
    {
      path: '/buy-gold-coins',
      name: 'auth-trade-gold-coins',
      component: () => import('../views/TradeGoldCoinsView.vue')
    },
    {
      path: '/proof-of-reserve',
      name: 'auth-proof-of-reserve',
      component: () => import('../views/ProofOfReserveView.vue')
    },
    {
      path: '/about-asa-gold',
      name: 'auth-about-asa-gold',
      component: () => import('../views/AboutUsView.vue')
    },
    {
      path: '/contact-us',
      name: 'auth-contact-us',
      component: () => import('../views/ContactUsView.vue')
    },
    {
      path: '/settings',
      name: 'auth-settings',
      component: () => import('../views/Settings/SettingsView.vue')
    },
    {
      path: '/buy-gold-with-eur',
      name: 'auth-buy-gold-with-eur',
      component: () => import('../views/TradeGoldTokenFiatView.vue')
    },
    {
      path: '/my-gold-transactions',
      name: 'auth-my-gold-transactions',
      component: () => import('../views/MyTransactionsView.vue')
    },
    {
      path: '/email-validation',
      name: 'auth-email-validation',
      component: () => import('../views/Settings/EmailValidation.vue')
    },
    {
      path: '/email-validation/:code',
      name: 'auth-email-validation-with-code',
      component: () => import('../views/Settings/EmailValidation.vue')
    },
    {
      path: '/terms/:id',
      name: 'terms-and-conditions',
      component: () => import('../views/Terms/TermsIndex.vue')
    },
    {
      path: '/gdpr/:id',
      name: 'gdpr',
      component: () => import('../views/GDPR/GdprIndex.vue')
    }
  ]
})

export default router
