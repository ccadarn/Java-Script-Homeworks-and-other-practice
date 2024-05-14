/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

let domain = (url) => {
    let dom = url.split(/\.|\/\//);
    return (dom[0] === 'http:' || dom[0] === 'https:') && dom[1] === 'www' ? dom[2] :
           (dom[0] === 'http:' || dom[0] === 'https:') ? dom[1] :
           dom[0] === 'www' ? dom[1] : dom[0];
}

console.log(domain('http://github.com/carbonfive/raygun'));
console.log(domain('http://www.zombie-bites.com'));
console.log(domain('m1ywoywifu-6.info/archive/'));