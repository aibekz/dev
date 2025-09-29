import React from 'react';

export default function TestPage() {
  return (
    <div>
      <header>
        <h1><a href="#">Test Page</a></h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <article>
          <h2>Basic Elements</h2>
          <p>This is a paragraph with <a href="#">a link</a>.</p>
          <p className="wrap">This is a wrapped paragraph with longer text that should demonstrate the wrapping behavior in the global CSS.</p>
          <p className="quiet">This is quiet text.</p>
          <code>inline code</code>
          <pre><code>preformatted code block</code></pre>
          <pre className="wrap">wrapped preformatted text</pre>
        </article>

        <article>
          <h2>Hidden Until Hover</h2>
          <div className="hidden-until-hover">
            <p>This content is hidden until you hover over the container.</p>
          </div>
        </article>

        <article>
          <h2>Warning</h2>
          <p className="warning">This is a warning message.</p>
          <p className="warning warning-active">This is an active warning.</p>
        </article>

        <article>
          <h2>Badges</h2>
          <p><span className="star-count">★ 5 stars</span></p>
          <p><a href="#" className="supporter-badge">Supporter Badge</a></p>
          <p><a href="#" className="sponsor-badge">Sponsor Badge</a></p>
        </article>

        <article>
          <h2>Forms</h2>
          <form id="settings">
            <p>
              <input type="text" placeholder="Text input" />
            </p>
            <p>
              <textarea placeholder="Textarea"></textarea>
            </p>
            <p>
              <input type="radio" id="radio1" name="radio" />
              <label htmlFor="radio1"><span>Radio option 1</span></label>
            </p>
            <p>
              <input type="radio" id="radio2" name="radio" />
              <label htmlFor="radio2"><span>Radio option 2</span></label>
            </p>
            <p>
              <input type="checkbox" id="check1" />
              <label htmlFor="check1"><span>Checkbox option 1</span></label>
            </p>
            <p>
              <input type="checkbox" id="check2" />
              <label htmlFor="check2"><span>Checkbox option 2</span></label>
            </p>
            <p>
              <input type="submit" value="Submit" />
            </p>
          </form>
        </article>

        <article>
          <h2>Article Elements</h2>
          <p>This is an article with <em>emphasis</em> and <em className="star">star emphasis</em>.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
          <p className="day-success">Day success message</p>
        </article>

        <article>
          <h2>Share</h2>
          <p className="share">
            Share this:
            <span className="share-content"> [Twitter] [Facebook] [Reddit]</span>
          </p>
        </article>

        <article>
          <h2>Puzzle Input</h2>
          <textarea className="puzzle-input" placeholder="Puzzle input here"></textarea>
        </article>

        <article>
          <h2>Calendar</h2>
          <div className="calendar">
            <span>Dec</span>
            <a href="#" className="calendar-complete">
              <span className="calendar-day">1</span>
              <span className="calendar-mark-complete">★</span>
            </a>
            <a href="#" className="calendar-verycomplete">
              <span className="calendar-day">2</span>
              <span className="calendar-mark-complete">★</span>
              <span className="calendar-mark-verycomplete">★★</span>
            </a>
            <span className="calendar-day calendar-day-new">3</span>
          </div>
        </article>

        <article>
          <h2>Stats</h2>
          <div className="stats">
            <span>Stats:</span>
            <a href="#">
              <span className="stats-firstonly">First only</span>
              <span className="stats-both">Both parts</span>
            </a>
          </div>
        </article>

        <article>
          <h2>Leaderboard</h2>
          <div className="leaderboard-daylinks">
            <span className="leaderboard-daylinks-selected">Day 1</span>
            <span>Day 2</span>
          </div>
          <div className="leaderboard-entry">
            1. User1 <span className="leaderboard-totalscore">100</span> <span className="leaderboard-time">00:05:00</span>
          </div>
          <div className="leaderboard-entry leaderboard-anon">
            2. Anonymous <span className="leaderboard-totalscore">90</span>
          </div>
        </article>

        <article>
          <h2>Private Board</h2>
          <div className="privboard-row">
            <span className="privboard-name">User1</span>
            <span className="privboard-days">
              <span>★</span>
              <a href="#">★</a>
            </span>
            <span className="privboard-delbtn">×</span>
          </div>
        </article>

        <article>
          <h2>Code Snippet</h2>
          <pre><code>{`function findShortString(longString, shortString) {
    for (let i = 0; i <= longString.length - shortString.length; i++) {
        let match = true;
        for (let j = 0; j < shortString.length; j++) {
            if (longString[i + j] !== shortString[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return true; // Return true if found
        }
    }
    return false; // Return false if not found
}

console.log(findShortString("hello world", "world")); // Output: true
console.log(findShortString("hello world", "word"));  // Output: false`}</code></pre>
        </article>

        <article>
          <h2>Sponsors</h2>
          <div className="sponsors">
            <div className="sponsor">Sponsor 1</div>
            <div className="sponsor">Sponsor 2</div>
          </div>
        </article>
      </main>

      <aside id="sidebar">
        <div id="sponsor">Sponsor content</div>
      </aside>
    </div>
  );
}
