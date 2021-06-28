const app=new Vue({
    el:'#app',
    data:{
        books:[
            
            {
            id:1,
            name:'《导论》',
            data:'2006-9',
            price:85.00,
            count:1
            },
            {
            id:2,
            name:'《UNIX编程艺术》',
            data:'2006-2',
            price:59.00,
            count:1
            },
            {
            id:3,
            name:'《编程珠玑》',
            data:'2008-10',
            price:39.00,
            count:1
            },
            {
            id:4,
            name:'《代码大全》',
            data:'2006-3',
            price:128.00,
            count:1
            },
    ]
    },
    methods: {
       increment(index){
       this.books[index].count++
       },
       decrement(index){
        this.books[index].count--
       },
       removeClick(index){
       this.books.splice(index,1)
       }
    },
    computed:{
        
    total(){
        let totalPricre=0
        for(let i=0;i<this.books.length;i++){
        totalPricre+=this.books[i].price*this.books[i].count
        }
        return totalPricre
    }
    },
    filters: {
       showPrice(price){
         return '￥'+price.toFixed(2)
       }
    },
})
