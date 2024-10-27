<template>
    <section class="container">
        <range-selector :products="filteredProducts" v-model="max" />
        <product-list :products="filteredProducts" />
    </section>
</template>

<script>
import ProductList from '@/components/ProductList'
import RangeSelector from '@/components/RangeSelector'

export default {
    name: 'HomeView',
    data: function () {
        return {
            max: 50,
        }
    },
    components: {
        ProductList,
        RangeSelector,
    },
    props: ['products'],
    computed: {
        filteredProducts() {
            return this.products.filter((item) => item.price < Number(this.max))
        },
    },
}
</script>
