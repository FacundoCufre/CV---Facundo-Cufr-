function selectWindow (id){
    let options = document.querySelectorAll(".option")
    options.forEach(element => {
        element.setAttribute("class", "option not-active") 
    });
    let active = document.getElementById(id)
    active.setAttribute("class", "option active")

    let windows = document.querySelectorAll(".info-section")
    windows.forEach(element => {
        element.setAttribute("class", "info-section not-selected info-section"+id) 
    });
    let selected = document.getElementById('info-'+id)
    selected.setAttribute("class", "info-section selected info-section"+id)
    if(id === '1'){
        const color = '#fcb7af'
        document.querySelector('#name').setAttribute('style', 'color: '+color+';')
        document.querySelector('#body').setAttribute('style', 'background: linear-gradient(0deg, '+color+' 0%, '+color+' 3%, #f8f8f8 10%);')
        document.querySelector('#pic-container').setAttribute('style', 'background: '+color+';')
        document.querySelector('#h-nav').setAttribute('style', 'box-shadow: -40px 20px 0px -3px '+color+';')
    }
    else if(id === '2'){
        const color = '#6ed880'
        document.querySelector('#name').setAttribute('style', 'color: '+color+';')
        document.querySelector('#body').setAttribute('style', 'background: linear-gradient(0deg, '+color+' 0%, '+color+' 3%, #f8f8f8 10%);')
        document.querySelector('#pic-container').setAttribute('style', 'background: '+color+';')
        document.querySelector('#h-nav').setAttribute('style', 'box-shadow: -40px 20px 0px -3px '+color+';')
    }
    else if(id === '3'){
        const color = '#afb4fc'
        document.querySelector('#name').setAttribute('style', 'color: '+color+';')
        document.querySelector('#body').setAttribute('style', 'background: linear-gradient(0deg, '+color+' 0%, '+color+' 3%, #f8f8f8 10%);')
        document.querySelector('#pic-container').setAttribute('style', 'background: '+color+';')
        document.querySelector('#h-nav').setAttribute('style', 'box-shadow: -40px 20px 0px -3px '+color+';')
    }
    else if(id === '4'){
        const color = '#dfd36a'
        document.querySelector('#name').setAttribute('style', 'color: '+color+';')
        document.querySelector('#body').setAttribute('style', 'background: linear-gradient(0deg, '+color+' 0%, '+color+' 3%, #f8f8f8 10%);')
        document.querySelector('#pic-container').setAttribute('style', 'background: '+color+';')
        document.querySelector('#h-nav').setAttribute('style', 'box-shadow: -40px 20px 0px -3px '+color+';')
    }
}