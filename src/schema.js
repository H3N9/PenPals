import React from "react";
const auth = "1";

//back end จอมปลอม

const getDataById = (arryObj, id) => {
  const index = arryObj.findIndex((item1) => {
    return item1.id === id;
  });
  return arryObj[index];
};

const getProfile = (id) => {
  const typeFavTag = Array.from(
    new Set(
      getDataById(initData.user, id).favorites.map((item1) => {
        return getDataById(initData.favorites, item1).type;
      })
    )
  );

  //ค่า element ใน typeFavTag คือ ชื่อประเภท (typeName)
  const favTag = typeFavTag.map((item1) => {
    const obj = {
      name: item1,
      list: getDataById(initData.user, id)
        .favorites.map((item2) => {
          return getDataById(initData.favorites, item2);
        })
        .filter((item2) => item2.type === item1),
    };
    return obj;
  });
  const hobbTag = [
    {
      name: "tag",
      list: getDataById(initData.user, id).hobbies.map((item1) => {
        return getDataById(initData.hobbies, item1);
      }),
    },
  ];

  let userJson = { ...getDataById(initData.user, id) };
  userJson.hobbies = hobbTag;
  userJson.favorites = favTag;

  return userJson;
};
const initData = {
  user: [
    {
      id: "1",
      username: "Nicklas Bendtner",
      firstName: "",
      lastName: "Bendtner",
      nation: "Thailand",
      city: "Bangkok",
      intro: "Hello World",
      gender: "male",
      age: 20,
      image: "5.png",
      friend: ["2"],
      hobbies: ["1", "2"],
      describe: "Don't know what to say",
      favorites: ["1", "2", "4"],
    },
    {
      id: "2",
      username: "ToeSF",
      firstName: "No",
      lastName: "Nukeiad",
      nation: "Thailand",
      city: "Bangkok",
      intro: "Nai wa Ja Mai Lok Kan",
      gender: "other",
      age: 20,
      image: "5.png",
      friend: ["1"],
      hobbies: ["2"],
      describe: "Don't know what to say",
      favorites: ["3", "1"],
    },
    {
      id: "3",
      username: "Welbeck",
      firstName: "Danny",
      lastName: "Welbeck",
      nation: "England",
      city: "London",
      intro: "Green",
      gender: "Female",
      age: 17,
      image: "5.png",
      friend: ["1"],
      hobbies: ["3"],
      describe: "Don't know what to say",
      favorites: ["2"],
    },
  ],
  hobbies: [
    {
      id: "1",
      name: "Football",
    },
    {
      id: "2",
      name: "Watching",
    },
    {
      id: "3",
      name: "Singing",
    },
  ],
  favorites: [
    {
      id: "1",
      name: "Avatar",
      type: "movie",
    },
    {
      id: "2",
      name: "Cats",
      type: "animal",
    },
    {
      id: "3",
      name: "ink waruntorn",
      type: "music",
    },
    {
      id: "4",
      name: "Silly Fools",
      type: "music",
    },
  ],
  message: [
    {
      id: "1",
      user: ["1", "2"],
    },
    {
      id: "2",
      user: ["1", "3"],
    },
  ],
  text: [
    {
      id: "1",
      message: "1",
      user: "1",
      date: new Date("October 2 2020 4:00:30"),
      text: "No?",
    },
    {
      id: "2",
      message: "1",
      user: "2",
      date: new Date("October 2 2020 4:00:31"),
      text: "Young No",
    },
    {
      id: "3",
      message: "1",
      user: "2",
      date: new Date("October 2 2020 4:00:32"),
      text: "Hello",
    },
    {
      id: "4",
      message: "2",
      user: "1",
      date: new Date("October 2 2020 4:00:32"),
      text: "Bye",
    },
  ],
};

const database = { user: auth, data: initData, getProfile: getProfile };

export default database;
