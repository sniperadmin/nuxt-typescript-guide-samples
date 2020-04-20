<template>
  <v-card>
    <v-card light class="mb-4">
      <v-card-title>
        Phone add to cart
    </v-card-title>
    <v-card-actions>
      <v-btn small color="green lighten-1" @click="add">Add to Cart</v-btn>
    </v-card-actions>
    </v-card>
    <v-card>
      CART
      <div v-for="(item, i) in cartProducts" :key="i" class="item">
        <div>Item: {{ item.name }}</div>
        <div>Quantity: {{ item.quantity }}</div>
      </div>
    </v-card>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component, mixins } from 'nuxt-property-decorator'
import CartMixin from '@/mixins/CartMixin'

@Component

export default class Phones extends mixins(CartMixin) {
  public add() {
    this.addToCart({ name: 'phone', quantity: 1 })
  }
}
</script>
<style scoped>
.item {
  width: 200px;
  padding: 20px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  flex-flow: column;
}
.item img {
  width: 160px;
}
.cart {
  margin-top: 50px;
}
</style>