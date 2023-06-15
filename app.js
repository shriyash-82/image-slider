(function(){
    const pictures=['pic_1','pic_2','pic_3','pic_4','pic_5'];
    const buttons=document.querySelectorAll('.btn');
    const imgdiv=document.querySelector('.image-container');
    let counter=0;
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            if(button.classList.contains('leftbtn')){
                counter--
                if(counter<0)
                {
                    counter=pictures.length-1;
                }
                imgdiv.style.background=`url('./image/${pictures[counter]}.jpg')`
                 
            }
            if(button.classList.contains('rightbtn')){
                counter++
                if(counter>pictures.length-1)
                {
                    counter=0;
                }
                imgdiv.style.background=`url('./image/${pictures[counter]}.jpg')`
                 
            }

        })
    })
}) ()