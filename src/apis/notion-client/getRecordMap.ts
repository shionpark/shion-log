import { getNotionClient, notionGotOptions } from "./notionOptions"

export const getRecordMap = async (pageId: string) => {
  const api = getNotionClient()
  const recordMap = await api.getPage(pageId, { gotOptions: notionGotOptions })
  return recordMap
}
