import { CodegenConfig } from "@graphql-codegen/cli";
import { LOCAL_SERVER_URL } from "./constant";

const config: CodegenConfig = {
  schema: [
    {
      [LOCAL_SERVER_URL]: {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJTYW4iLCJ1c2VybmFtZSI6IlN1c3NhbiIsImlhdCI6MTY3OTc2NjUyMH0.0CsTlTykpHAky57IsF_KNv5JIwmFdBy5XzRa2GdiPfA",
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
