export const parseSVG = async (url) => {
  const response = await fetch(url)
  if (response.ok) return await response.text()
  return 
}