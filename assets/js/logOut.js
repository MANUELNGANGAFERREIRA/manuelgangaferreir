function logOut(){

    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )

    const pathPageExit = '/Users/Bopas/OneDrive/Área de Trabalho/projectoPT/worklink/workLink-main/workLink-min/pages/loginFrom/signIn/index.html'
    workLinkBD.online = null
    localStorage.setItem( 'workLinkBD' , JSON.stringify( workLinkBD ) )
    window.location.href = pathPageExit

}