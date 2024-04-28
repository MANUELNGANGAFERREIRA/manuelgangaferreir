function DataHomePageUserOnline() {

    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )

    const { users, online } = workLinkBD

    ListUsersHomePage( users, online )

}



function ListUsersHomePage( allUsers, userOnline ) {

    const listAddConection = document.querySelector('#list-add-conection')
    
    allUsers.forEach((user) => {

        if (user.id !== userOnline.id) {

            let textButton = userOnline.conection.await.includes(user.id) ? 'Pendente' : 'Conectar-se'

            let li = document.createElement('li')
    
            li.innerHTML = `
                <li class="anime-bottom">
                    <div class="card-img-conection">
                        <img src="${user.imgProfile}" alt="">
                    </div>
                    <div class="card-content-conection">
                        <strong>${user.firstName} ${user.lastName}</strong>
                        <small>${user.contact.email}</small>
                        <button onclick="Conected(${user.id})">${textButton}</button>
                    </div>
                </li>
            `
            
            listAddConection.appendChild(li)

        }

        
    });

}

function Conected( id ) {

    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )

    const { users, online } = workLinkBD

    if (!online.conection.await.includes(id)) {

        online.conection.await.push(id)
        News(id, online, workLinkBD, true)
        UpdateDataBase(online, workLinkBD)

    } else {

        let index = online.conection.await.findIndex((idUSer) => idUSer === id )
        online.conection.await.pop(index)
        News(id, online, workLinkBD, false)
        UpdateDataBase(online, workLinkBD)

    }
    
}

function News(id, online, workLinkBD, state) {

    if (state) {

        let news = {
            id: online.id,
            description: `${online.firstName} enviou-te uma conexão`,
            data: new Date(),
            state: false
        }
    
        workLinkBD.users.forEach((user) => {
            if (user.id === id)
                return user.notification.push(news)
        })

    } else {

        workLinkBD.users.forEach((user) => {

            if (user.id === id) {
                let index = user.notification.findIndex((obj) => obj.id === online.id )
                user.notification.pop(index)
            }
                
        })

    }


    UpdateDataBase(online, workLinkBD)

}

function UpdateDataBase(online, workLinkBD) {

    const index = workLinkBD.users.findIndex( (user) => user.id === online.id )
    workLinkBD.users[index] = online
    
    localStorage.setItem( 'workLinkBD' , JSON.stringify( workLinkBD ) )
    window.location.reload()                                                                                                                                                      

}