module.exports = (sequelize, DataTypes) => { //laver en funktion vi kan exportere til andre filer. funktionen indeholder 2 argumenter

    //varibel 
    const Posts = sequelize.define("Posts", {
        //3 collums (title har et objekt med string i som datatypes) men der er flere propoteries inde i f.eks allownull false
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

return Posts
};