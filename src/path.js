//const main = 'http://localhost:3000/'
const main = "http://0241bc8f85a1.ngrok.io/"

const urls = {
    urlSocket: main,
    urlLogin: main + 'auth/login/',
    urlMessage: main + 'message/',
    urlMyprofile: main + 'account/my-profile/',
    urlSearchUser: main + 'search/user/',
    urlSearchUserId: main + 'search/user/byid/',
    urlCreateChat: main + 'message/chat/',
    urlImage: main + 'image/',
    urlRegister: main + 'auth/register/',
    urlFriend: main + 'friend/',
    urlUpdateProfile: main + 'account/update/',
    urlTag: main+"search/tag/",
    urlHobbTag: main + 'search/hobb-tag/',
    urlFavTag: main + 'search/fav-tag/',
    urlAddTag: main + 'account/add-tag/',
    urlReomvetag: main + 'account/remove-tag/'
}

export default urls