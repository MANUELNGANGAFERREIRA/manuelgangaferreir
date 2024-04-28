function ShowDataUserOnline() {
    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )

    const { online } = workLinkBD

    
    const firstUserOnline = document.querySelectorAll(".first-user-online")
    const lastUserOnline = document.querySelectorAll(".last-user-online")
    const emailUserOnline = document.querySelectorAll(".email-user-online")
    const descUserOnline = document.querySelectorAll(".desc-user-online")
    const countConectionUserOnline = document.querySelectorAll(".count-conection-user-online")
    const countPostUserOnline = document.querySelectorAll(".count-post-user-online")
    const countViewUserOnline = document.querySelectorAll(".count-view-user-online")
    const imgProfileUserOnline = document.querySelectorAll('.img-profile-user-online')  
    const newsUserOnline = document.querySelector('#news-user-online')  




    firstUserOnline.forEach( (firstName) => {
        firstName.innerHTML = online.firstName
    })

    lastUserOnline.forEach( (lastName) => {
        lastName.innerHTML = online.lastName
    })

    emailUserOnline.forEach( (email) => {
        email.innerHTML = online.contact.email
    })
    
    descUserOnline.forEach( (description) => {
        description.innerHTML = online.description
    })

    countConectionUserOnline.forEach( (conection) => {
        conection.innerHTML = online.conection.accept.length
    })

    countPostUserOnline.forEach( (post) => {
        post.innerHTML = online.post.length
    })

    countViewUserOnline.forEach( (view) => {
        view.innerHTML = online.view.length
    })

    imgProfileUserOnline.forEach( (imgProfile) => {
        imgProfile.src = online.imgProfile
    })

    online.notification.length !== 0 ? newsUserOnline.setAttribute('style', 'color: var(--first-color)') : newsUserOnline.setAttribute('style', 'color: #fff')

    
}