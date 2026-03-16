import { ShopVm } from "./shop.vm";
import { CartQuantities } from "../models/cart-quantities.model";

export function buildShopVm(
   cartQuantities: CartQuantities,
   cartVisible: boolean
): ShopVm {
   const cartItemsCount = Object.entries(cartQuantities).length;
   const isCartActive = cartItemsCount > 0;
   const isCartVisible = cartVisible && isCartActive;

   return {
      cartItemsCount,
      isCartActive,
      isCartVisible
   }
}