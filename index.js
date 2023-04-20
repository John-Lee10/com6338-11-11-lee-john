const getPoemBtn = document.getElementById('get-poem')
const poemEl = document.getElementById('poem')
const poemURL = 'https://poetrydb.org/random,linecount/1;12/author,title,lines.json'

const getJSON = url => fetch(url).then(res => res.json())

const pipe = (...fns) => firstArg => fns.reduce((returnValue, fn) => fn(returnValue), firstArg)

const makeTag = tag => str => `<${tag}>${str}</${tag}>`

// complete this function
const makePoemHTML = (poetryResponse) => {
  console.log(poetryResponse)
  //Title
  const poemTitle = poetryResponse[0].title
  const poemTitleHTML = makeTag('h2')(poemTitle)
  //Author
  const poemAuthor = "by " + poetryResponse[0].author
  makeH3 = makeTag('h3')
  makeEm = makeTag('em')
  const poemAuthorHTML = pipe (makeEm, makeH3)(poemAuthor)
  //lines
  const poemLines = poetryResponse[0].lines
  //HTML
  return poemTitleHTML + poemAuthorHTML + 
  `<p>${poemLines[0]}<br>${poemLines[1]}<br>${poemLines[2]}<br>${poemLines[3]}</p>
  <p>${poemLines[5]}<br>${poemLines[6]}<br>${poemLines[7]}<br>${poemLines[8]}</p>
  <p>${poemLines[10]}<br>${poemLines[11]}<br>${poemLines[12]}<br>${poemLines[13]}</p>`
}

// attach a click event to #get-poem
getPoemBtn.onclick = async function() {
  // renders the HTML string returned by makePoemHTML to #poem
  poemEl.innerHTML = makePoemHTML(await getJSON(poemURL))
}
