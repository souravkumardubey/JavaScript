// Init github
const github = new Github();

const ui = new UI();  

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    
    // Get Input Text
    const userText = e.target.value;

    if ( userText !== '' ) {

        // make HTTP call
        github.getUser(userText)
        .then( data => {
            if ( data.profile.message === 'Not Found' ) {

                // Show an alert
                ui.showAlert('User not found.' , 'alert alert-danger');

            } else {

                // Show the profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
        } );

    } else {

        // Clear the profile
        ui.clearProfile();
        
    }

});
