let video_source = document.querySelector(".video-big source");
let video_title = document.querySelector(".video-title-main");
let all_video = document.querySelectorAll(".video-div");

for(let i = 0; i < all_video.length; i++){
    all_video[i].addEventListener("click", ()=>{
        transfer_to_main(all_video[i]);
        remove_class_from_all(all_video);
        add_class_to(all_video[i]);
    })
}


function transfer_to_main(ele) {
    let my_head = ele.querySelector(".video-title").innerText;
    let my_src = ele.querySelector(".video-small").src;
    my_src = makeSrc(my_src);
    // console.log(my_src);
    video_source.src = my_src;
    // video_source.setAttribute('src', my_src);
    let video = document.querySelector(".video-big");
    video.load();
    // video.play();
    // video.pause();
    console.log(video_source.src);
    video_source.src = my_src;
    video_title.innerText = my_head;
}

function remove_class_from_all(arr){
    arr.forEach(element => {
       element.classList.remove("playing");
    });
}


function add_class_to(ele){
    ele.classList.add("playing");
}

function makeSrc(source_str){
    source_str = source_str.split("/");
    source_str = source_str[source_str.length-2] + "/" + source_str[source_str.length-1];
    return source_str;
}