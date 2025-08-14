var products=[];
var mybtn = document.getElementById("mybtn");
var productName=document.getElementById("productname");
var productDesc=document.getElementById("productdesc");
var productPrice =document.getElementById("productprice");
var productCompany =document.getElementById("productcompany");
var row=document.getElementById("prod");
var globalIndex;

var toggle=false;
mybtn.onclick=function () {

    if (toggle===false){

         add();


    }else{
        updatedata();
    }
   

    
}


function add(){
    var product={
        name:productName.value,
        desc:productDesc.value,
        price:productPrice.value,
        company:productCompany.value
    }

    products.push(product);
    console.log(products);

       show()
    
}

function show(){
    var col="";
    for (var i=0;i<products.length;i++){
        col+= `<div class="col-md-3  mine"> 
        <h1> `  +products[i].name+  `</h1>
         <h2> `+products[i].company+`<h2>
          <p> `+products[i].desc+`</p>
            <p> `+products[i].price+`</p>
            <button class="btn btn-danger" onclick="Delete(`+i+`)" > Delete </button>

            <button class="btn btn-warning" onclick="rec(`+i+`)">   Update </button>
            </div>`
          }
 

        row.innerHTML=col;
    
  }

  function Delete(index){
    products.splice(index,1);
    show();

  }
   
  function rec(index){

    toggle=true;
    productName.value=products[index].name;
    productDesc.value=products[index].desc;
    productPrice.value=products[index].price;
    productCompany.value=products[index].company;
    globalIndex=index;
    mybtn.innerHTML="Update";
  }
 function updatedata(){
    products[globalIndex].name=productName.value;
    products[globalIndex].desc=productDesc.value;
    products[globalIndex].price=productPrice.value;
    products[globalIndex].company=productCompany.value;
      show();
      toggle=false;
      mybtn.innerHTML="Submit";

 }