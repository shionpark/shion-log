import { NotionAPI } from "notion-client"

const NOTION_VERSION = process.env.NOTION_VERSION ?? "2025-09-03"

// Shared headers to avoid 406 responses by being explicit about content negotiation
export const notionHeaders = {
  Accept: "application/json",
  "Notion-Version": NOTION_VERSION,
}

// `gotOptions` consumed by `notion-client` methods
export const notionGotOptions = {
  headers: notionHeaders,
}

export const notionVersion = NOTION_VERSION

// Provide a single factory so all callers share the same defaults
export const getNotionClient = () => new NotionAPI()

