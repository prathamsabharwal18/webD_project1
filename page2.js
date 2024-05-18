const get = async() => {
    const response = await fetch('https://coding-week-2024-api.onrender.com/api/data');
    if(response.status!== 200){
        throw new Error('cannot fetch data');
    }
    const data = await response.json();
    return data;
};
get().then((data) => {
    var image_newspaper=document.getElementsByClassName("newspaper");
    image_newspaper[0].src=data[0]['image'];
    var img_1_point_1=document.getElementsByClassName("news_img_text_culture");
    img_1_point_1[0].innerText=data[0]['type'];
    var img_1_date=document.getElementById("date_img1_p");
    console.log(img_1_date)
    img_1_date.innerText=data[0]['date'];
    var img_1_author = document.getElementsByClassName("theme_p");
    img_1_author[0].innerText=data[0]['author'];
    var img_1_description = document.getElementsByClassName("description_p");
    img_1_description[0].innerText=data[0]['headline'];



    var img_2_image = document.getElementsByClassName("universe_img");
    img_2_image[0].src=data[1]['image'];
    var img_2_point_1=document.getElementsByClassName("news_img_text_Fashion");
    img_2_point_1[0].innerText=data[1]['type'];
    var img_2_date=document.getElementById("date_img2_p");
    console.log(img_1_date)
    img_2_date.innerText=data[1]['date'];
    var img_2_author = document.getElementById("img_2_author");
    img_2_author.innerText=data[1]['author'];
    var img_2_description = document.getElementById("description_img2_p")
    img_2_description.innerText=data[1]['headline'];



    var img_3_image = document.getElementsByClassName("coffee_img");
    img_3_image[0].src=data[2]['image'];
    var img_3_point_1=document.getElementsByClassName("news_img_text_Food");
    img_3_point_1[0].innerText=data[2]['type'];
    var img_3_date=document.getElementById("date_img3_p");
    img_3_date.innerText=data[2]['date'];
    var img_3_author = document.getElementById("img_3_author_p");
    img_3_author.innerText=data[2]['author'];
    var img_3_description = document.getElementById("description_img3_p")
    img_3_description.innerText=data[2]['headline'];



    var img_4_image = document.getElementById("img_4");
    img_4_image.src=data[3]['image'];
    var img_4_point_1=document.getElementById("img_4_type");
    img_4_point_1.innerText=data[3]['type'];
    var img_4_date=document.getElementById("date_img4_p");
    img_4_date.innerText=data[3]['date'];
    var img_4_author = document.getElementById("img_4_author_p");
    img_4_author.innerText=data[3]['author'];
    var img_4_description = document.getElementById("description_img4_p")
    img_4_description.innerText=data[3]['headline'];




    for(var i=4;i<data.length;i++){
        var new_div=document.createElement("div");
        new_div.style.display="flex";
        var image=document.createElement("img");
        image.setAttribute('src',data[i]['image']);
        new_div.appendChild(image);
        new_div.style.marginBottom="10px";
        image.style.width="120px"
        image.style.height="90px"
        image.style.borderRadius="20px"
        image.style.marginTop="5px"
        image.style.marginLeft="8px"
        image.style.marginRight="10px"
        image.style.display="flex"
        var right_div=document.createElement("div");
        var txt_div=document.createElement("div");
        txt_div.style.display="block"
        var date_div=document.createElement("div");
        right_div.appendChild(txt_div);
        right_div.appendChild(date_div);
        var txt=document.createElement("p");
        var date=document.createElement("p");
        date.style.margin="0px"
        date.style.marginTop="10px"
        date_div.appendChild(date);
        date.innerText=data[i]['date']
        txt_div.appendChild(txt);
        txt_div.appendChild(date_div)
        new_div.appendChild(txt_div);
        txt_div.style.marginTop="11px"
        txt.style.margin="0px";
        txt.style.fontWeight="600"
        txt.style.fontFamily="Montserrat"
        txt.innerText=data[i]["headline"]
        txt.style.lineHeight="16px"

        var img_pic=document.querySelector("image");
        console.log(new_div);
        console.log(image);
        var side=document.querySelector(".side_total");
        side.appendChild(new_div);
        side.style.overflow="scroll"
};
}
)
.catch(err => console.log('rejected:',err.message));
