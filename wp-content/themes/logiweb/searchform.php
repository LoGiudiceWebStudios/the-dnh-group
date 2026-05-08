<?php  wp_head(); ?>


<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
  <div class="box">
        <form name="search">
            <input placeholder="Search..." type="search" class="input search-field" name="s" value="<?php echo get_search_query(); ?>">
        </form>
        <i class="fas fa-search"></i>

    </div>

</form>
