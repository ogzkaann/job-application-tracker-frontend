<script setup lang="ts">
import DefaultLayout from "../layouts/DefaultLayout.vue";
import CvSection from "../components/CvSection.vue";

// Örnek dummy CV verisi (PDF'den alınmış)
const cvData = {
  name: "OGUZ KAAN DERE",
  position: "Full Stack Developer",
  contactInformation: "+905378980677",
  email: "ogzkaann96@gmail.com",
  address: "Ankara/Turkey",
  profilePicture: "", // Profil fotoğrafı eklenebilir
  socialMedia: [
    { socialMedia: "Github", link: "github.com/ogzkaann" },
    { socialMedia: "LinkedIn", link: "linkedin.com/in/oguz-kaan-dere" },
  ],
  summary:
      "Experienced software developer specialising in full stack development with a Master’s degree in Computer Science and expertise in Java, JavaScript and Angular. Passionate about game development, especially with Unreal Engine. Proven track record of delivering innovative software solutions and eager to take on new responsibilities in technology.",
  education: [
    {
      school: "Baskent University",
      degree: "Bachelor of Biomedical Engineer",
      startYear: "Sep, 2015",
      endYear: "Jul, 2020",
    },
    {
      school: "Baskent University",
      degree: "MSc Computer Science",
      startYear: "Feb, 2022",
      endYear: "Sep, 2024",
    },
  ],
  workExperience: [
    {
      company: "Ekinoks Software",
      position: "Front End Developer",
      description:
          "Developed an Angular interface for a defense project, significantly enhancing UI/UX and composability. This role notably advanced my TypeScript and Angular skills within an Agile framework, showcasing my capacity to adapt and innovate in a technology.",
      keyAchievements: [
        "Ensured that the user interfaces and user experience of the software applications developed by the team met at least 80% of users expectations.",
        "Created and analyzed 200 unit test cases.",
      ],
      startYear: "Dec, 2022",
      endYear: "Present",
    },
    {
      company: "Fonet Software",
      position: "Full-Stack Developer",
      description:
          "Utilized technologies including Java, JavaScript, HTML/CSS, MVC frameworks, Hibernate, PostgreSQL, ExtJs, Git, REST APIs, Maven, and GlassFish to develop a critical module from end-to-end within a large hospital system.",
      keyAchievements: [
        "This initiative improved system performance by 12% and enhanced data processing speeds, serving millions of people more efficiently.",
        "Delivered 60+ web solutions.",
        "Worked with more than 3 different teams at different points of time and provided end-to-end solutions for clients.",
      ],
      startYear: "May, 2021",
      endYear: "Nov, 2022",
    },
    {
      company: "ATOM - METU",
      position: "Game Developer",
      description:
          "Heller is a Software Editor specialized in logistics management.",
      keyAchievements: [
        "Led to a 15% increase in user engagement and a 10% improvement in game performance metrics within diverse teams.",
        "Joined the team as #5 employee as a developer working directly with the biggest customers.",
      ],
      startYear: "Jul, 2019",
      endYear: "Aug, 2020",
    },
  ],
  skills: [
    "React",
    "Angular",
    "Typescript",
    "Javascript",
    "HTML5",
    "CSS",
    "PostgreSQL",
    "Java",
    "SpringBoot",
    "MongoDB",
    "Python",
  ],
  softSkills: [
    "Collaboration",
    "Problem-solving",
    "Communication",
    "Time management",
    "Result-oriented",
  ],
  additionalSkills: ["Public Speaking", "Writing", "Research"],
  languages: ["Turkish (Native)", "English (B2)", "German (A1)"],
  certifications: [
    "Certified Web Professional-Web Developer",
    "Java Development Certified Professional",
  ],
};
</script>

