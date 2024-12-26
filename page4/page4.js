
function Paragraph(content,footer) {
  this.content = content;
  this.footer = footer;
}

const paragraphList = [
  new Paragraph (
    "Ich bin mit Aufzugshandwerk sehr zufrieden, weil mir immer höflich und fair geholfen wird. Die Prozesse sind sauber. Ich spare Zeit und Geld durch die Zusammenarbeit mit Aufzugshandwerk GmbH.",
    "ERDAL GÖCER GEBAU"
  ),
  new Paragraph (
    "Ich finde es toll, Kunde einer so jungen und motivierten Mannschaft zu sein, die ihre Kunden richtig zu wertschätzen wissen. Endlich mal ein Aufzugsbetrieb, der es anders als alle anderen macht. Fair und transparent!",
    "SANDRA FRANK MÜLLER IMMOBILIEN MANAGEMENT GMBH"
  ),
  new Paragraph (
    "Mir gefällt vor Allem die schnelle und unkomplizierte Zusammenarbeit. Wenn man bei Aufzugshandwerk anruft, ist immer jemand erreichbar. Ein Service, den ich in der Qualität nur von Aufzugshandwerk kenne.",
    "THOMAS GELLESCH AUFZUGSHANDWERK GMBH"
  )
]

const contentMiddleDOM = document.getElementById('title-middle');
const contentFooterDOM = document.getElementById('title-footer');
let currentPage = 1;

pageDisplay(currentPage);

function pageDisplay(index) {
  contentMiddleDOM.innerHTML = paragraphList[index].content;
  contentFooterDOM.innerHTML = paragraphList[index].footer;
}

function nextParagraph() {
  if (!(currentPage > 2)) {
    currentPage+=1;
    pageDisplay(currentPage);
  } 
}

function backParagraph() {
  if (!(currentPage < 0) ) {
    currentPage -=1;
    pageDisplay(currentPage);
  }
}