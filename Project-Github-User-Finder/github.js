class Github {
    constructor () {
        this.client_id = "214c15abfdd68bea0597";
        this.client_secret = "71dd3853e51d4a530fe95b4053fe682a5296ee1f";
    }

    async getUser( user ) {

        const profileResponse = await fetch ( `
        https://api.github.com/users/${user}?client_id = ${this.client_id}& client_secret = ${
            this.client_secret}` )

        const profile = await profileResponse.json();

        return {

            profile // profile = profile


        }

    }

}