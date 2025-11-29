import dotenv from "dotenv";
dotenv.config();
import express, { type Request, type Response } from "express";
import cors from "cors";
import helmet from "helmet";
import proxy from "express-http-proxy";

const app = express();
const PORT = process.env.PORT;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * * Proxy configuration options.
 *
 * ? proxyReqPathResolver`
 *    Rewrites the incoming request path by replacing `/v1` with `/api`
 *    before forwarding it to the target server.
 *
 * ?  proxyErrorHandler
 *    Handles any errors that occur during proxying.
 *    Logs the error and sends a 500 response to the client.
 
 * ? paths will be rewriten as follows:
 * ! v1/design/add -> /api/design/add
 * ! v1/subscription/create -> /api/subscription/create
 * ! v1/media/upload -> /api/media/upload

*/

const proxyOptions = {
  proxyReqPathResolver: function (req: Request) {
    return req.originalUrl.replace(/^\/v1/, "/api");
  },
  proxyErrorHandler: function (err: any, res: Response, next: Function) {
    res.status(500).send("Proxy error occurred");
    console.error("Proxy error:", err);
    next(err);
  },
};

/**
 * Setting up the proxy routes for different microservices
 * *Each route forwards requests to the appropriate microservice based on the environment variables.
 * ? v1/media -> UPLOAD service
 * ? v1/design -> DESIGN service
 * ? v1/subscription -> SUBSCRIPTION services
 * Each route uses the defined proxy options for path resolution and error handling.
 */

app.use(
  "/v1/media",
  proxy(process.env.UPLOAD as string, {
    ...proxyOptions,
    parseReqBody: false,
  })
);
app.use("/v1/design", proxy(process.env.DESIGN as string, proxyOptions));
app.use(
  "/v1/subscription",
  proxy(process.env.SUBSCRIPTION as string, proxyOptions)
);

app.get("/", (req, res) => {
  res.send("api gateway Service is running");
});

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`api gateway Service is running on port ${PORT}`);
      console.log(`Upload Service URL: ${process.env.UPLOAD}`);
      console.log(`Design Service URL: ${process.env.DESIGN}`);
      console.log(`Subscription Service URL: ${process.env.SUBSCRIPTION}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    throw new Error("Server start failed");
  }
}

startServer();
