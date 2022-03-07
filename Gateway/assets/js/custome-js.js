$( document ).ready(function() {
    var count = $("#box").children().length;
    // alert(count);

    check_count( count );
    function check_count( count ){

        if( count >= 10 ) {
            $('.product__navigation').show();
            
    
        } else{
            $('.product__navigation').hide();
            
    
        }

    }
    

});