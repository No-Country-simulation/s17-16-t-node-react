import { config } from 'dotenv';
import swaggerJsDoc from 'swagger-jsdoc';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';
import swaggerUI from 'swagger-ui-express';

config();

const env = process.env.NODE_ENV ?? 'development';
const port = process.env.PORT ?? 3000;
const hostDev = process.env.HOST_DEV ?? 'localhost';
const hostProd = process.env.HOST_PROD_BACK ?? 'restifyApi2.vercel.app';
const theme = new SwaggerTheme();
const darkStyle = theme.getBuffer(SwaggerThemeNameEnum.DARK);
const serverUrl =
  env?.trim() === 'production'
    ? `https://${hostProd}/{basePath}/{versionApi}`
    : `http://${hostDev}:${port}/{basePath}/{versionApi}`;
const apisRoot =`./**/doc/*.doc.js`;
const swaggerConfig = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Restify Api.",
      summary: "Restaurant Management System.",
      description: "Restaurant Management System By.",
      termsOfService: "http://swagger.io/terms/",
      contact: {
        name: "S17-16-T-NODE-REACT",
        url: "https://no-country.slack.com/archives/C07HAA2JQV9",
        email: "s1716tnodereact@gmail.com",
      },
      license: {
        name: "MIT",
        identifier: "MIT",
        url: "https://opensource.org/license/mit/",
      },
      version: "1.0.0",
    },
    externalDocs: {
      description: "Find out more about Swagger",
      url: "http://swagger.io",
    },
    servers: [
      {
        url: serverUrl,
        description:
          "The server api environment " +
          (env?.trim() === "production" ? "production" : "development"),
        variables: {
          basePath: {
            enum: ["api"],
            default: "api",
            description: "this value is assigned by the service provider",
          },
          versionApi: {
            enum: ["v1", "v2"],
            default: "v1",
            description: "this value is assigned by the service provider",
          },
        },
      },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
  apis: [apisRoot],
};

const swaggerOptions = {
  explorer: true,
  swaggerUi: true,
  docExpansion: 'list',
  filter: true,
  customSiteTitle: 'Restify Api',
  customHeadTags: [
    {
      tagName: 'meta',
      closeTag: true,
      attributes: {
        name: 'twitter:card',
        content: 'summary',
      },
    },
    {
      tagName: 'meta',
      closeTag: true,
      attributes: {
        name: 'twitter:title',
        content: 'Project Api',
      },
    },
    {
      tagName: 'meta',
      closeTag: true,
      attributes: {
        name: 'twitter:description',
        content: 'Un Sistema de Manejo de equipo',
      },
    },
    {
      tagName: 'meta',
      closeTag: true,
      attributes: {
        name: 'twitter:image',
        content: 'https://projecto.vercel.app/assets/img/ograhp.bmp',
      },
    },
    {
      tagName: 'meta',
      closeTag: true,
      attributes: {
        property: 'og:title',
        content: 'Project Api',
      },
    },
    {
      tagName: 'meta',
      closeTag: true,
      attributes: {
        property: 'og:description',
        content: 'Un Sistema de Manejo de equipo',
      },
    },
    {
      tagName: 'meta',
      closeTag: true,
      attributes: {
        property: 'og:image',
        content: 'https://projecto.vercel.app/assets/img/ograhp.bmp',
      },
    },
  ],
  customCss: `${darkStyle}
    .main{
      background-image: url("/assets/img/logo.png");
      background-size: 60px 60px;
      background-repeat: no-repeat;
      padding-left: 70px;
      height: 60px;
      align-content: center;
    }
    .topbar{ display: none;}
    `,
  customfavIcon: '/assets/ico/favicon.ico',
  customJs: `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.9.4/swagger-ui-bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.9.4/swagger-ui-standalone-preset.min.js"></script>
  `,
  customCssUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.9.4/swagger-ui.min.css',
};

const swaggerSettings = swaggerJsDoc(swaggerConfig);
export const middleware = swaggerUI.serve;
export const controller = swaggerUI.setup(swaggerSettings, swaggerOptions);
