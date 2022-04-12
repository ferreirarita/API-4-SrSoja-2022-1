module.exports = {
    HOST: "ec2-52-73-155-171.compute-1.amazonaws.com",
    USER: "kiwllbqfumyoay",
    PASSWORD: "0f93673db1d81bd2306f11f951db07cdeb92a12122b43681a9d82059ade754f9",
    DB: "de7armed1aq24p",
    dialect: "postgres",
    ssl: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };