<template>
    <nav class="navbar navbar-light sticky-top me-3">
        <div
            v-if="cart.length"
            class="w-100 navbar-text ms-auto d-flex justify-content-end position-relative"
        >
            <div
                class="me-auto d-flex align-items-end flex-column bd-highlight mb-3 position-absolute"
            >
                <div class="mb-2">
                    <span class="fw-bold bg-white"
                        ><CurrencyConverter :amt="cartTotal" />
                    </span>
                    <button
                        @click="toggleCartMenu"
                        class="btn btn-sm btn-success ms-3"
                        id="cartDropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <fa icon="shopping-cart" />
                        {{ cartQuantity }}
                    </button>
                </div>
                <cart-dropdown :cart="cart" :displayCart="displayCart" />
            </div>
        </div>
    </nav>
</template>

<script>
import CurrencyConverter from '@/components/CurrencyConverter'
import CartDropdown from '@/components/CartDropdown'
export default {
    data: function () {
        return {
            displayCart: false,
        }
    },
    props: ['cart', 'cartTotal', 'cartQuantity'],
    components: {
        CurrencyConverter,
        CartDropdown,
    },
    methods: {
        toggleCartMenu() {
            this.displayCart = !this.displayCart
        },
    },
}
</script>
