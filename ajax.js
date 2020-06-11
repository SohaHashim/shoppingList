document.getElementById("button").addEventListener("click",loadProduct);
function loadProduct(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState==4 && this.status==200){
            var response=JSON.parse(this.responseText);
            var products=response.products;
            var output="";
            for(var i=0;i<products.length;i++){
                output += "<tr>";
                output += "<td>"+products[i].SerialNumber+"</td>";         
                output += "<td>"+products[i].Name+"</td>";
                output += "<td>"+products[i].Quantity+"</td>";
                output += "<td>"+products[i].Unit+"</td>";            
                output += "<td>"+products[i].Department+"</td>";
                output += "<td>"+products[i].Notes+"</td>";  
                output += "<tr>";
            }                            
    }
    document.getElementById("data").innerHTML = output;
}                 
xhr.open("GET","ajax.json",true);
xhr.send();
}