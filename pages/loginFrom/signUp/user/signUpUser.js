const user = {
    id: '',
    firstName: '',
    lastName: '',
    contact: {
        phone: '',
        email: ''
    },
    imgProfile: '../assets/image/profile/default.jpg',
    description: '',
    conection: {
        await: [],
        accept: [],
        declined: []
    },
    post: [],
    view: [],
    skills: [],
    cv: [], 
    message: [],
    notification: [],
    password: '',
    entity: 'user'
}

const pathHomePage = '/Users/Bopas/OneDrive/Área de Trabalho/projectoPT/worklink/workLink-main/workLink-main/pages/indexUser.html'


let regexNames = /^[a-zA-Z]+$/
let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let regexPassword = /^.{8,}$/


const inputFirstName = document.querySelector('#input-firstName')
let stateFirstName = false

const inputLastName = document.querySelector('#input-lastName')
let stateLastName = false

const inputEmail = document.querySelector('#input-email')
let stateEmail = false

const inputPassword = document.querySelector('#input-password')
let statePassword = false



function ValidateData() {

    stateFirstName = regexNames.test(inputFirstName.value.trim())
    stateLastName = regexNames.test(inputLastName.value.trim())
    stateEmail = regexEmail.test(inputEmail.value.trim())
    statePassword = regexPassword.test(inputPassword.value.trim())
   
    
    if ( stateFirstName && stateLastName && stateEmail && statePassword )
        return true

    return false
    
}


function Error(){

    if (!stateFirstName){
        inputFirstName.style.borderColor = "#ea1d2c";
    }else{
        inputFirstName.style.borderColor = null;
    }
    
    if (!stateEmail){
        inputEmail.style.borderColor = "#ea1d2c";
    }else {
      inputEmail.style.borderColor = null;
    }

    if (!stateLastName) {
        inputLastName.style.borderColor = "#ea1d2c";
    } else {
        inputLastName.style.borderColor = null;
    }

    if (!statePassword) {
        inputPassword.style.borderColor = "#ea1d2c";
    } else {
        inputPassword.style.borderColor = null;
    }
    
}

function Sucess(){

   setInterval(()=>{
        inputFirstName.style.borderColor = "#008000"
        inputLastName.style.borderColor = "#008000"
        inputEmail.style.borderColor = "#008000"
        inputPassword.style.borderColor = "#008000"
   },2000)
   
    window.location.href = pathHomePage

}


function CreateAccount() {

    if ( !ValidateData() )
        return Error()


    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') ) || {
        users: [],
        entreprise: [],
        online: null
    }


    user.id = Math.floor( Math.random() * 1e15 )
    user.firstName = inputFirstName.value.trim()
    user.lastName = inputLastName.value.trim()
    user.description = `Olá tudo bem?!! Chamo-me ${inputFirstName.value.trim()} ${inputLastName.value.trim()}, seja bem-vindo ao meu perfil.`
    user.contact.email = inputEmail.value.trim()
    user.password = inputPassword.value.trim()


    if ( workLinkBD.users.length === 0 ) {

        workLinkBD.users.push( user )
        workLinkBD.online = user
        localStorage.setItem( 'workLinkBD' , JSON.stringify( workLinkBD ) )
        Sucess()

    }else{

        let verifyIfContactExistInDataBase = workLinkBD.users.some( (user) => user.contact.email == inputEmail.value.trim() )

        if ( !verifyIfContactExistInDataBase ) {
            
            workLinkBD.users.push( user )
            workLinkBD.online = user
            localStorage.setItem( 'workLinkBD' , JSON.stringify( workLinkBD ) )
            Sucess()
            
        } else {
            inputEmail.style.borderColor = "#ea1d2c";
        }

    }


}