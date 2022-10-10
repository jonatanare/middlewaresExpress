import express from "express";
import next from "next";
import koderRouter from "./routers/koders.router.js";
import { StatusHttp } from "./errorCustom.js";

const server = express();

// middleware
// middleware de aplicación
function validOrange(request, response, next) {
  console.log("1. Este es un middleware de aplicación");
  request.isGoodOrange = false;
  if (request.isGoodOrange) {
      request.isGoodOrange = "Aqui estan las naranjas buenas";
    next();
    return;
  }

  response.status(400).json({
    message: "Ooh no, las naranjas estan muy mal >_<",
  });
  next();
}

server.use(validOrange);

server.use((request, response) => {
  console.log("2. Este es otro middleware");
  next();
});

// Router
server.use("/koders", koderRouter);

server.get("/", (request, response) => {
  try {
    onsole.log("Desde: GET /");
    console.log(request.oranges);
    response.json({
      message: "Middlewares en express",
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: error.message,
    });
  }
  c;
});

server.get('/hola', (request, response, next) => {
  try {
    throw new StatusHttp('Ocurrio un error: ', 500)

    response.json({
      message: "Hola desde express",
    });

  } catch (error) {

    response.status(error.status).json({
        success: false,
        message: error.message
    })
  }
});

function handleErrors(error, request, response, next) {
    response.status(error.status).json({
        success: false,
        message: 'Server internal error'
    })
}

server.use(handleErrors)

server.listen(8080, () => {
  console.log("Server listening on port 8080");
});
