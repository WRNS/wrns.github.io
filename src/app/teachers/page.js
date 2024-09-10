import "./teachers.scss";

import Hero from "@components/Hero/hero";
import ProfileCard from "@components/ProfileCard/profileCard";
import React from "react";

const Teachers = () => {
  return (
    <main>
      <Hero image={"/images/hungry-caterpillar.jpg"} title="Our Teachers" imagePosition="50% 33%" />

      <section className="teacher-profiles background-primary section__layout">
        <h2 className="section__heading">Meet the Teachers of Winton Road</h2>
        {/* TEACHER PROFILES. imagePosition is used to ensure each teacher's face is centered in the card image, since they aren't all in the same position in their photos. */}
        <ProfileCard
          imageSrc="/images/teachers/jennd.jpg"
          imagePosition="50% 25%"
          name="Jennifer Dwyer"
          role="Teacher"
          description="Jennifer Dwyer has been with WRNS since 2017. She holds a BA in Sociology from LeMoyne College. Jennifer began teaching at WRNS after her daughter had such a wonderful experience while attending WRNS. She enjoys interacting with the kids during circle time, and loves working with them on their art projects because each one comes out completely unique."
        />
        <ProfileCard
          imageSrc="/images/teachers/ally.jpg"
          imagePosition="50% 15%"
          name="Ally Schwarz"
          role="Teacher Assistant"
          description="Ally Schwarz will be assisting Jenn Dwyer in the 5-Day Classroom as well as holding the position of Co-Director of WRNS. Her last name may look familiar, she is the step-daughter of beloved retired Young Nursery teacher, Patty Schwarz. Ally fell in love with WRNS through helping out in her daughter's Young Nursery classroom and subbing in Big Nursery as head of the Substitute Team last year. Ally uses the tools and skills she learned through her higher education studies in anthropology and mental health counseling to interact with and care for children. She has also had several jobs and internships working with children. In her spare time, she loves to hike with her family and is a board member of the Crescent Trail Hiking Association. Ally is excited for this opportunity to join the wonderful WRNS community of teachers and parents working together to make the school function and thrive."
          alignRight
        />
        <ProfileCard
          imageSrc="/images/teachers/maureen.jpg"
          imagePosition="50% 30%"
          name="Maureen Hickey"
          role="Teacher"
          description="Maureen Hickey holds a Bachelors Degree in Physical Education with a minor in music and concentration in dance from SUNY Cortland, and a Masters Degree in Sports Medicine & Athletic Training from Temple University. She has also taken post-graduate classes in early childhood education from MCC and University of Rochester. She has demonstrated a life-long commitment to health, fitness, and wellness, and has incorporated each of these into her curriculum in all of the schools in which she's taught. Mrs. Hickey chose to teach at WRNS after both her son and daughter had such positive experiences in this preschool environment. Two of her grandchildren are also WRNS alums."
        />
        <ProfileCard
          imageSrc="/images/teachers/gaoxia.jpg"
          imagePosition="50% 30%"
          name="Gaoxia Lan"
          role="Teacher Assistant"
          description="Gaoxia joins WRNS as a teacher assistant in 2020, after her son completed his preschool at WRNS. She is always excited about being part of the WRNS staff as she would love to share the same level of genuine care and love that her son has received to the kids at WRNS. With a background in nursing, Gaoxia has the insight of individualized needs of each child. She believes every child is different with their own specialties. In her spare time, she is a photography enthusiast. She also enjoys being outdoors, watching her sons play sports."
          alignRight
        />
        <ProfileCard
          imageSrc="/images/teachers/sara.jpg"
          imagePosition="50% 25%"
          name="Sara Hensel"
          role="Teacher"
          description="Sara Hensel is the proud parent of not one, not two, but three Winton Road Nursery School graduates, and joined the WRNS staff as a teacher in 2023. Sara began her career in higher education, serving at both the University of Miami, Florida, and later at RIT's Golisano Institute for Sustainability. In the classroom, she shares her passion for the environment, sustainable food systems and believes in the power of song to enrich the learning environment for students of all backgrounds. She is grateful for the many families who choose WRNS along their child's early education journey."
        />
        <ProfileCard
          imageSrc="/images/teachers/yeny.jpg"
          imagePosition="50% 30%"
          name="Yeny Colon"
          role="Teacher Assistant"
          description="Yeny Colon has been a teacher's aid at WRNS since 2000. Yeny studied four years of bilingual education at the University of Panama and taught elementary school in Panama. She was a nanny for 3 1/2 years in Webster and was an assistant teacher for Sunday School at the Asbury First Methodist Church. Yeny also studied at Rochester Business Institute and received a Certificate in Data Processing."
          alignRight
        />
        <ProfileCard
          imageSrc="/images/teachers/timmery.jpg"
          imagePosition="50% 30%"
          name="Timmery Bors-Koefoed"
          role="Teacher"
          description="Timmery is excited to join Winton Road Nursery School. She studied early childhood education and development at
        Saddleback College in California. Over the last 15 years she has worked as a preschool teacher, nanny, school
        aid and children's program director. She has a passion for creating environements where children can thrive and
        grow. She loves seeing the wonder of excitement as they explore the world around them. In her free time she
        enjoys baking, cooking and all things outdoors."
        />

        <ProfileCard
          imageSrc="/images/teachers/anna.jpg"
          imagePosition="50% 25%"
          name="Anna Carroll-Nellenback"
          role="Young Nursery Assistant"
          description="Anna is very excited to join the WRNS staff as a Young Nursery Assistant! All 3 of her children attended Winton Road and her family has loved being a part of this school. Anna has a background in healthcare as an RN and is looking forward to supporting and nurturing all the children at WRNS as they learn and grow. In the classroom and with her own family, Anna love's helping with art projects, reading stories, and spending time outside."
          alignRight
        />
      </section>
    </main>
  );
};

export default Teachers;
