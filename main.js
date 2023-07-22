let info_Input =document.querySelector(".info input");
let My_button =document.querySelector(".info button");
let data_div =document.querySelector(".data");


My_button.onclick=function(){
let usrname=info_Input.value;
if(info_Input.value === ""){
    data_div.innerHTML='';
    data_div.innerHTML="  no data to show ..."; 
}else{
    fetch(`https://api.github.com/users/${usrname}/repos`)
  .then(response => response.json())
  
  .then(data => {
    data_div.innerHTML='';
    // Process the data
    data.forEach(repo => {
        
        let myRepoDiv =document.createElement("div")
        myRepoDiv.className="styleSpan";
        myRepoDiv.appendChild(document.createTextNode(repo.name))
        let link=document.createElement("a");
        link.appendChild(document.createTextNode("Visit repo"));
        link.setAttribute('target','_blank')
        link.href=`https://github.com/${usrname}/${repo.name}`;

        myRepoDiv.appendChild(link);
        data_div.appendChild(myRepoDiv);
    });
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });



}


}




