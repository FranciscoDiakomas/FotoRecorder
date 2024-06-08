window.onload = function () {
    const video = document.getElementById("video")
    navigator.mediaDevices.getDisplayMedia({video:true}).then((stream) =>{
        video.srcObject = stream;
        video.play()
    }).catch(err=>{
        console.log("Erro",err)
    })
    
    const btn = document.getElementById("btn")
    btn.addEventListener("click",()=>{
        if(video.paused){
            video.play()
        }else{
             video.pause()
             let canvas = document.getElementById("canvas")
             canvas.height = video.videoHeight
             canvas.width = video.videoWidth
             let ctx = canvas.getContext('2d')
             ctx.drawImage(video, 0, 0)
             const link = document.createElement("a")
             link.setAttribute("download","foto.png")
             link.href = canvas.toDataURL()
             link.text = "Clique para baixar"
              document.getElementsByTagName("div")[0].textContent= " "
             document.getElementsByTagName("div")[0].appendChild(link)
        }
       
    })
}