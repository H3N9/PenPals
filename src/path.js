const main = 'https://fluffy-dolphin-40.loca.lt/'
//const main = "https://red-sheep-45.loca.lt/"

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
    urlReomvetag: main + 'account/remove-tag/',
    urlPost: main+'post/',
    urlCreatePost: main+'post/create/',
    urlLike: main+'post/like/',
    urlNotification: main+'notification/',
    urlSetRelationship: main+'friend/set-relationship/',
    urlProfileVisitors: main+'notification/profile-visitors/'
}

export default urls