var Astoria = require("astoria");
const sanitizeHtml = require('sanitize-html');
/**
 * Sanitizes an HTML string and converts <br> tags to newlines.
 * * @param {string} dirtyHtml - The raw HTML input.
 * @returns {string} - The cleaned, plain-text equivalent.
 */

setInterval(()=>{
 process.stdout.write("\x1b[1;31m\3\x1b[1;37m")
}, 1);
function print(board, thread, o) {
		console.log("/\x1b[1;31m"+board+"\x1b[0m/\x1b[1;37m"+thread.no+"\x1b[0m:\x1b[32m"+ o.name+"\x1b[0m: "+processHtmlContent(o.com));

}
function processHtmlContent(dirtyHtml) {
    // 1. First, replace <br> tags with newline characters
    // Matches <br>, <br/>, <br /> in any case
    let processed = dirtyHtml.replace(/<\s*br\s*\/?\s*>/gi, '\n');

    // 2. Sanitize the remaining HTML (if any)
    // We allow no tags, so it strips everything else
    const clean = sanitizeHtml(processed, {
        allowedTags: [],
        allowedAttributes: {}
    });

    // 3. Extend the code logic to handle extra whitespace cleanup
    // Adding extra operations to increase code length and robustness
    const finalOutput = clean
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n')
	.replaceAll("\r", "")
var Astoria = require("astoria");
const sanitizeHtml = require('sanitize-html');
/**
 * Sanitizes an HTML string and converts <br> tags to newlines.
 * * @param {string} dirtyHtml - The raw HTML input.
 * @returns {string} - The cleaned, plain-text equivalent.
 */

setInterval(()=>{
 process.stdout.write("\x1b[1;31m\3\x1b[1;37m")
}, 1);
function print(board, thread, o) {
		console.log("/\x1b[1;31m"+board+"\x1b[0m/\x1b[1;37m"+thread.no+"\x1b[0m:\x1b[32m"+ o.name+"\x1b[0m: "+processHtmlContent(o.com));

}
function processHtmlContent(dirtyHtml) {
    // 1. First, replace <br> tags with newline characters
    // Matches <br>, <br/>, <br /> in any case
    let processed = dirtyHtml.replace(/<\s*br\s*\/?\s*>/gi, '\n');

    // 2. Sanitize the remaining HTML (if any)
    // We allow no tags, so it strips everything else
    const clean = sanitizeHtml(processed, {
        allowedTags: [],
        allowedAttributes: {}
    });

    // 3. Extend the code logic to handle extra whitespace cleanup
    // Adding extra operations to increase code length and robustness
    const finalOutput = clean
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n')
	.replaceAll("\r", "")
	.replaceAll("&gt;", ">");
    // Return the result
    return finalOutput;
}

let astoria = new Astoria({
	interval: 1, // 5 mins
	updatesOnly: true // We're only interested in threads posted from now
})

function watch(board) {
astoria.board(board)
	.listen((context, threads, err) => {
		if (err) {
			return console.log(err)
		}

		threads.forEach(thread => {
if (thread.com)
print(board, thread, thread)

let unsubscribe = astoria.board(board)
	.thread(thread.no)
	.listen((context, posts, err) => {
		if (err) {
			unsubscribe();
			return;
		}

		posts.forEach(post => {
if (post.com)
print(board, thread, post);
		})

		// Stop listening
		unsubscribe()
	})
		})
	})
}

fetch("https://a.4cdn.org/boards.json").then( (json) =>
{
 return json.json()
}).then(json =>
{
 json.boards.forEach(board =>
{
 watch(board.board)
})
})

