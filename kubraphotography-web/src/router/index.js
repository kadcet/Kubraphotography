// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../components/HomePage.vue";
import AboutPage from '../components/AboutPage.vue';
import BlogPage from '@/components/BlogPage.vue';
import PregnantPage from '@/components/PregnantPage.vue';
import NewbornPage from '../components/NewbornPage.vue'
import FamilyPage from '@/components/FamilyPage.vue';
import BirthdayPage from '@/components/BirthdayPage.vue';
import PackagesPage from '@/components/PackagesPage.vue';
import SssPage from '@/components/SssPage.vue';

import FooterComp from '@/components/FooterComp.vue';
import NavbarComp from '../components/NavbarComp.vue';



const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },

  {
    path: '/NavbarComp',
    name: 'NavbarComp',
    component: NavbarComp
  },
  {
    path: '/FooterComp',
    name: 'FooterComp',
    component: FooterComp
  },

  {
    path: '/AboutPage',
    name: 'AboutPage',
    component: AboutPage
  },

  {
    path: '/BlogPage',
    name: 'BlogPage',
    component: BlogPage
  },

  {
    path: '/PregnantPage',
    name: 'PregnantPage',
    component: PregnantPage
  },
  {
    path: '/NewbornPage',
    name: 'NewbornPage',
    component: NewbornPage
  },
  {
    path: '/FamilyPage',
    name: 'FamilyPage',
    component: FamilyPage
  },
  {
    path: '/BirthdayPage',
    name: 'BirthdayPage',
    component: BirthdayPage
  },

  {
    path: '/PackagesPage',
    name: 'PackagesPage',
    component: PackagesPage
  },

  {
    path: '/SssPage',
    name: 'SssPage',
    component: SssPage
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;