&#x20;As i Almostly completed the frontend part of admin, cLIENT SIDE OF E-Commerce project;



Now i Start building the Backend:



**Step-1:**



&#x20;			i create the Server root dir,

&#x09;		npm init -y,

&#x09;		create index.js

&#x09;		Now i need to install different types of packages:

&#x09;

&#x09;				bycryptjs, cloudinary , cookie-parser, cors, dotenv, express, helmet , jsonwebtoken,

&#x09;				mongoose, morgan, multer, nodemon



**Step-2:**

&#x09;		import the package that are needed to create server:

&#x09;

&#x09;		i import it in index.js main root file:

&#x09;							import express, { response } from "express";

&#x09;							import cors from "cors";

&#x09;							import dotenv from "dotenv";

&#x09;							dotenv.config();

&#x09;							import cookieParser from "cookie-parser";

&#x09;							import morgan from "morgan";

&#x09;							import helmet from "helmet";



&#x09;							const app = express();

&#x09;							app.use(cors());

&#x09;							app.options("\*", cors());



&#x09;							app.use(express.json());

&#x09;							app.use(cookieParser());

&#x09;							app.use(morga0n());

&#x09;							app.use(helmet({

&#x20;   										crossOriginResourcePolicy: false,

&#x20; 										}),

&#x09;								);

Step-3:

&#x09;		Create .env file:

&#x09;				initialize port variable

&#x09;				const PORT= 8000; // above 5000



&#x09;		Now access this port from .env in index.js file:

&#x09;								const PORT = 8080 || process.env.PORT;



&#x09;		Checked is the Server working:

&#x09;						app.get('/',(request, response)=>{

&#x09;						// server to

&#x20; 							response.json({

&#x20;   									message: "Server is running" + process.env.PORT

&#x20; 									})

&#x09;						})



Step-4:

&#x09;		Connect Database (connecting):

&#x09;						First create Config folder in server

&#x09;						1) config

&#x09;							 connectDB.JS:

&#x09;									import express, { response } from "express";

&#x09;									import cors from "cors";

&#x09;									import dotenv from "dotenv";

&#x09;									dotenv.config();

&#x09;									import cookieParser from "cookie-parser";

&#x09;									import morgan from "morgan";

&#x09;									import helmet from "helmet";



&#x09;									import connectDB from "./config/connectDB.js";



&#x09;									const app = express();

&#x09;									app.use(cors());

&#x09;									app.options("/{\*splat}", cors());

&#x09;									app.use(express.json());

&#x09;									app.use(cookieParser());

&#x09;									app.use(morgan("dev"));

&#x09;									app.use(helmet({

&#x20;   												crossOriginResourcePolicy: false,

&#x20; 												}),

&#x09;										);



&#x09;									const PORT = 8080 || process.env.PORT;



&#x09;									app.get("/", (request, response) => {

&#x20;										 // server to

&#x20; 												response.json({

&#x20;   												message: "Server is running" + process.env.PORT,

&#x20; 														});

&#x09;									});



&#x09;									connectDB().then(() => {

&#x20; 											app.listen(process.env.PORT, () => {

&#x20;   												console.log("Server running on port ", process.env.PORT);

&#x20; 												});

&#x09;									});



Mongodb configuration:

Username: manzoorahmadm293\_db\_user

Password: u6KuhlTyghJRz0Vp





Step-5: 		

&#x09;		Update the index.js file to access and run the server

&#x09;		

&#x09;		import express, { response } from "express";

&#x09;		import cors from "cors";

&#x09;		import dotenv from "dotenv";

&#x09;		dotenv.config();

&#x09;		import cookieParser from "cookie-parser";

&#x09;		import morgan from "morgan";

&#x09;		import helmet from "helmet";



&#x09;		import connectDB from "./config/connectDB.js";



&#x09;		const app = express();

&#x09;		app.use(cors());

&#x09;		app.options("/{\*splat}", cors());

&#x09;		app.use(express.json());

&#x09;		app.use(cookieParser());

&#x09;		app.use(morgan("dev"));

&#x09;		app.use(

&#x09;		  helmet({

&#x20;   				crossOriginResourcePolicy: false,

&#x20; 				}),

&#x09;		);



&#x09;		const PORT = 8080 || process.env.PORT;



&#x09;		app.get("/", (request, response) => {

&#x20; 				// server to

&#x20; 				response.json({

&#x20;   				message: "Server is running" + process.env.PORT,

&#x20; 				});

&#x09;		});



&#x09;		connectDB().then(() => {

&#x20; 						app.listen(process.env.PORT, () => {

&#x20;   						console.log("Server running on port ", process.env.PORT);

&#x20; 						});

&#x09;		});







Step-6: 



Now your server and Mongodb database successfully connected 

Before running yours package.json file should have



{

&#x20; "name": "server",

&#x20; "version": "1.0.0",

&#x20; "description": "",

&#x20; "main": "index.js",

&#x20; "type": "module",

&#x20; "scripts": {

&#x20;   "start": "node index.js",

&#x20;   "dev": "nodemon index.js"

&#x20; },

&#x20; "keywords": \[],

&#x20; "author": "",

&#x20; "license": "ISC",

&#x20; "dependencies": {

&#x20;   "bcryptjs": "^3.0.3",

&#x20;   "cloudinary": "^2.11.0",

&#x20;   "cookie-parser": "^1.4.7",

&#x20;   "cors": "^2.8.6",

&#x20;   "dotenv": "^18.0.9",

&#x20;   "express": "^5.3.0",

&#x20;   "helmet": "^8.3.0",

&#x20;   "jsonwebtoken": "^9.0.3",

&#x20;   "mongoose": "^9.11.4",

&#x20;   "morgan": "^1.12.1",

&#x20;   "multer": "^2.5.0"

&#x20; },

&#x20; "devDependencies": {

&#x20;   "nodemon": "^3.1.14"

&#x20; }

}



Now you can run:

run npm dev

&#x09;





&#x09;

