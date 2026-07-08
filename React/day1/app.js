//react video 1 ppa

const domRoot = document.getElementById("root");
//const domRoot = document.getElementsByTagName("main")[0];
const ReactRoot = ReactDOM.createRoot(domRoot);

const item1 = React.createElement("li", {}, "Item 1");
const item2 = React.createElement("li", {}, "Item2");

const listContainer = React.createElement("ul", {}, item1, item2);// type, props, children

ReactRoot.render(listContainer);