<template>
    <div>
        {{ $store.state.isLoading }}<br><br>
        {{ $store.state.product.productList }}<br><br>
        {{ $store.getters.getAuthUser  }}<br><br>
    </div>
</template>

<script>
    export default {
    }
</script>
