class Notification{
    success(){
        new Noty({
            type:"success",
            layout:"topRight",
            text: 'Data is Succesfully Inserted!',
            timeout:2000,
            
        }).show();
    }
    alert(){
        new Noty({
            type:"alert",
            layout:"topRight",
            text: 'Are you Sure?',
            timeout:2000,
            
        }).show();
    }
    error(){
        new Noty({
            type:"error",
            layout:"topRight",
            text: 'Something went Wrong!',
            timeout:2000,
            
        }).show();
    }
    warning(){
        new Noty({
            type:"warning",
            layout:"topRight",
            text: 'Oops Wrong!',
            timeout:2000,
            
        }).show();
    }
    image_validaton(){
        new Noty({
            type:"error",
            layout:"topRight",
            text: 'Image Size Cannot be exceeded 1MB!',
            timeout:2000,
            
        }).show();
    }

    cart_success(){
        new Noty({
            type:"success",
            layout:"topRight",
            text: 'Product Added to Cart Successfully!',
            timeout:2000,
            
        }).show();
    }
    cart_delete(){
        new Noty({
            type:"error",
            layout:"topRight",
            text: 'Cart is deleted!',
            timeout:2000,
            
        }).show();
    }
}

export default Notification=new Notification()