<template>
    <div class="btn-group">
        <div class="col-md-6">
            <button type="button" class="btn btn-primary" @click="btnEdit" >Edit</button>        
        </div>
        <div class="col-md-6">        
            <button type="button" class="btn btn-danger" @click="deleteDepartement(id)" >Delete</button>        
        </div>
    </div>    
</template>
<script>
export default {    
    name: 'buttons',
    props: {
        id: Number,    
        url:String   
    },
    methods: {
        btnEdit(){            
            alert(`Edit ${this.row.id}`)
        },
  deleteDepartement(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios
            .delete("/api/user/departements/" + id)
            .then(() => {
              this.departements = this.departements.filter((department) => {
                return department.id != id;
              });
              //Notification.success();
              Toast.fire({
                icon: "error",
                title: "Departement deleted successfully!",
              });
            })
            .catch((error) => {
              this.flashMessage.error({
                message: error.response.data.message,
                time: 5000,
              });
            });
        }
      });
    },
    }
}
</script>