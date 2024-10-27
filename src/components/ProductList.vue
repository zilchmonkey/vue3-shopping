<template>
    <transition-group name="products" appear>
        <div
            v-for="(item, index) in products"
            :key="index"
            id="item-list"
            class="row align-items-center"
        >
            <store-product :item="item" />
        </div>
    </transition-group>
</template>

<script>
import StoreProduct from '@/components/StoreProduct'
export default {
    props: ['products'],
    components: {
        StoreProduct,
    },
}
</script>

<style>
.products-enter-active,
.products-leave-active {
    transition: all 0.5s ease-in-out;
}

.products-enter-from {
    opacity: 0;
    transform: translateX(300px);
}

.products-leave-to {
    opacity: 0;
    transform: translateX(-300px);
}
</style>
