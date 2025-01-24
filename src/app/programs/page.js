import "./programs.scss";

import Hero from "@components/Hero/hero";

export default function Programs() {
  return (
    <main>
      <Hero image={"/images/playground.jpg"} title="Programs" imagePosition="100% 45%" />

      <section id="programs" className="section__layout programs">
        <div class="table-container">
          <div id="young-nursery" class="table-section">
            <h3 className="table-title">
              <span>Young Nursery</span> <span>(2-3 Years Old)</span>
            </h3>
            <table className="programs-table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Hours</th>
                  <th>Annual Tuition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday and Tuesday</td>
                  <td>9:00am - 11:30am</td>
                  <td>$1,853.00</td>
                </tr>
                <tr>
                  <td>Wednesday and Thursday</td>
                  <td>9:00am - 11:30am</td>
                  <td>$1,853.00</td>
                </tr>
              </tbody>
            </table>
            <ul class="notes">
              <li>
                Children in Young Nursery must be two (2) years of age by December 1<sup>st</sup> of their enrollment
                year to attend.
              </li>
            </ul>
          </div>

          <div id="nursery-school" class="table-section">
            <h3 className="table-title">
              <span>Nursery School</span> <span>(3-5 Years Old)</span>
            </h3>
            <table className="programs-table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Hours</th>
                  <th>Annual Tuition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    2 Day AM
                    <br />
                    Tuesday and Thursday
                  </td>
                  <td>9:00am - 12:00 noon</td>
                  <td>$1,608.00</td>
                </tr>
                <tr>
                  <td>
                    3 Day AM*
                    <br />
                    Monday, Wednesday, Friday
                  </td>
                  <td>9:00am - 12:00 noon</td>
                  <td>$2,412.00</td>
                </tr>
                <tr>
                  <td>
                    5 Day AM**
                    <br />
                    Monday through Friday
                  </td>
                  <td>9:00am - 12:00 noon</td>
                  <td>$4,020.00</td>
                </tr>
              </tbody>
            </table>
            <ul class="notes">
              <li>
                * Children in Nursery School must be three (3) years of age by December 1<sup>st</sup> of their
                enrollment year to attend.
              </li>
              <li>
                ** Children in the 5 Day program must be four (4) years of age by December 1<sup>st</sup>, and fully
                potty trained, to attend.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
