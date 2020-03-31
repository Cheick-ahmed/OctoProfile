<template>
  <div>
    <div class="container flex flex-col items-center py-16 lg:py-32 min-h-screen">
      <div class="mb-16 flex-col flex justify-center items-center">
        <svg aria-hidden="true" viewBox="0 0 16 16" class="fill-current text-gray-500 h-32 w-32">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z">
          </path>
        </svg>
        <h3 class="text-5xl text-gray-300 font-semibold">OctoProfile</h3>
      </div>
      <div class="w-full lg:w-6/12">
        <input type="text" class="text-center px-3 py-4 text-lg w-full block rounded mb-4" v-model="form.field" v-show="!errors">
       <div v-if="errors" class="text-white text-center tracking-wide font-montserrat">
         {{ errors.message }}
       </div>
     </div>
   </div>
 </div>
</template>

<script>
  import { debounce as _debounce } from 'lodash'
  export default {
    head () {
      return {
        title : 'OctoProfile',
        titleTemplate : ''
      }
    },
    data () {
      return {
        user : null,
        errors : null,
        form : {
          field : ''
        }
      }
    },
    watch : {
      'form.field' : {
        handler : _debounce( async function () {
          try {
            await this.$axios.get(`https://api.github.com/users/${this.form.field}`).then((res) => {
              this.user = res.data
              if (res.data) {
                this.$router.push({
                  name : 'users-login',
                  params : { login : res.data.login }
                })
              }
            })
          } catch (e) {
            this.errors = { status : 403, message : 'Oh no! Something went wrong. Try again later!' }
          }
        },1000)
      },
    },

  }
</script>