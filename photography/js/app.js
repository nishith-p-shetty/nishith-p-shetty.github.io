const gallery = document.getElementById('gallery');
for (let i = 1; i <= 5; i++) {
    var code = '<div class="col"><div class="card shadow-sm rounded-5">'+
    '<img class="rounded-top-5" src="https://ik.imagekit.io/nishithpshetty/photography/'+i+'.jpg" alt="img"><div class="card-body">'+
    '<div class="d-flex justify-content-center align-items-center"><div class="btn-group">'+
    '<button type="button" class="btn btn-lg btn-outline-primary" data-bs-toggle="modal" data-bs-target="#Modal'+i+'">View</button>'+
    '<a href="https://ik.imagekit.io/nishithpshetty/photography/'+i+'.jpg" class="btn btn-lg btn-outline-primary" target="_blank">Open</a></div></div></div></div>'+
    '<div class="modal fade" id="Modal'+i+'" tabindex="-1" aria-labelledby="Modal'+i+'Label" aria-hidden="true">'+
    '<div class="modal-dialog modal-dialog-centered modal-xl"><div class="modal-content"><div class="modal-header">'+
    '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">'+
    '<img class="h-100 w-100" src="https://ik.imagekit.io/nishithpshetty/photography/'+i+'.jpg" alt="img"></div><div class="modal-footer">'+
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>'+
    '<a href="https://ik.imagekit.io/nishithpshetty/photography/'+i+'.jpg" class="btn btn-primary" target="_blank">Open</a></div></div></div></div>';

    gallery.innerHTML+=code;
};