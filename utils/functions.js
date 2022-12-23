export const breakText = (text, countWords = 30) => {
  const words = text.split(' ')
  return words.length > countWords
    ? words.slice(0, countWords).join(' ') + '...'
    : text
}

export const wysiwygText = text => {
  return text.replace(/(<([^>]+)>)/gi, '')
}

export const getPostDate = date => {
  const postDate = new Date(date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return postDate.toLocaleDateString('es-ES', options)
}

export const extractYoutubeVideoId = url => {
  const videoId = url.split('v=')[1]
  const ampersandPosition = videoId.indexOf('&')
  return ampersandPosition === -1
    ? videoId
    : videoId.substring(0, ampersandPosition)
}
