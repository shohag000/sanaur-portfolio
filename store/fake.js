import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useFakeStore = defineStore("fake", {
  state() {
    return {
      projectsHeading: "",
      projectsDescription: "",
      clientsHeading: "",
      projects: [],
      clients: [],
      copyrightDate: null,
      aboutMe: "",
      socialProfiles: [],
      categories: [],
    };
  },

  actions: {
    getNumber() {
      return 10;
    },
  },

  getters: {
    projectsHeading: (state) => "Projects Portfolio",
    projectsDescription: (state) =>
      "Some of the projects I have successfully completed",
    clientsHeading: (state) => "Some of the brands I worked with",
    copyrightDate: (state) => new Date().getFullYear(),
    projects: (state) => {
      return [
        {
          id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
          title: "Google Health Platform",
          category: "Web Application",
          img: "/images/web-project-2.jpg",
          publishDate: "Nov 04, 2021",
          tag: "UI / Frontend",
          clientTitle: "About Client",
          objectivesTitle: "Objective",
          objectivesDetails:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
          techTitle: "Tools & Technologies",
          detailsTitle: "Challenge",
          socialTitle: "Share This",
          projectImages: [
            {
              id: uuidv4(),
              title: "Uber Project Management UI",
              img: "../images/ui-project-1.jpg",
            },
            {
              id: uuidv4(),
              title: "Uber Project Management UI",
              img: "../images/web-project-1.jpg",
            },
            {
              id: uuidv4(),
              title: "Uber Project Management UI",
              img: "../images/web-project-2.jpg",
            },
          ],
          companyInfos: [
            {
              id: uuidv4(),
              title: "Name",
              details: "Company Ltd",
            },
            {
              id: uuidv4(),
              title: "Services",
              details: "UI Design & Frontend Development",
            },
            {
              id: uuidv4(),
              title: "Website",
              details: "https://company.com",
            },
            {
              id: uuidv4(),
              title: "Phone",
              details: "555 8888 888",
            },
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Nuxt.js",
            "TailwindCSS",
            "AdobeXD",
          ],
          projectDetails: [
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
            },
          ],
          socialSharings: [
            {
              id: uuidv4(),
              name: "Twitter",
              icon: "twitter",
              url: "https://twitter.com/sanaur",
            },
            {
              id: uuidv4(),
              name: "LinkedIn",
              icon: "linkedin",
              url: "https://linkedin.com/in/shohag000",
            },
            {
              id: uuidv4(),
              name: "Facebook",
              icon: "facebook",
              url: "https://facebook.com",
            },
            {
              id: uuidv4(),
              name: "Instagram",
              icon: "instagram",
              url: "https://instagram.com",
            },
          ],
        },
        {
          id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
          title: "Phoenix Digital Agency",
          category: "Mobile Application",
          img: "/images/mobile-project-2.jpg",
          publishDate: "Nov 04, 2021",
          tag: "UI / Frontend",
          clientTitle: "About Client",
          objectivesTitle: "Objective",
          objectivesDetails:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
          techTitle: "Tools & Technologies",
          detailsTitle: "Challenge",
          socialTitle: "Share This",
          projectImages: [
            {
              id: uuidv4(),
              title: "Phoenix Digital Agency",
              img: "../images/mobile-project-1.jpg",
            },
            {
              id: uuidv4(),
              title: "Phoenix Digital Agency",
              img: "../images/web-project-2.jpg",
            },
            {
              id: uuidv4(),
              title: "Phoenix Digital Agency",
              img: "../images/mobile-project-2.jpg",
            },
          ],
          companyInfos: [
            {
              id: uuidv4(),
              title: "Name",
              details: "Company Ltd",
            },
            {
              id: uuidv4(),
              title: "Services",
              details: "UI Design & Frontend Development",
            },
            {
              id: uuidv4(),
              title: "Website",
              details: "https://company.com",
            },
            {
              id: uuidv4(),
              title: "Phone",
              details: "555 8888 888",
            },
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Nuxt.js",
            "TailwindCSS",
            "AdobeXD",
          ],
          projectDetails: [
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
            },
          ],
          socialSharings: [
            {
              id: uuidv4(),
              name: "Twitter",
              icon: "twitter",
              url: "https://twitter.com/sanaur",
            },
            {
              id: uuidv4(),
              name: "LinkedIn",
              icon: "linkedin",
              url: "https://linkedin.com/in/shohag000",
            },
            {
              id: uuidv4(),
              name: "Facebook",
              icon: "facebook",
              url: "https://facebook.com",
            },
            {
              id: uuidv4(),
              name: "Instagram",
              icon: "instagram",
              url: "https://instagram.com",
            },
          ],
        },
        {
          id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
          title: "Project Management UI",
          category: "UI/UX Design",
          img: "/images/ui-project-1.jpg",
          publishDate: "Nov 04, 2021",
          tag: "UI / Frontend",
          clientTitle: "About Client",
          objectivesTitle: "Objective",
          objectivesDetails:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
          techTitle: "Tools & Technologies",
          detailsTitle: "Challenge",
          socialTitle: "Share This",
          projectImages: [
            {
              id: uuidv4(),
              title: "Project Management UI",
              img: "../images/mobile-project-1.jpg",
            },
            {
              id: uuidv4(),
              title: "Project Management UI",
              img: "../images/web-project-2.jpg",
            },
            {
              id: uuidv4(),
              title: "Project Management UI",
              img: "../images/mobile-project-2.jpg",
            },
          ],
          companyInfos: [
            {
              id: uuidv4(),
              title: "Name",
              details: "Company Ltd",
            },
            {
              id: uuidv4(),
              title: "Services",
              details: "UI Design & Frontend Development",
            },
            {
              id: uuidv4(),
              title: "Website",
              details: "https://company.com",
            },
            {
              id: uuidv4(),
              title: "Phone",
              details: "555 8888 888",
            },
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Nuxt.js",
            "TailwindCSS",
            "AdobeXD",
          ],
          projectDetails: [
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
            },
          ],
          socialSharings: [
            {
              id: uuidv4(),
              name: "Twitter",
              icon: "twitter",
              url: "https://twitter.com/sanaur",
            },
            {
              id: uuidv4(),
              name: "LinkedIn",
              icon: "linkedin",
              url: "https://linkedin.com/in/shohag000",
            },
            {
              id: uuidv4(),
              name: "Facebook",
              icon: "facebook",
              url: "https://facebook.com",
            },
            {
              id: uuidv4(),
              name: "Instagram",
              icon: "instagram",
              url: "https://instagram.com",
            },
          ],
        },
        {
          id: "260d1271-f1f2-4bc9-a5eb-05a89c8ccc99",
          title: "Cloud Storage Platform",
          category: "UI/UX Design",
          img: "/images/ui-project-2.jpg",
          publishDate: "Nov 04, 2021",
          tag: "Web / Frontend",
          clientTitle: "About Client",
          objectivesTitle: "Objective",
          objectivesDetails:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
          techTitle: "Tools & Technologies",
          detailsTitle: "Challenge",
          socialTitle: "Share This",
          projectImages: [
            {
              id: uuidv4(),
              title: "Cloud Storage Platform",
              img: "../images/web-project-1.jpg",
            },
            {
              id: uuidv4(),
              title: "Cloud Storage Platform",
              img: "../images/web-project-2.jpg",
            },
            {
              id: uuidv4(),
              title: "Cloud Storage Platform",
              img: "../images/mobile-project-2.jpg",
            },
          ],
          companyInfos: [
            {
              id: uuidv4(),
              title: "Name",
              details: "Company Ltd",
            },
            {
              id: uuidv4(),
              title: "Services",
              details: "UI Design & Frontend Development",
            },
            {
              id: uuidv4(),
              title: "Website",
              details: "https://company.com",
            },
            {
              id: uuidv4(),
              title: "Phone",
              details: "555 8888 888",
            },
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Nuxt.js",
            "TailwindCSS",
            "AdobeXD",
          ],
          projectDetails: [
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
            },
          ],
          socialSharings: [
            {
              id: uuidv4(),
              name: "Twitter",
              icon: "twitter",
              url: "https://twitter.com/sanaur",
            },
            {
              id: uuidv4(),
              name: "LinkedIn",
              icon: "linkedin",
              url: "https://linkedin.com/in/shohag000",
            },
            {
              id: uuidv4(),
              name: "Facebook",
              icon: "facebook",
              url: "https://facebook.com",
            },
            {
              id: uuidv4(),
              name: "Instagram",
              icon: "instagram",
              url: "https://instagram.com",
            },
          ],
        },
        {
          id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdm",
          title: "Uber Social App",
          category: "Mobile Application",
          img: "/images/mobile-project-1.jpg",
          publishDate: "Nov 04, 2021",
          tag: "UI / Mobile",
          clientTitle: "About Client",
          objectivesTitle: "Objective",
          objectivesDetails:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
          techTitle: "Tools & Technologies",
          detailsTitle: "Challenge",
          socialTitle: "Share This",
          projectImages: [
            {
              id: uuidv4(),
              title: "Uber Social App",
              img: "../images/web-project-1.jpg",
            },
            {
              id: uuidv4(),
              title: "Uber Social App",
              img: "../images/web-project-2.jpg",
            },
            {
              id: uuidv4(),
              title: "Uber Social App",
              img: "../images/mobile-project-2.jpg",
            },
          ],
          companyInfos: [
            {
              id: uuidv4(),
              title: "Name",
              details: "Company Ltd",
            },
            {
              id: uuidv4(),
              title: "Services",
              details: "UI Design & Frontend Development",
            },
            {
              id: uuidv4(),
              title: "Website",
              details: "https://company.com",
            },
            {
              id: uuidv4(),
              title: "Phone",
              details: "555 8888 888",
            },
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Nuxt.js",
            "TailwindCSS",
            "AdobeXD",
          ],
          projectDetails: [
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
            },
          ],
          socialSharings: [
            {
              id: uuidv4(),
              name: "Twitter",
              icon: "twitter",
              url: "https://twitter.com/sanaur",
            },
            {
              id: uuidv4(),
              name: "LinkedIn",
              icon: "linkedin",
              url: "https://linkedin.com/in/shohag000",
            },
            {
              id: uuidv4(),
              name: "Facebook",
              icon: "facebook",
              url: "https://facebook.com",
            },
            {
              id: uuidv4(),
              name: "Instagram",
              icon: "instagram",
              url: "https://instagram.com",
            },
          ],
        },
        {
          id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",
          title: "Apple Design System",
          category: "Web Application",
          img: "/images/web-project-1.jpg",
          publishDate: "Nov 04, 2021",
          tag: "UI / Mobile",
          clientTitle: "About Client",
          objectivesTitle: "Objective",
          objectivesDetails:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
          techTitle: "Tools & Technologies",
          detailsTitle: "Challenge",
          socialTitle: "Share This",
          projectImages: [
            {
              id: uuidv4(),
              title: "Apple Design System",
              img: "../images/web-project-1.jpg",
            },
            {
              id: uuidv4(),
              title: "Apple Design System",
              img: "../images/web-project-2.jpg",
            },
            {
              id: uuidv4(),
              title: "Apple Design System",
              img: "../images/mobile-project-2.jpg",
            },
          ],
          companyInfos: [
            {
              id: uuidv4(),
              title: "Name",
              details: "Company Ltd",
            },
            {
              id: uuidv4(),
              title: "Services",
              details: "UI Design & Frontend Development",
            },
            {
              id: uuidv4(),
              title: "Website",
              details: "https://company.com",
            },
            {
              id: uuidv4(),
              title: "Phone",
              details: "555 8888 888",
            },
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Nuxt.js",
            "TailwindCSS",
            "AdobeXD",
          ],
          projectDetails: [
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
            },
            {
              id: uuidv4(),
              details:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
            },
          ],
          socialSharings: [
            {
              id: uuidv4(),
              name: "Twitter",
              icon: "twitter",
              url: "https://twitter.com/sanaur",
            },
            {
              id: uuidv4(),
              name: "LinkedIn",
              icon: "linkedin",
              url: "https://linkedin.com/in/shohag000",
            },
            {
              id: uuidv4(),
              name: "Facebook",
              icon: "facebook",
              url: "https://facebook.com",
            },
            {
              id: uuidv4(),
              name: "Instagram",
              icon: "instagram",
              url: "https://instagram.com",
            },
          ],
        },
      ];
    },
    clients: (state) => {
      return [
        {
          id: uuidv4(),
          title: "Amazon",
          img: "../brands/amazon_gray.png",
        },
        {
          id: uuidv4(),
          title: "Sony",
          img: "../brands/sony_gray.png",
        },
        {
          id: uuidv4(),
          title: "Adidas",
          img: "../brands/adidas_gray.png",
        },
        {
          id: uuidv4(),
          title: "FILA",
          img: "../brands/fila_gray.png",
        },
        {
          id: uuidv4(),
          title: "NB",
          img: "../brands/nb_gray.png",
        },
        {
          id: uuidv4(),
          title: "SAMSUNG",
          img: "../brands/samsung_gray.png",
        },
        {
          id: uuidv4(),
          title: "CANON",
          img: "../brands/canon_gray.png",
        },
        {
          id: uuidv4(),
          title: "PUMA",
          img: "../brands/puma_gray.png",
        },
      ];
    },
    aboutMe: (state) => {
      return [
        {
          id: uuidv4(),
          bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
      ];
    },
    socialProfiles: (state) => {
      return [
        {
          id: uuidv4(),
          name: "GitHub",
          icon: "github",
          url: "https://github.com/shohag001",
        },
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/sanaur",
        },
        {
          id: uuidv4(),
          name: "Linkedin",
          icon: "linkedin",
          url: "https://linkedin.com/in/shohag000",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://youtube.com/c/sanaur",
        },
      ];
    },
    categories: (state) => {
      return [
        {
          id: uuidv4(),
          value: "web",
          name: "Web Application",
        },
        {
          id: uuidv4(),
          value: "mobile",
          name: "Mobile Applicaiton",
        },
        {
          id: uuidv4(),
          value: "ui-ux",
          name: "UI/UX Design",
        },
        {
          id: uuidv4(),
          value: "branding",
          name: "Branding & Animations",
        },
      ];
    },
    getProjectById: (state) => {
      return (id) => state.projects.find((project) => project.id == id);
    },
  },
});
