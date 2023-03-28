import { CodegenConfig } from "@graphql-codegen/cli";
import { LOCAL_SERVER_URL } from "./constant";

const config: CodegenConfig = {
  schema: [
    {
      [LOCAL_SERVER_URL]: {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJTYW4iLCJ1c2VybmFtZSI6IlN1c3NhbiIsImlhdCI6MTY3OTk4NDkxOH0.t55pyA45POu9F_0L9TA7ccp6mAJmdEwq1_yK7sCGaUY",
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