<template>
  <DefaultLayout :pageTitle="'CV'">
    <div class="container mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-6">
      <CvSection title="Profile" bgColor="bg-blue-100 dark:bg-blue-900">
        <div class="flex items-center">
          <img
              v-if="cvData.profilePicture"
              :src="cvData.profilePicture"
              alt="Profile Picture"
              class="rounded-full w-24 h-24 object-cover mr-4"
          />
          <img
              v-else
              src="https://via.placeholder.com/128"
              alt="Profile Picture"
              class="rounded-full w-24 h-24 object-cover mr-4"
          />
          <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">{{ cvData.name }}</h1>
            <p class="text-lg text-gray-600 dark:text-gray-300">{{ cvData.position }}</p>
            <div class="mt-2 space-y-1">
              <p class="text-gray-700 dark:text-gray-300"><strong>Contact:</strong> {{ cvData.contactInformation }}</p>
              <p class="text-gray-700 dark:text-gray-300"><strong>Email:</strong> {{ cvData.email }}</p>
              <p class="text-gray-700 dark:text-gray-300"><strong>Address:</strong> {{ cvData.address }}</p>
            </div>
            <div class="mt-2 space-x-4">
              <a v-for="social in cvData.socialMedia" :key="social.socialMedia" :href="'https://' + social.link" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                {{ social.socialMedia }}
              </a>
            </div>
          </div>
        </div>
      </CvSection>

      <CvSection title="Summary" bgColor="bg-green-100 dark:bg-green-900">
        <p class="text-gray-700 dark:text-gray-300">{{ cvData.summary }}</p>
      </CvSection>

      <CvSection title="Education" bgColor="bg-yellow-100 dark:bg-yellow-900">
        <ul class="list-disc list-inside">
          <li v-for="education in cvData.education" :key="education.school" class="text-gray-700 dark:text-gray-300">
            <strong>{{ education.degree }}</strong> at {{ education.school }} ({{ education.startYear }} - {{ education.endYear }})
          </li>
        </ul>
      </CvSection>

      <CvSection title="Work Experience" bgColor="bg-purple-100 dark:bg-purple-900">
        <div v-for="experience in cvData.workExperience" :key="experience.company" class="mb-4">
          <h3 class="text-xl font-bold text-gray-800 dark:text-white">{{ experience.position }}</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ experience.company }} ({{ experience.startYear }} - {{ experience.endYear }})</p>
          <p class="text-gray-700 dark:text-gray-300">{{ experience.description }}</p>
          <ul class="list-disc list-inside mt-2">
            <li v-for="achievement in experience.keyAchievements" :key="achievement" class="text-gray-700 dark:text-gray-300">
              {{ achievement }}
            </li>
          </ul>
        </div>
      </CvSection>

      <CvSection title="Technical Skills" bgColor="bg-indigo-100 dark:bg-indigo-900">
        <ul class="list-disc list-inside">
          <li v-for="skill in cvData.skills" :key="skill" class="text-gray-700 dark:text-gray-300">
            {{ skill }}
          </li>
        </ul>
      </CvSection>

      <CvSection title="Soft Skills" bgColor="bg-pink-100 dark:bg-pink-900">
        <ul class="list-disc list-inside">
          <li v-for="skill in cvData.softSkills" :key="skill" class="text-gray-700 dark:text-gray-300">
            {{ skill }}
          </li>
        </ul>
      </CvSection>

      <CvSection title="Additional Skills" bgColor="bg-red-100 dark:bg-red-900">
        <ul class="list-disc list-inside">
          <li v-for="skill in cvData.additionalSkills" :key="skill" class="text-gray-700 dark:text-gray-300">
            {{ skill }}
          </li>
        </ul>
      </CvSection>

      <CvSection title="Languages" bgColor="bg-teal-100 dark:bg-teal-900">
        <p class="text-gray-700 dark:text-gray-300">{{ cvData.languages.join(', ') }}</p>
      </CvSection>

      <CvSection title="Certifications" bgColor="bg-orange-100 dark:bg-orange-900">
        <ul class="list-disc list-inside">
          <li v-for="certification in cvData.certifications" :key="certification" class="text-gray-700 dark:text-gray-300">
            {{ certification }}
          </li>
        </ul>
      </CvSection>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
