<template>
  <v-card light>
    <h2>{{ title }}</h2>
    <div class="search">
      <div>
        Search:
        <v-text-field type="search" v-model="searchText" />
      </div>
    </div>
    <div class="category">
      <tile
        v-for="(item, i) in productList"
        :key="item.name"
        :item="item"
        :quantity="inventoryData[i].quantity"
        :brand="inventoryData[i].brand"
        :type="inventoryData[i].type"
        :stock="inventoryData[i].stock"
      />
    </div>
  </v-card>
</template>

<script lang="ts">
import Tile from '../components/Tile.vue'
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  components: {
    Tile
  }
})
export default class MyStore extends Vue {
  title: string = 'Product List'
  inventoryData: Array<object> = [
    {
      sku: 1,
      quantity: 0,
      brand: 'Samsung',
      type: 'Smartphone',
      stock: 'Out of Stock'
    },
    {
      sku: 2,
      quantity: 12,
      type: 'laptop'
    }
  ]
  productList: Array<object> = [
    {
      name: 'Samsung Galaxy s10',
      sku: 1,
      link: '/phone',
      image: 'iphone-11.png'
    },
    {
      name: 'Macbook Pro',
      sku: 2,
      link: '/laptop',
      image: 'macbook.png'
    }
  ]
  searchTextValue: string = ''

  get searchText() {
    return this.searchTextValue
  }
  set searchText(val) {
    this.searchTextValue = val
  }
}
</script>
<style scoped>
.container {
  text-align: center;
}
.category {
  display: flex;
  justify-content: center;
  padding: 50px;
}
.search {
  display: flex;
  flex-flow: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
}
</style>
