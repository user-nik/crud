<template>
  <div>
      <div class="row">

        <div class="col-lg-3 col-xs-6" v-for="item in categories" :key="item.name">
          <!-- small box -->
          <div class="small-box " :class="item.color">
            <div class="inner">
              <h3>{{item.count}}</h3>

              <p>{{item.name}}</p>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>

      </div>


      <h2 class="page-header">Events</h2>

      <div class="row">
        <!-- /.col -->
        <div class="col-md-4" v-for="item in events" :key="item.id">
          <!-- Widget: user widget style 1 -->
          <div class="box box-widget widget-user">
            <!-- Add the bg color to the header using any of the bg-* classes -->
            <router-link :to="{ name: 'eventdetails', params: { path: item.link, id:item.id }}" tag="div">
              <div class="widget-user-header bg-black" :style="{ background: `url('${item.img}') center` }" >
                <h3 class="widget-user-username">{{item.title}}</h3>
                <h5 class="widget-user-desc">{{item.city}}</h5>
              </div>
            </router-link>
            <div class="box-footer">
              <div class="row">
                <div class="col-sm-4 border-right">
                  <div class="description-block">
                    <h5 class="description-header">Price</h5>
                    <span class="description-text">{{item.price}}</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-sm-4 border-right">
                  <div class="description-block">
                    <h5 class="description-header">Date</h5>
                    <span class="description-text">{{item.StartDate}}</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-sm-4">
                  <div class="description-block">
                    <h5 class="description-header">Time</h5>
                    <span class="description-text">{{item.StartTime}}</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
              </div>
              <!-- /.row -->
            </div>
          </div>
          <!-- /.widget-user -->
        </div>
        <!-- /.col -->
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories:[
        {
          count: 150,
          name: 'New Orders',
          link: '',
          color: 'bg-aqua'
        },
        {
          count: 53,
          name: 'Bounce Rate',
          color: 'bg-green',
          link: ''
        },
        {
          count: 44,
          name: 'User Registrations',
          color: 'bg-yellow',
          link: ''
        },
        {
          count: 65,
          name: 'Unique Visitors',
          color: 'bg-red',
          link: ''
        },
      ],
      events: [
        {
          id: 1,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Moscow-City2015.jpg/405px-Moscow-City2015.jpg",
          title: 'Moscow Trip',
          city: 'Moscow',
          price: '1000',
          StartDate: '09-09-2019',
          StartTime: '10:10',
          link: 'moscow'
        },
        {
          id: 2,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Moscow-City2015.jpg/405px-Moscow-City2015.jpg",
          title: 'Moscow Trip',
          city: 'Moscow',
          price: '1000',
          StartDate: '09-09-2019',
          StartTime: '10:10',
          link: 'moscow'
        },
        {
          id: 3,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Moscow-City2015.jpg/405px-Moscow-City2015.jpg",
          title: 'Moscow Trip',
          city: 'Moscow',
          price: '1000',
          StartDate: '09-09-2019',
          StartTime: '10:10',
          link: 'moscow'
        },

      ]
    }
  }
}
</script>

<style>
.widget-user{
  cursor: pointer;
}
</style>