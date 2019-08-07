var vm = new Vue({
    el: '#app',
    data: {
        goods: [
            {
                id: 101,
                name: '苹果',
                quantity: 10,
                price: 50
            },
            {
                id: 102,
                name: '梨',
                quantity: 15,
                price: 40
            },
            {
                id: 103,
                name: '桃',
                quantity: 5,
                price: 45
            },
            {
                id: 104,
                name: '车厘子',
                quantity: 30,
                price: 100
            }
        ]
    },
    methods: {
        add: function (good) {
            good.quantity++;
        },
        reduce: function (good, index) {
            if (good.quantity === 1 && confirm('确定删除此商品？')) {
                this.deleteOne(index)
            } else {
                good.quantity--;
            }
        },
        deleteOne: function (index) {
            this.goods.splice(index, 1);
        },
        deleteAll: function () {
            this.goods = [];
        }

    },
    computed: {

        totalPrice: function () {
            var total = 0;
            this.goods.forEach(good =>
                total += parseInt(good.quantity * good.price)
            );
            return total;
        },
        totalQuantity: function () {
            var quantity = 0;
            this.goods.forEach(good =>
                quantity += parseInt(good.quantity)
            );
            return quantity;
        }
    }
})