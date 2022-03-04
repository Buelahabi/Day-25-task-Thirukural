async function foo(){
    try{
        let search=document.getElementById("content");
        search.innerHTML="";
        let body=document.getElementById("body");
        body.style.backgroundColor="#231F20";
        let a=document.getElementById("text");
        let ans=a.ariaValueMax;
        let b=await fetch(`https://api-thirukkural.vercel.app/api?num=${ans}`);
        let result=await b.json();
        console.log(result);
        search.innerHTML=<div class="col-sm-12 col-md-12 col-lg-12">
        <div class="box-part">
        <h5 class="text-center mb-3 mt-2"><span class="badge-pill badgecontrol">பால்: ${result.sect_tam} </span>
                     <span class="badge badge-light badge-pill  badgecontrol">இயல்: ${result.chapgrp_tam} </span>
                     <span class="badge badge-light badge-pill  badgecontrol">அதிகாரம்: ${result.chap_tam} </span>                        </div>

                     <div class="text-center mb-3 kural w-60 bg-warning">
                     <p class="mb-2">"${result.line1}</p>
                     <p class=" mb-2">${result.line2}"</p>
                     </div>                       
                     <p class="mb-3   text-center bg-info">${result.tam_exp}</p> <hr>
                     </div>
                     </div>

                     <div class="col-sm-12 col-md-12 col-lg-12">
                         <div class="box-part">
                             <div class="d-flex flex my-2 justify-content-center">
                                 <span class="badge badge-light badge-pill badgecontrol">Section:${result.sect_eng}</span>
                                 <span class="badge badge-light badge-pill badgecontrol">Chapter-Group:${result.chapgrp-eng}</span>
                                 <span class="badge badge-light badge-pill badgecontrol">Chapter:${result.chap-eng}</span>
                                 <div class="text-center mb-3 kural bg-warning"><p class="mb-2 pfont">"${result.eng}"</p>
                                 </div>
                                 <p class="mb-2 explainfont text-center bg-info">${result.eng_exp}</p>
                                 </div>
                             </div>
                         console.log(search);
                         document.body.append(search)
                         }catch(error){
                             alert("please try a valid number or reload again")
                         }
                         
                         
                         function home(){
                             let input=document.getElementById("input");
                             document.getElementById("text").value"";
                             location.reload();

                         
                         }



    
