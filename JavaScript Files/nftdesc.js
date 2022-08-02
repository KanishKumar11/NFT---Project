function SaveBtn(){
    let btn=document.getElementById("saveBtn");
    if(btn.style.backgroundColor="#1b4e4e"){
        btn.style.backgroundColor="#068f8f";
    }
    if(btn.style.backgroundColor="#068f8f"){
        btn.style.backgroundColor="#1b4e4e";
    }
};

let nft1={
    name:"Frenchie",
    owner:"Butcher",
    priceInDollars:"$3999",
    priceInEth:"0.002 Eth",
    salesEnd:"August 10,2022",
    desc:"NFT DESC",
    favourits:"3 ",
    source: "/Assets/graphics/1.svg"
}
let nft2={
    name:"Hughie",
    owner:"MonCouir",
    priceInDollars:"$4885",
    priceInEth:"0.004 Eth",
    salesEnd:"August 9,2022",
    desc:"NFT DESC 2",
    favourits:"5 ",
    source: "/Assets/graphics/2.svg"
}
let nft3={
    name:"Gorr",
    owner:"Steve M",
    priceInDollars:"$3970",
    priceInEth:"0.008 Eth",
    salesEnd:"August 15,2022",
    desc:"this is first nft and this is itrs decsription check it out ucan also change it by chngung the text i nftjs file",
    favourits:"2 ",
    source: "/Assets/graphics/3.svg"
}
let nft4={
    name:"Marret",
    owner:"Stannie",
    priceInDollars:"$3550",
    priceInEth:"0.040 Eth",
    salesEnd:"August 14,2022",
    desc:"this is first nft and this is itrs decsription check it out ucan also change it by chngung the text i nftjs file",
    favourits:"6 ",
    source: "/Assets/graphics/4.svg"
}
let nft5={
    name:"Suggest",
    owner:"Dontno",
    priceInDollars:"$5530",
    priceInEth:"0.05 Eth",
    salesEnd:"August 20,2022",
    desc:"this is first nft and this is itrs decsription check it out ucan also change it by chngung the text i nftjs file",
    favourits:"4 ",
    source: "/Assets/graphics/5.svg"
}




const nfts={nft1,nft2,nft3,nft4,nft5}
var ownerName=document.getElementById("nftOwner")
var nftName=document.getElementById("nftName")
var nftFavs=document.getElementById("favs")
var priceInDollars=document.getElementById("priceInDollars")
var endDate=document.getElementById("lastDate")
var desccription=document.getElementById("nftDesc")
var priceInEth=document.getElementById("priceInEth")
var mainImage=document.getElementById("mainImage")
// var i
console.log(nftFavs.innerText)
console.log("22")
let string=localStorage.getItem("hey");
console.log(string)
let r=(string.indexOf(nft1.source)>0)
console.log(r)
checkSrc(string)
function checkSrc(source){
    mainImage.src=".."+source.substr(21,23)
    if(source.indexOf(nft1.source)>0){
        ownerName.innerText="Owner :"+nft1.owner
        nftName.innerText=nft1.name
        nftFavs.innerText=nft1.favourits+"favourites"
        priceInDollars.innerHTML=nft1.priceInDollars
        endDate.innerText=nft1.salesEnd
        desccription.innerText=nft1.desc
        priceInEth.innerText=nft1.priceInEth
    }
    if(source.indexOf(nft2.source)>0){
        ownerName.innerText="Owner :"+nft2.owner
        nftName.innerText=nft2.name
        nftFavs.innerText=nft2.favourits+"favourites"
        priceInDollars.innerHTML=nft2.priceInDollars
        endDate.innerText=nft2.salesEnd
        desccription.innerText=nft2.desc
        priceInEth.innerText=nft2.priceInEth
    }
    if(source.indexOf(nft3.source)>0){
        ownerName.innerText="Owner :"+nft3.owner
        nftName.innerText=nft3.name
        nftFavs.innerText=nft3.favourits+"favourites"
        priceInDollars.innerHTML=nft3.priceInDollars
        endDate.innerText=nft3.salesEnd
        desccription.innerText=nft3.desc
        priceInEth.innerText=nft3.priceInEth
    }
    if(source.indexOf(nft4.source)>0){
        ownerName.innerText="Owner :"+nft4.owner
        nftName.innerText=nft4.name
        nftFavs.innerText=nft4.favourits+"favourites"
        priceInDollars.innerHTML=nft4.priceInDollars
        endDate.innerText=nft4.salesEnd
        desccription.innerText=nft4.desc
        priceInEth.innerText=nft4.priceInEth
    }
    if(source.indexOf(nft5.source)>0){
        ownerName.innerText="Owner :"+nft5.owner
        nftName.innerText=nft5.name
        nftFavs.innerText=nft5.favourits+"favourites"
        priceInDollars.innerHTML=nft5.priceInDollars
        endDate.innerText=nft5.salesEnd
        desccription.innerText=nft5.desc
        priceInEth.innerText=nft5.priceInEth
    }
}
function ButtonClicked(otherImage){
    mainImage.src=".."+otherImage.src.substr(21,23)
    console.log("."+otherImage.src.substr(21,23))
    console.log(otherImage.src)
    
    
    if(otherImage.src.indexOf(nft1.source)>0){
        ownerName.innerText="Owner :"+nft1.owner
        nftName.innerText=nft1.name
        nftFavs.innerText=nft1.favourits+"favourites"
        priceInDollars.innerHTML=nft1.priceInDollars
        endDate.innerText=nft1.salesEnd
        desccription.innerText=nft1.desc
        priceInEth.innerText=nft1.priceInEth
    }
    if(otherImage.src.indexOf(nft2.source)>0){
        ownerName.innerText="Owner :"+nft2.owner
        nftName.innerText=nft2.name
        nftFavs.innerText=nft2.favourits+"favourites"
        priceInDollars.innerHTML=nft2.priceInDollars
        endDate.innerText=nft2.salesEnd
        desccription.innerText=nft2.desc
        priceInEth.innerText=nft2.priceInEth
    }
    if(otherImage.src.indexOf(nft3.source)>0){
        ownerName.innerText="Owner :"+nft3.owner
        nftName.innerText=nft3.name
        nftFavs.innerText=nft3.favourits+"favourites"
        priceInDollars.innerHTML=nft3.priceInDollars
        endDate.innerText=nft3.salesEnd
        desccription.innerText=nft3.desc
        priceInEth.innerText=nft3.priceInEth
    }
    if(otherImage.src.indexOf(nft4.source)>0){
        ownerName.innerText="Owner :"+nft4.owner
        nftName.innerText=nft4.name
        nftFavs.innerText=nft4.favourits+"favourites"
        priceInDollars.innerHTML=nft4.priceInDollars
        endDate.innerText=nft4.salesEnd
        desccription.innerText=nft4.desc
        priceInEth.innerText=nft4.priceInEth
    }
    if(otherImage.src.indexOf(nft5.source)>0){
        ownerName.innerText="Owner :"+nft5.owner
        nftName.innerText=nft5.name
        nftFavs.innerText=nft5.favourits+"favourites"
        priceInDollars.innerHTML=nft5.priceInDollars
        endDate.innerText=nft5.salesEnd
        desccription.innerText=nft5.desc
        priceInEth.innerText=nft5.priceInEth
    }
   
}
console.log(nft1.name)