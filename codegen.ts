import { CodegenConfig } from "@graphql-codegen/cli";
import { LOCAL_SERVER_URL } from "./constant";

const config: CodegenConfig = {
  schema: [
    {
      [LOCAL_SERVER_URL]: {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDQzYjI4MzMxMjVlMWYwNjM0NTVlZGUiLCJ1c2VybmFtZSI6IlNhbmRlZXAiLCJpYXQiOjE2ODIxNTgyMzcsImV4cCI6MTY4MjE1ODI5N30.FPVf895imPrDRjTalyq8lJ1SvBruSeElLfHllbq7U1k",
        },
      },
    },
  ],
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: ["typescript"],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
