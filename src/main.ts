import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <main>
      <section id="me">
        <img 
          src="8colorme.webp"
          width="400"
          height="558"
          alt="A digital scan of a four color silk screen self portrait of myself done on paper."
          title="A digital scan of a four color silk screen self portrait of myself done on paper.">
      </section>

      <section id="about">

        <h2>About</h2>
        <h1>Hello, my name is Keith Duke.</h1>

        <p>I am a web developer with over 13 years of experience working in the
        online media industry. For a decade I served as a full stack engineer focused
        on front-end technologies for
        <a href="https://cbsinteractive.com/about/">CBS Interactive (now Paramount)</a>
        as both a Lead and Senior on numerous brands. I have worked with most
        delivery technologies, such as...</p>
        <ul>
          <li>
            <div id="javascript">
              <h3>Javascript</h3>
              <p>With Node and frameworks like Vue/Nuxt and React/Next.</p>
            </div>
          </li>
          <li>
            <div id="python">
              <h3>Python</h3>
              <p>With frameworks like Django and Flask.</p>
            </div>
          </li>
          <li>
            <div id="php">
              <h3>PHP</h3>
              <p>WIth frameworks like Laravel, CodeIgniter and Zend.</p>
            </div>
          </li>
          <li>
            <div id="css">
              <h3>CSS</h3>
              <p>With Sass, BEM and major frameworks like Bootstrap and Tailwind.</p>
            </div>
          </li>
          <li>
            <div id="html">
              <h3>HTML</h3>
              <p>With Web Components and templating engines like Twig, Nunjucks and Jinja.</p>
            </div>
          </li>

        <p>I completed my Bachelor of Arts in
        <a href="https://www.academyart.edu/academics/web-design/">Web Design & New Media</a>
        at the Academy of Art University in San Francisco. I previously
         completed coursework in <a href="https://mtsu.edu/csc/">Computer Science</a>
         at Middle Tennessee State University. I have a background and love for
         craft and restoration, having worked professionally in wood and glass
         restoration. I fancy myself a writer,
         <a href="https://stackoverflow.com/questions/522828/is-code-for-computers-or-for-people">coding
        is an act of writing to two audiences</a>.</p>

        <p>Read more of my writing, coding and design at <a href="https://www.herelately.com">Here Lately</a>.</p>

        <p>Reach out to me on
         <a href="https://www.linkedin.com/in/keith-duke-8488345/">Linkedin</a>,
         <a href="https://github.com/keithduke">Github</a>,
         <a rel="me" href="https://hachyderm.io/@kduke">Mastodon</a>
         and <a href="https://bsky.app/profile/kmduke.bsky.social">Bluesky</a>.</p>
      </section>
    </main>

    <footer>
      <h2 id="colophon" class="jitter">Colophon</h2>

      <p>This website was designed using a
       <a href="https://getrocketbook.com/">Rocket Book</a> and created with
       <a href="https://www.vim.org/">Vim</a> to write html, css and javascript
       powered by <a href="https://pages.github.com/">GitHub Pages</a>.</p>

      <p>&#169; 2024 Keith Duke</p>
    </footer>

    <dialog id="thanksMessage">
      <button onclick="thanksMessage.close()">Close</button>

      <p><span id="callout">Thanks</span> for stopping by!</p>
    </dialog>





`