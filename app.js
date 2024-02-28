const h2 = React.createElement('h1',{
    style:{
        color:'green'
    }
},'Learn Web Development');

const p1 = React.createElement('p',
{
    className: "paragraph_content"
},
'Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.');

const p2 = React.createElement('p',
{
    className: "paragraph_content"
},
'For example, if you are interested in front end you can start by learning some HTML and CSS, then start working on projects as soon as you are comfortable with the basics. Our Web Developer Program is a perfect fit for this route. But others may suite you as well. It also helps to join a discussion group or community of other web developers, so that you can troubleshoot, discuss ideas and get inspiration. That’s why you become part of the OpenClassrooms community when you enroll in a program on the site.');

const p3 = React.createElement('p',
{
    className: "paragraph_content"
},
'All this may sound daunting at first, but you don’t need to know everything at once. You will grow your knowledge progressively. And things will begin to click. The great news is, learning to become a developer is easily accessible and affordable. This is especially true with OpenClassrooms. Emily Reese, Web developer and Teacher at OpenClassrooms explains ',<a href="https://copyprogramming.com/howto/javascript-anchor-tag-in-react-js-code-example">,'In undergrad',</a>, ', I studied art history and architecture and then decided to become a developer whilst I was working at Kickstarter because I saw how the web could complement creativity in the arts. The same is probably true for any field. Becoming a web professional allows you to participate in absolutely any field, because the web has become universally present in our professional lives. You can be a web developer and specialize in anything from the art world to the automobile industry.');

const div = React.createElement('div',{}, [h2, p1, p2, p3]);

const flexDiv = React.createElement("div", {className: "main_div"} ,div)

ReactDOM.render(flexDiv, document.getElementById('root'))