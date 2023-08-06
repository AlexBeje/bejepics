export const useSelectedMenuItemStore = defineStore('counter', () => {
    const selectedMenuItem = ref(1)

    return { selectedMenuItem }
})