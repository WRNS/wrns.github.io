import "./our-school.scss";

import Hero from "@components/Hero/hero";
import Image from "next/image";

export default function OurSchool() {
  return (
    <main>
      <Hero image={"/images/classroom.jpg"} title="Our School" imagePosition="75% 50%" />

      <section className="section__layout our-school">
        <div className="text-content">
          <h2 className="section__heading">Our History</h2>
          <div className="our-school__text">
            <p>
              Founded in 1964, Winton Road Nursery School holds a permanent Charter issued by the New York State
              Education Department. WRNS was founded on the concept of semi-cooperative nursery education. Parents are
              members of a non-profit, non-sectarian corporation that administers the school through an appointed Board
              of Trustees. Parents have the opportunity to guide their child&apos;s first school experience as they
              share in decision making and volunteer team service. WRNS is an equal opportunity employer. The school
              employs four teachers, four teaching assistants, and an operations manager.
            </p>
          </div>
          <h2 className="section__heading">Our Philosophy</h2>
          <div className="our-school__text">
            <p>
              At Winton Road Nursery School, children learn through experimentation, manipulation, and observation.
              Creative and dramatic play, art projects, music, and circle time activities combine to nurture social
              skills and language development, encouraging confidence and independence in every child. Children spend
              time outside almost every day.
            </p>
          </div>
        </div>
      </section>

      <section className="section__layout our-goals background-primary">
        <div className="text-content">
          <h2 className="section__heading">Our Goals for Our Children</h2>
          <ul className="our-goals__list">
            <li>Building self-esteem, confidence, and independence</li>
            <li>Making their own decisions and choices </li>
            <li>Experimenting, asking questions, and solving problems</li>
            <li>Expressing creativity</li>
            <li>Laying foundations for good social relationships</li>
            <li>Developing emergent writing, literacy, and language skills</li>
          </ul>
        </div>
      </section>

      <section className="section__layout our-routines">
        <div className="text-content">
          <h2 className="section__heading">Our Routines</h2>
          <h3 className="our-routines__sub-heading">
            Each Big Nursery homeroom (ages 3-5) follows a similar daily routine.
          </h3>
          <div className="our-school__text">
            <p>
              <strong>Arrival.</strong> The children arrive and are greeted by their teacher and begin to settle in.
              During this time you will observe children choosing materials and toys specifically set out by their
              classroom teacher(s). The teaching staff acts as facilitators guiding the children.
            </p>

            <p>
              <strong>Teacher-lead circle time.</strong> The children gather to participate in structured activities
              such as storytelling, songs, and discussions. It helps develop social skills, communication, and a sense
              of routine.
            </p>

            <p>
              <strong>Visiting time.</strong> During this time, the children are free to move among the three rooms: the
              Art Room, the Housekeeping Room, and the Big Muscle Room, each of which has child-sized bathrooms and a
              comfortable cushioned bench for reading time and visiting with friends. During the year, children will
              rotate homerooms with their teachers, so that they get to experience each classroom during their time at
              WRNS while keeping the same teachers.
            </p>

            <p>
              <strong>Snack Time.</strong> All children are welcome at the table and share a snack provided by a
              rotating schedule of each family. Children with food allergies may participate as they are able, bring
              their own snack, or opt out of the snack rotation.
            </p>

            <p>
              <strong>Outside Time.</strong> We strive to get outdoors every day, and on nice weather days - twice a
              day! Unless it&apos;s raining hard, we&apos;re outside in all seasons, including the snow. Children will
              bring their snow suits, hats, and gloves, and teacher will assist in teaching them to get ready for
              outdoor play.
            </p>

            <p>
              <strong>After School.</strong> Families often stick around to play together after dismissal on the hill
              and nature trails outside the school building. There is no teacher supervision at this time, so families
              are responsible for supervising their own children on the grounds.
            </p>
          </div>

          <h3 className="our-routines__sub-heading">Young Nursery is Winton Road&apos;s program for 2 year olds.</h3>
          <p>
            The philosophy of Young Nursery is the same as that of the Big Nursery program, but the environment is
            specifically designed for the younger child. The focus here is more on that first separation from the
            child&apos;s caregivers, learning how to play alongside others, and dip their toes into a school experience.
            Family caregivers volunteer in this classroom throughout the school year, offering another special way that
            our cooperative school includes the whole family from the start.
          </p>
        </div>
      </section>
    </main>
  );
}
