let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Cairo',
    scale: "C",
  },
  clock: {
    // format: "h:i p - a e b ",
    // format: "e:i p",
    format: "e:i p - a e b ",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  // If you want to reduce the loading time of the icons, you could install the icon font locally and activate the option "localIcons": true in the config to disable the remote styles.
  localIcons: true,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "projects",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "frontendmentor",
              url: "https://www.frontendmentor.io/",
              icon: "brand-css3",
              icon_color: "#e78a4e",
            }
          ],
        },
        {
          name: "productivity",
          links: [
            {
              name: "notion",
              url: "https://www.notion.so/am0103738/Task-Manager-777ac718383b40ebbc009242d1fb6deb",
              icon: "brand-notion",
              icon_color: "#e9ebd8",
            },
            {
              name: "tracker",
              url: "https://docs.google.com/spreadsheets/d/1ZalHXClEXIX9VPT3fZB80U_ce8JDMSL0Ny5_yJd9pYI/edit#gid=501432051",
              icon: "square-rounded-check",
              icon_color: "#5dbf56",
            },
            {
              name:"keep",
              url:"https://keep.google.com/u/0/",
              icon:"note",
              icon_color:"#a3ab16",
            }

          ],
        },
        {
          name: "problem solving",
          links: [
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
            {
              name: "leetcode",
              url: "https://leetcode.com/",
              icon: "brand-leetcode",
              icon_color: "#e78a4e",
            }
          ],
        },
      ],

    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#a9b665",
          },
          {
            name: "twitter",
            url: "https://twitter.com/home",
            icon: "brand-twitter-filled",
            icon_color: "#7daea3",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "linkedin",
            url: "https://www.linkedin.com/feed/",
            icon: "brand-linkedin",
            icon_color: "#7daea3",
          },
          {
            name: "curious cat",
            url: "https://curiouscat.live/",
            icon: "hexagon-letter-c",
            icon_color: "#e78a3d",
          }
        ],
      }, {
        name: "Touch Typing",
        links: [
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#e78a4e",
          },
          {
            name: "keybr",
            url: "https://www.keybr.com/",
            icon: "command",
            icon_color: "#157c9e",

          }
        ],
      }, {
        name: "Audio",
        links: [
          {
            name: "soundcloud",
            url: "https://soundcloud.com/",
            icon: "brand-soundcloud",
            icon_color: "#ea6962",
          },
          {
            name: "quranpedia",
            url: "https://quranpedia.net/",
            icon: "pray",
            icon_color: "#a9b665",
          },
        ],
      }],
            
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "inspiration",
          links: [
            {
              name: "pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {
              name: "behance",
              url: "https://www.behance.net/",
              icon: "brand-behance",
              icon_color: "#a9b665",
            },
            {
              name: "codepen",
              url: "https://codepen.io/",
              icon: "brand-codepen",
              icon_color: "#e78a4e",
            }
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name:"icons8",
              url:"https://icons8.com/",
              icon:"aperture",
              icon_color:"#853282",
            }
          ],
        },
        {
          name: "resources 3d",
          links: [
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "connect",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "useful sites",
          links: [
            {
              name: "claude",
              url: "https://claude.ai/chats",
              icon: "brain",
              icon_color: "#c79777",
            },
            {
              name: "Bard",
              url: "https://bard.google.com/chat",
              icon: "brand-google",
              icon_color: "#6184d3",
            },
            {
              name: "Bing",
              url: "https://www.bing.com/search?form=MY0291&OCID=MY0291&q=Bing+AI&showconv=1",
              icon: "brand-bing",
              icon_color: "#a9b665",
            }
          ],
        },
        {
          name: "entertainment",
          links: [
              {
                name:"Wallhaven",
                url:"https://wallhaven.cc/",
                icon:"wallpaper",
                icon_color:"#cacaca",
              },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
