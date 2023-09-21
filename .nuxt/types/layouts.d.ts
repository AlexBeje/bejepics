import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "white"
declare module "/Users/alexbeje/Code/bejepics/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}