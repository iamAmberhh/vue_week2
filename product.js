const app = Vue.createApp({
    data(){
        return{
            products:[],
            renderProduct:"",
        }
    },
    methods:{
        checkAdmin(){
            axios.post(`${apiUrl}v2/api/user/check`)
            .then(res=>{
                this.getData();
            })
            .catch(err=>{
                window.location = 'login.html';
            })
            
        }, 
        getData(){
            axios.get(`${apiUrl}v2/api/${path}/admin/products`)
            .then(res=>{
                this.products = res.data.products;
                console.log(this.products)
            })
            .catch(err=> alert('產品載入失敗'))
        }
    },
    created(){
         const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*\=\s*([^;]*).*$)|^.*$/, "$1");
         axios.defaults.headers.common['Authorization'] = token;
        this.checkAdmin()
    }
})

app.mount('#app');


