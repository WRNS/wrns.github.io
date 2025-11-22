import "./staff.scss";

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
          description="Ally Schwarz assists in the 5 Day Classroom and serves as Co Director of WRNS. Her last name may look familiar as she is the step daughter of beloved retired Young Nursery teacher Patty Schwarz. Ally first connected with WRNS through helping in her daughter's Young Nursery classroom and later through her work with the Substitute Team. She draws on her studies in anthropology and mental health counseling to support and understand children. Her professional experience includes a variety of roles and internships centered on youth. She enjoys hiking with her family and volunteers as a board member of the Crescent Trail Hiking Association."
          alignRight
        />
        <ProfileCard
          imageSrc="/images/teachers/kourtney.jpg"
          imagePosition="80% 40%"
          name="Kourtney Grant"
          role="Teacher"
          description="Kourtney Grant joined the Winton Road Nursery School staff after experiencing firsthand the impact of its nurturing, play-based environment. She brings experience as an educator, advocate, and parent of three. She uses American Sign Language and an inclusive, hands‑on approach to create classrooms where children feel safe, curious, and celebrated. She delights in guiding learners through art, music, nature, and imaginative play. Outside the classroom, Kourtney enjoys camping and hiking with her family, gardening, and getting lost in a good book."
        />
        <ProfileCard
          imageSrc="/images/teachers/gaoxia.jpg"
          imagePosition="50% 30%"
          name="Gaoxia Lan"
          role="Teacher Assistant"
          description="Gaoxia Lan serves as a teacher assistant at WRNS, a role she pursued after her son completed his preschool experience at the school. She is enthusiastic about contributing to the caring environment that meant so much to her own family. With a background in nursing, Gaoxia brings strong insight into the individual needs of children. She believes every child has distinct strengths. In her spare time she enjoys photography, spending time outdoors, and watching her sons play sports."
          alignRight
        />
        <ProfileCard
          imageSrc="/images/teachers/sara.jpg"
          imagePosition="50% 25%"
          name="Sara Hensel"
          role="Teacher"
          description="Sara Hensel is the proud parent of three WRNS graduates and brings her professional background in higher education to the classroom. Her career includes service at the University of Miami, Florida, and later at RIT's Golisano Institute for Sustainability. She enriches the classroom with her interests in the environment, sustainable food systems, and the power of song to support learning. She values the families who choose WRNS as part of their early education journey."
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
          imagePosition="50% 33%"
          name="Timmery Bors-Koefoed"
          role="Teacher"
          description="Timmery Bors-Koefoed studied early childhood education and development at Saddleback College in California. She has spent more than 15 years working with young children as a preschool teacher, nanny, school aide, and children's program director. She is dedicated to creating environments where children can thrive and grow and loves witnessing their excitement as they explore the world around them. In her free time she enjoys baking, cooking, and spending time outdoors."
        />

        <ProfileCard
          imageSrc="/images/teachers/anna.jpg"
          imagePosition="50% 25%"
          name="Anna Carroll-Nellenback"
          role="Young Nursery Assistant"
          description="Anna Carroll-Nellenback serves as a Young Nursery Assistant. All three of her children attended WRNS, and her family has long felt connected to the school community. Anna brings a background in healthcare as an RN and is committed to supporting and nurturing children as they learn and grow. She enjoys helping with art projects, reading stories, and spending time outside with both her students and her own family."
          alignRight
        />
      </section>

      <section className="teacher-profiles section__layout">
        <h2 className="section__heading">The Staff of Winton Road</h2>
        <ProfileCard
          imageSrc="/images/teachers/sarah.jpg"
          imagePosition="50% 33%"
          name="Sarah Sevedge"
          role="Operations Manager"
          description="Sarah became familiar with WRNS through her daughter's time at the school and her service on the board as secretary and later chair. She now serves as Operations Manager. Sarah holds a Masters in Music Education from the University of Buffalo and is a NYS certified educator. When not managing operations, she teaches piano, serves on local nonprofit boards, plays Dungeons & Dragons, or enjoys a good book."
        />
      </section>
    </main>
  );
};

export default Teachers;
