<template>
  <v-card nuxt :to="item.link" class="mr-3">
    <v-card-title>
      {{ item.name }}
    </v-card-title>
    <v-card-text>
      <v-container>
        <li>Number of Items: {{ quantity }}</li>
        <li>Brand: {{ brand }}</li>
        <li>Type: {{ type }}</li>
        <li>Stock: {{ stock }}</li>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn color="info" :disabled="quantity <= 0">{{ buttonText }}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class Tile extends Vue {
  @Prop({ required: true }) readonly item!: object
  @Prop() quantity!: number
  @Prop({ default: 'Apple' }) brand!: string
  @Prop(String) readonly type!: string
  @Prop({ required: false, type: String, default: 'Available' })
  readonly stock!: string

  get buttonText(): string {
    if (this.quantity) {
      return 'Buy Now!'
    } else {
      return 'Coming Soon!'
    }
  }
}
</script>

<style scoped>
img {
  height: 200px;
}

.item {
  border: 1px solid #ccc;
  margin: 50px;
  display: flex;
  flex-flow: column;
  padding: 20px;
}

.list {
  text-align: left;
}
</style>