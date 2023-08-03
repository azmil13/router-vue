import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "@/components/Home.vue"; 
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Produk from "@/components/Produk.vue";
import Detail from "@/components/Detail.vue";
import Kategori from '@/components/Kategori.vue';
import DetailKategori from '@/components/DetailKategori.vue';

import pageNotfound from "../asset/pageNotfound.vue";
import Login from "../components/icons/Login.vue";


const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true,
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/detailkategori/:id_kategori",
    name: "DetailKategori",
    component: DetailKategori,
    props: true,
  },
  {
    path: "/login",
    name: "",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;