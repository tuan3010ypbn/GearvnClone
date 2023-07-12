var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')

var currentIndex=0;
function updateImageByIndex(index){
    //remove acctive class
    document.querySelectorAll('.list-image div').forEach(item=>{
        item.classList.remove('active')
    })
    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}

listImg.forEach((imgElement, index)=>{
    imgElement.addEventListener('click',e=>{
        imgFeature.style.opacity = '0'
       
       setTimeout(()=>{
            updateImageByIndex(index)
            imgFeature.style.opacity = '1'
       },400)
    })
})
prevBtn.addEventListener('click', e=>{
    
    if(currentIndex == 0){
        currentIndex = listImg.length - 1
    }else{
        currentIndex--
    }
    
    imgFeature.style.animaton = ''
    setTimeout(()=>{
        updateImageByIndex(currentIndex)
        imgFeature.style.animaton = 'slideLeft 1s ease-in-out forwards'
    },200)
})

nextBtn.addEventListener('click', e=>{
    if(currentIndex == listImg.length - 1){
        currentIndex = 0
    }else{
        currentIndex++
    }
    
    imgFeature.style.animaton = ''
    setTimeout(()=>{
        updateImageByIndex(currentIndex)
        imgFeature.style.animaton = 'slideRight 1s ease-in-out forwards'
    },200)
})

 updateImageByIndex(0)

//popup
var btnOpen = document.querySelector('.open_modal_btn')
var modal = document.querySelector('.modal')
var iconclose = document.querySelector('.modal_header i')
var btnclose = document.querySelector('.modal_footer button')
function toggleModal(e){
    console.log(e.target);
    modal.classList.toggle('hide')
}
btnOpen.addEventListener('click',toggleModal)
btnclose.addEventListener('click',toggleModal)
iconclose.addEventListener('click',toggleModal)
modal.addEventListener('click',function(e){
    if(e.target = e.currentTarget){
        toggleModal()
    }
})


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
