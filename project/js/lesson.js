const phoneInput = document.querySelector('#phone_input')
const phoneCheckt = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneCheckt.onclick = () =>{
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'green'
    }else{
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color= 'red'
    }
}

//TAB SLIDER
const tabContent = document.querySelectorAll('.tab_content_block')
const tabs =document.querySelectorAll('.tab_content_item')
const tabsParent =document.querySelector('.tab_content_items')


const hideTabContent = () => {
    tabContent.forEach( (item) => {
        item.style.display = 'none'
    })
    tabs.forEach( (item) => {
        item.classList.remove('tab_content_item_active')
    })
}


const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}


hideTabContent()
showTabContent()