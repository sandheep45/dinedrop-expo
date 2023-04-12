import { CodegenConfig } from "@graphql-codegen/cli";
import { LOCAL_SERVER_URL } from "./constant";

const config: CodegenConfig = {
  schema: [
    {
      [LOCAL_SERVER_URL]: {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJTYW4iLCJ1c2VybmFtZSI6IlN1c3NhbiIsImlhdCI6MTY4MDAxMzIyMH0.OaHo82RsXeJ6VF8OQKbpPQOlr54WB_q5ZWOZ3rKLSU8",
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
