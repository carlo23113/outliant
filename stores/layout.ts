import { NavLink } from "@/types/layout";
import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    navLinks: navLinks as Array<NavLink>,
    drawer: false as boolean,
    isMobileView: false as boolean
  }),
  actions: {},
  getters: {},
});

const navLinks: Array<NavLink> = [
  {
    id: 1,
    route: "/",
    title: "Home",
  },
  {
    id: 2,
    title: "About",
  },
  {
    id: 3,
    title: "Services",
  },
  {
    id: 4,
    title: "Products",
    route: "/products"
  },
];
