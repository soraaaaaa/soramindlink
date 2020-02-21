const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = 3000;
const next = require("next");
// const axios = require('axios')
// const cors = require('cors')
// const passport = require('passport')

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// const urlSet = require('./utils/urls')

app
  .prepare()
  .then(() => {
    const server = express();
    // Json parser middleware
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(cookieParser());
    // server.use(session({secret: 'keyboard cat'}));
    //server.use(passport.initialize());
    //server.use(passport.session());

    // CORS middleware
    //   server.use(cors({credentials:true, origin:`${urlSet.localUrl}`}))

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on ${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
