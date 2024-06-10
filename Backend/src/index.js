import app from "./app.js";
import connectToDB from "./db/index.js";

connectToDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Server started succcessfully at port ${process.env.PORT || 5000}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
