<template>
  

    <section class="content" >

        <div class="row">
            <div class="col-xs-12">
            <div class="box">
                <div class="box-header">
                    <!-- <slot name="header">
                        {{title}}
                    </slot> -->
                    <h3 class="box-title">
                        {{title}}
                    </h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <slot name="body">
                    </slot>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
            </div>
        </div>

    
    </section>


</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
    },
}
</script>

<style>

</style>