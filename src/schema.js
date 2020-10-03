import React from 'react'
const auth = "1"

//back end จอมปลอม
const getProfile = (id) =>{
    const typeFavTag = Array.from(new Set( initData.user[id].favorites.map((item1) =>{
        const index = initData.favorites.findIndex((item2) =>{
            return item2.id === item1
        })
        return initData.favorites[index].type
    })))

    //ค่าใน arry typeFavTag คือ ชื่อประเภท
    const favTag = typeFavTag.map((item1) =>{
        const obj = {
            name: item1,
            list: initData.favorites.filter((item2) =>{
                return item2.type === item1
            })
        }
        return obj
    })
    const hobbTag = [
        {
            name: "tag",
            list: initData.user[id].hobbies.map((item1) =>{
                const index = initData.hobbies.findIndex((item2) =>{
                    return item2.id === item1
                })
                return initData.hobbies[index]
            })
        }
    ]

    let userJson = {...initData.user[id]}
    userJson.hobbies = hobbTag
    userJson.favorites = favTag
    
    return userJson
}
const initData = {
    user:[
            {
                id:'1',
                username:'Pooh',
                firstName:'Pooh',
                lastName:'Shit',
                nation:'Thailand',
                city:"Bangkok",
                intro:"YongNo dek dok",
                gender: 'male',
                age: 20,
                image: '5.png',
                friend:[
                    '2'
                ],
                hobbies:[
                    '1', '2'
                ],
                describe:"Don't know what to say",
                favorites:[
                    '1', '2'
                ]
            },
            {
                id:'2',
                username:'YoungNo',
                firstName:'No',
                lastName:'Nukeiad',
                nation:'Thailand',
                city:"Bangkok",
                intro:"Pooh Shit dek dok",
                gender: 'other',
                age: 20,
                image: '5.png',
                friend:[
                    '1'
                ],
                hobbies:[
                    '2'
                ],
                describe:"Don't know what to say",
                favorites:[
                    '3'
                ]
            },
            {
                id:'3',
                username:'Irem',
                firstName:'Irem',
                lastName:'Zengin',
                nation:'Turkey',
                city:"Anatalya",
                intro:"Green",
                gender: 'Female',
                age: 17,
                image: '5.png',
                friend:[
                    '1'
                ],
                hobbies:[
                    '3'
                ],
                describe:"Don't know what to say",
                favorites:[
                    '1'
                ]
            },
    ],
    hobbies:[
        {
            id:'1',
            name:"Masturbate"
        },
        {
            id:'2',
            name:"Young O"
        },
        {
            id:'3',
            name:"Singing"
        }
    ],
    favorites:[
        {
            id:'1',
            name:'Watching',
            type: 'movie'
        },
        {
            id:'2',
            name:'Cats',
            type: 'animal'
        },
        {
            id:'3',
            name:'Porn',
            type: 'movie'
        }
    ],
    message:[
        {
            id: '1',
            user:['1','2'],
        },
        {
            id: '2',
            user:['1','3'],
        },
    ],
    text:[
        {
            id:'1',
            message:'1',
            user:'1',
            date: new Date("October 2 2020 4:00:30"),
            text:'No?'
        },
        {
            id:'2',
            message:'1',
            user:'2',
            date: new Date("October 2 2020 4:00:31"),
            text:'Young No'
        },
        {
            id:'3',
            message:'1',
            user:'2',
            date: new Date("October 2 2020 4:00:32"),
            text:'BullShit?'
        },
        {
            id:'4',
            message:'2',
            user:'1',
            date: new Date("October 2 2020 4:00:32"),
            text:'Irem?'
        },
    ]
}

const database = {user:auth, data: initData, getProfile: getProfile}

export default database