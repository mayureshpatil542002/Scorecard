let teamascore=document.querySelectorAll("h2")[0]
let teambscore=document.querySelectorAll("h2")[1]

let teamarecords=document.querySelectorAll("p")[0]
let teambrecords=document.querySelectorAll("p")[1]

let scoreabtn=document.querySelectorAll("button")[0]
let finalabtn=document.querySelectorAll("button")[1]

let scorebbtn=document.querySelectorAll("button")[2]
let finalbbtn=document.querySelectorAll("button")[3]
let countofa=0
let countofb=0
let storeofa=document.querySelectorAll("p")[0]
let storeofb=document.querySelectorAll("p")[1]





scoreabtn.addEventListener("click", function(){  //Click, function, boolean value
    countofa=countofa+3
    teamascore.innerHTML=countofa
})

finalabtn.addEventListener("click", function(){
    // previousRecords.innerHTML=previousRecords.innerHTML+count
    storeofa.innerHTML+=`${countofa}, `
    // count=count-count
    countofa=0
    storeofa.innerHTML=count
})




scorebbtn.addEventListener("click", function(){  //Click, function, boolean value
    countofb=countofb+2
    teambscore.innerHTML=countofb
})

finalbbtn.addEventListener("click", function(){
    // previousRecords.innerHTML=previousRecords.innerHTML+count
    storeofb.innerHTML+=`${countofb}, `
    // count=count-count
    countofb=0
    storeofb.innerHTML=count
})