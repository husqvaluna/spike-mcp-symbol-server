import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import { api } from "./zodios/symbol";

const server = new McpServer({
    name: "Symbol RPC Tools",
    version: "1.0.0",
});

server.tool(
    "getAccountInfo",
    "Account public key or address encoded using a 32-character set.",
    { accountId: z.string() },
    async ({ accountId }) => {
        try {
            const accountInfo = await api.getAccountInfo({params: { accountId }});
            return {
                content: [{ type: "text", text: JSON.stringify(accountInfo, null, 2) }]
            };
        } catch (error) {
            return {
                content: [{ type: "text", text: `Error: ${(error as Error).message}` }]
            };
        }
    }
);

server.tool(
    "getMosaicInfo",
    "Gets the mosaic definition for a given mosaic identifier.",
    { mosaicId: z.string() },
    async ({ mosaicId }) => {
        try {
            const mosaicInfo = await api.getMosaic({params: { mosaicId }});
            return {
                content: [{ type: "text", text: JSON.stringify(mosaicInfo, null, 2) }]
            };
        } catch (error) {
            return {
                content: [{ type: "text", text: `Error: ${(error as Error).message}` }]
            };
        }
    }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Symbol RPC Tools running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
