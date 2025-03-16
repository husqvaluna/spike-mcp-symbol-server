# Symbol Model Context Protocol (MCP)

[Endpoints \- Symbol Developers](https://symbol.github.io/symbol-openapi/v1.0.4/)

## Generate ZOD client

```shell
$ npx -y openapi-zod-client https://symbol.github.io/symbol-openapi/v1.0.4/openapi3.yml \
  -o src/zodios/symbol.ts --base-url https://sym-test-01.opening-line.jp:3001 \
  -a
```

## Example MCP server config for Claude Desktop

```json
{
  "mcpServers": {
    "symbol": {
      "command": "npx",
      "args": [
        "-y",
        "tsx",
        "/path/to/spike-symbol-mcp-server/src/index.ts"
      ]
    }
  }
}
```
