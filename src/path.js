// const main = 'http://localhost:3000/'
const main = "https://63a6f5bbde6a.ngrok.io/"

const urls = {
    urlSocket: main,
    urlLogin: main + 'auth/login/',
    urlMessage: main + 'message/',
    urlMyprofile: main + 'account/my-profile/',
    urlSearchUser: main + 'search/user/',
    urlSearchUserId: main + 'search/user/byid/',
    urlCreateChat: main + 'message/chat/',
    urlImage: main+'image/',
    urlRegister: main + 'auth/register/',
    urlFriend: main + 'friend/',
    urlUpdateProfile: main+'account/update/'
}

export default urls