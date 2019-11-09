<template>
    <div>
        <slot></slot>
    
        <div class="btn-group">
            <button type="button" class="btn btn-primary" :disabled="page == 1" @click="changePaging(page-1)"> Previous </button>
            
            <button type="button" :class="{'btn-info active': page===pageNumber}" class="btn" :key="pageNumber" v-for="pageNumber in pages" 
                @click="changePaging(page = pageNumber)"> 
                {{pageNumber}} 
            </button>
            
            <button type="button" class="btn btn-primary" @click="changePaging(page+1)" v-if="page < pages.length" > Next </button>
        </div> 
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: 1,
            pages: [],
        }
    },
    props: ['objects','toShow','perPage'],
    methods:{
        setPages () {
            let numberOfPages = Math.ceil(this.objects.length / this.perPage);
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        changePaging(newValue){
            this.page = newValue
            this.$emit('render', this.paginate(this.objects))
        },
        paginate (objects) {
            let page = this.page;
            let perPage = this.perPage;
            let from = (page * perPage) - perPage;
            let to = (page * perPage);
            return  objects.slice(from, to);
        },
        currentPage(pageNumber){
            return this.page === pageNumber
        },
    },
    mounted () {
        this.setPages();
        this.$emit('render', this.paginate(this.objects))
    },
}
</script>