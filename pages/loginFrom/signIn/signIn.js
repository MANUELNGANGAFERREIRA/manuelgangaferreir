function Error( inputEmailorNumber, inputPassword ) {
    inputEmailorNumber.style.borderColor = "#ea1d2c"
    inputPassword.style.borderColor = "#ea1d2c"
}

function Sucess(){
    setInterval(()=>{
       
        inputNumberOrEmail.style.borderColor = "#008000"
        inputPassword.style.borderColor = "#008000"
       },2000)

       window.location.href = '/home/polycarpe/Imagens/workLink/pages/indexUser.html'
}




function Login() {

    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') ) || {
        users: [],
        entreprise: [],
        online: null
    }

    const inputNumberOrEmail = document.querySelector('#input-number-or-email')
    const inputPassword = document.querySelector('#input-password')


    if ( inputNumberOrEmail.value.trim() === '' && inputPassword.value.trim() === '' ) 
        return alert('Campos vazios!!')

    
    const { users, entreprise } = workLinkBD
    const BDaux = [ ...users, ...entreprise ]
    
    const user = BDaux.find( (obj) => {
    
        if ( ( obj.contact.email === inputNumberOrEmail.value.trim() || obj.contact.phone === inputNumberOrEmail.value.trim() ) && ( obj.password === inputPassword.value.trim() ) )
            return obj
        
    })

    if (!user)
        return Error(inputNumberOrEmail, inputPassword)
        workLinkBD.online = user
        localStorage.setItem( 'workLinkBD' , JSON.stringify( workLinkBD ) )
       Sucess()
   
     

}