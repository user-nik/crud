<template>
  <div>

    <header class="main-header">

    <!-- Logo -->
    <a href="/" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>A</b>LT</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </a>

    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">          
          <li class="dropdown user user-menu">
            <!-- Menu Toggle Button -->
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <span class="hidden-xs">Web Developer</span>
            </a>
            <ul class="dropdown-menu">
              <!-- The user image in the menu -->
              <li class="user-header">

                <p>
                   Web Developer
                  <small>2012</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>


  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      

      <!-- search form (Optional) -->
      
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu tree" data-widget="tree">
        
        <!-- Optionally, you can add icons to the links -->
        <router-link active-class="active" :to="{ name: 'newevent'}" tag="li">
          <a href="">
              <i class="fa fa-link"></i>
              <span>New Ad</span>
          </a>
        </router-link>
        <router-link active-class="active" :to="{ name: 'events'}" tag="li">
          <a href="">
              <i class="fa fa-link"></i>
              <span>My Events</span>
          </a>
        </router-link>
        <router-link active-class="active" :to="{ name: 'newevent'}" tag="li">
          <a href="">
              <i class="fa fa-link"></i>
              <span>Sign Out</span>
          </a>
        </router-link>
        <router-link active-class="active" :to="{ name: 'newevent'}" tag="li">
          <a href="">
              <i class="fa fa-link"></i>
              <span>Sign In</span>
          </a>
        </router-link>
        <router-link active-class="active" :to="{ name: 'newevent'}" tag="li">
          <a href="">
              <i class="fa fa-link"></i>
              <span>Sign Up</span>
          </a>
        </router-link>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>

  <div class="content-wrapper" style="min-height: 586px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Page Header
        <small>Optional description</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">

      <router-view></router-view>

    </section>
    <!-- /.content -->

    
  </div>
    <footer class="main-footer">
    <!-- To the right -->
    <div class="pull-right hidden-xs">
      Anything you want
    </div>
    <!-- Default to the left -->
    <strong>Copyright © 2016 <a href="#">Company</a>.</strong> All rights reserved.
  </footer>
  </div>
  

</template>

<script>
export default {

}
</script>

<style>

</style>