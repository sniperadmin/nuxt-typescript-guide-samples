import * as CartMixin from "~/mixins/CartMixin"
// @ponicode
describe("addToCart", () => {
    let inst: any

    beforeEach(() => {
        inst = new CartMixin.default()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.addToCart({ name: "Jean-Philippe", quantity: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.addToCart({ name: "Jean-Philippe", quantity: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.addToCart({ name: "Michael", quantity: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.addToCart({ name: "George", quantity: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.addToCart({ name: "Pierre Edouard", quantity: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.addToCart({ name: "", quantity: Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})
