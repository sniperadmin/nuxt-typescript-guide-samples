import { Component, Vue } from 'nuxt-property-decorator'

interface Item {
  name: string
  quantity: number
}

@Component

class CartMixin extends Vue {
  public cartProducts: Array<Item> = [
    {
      name: 'laptop',
      quantity: 4
    }
  ]

  public addToCart(newItem: Item): void {
    let finder = this.cartProducts.find(item => item.name === newItem.name)
    if (finder) {finder.quantity++ }
    else {
      this.cartProducts.push(newItem)
    }
  }
}

export default CartMixin