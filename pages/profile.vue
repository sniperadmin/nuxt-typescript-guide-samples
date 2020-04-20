<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome {{ fullname }}
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="localData.first"
            dense
            placeholder="first name here"
          >

          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            @click="update"
            color="primary"
          >
            Update User info
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <h2>
      and this is how it is made
    </h2>
    <v-layout style="max-height: 500px;">
      <v-flex style="margin-right: 10px;">
        <prism-editor :code="code" language="vue" line-numbers readonly></prism-editor>
      </v-flex>
      <v-flex v-scroll>
        <prism-editor :code="tsScript" language="js" line-numbers readonly></prism-editor>
      </v-flex>
    </v-layout>

    <v-card>
      <v-card-text>
        <v-flex>
          <v-btn nuxt to="/store" color="success">refer to the store code here</v-btn>
        </v-flex>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

//Typescript code
<script lang="ts">
import VuetifyLogo from '../components/VuetifyLogo.vue'
import Logo from '../components/Logo.vue'
import { Component, Vue, namespace } from 'nuxt-property-decorator'

const user = namespace('user')

@Component({
  components: { Logo, VuetifyLogo }
})

  export default class Profile extends Vue {
    code: string = `
    <!-- this is the vue component -->

      <v-card-title class="headline">
          Welcome {{ fullname }}
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="localData.first"
            dense
            placeholder="first name here"
          >

          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            @click="update"
            color="primary"
          >
            Update User info
          </v-btn>
        </v-card-actions>
      </v-card>
    `
    tsScript: string = `
    // and the script
      import VuetifyLogo from '../components/VuetifyLogo.vue'
      import Logo from '../components/Logo.vue'
      import { Component, Vue, namespace } from 'nuxt-property-decorator'

      const user = namespace('user')

      @Component({
        components: { Logo, VuetifyLogo }
      })

      export default class Profile extends Vue {
        public localData: object = {}

        // the "user" namespace is registered in the store
        // so we can use the State, Getter and Mutation

        @user.State
        public info!: object

        @user.Getter
        public fullname!: string

        @user.Mutation
        public updateUserInfo!: (data: object) => void

        mounted() {
          this.localData = { ...this.localData, ...this.info }
        }

        public update(): void {
          this.updateUserInfo(this.localData)
        }
      } 
    `

    public localData: object = {}
    
    @user.State
    public info!: object

    @user.Getter
    public fullname!: string

    @user.Mutation
    public updateUserInfo!: (data: object) => void

    mounted() {
      this.localData = { ...this.localData, ...this.info }
    }

    public update(): void {
      this.updateUserInfo(this.localData)
    }
  }
</script>