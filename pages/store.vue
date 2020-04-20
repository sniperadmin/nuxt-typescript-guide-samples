<template>
  <v-card>
    <v-card-title>
      This is how the store is created
    </v-card-title>
    <v-card-text>
      <v-flex>
        This is how the store is written <br>
        First, created a ts file in the store dir called it
      </v-flex>
      <v-flex>
        <v-badge color="primary">
          <span slot="badge">user.ts</span>
        </v-badge>
      </v-flex>
      then: 
      <prism-editor :code="code" language="js" line-numbers readonly></prism-editor>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator"

  @Component({})
  export default class App extends Vue {
    code: string = `
      import { Module, VuexModule, Mutation } from "vuex-module-decorators"

      // defining the object we use
      interface UserData {
        first: string
        last: string
        address1: string
        address2: string
        state: string
        country: string
        phone: number
      }

      // this is where the name space registered
      @Module({
        name: 'user',
        stateFactory: true,
        namespaced: true,
      })

      // time to export the store
      export default class User extends VuexModule {

        // state
        public info: UserData = {
          first: 'Nasr',
          last: 'Galal',
          address1: '',
          address2: '',
          state: '',
          country: '',
          phone: 123456789,
        }

        // getters
        get fullname(): string {
          return this.info.first + ' ' + this.info.last
        }

        @Mutation
        public updateUserInfo(data: UserData) {
          this.info = { ...this.info, ...data }
        }
      }
    `
  };
</script>

<style scoped>

</style>