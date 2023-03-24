import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
export const Welcome = defineComponent({
 setup: (props, context) => {
  return () => (
    <>
   <header>Welcome</header>
   <RouterView/>
   </>
  )
 }
})