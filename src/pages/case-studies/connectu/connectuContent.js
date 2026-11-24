import cover from './images/cover.webp';
import affinityMap from './images/affinity-map.webp';
import sketches1 from './images/sketches-1.webp';
import sketches2 from './images/sketches-2.webp';
import midLogin1 from './images/mid-login-1.webp';
import midLogin2 from './images/mid-login-2.webp';
import midLogin3 from './images/mid-login-3.webp';
import midLogin4 from './images/mid-login-4.webp';
import midProfile1 from './images/mid-profile-1.webp';
import midProfile2 from './images/mid-profile-2.webp';
import midProfile3 from './images/mid-profile-3.webp';
import midProfile4 from './images/mid-profile-4.webp';
import midCommunity1 from './images/mid-community-1.webp';
import midCommunity2 from './images/mid-community-2.webp';
import midCommunity3 from './images/mid-community-3.webp';
import midCommunity4 from './images/mid-community-4.webp';
import login1 from './images/login-1.webp';
import login2 from './images/login-2.webp';
import login4 from './images/login-4.webp';
import onboarding2 from './images/onboarding-2.webp';
import onboarding4 from './images/onboarding-4.webp';
import feed1 from './images/feed-1.webp';
import feed2 from './images/feed-2.webp';
import feed3 from './images/feed-3.webp';
import feed4 from './images/feed-4.webp';
import clubs1 from './images/clubs-1.webp';
import clubs2 from './images/clubs-2.webp';
import find1 from './images/find-1.webp';
import find2 from './images/find-2.webp';
import messages1 from './images/messages-1.webp';
import messages2 from './images/messages-2.webp';
import profiles1 from './images/profiles-1.webp';
import profiles2 from './images/profiles-2.webp';
import profiles3 from './images/profiles-3.webp';
import profiles4 from './images/profiles-4.webp';
import yourProfile1 from './images/your-profile-1.webp';
import yourProfile4 from './images/your-profile-4.webp';
import clubAccount1 from './images/club-account-1.webp';
import clubAccount2 from './images/club-account-2.webp';

// Keyed by file name. scripts/export-connectu-screens.mjs produces all but the cover and affinity map
export const images = {
  cover,
  'affinity-map': affinityMap,
  'sketches-1': sketches1,
  'sketches-2': sketches2,
  'mid-login-1': midLogin1,
  'mid-login-2': midLogin2,
  'mid-login-3': midLogin3,
  'mid-login-4': midLogin4,
  'mid-profile-1': midProfile1,
  'mid-profile-2': midProfile2,
  'mid-profile-3': midProfile3,
  'mid-profile-4': midProfile4,
  'mid-community-1': midCommunity1,
  'mid-community-2': midCommunity2,
  'mid-community-3': midCommunity3,
  'mid-community-4': midCommunity4,
  'login-1': login1,
  'login-2': login2,
  'login-4': login4,
  'onboarding-2': onboarding2,
  'onboarding-4': onboarding4,
  'feed-1': feed1,
  'feed-2': feed2,
  'feed-3': feed3,
  'feed-4': feed4,
  'clubs-1': clubs1,
  'clubs-2': clubs2,
  'find-1': find1,
  'find-2': find2,
  'messages-1': messages1,
  'messages-2': messages2,
  'profiles-1': profiles1,
  'profiles-2': profiles2,
  'profiles-3': profiles3,
  'profiles-4': profiles4,
  'your-profile-1': yourProfile1,
  'your-profile-4': yourProfile4,
  'club-account-1': clubAccount1,
  'club-account-2': clubAccount2,
};

export const connectuMeta = {
  title: 'ConnectU',
  subtitle: 'Mobile App',
  overview: [
    'ConnectU is a concept mobile app that helps new Cornell students discover clubs and communities before they arrive on campus, and gives clubs one place to share what they’re doing.',
    'This was my newbie project for Design Consulting at Cornell. I worked with one other designer, and we shared the research and all of the designs.',
  ],
  role: 'Product Designer',
  team: ['2 Designers'],
  timeline: ['1 Semester', 'October – December 2025'],
  skills: ['Figma', 'UX Research', 'Prototyping'],
};

const screens = (prefix, numbers, alts) =>
  numbers.map((number, i) => ({ image: `${prefix}-${number}`, alt: alts[i] }));

export const connectuCopy = {
  context: {
    title: 'The Problem',
    paragraphs: [
      'We were both freshmen, about two months into college, when we started this project. We began by brainstorming the pain points we had faced at Cornell, and how a digital product could ease the transition from high school to university.',
      'It was all still recent, so we had plenty of ideas for what would have helped us. We chose to focus on community: Cornell freshmen find it difficult to connect with others and see what clubs Cornell has to offer before arriving on campus.',
    ],
  },
  finalPrototype: {
    title: 'A Club and Community App',
    paragraphs: [
      'Students can find clubs that match their interests, see what those clubs do, and meet the people in them. Clubs get one place to post updates and show who their members are.',
    ],
    video: '/videos/connectU-thumb.mp4',
    poster: '/images/posters/connectU-thumb.webp',
    label: 'ConnectU prototype: scrolling the home feed and browsing a club profile',
  },
  userResearch: {
    title: 'Looking into our users',
    paragraphs: [
      'To go beyond our own experience, we interviewed 2 freshmen and 2 upperclassmen about finding clubs and community at Cornell.',
    ],
    intro: 'We then grouped our notes into an affinity map of “littles” (freshmen) and “bigs” (upperclassmen):',
    affinityZoom: '/images/zoom/connectu-affinity.webp',
    affinityAlt: 'Affinity map of interview notes, with littles on the left and bigs on the right',
    findingsLabel: 'What we found:',
    groups: [
      {
        title: 'Freshmen',
        points: [
          'Struggled with figuring out clubs and campus life when first arriving at Cornell.',
          'Found upperclassmen guidance helpful for navigating clubs, social life, and academics.',
          'Felt anxious about fitting in and balancing workload with joining communities.',
        ],
      },
      {
        title: 'Upperclassmen',
        points: [
          'Saw clubs as the main entry point for connection, community, and student life.',
          'Liked meeting students with similar interests and felt it made club communities stronger.',
        ],
      },
    ],
    findingsOutro:
      'Our notes also covered what help looks like today. Orientation leaders had too many students to really connect with, so their information felt generic, and more personal connections were seen as more useful. Mentoring drew mixed feelings: one upperclassman wished they had a mentor as a freshman, but a busy schedule also came up as a reason not to be one.',
    hmwIntro: 'This led us to our question:',
    hmw: 'How might we design an app that helps new students discover Cornell’s clubs and community before arriving on campus?',
    competitors: {
      title: 'Looking into our competitors',
      intro: 'We compared the strengths and weaknesses of three existing apps:',
      items: [
        {
          title: 'CampusGroups',
          strengths: 'Cornell affiliated, so it’s accurate and up to date. Lists every student organization and its events.',
          weaknesses: 'Cluttered, not personalized, and no way to meet or contact new people.',
        },
        {
          title: 'Instagram',
          strengths: 'Many users, more information about each club, and class pages with photos and bios.',
          weaknesses: 'No easy way to find new clubs, you have to take the initiative to DM someone, and not everyone is a Cornell student.',
        },
        {
          title: 'YikYak',
          strengths: 'Directly and anonymously connects Cornell students, with optional news and other information.',
          weaknesses: 'Focuses on sharing stories and events rather than finding communities.',
        },
      ],
      takeaway:
        'These apps list organizations and let people share events, but they don’t have ways to find a community or discover new clubs in an interesting manner. We wanted our app to help with both.',
    },
    persona: {
      title: 'Meet Maya Lin',
      intro: 'We brought our research together into one persona. Maya is a Computer Science freshman interested in design, food, and rock climbing. She struggles with:',
      struggles: [
        'Too many clubs, and not knowing where she may actually fit in.',
        'Not knowing anyone yet, when reaching out feels scary.',
        'Campus life, where everything is new with zero prior exposure.',
        'Wanting to see what clubs actually do before committing.',
      ],
      outro: 'We kept Maya with us through to the final designs, where the profile and account screens are hers.',
    },
  },
  ideation: {
    title: 'Crazy 8s',
    intro: 'We used Crazy 8s to get a range of ideas down quickly, sketching profiles, feeds, messaging, and communities:',
    outro: [
      'We wanted community to be at the center of the app. From these sketches, our first idea was a system for freshmen to talk to upperclassmen, imitating a “fam” system of bigs and littles.',
      'Upperclassmen would be the bigs and freshmen would be the littles. This came from our interviews, where freshmen said that guidance from upperclassmen helped with clubs, social life, and academics.',
    ],
    sketches: [
      { image: 'sketches-1', alt: 'Pencil sketches of profile, messaging, community, and feed screens' },
      { image: 'sketches-2', alt: 'Blue sketches of eight screens, including profile, home feed, onboarding, and group chats' },
    ],
  },
  midfi: {
    title: 'Designing the first idea',
    intro: 'Our mid-fidelity designs were built around joining a fam. They followed a new student from creating an account, to setting up a profile, to finding a fam and talking to the people in it.',
    groups: [
      {
        title: 'Login and Onboarding',
        screens: screens('mid-login', [1, 2, 3, 4], [
          'Mid-fi sign in screen',
          'Mid-fi welcome screen',
          'Mid-fi onboarding form asking for year, college, major, and whether you want a fam or friends',
          'Mid-fi profile setup with username, bio, and social links',
        ]),
        description:
          'New users add their year, college, major, and hobbies, then choose whether they’re looking for a fam, friends, or both. They finish with a photo, a bio, and links to their other socials so that other Cornell students can find them.',
      },
      {
        title: 'User Profile',
        screens: screens('mid-profile', [1, 2, 3, 4], [
          'Mid-fi profile with prompts, photo albums, and interests',
          'Mid-fi edit profile screen',
          'Mid-fi photo album',
          'Mid-fi profile preview with social media links',
        ]),
        description:
          'A profile shows whether you’re a big or a little and which fam you belong to. Prompts, photo albums, and interests let others get to know you, and each part can be edited.',
      },
      {
        title: 'Communities and Messaging',
        screens: screens('mid-community', [1, 2, 3, 4], [
          'Mid-fi list of fams to join',
          'Mid-fi fam page listing bigs and littles',
          'Mid-fi messages list with your fam at the top',
          'Mid-fi conversation',
        ]),
        description:
          'Students can search and filter fams, and compare them by description, common majors, and number of bigs and littles. Each fam’s page lists its members, with a button to join or send a request. Once you’re in, your fam sits at the top of your messages, above your direct messages.',
      },
    ],
  },
  pivot: {
    title: 'Rethinking the idea',
    paragraphs: [
      'Even after our interviews, we kept talking to a lot of upperclassmen. We found that communities, including fams, form when people collectively go through the same things or share similar interests.',
    ],
    intro: 'Looking back at our designs, we saw that the fam system had problems:',
    problems: [
      { title: 'No incentive', body: 'Upperclassmen had no reason to talk to random freshmen.' },
      { title: 'Hard to connect', body: 'It’s hard to connect with people only online.' },
      { title: 'Missing the point', body: 'The biggest part of a fam is finding the fam, through shared experiences and interests.' },
    ],
    clubs: {
      title: 'Why clubs',
      paragraphs: [
        'Our interviews had already pointed to clubs as the main entry point for connection. Shifting to club discovery let us keep the same focus on community, in a place where people already share interests.',
        'It’s also hard to find clubs right now. Students rely on word of mouth, LinkedIn, Instagram, CampusGroups, and ClubFest, which are all so spread out that it’s hard to get a list of which clubs are active and who their active members are. Beyond that, the main option is a coffee chat, which means reaching out to a random upperclassman and can be daunting for a freshman.',
        'Clubs face the other side of this problem. Upperclassmen in clubs told us that finding and advertising clubs is sometimes difficult.',
      ],
    },
    directionIntro: 'So we pivoted to finding clubs, with three goals:',
    directions: [
      { title: 'Discovery', body: 'More focus on finding clubs in an interesting manner.' },
      { title: 'Questions', body: 'Still let people ask questions to clubs and people in the same field or major.' },
      { title: 'One place', body: 'Let clubs provide updates in one centralized app.' },
    ],
    outro:
      'Much of our research still applied, so we weren’t starting over. Along the way, the name changed from CULink to ConnectU.',
  },
  hifi: {
    title: 'Wrapping up the designs',
    paragraphs: [
      'With the new direction set, we moved into the final designs. We used reds and pinks over white and beige backgrounds, and the accent colors mark interest tags:',
    ],
    colors: [
      { hex: '#FFFFFF', use: 'Background' },
      { hex: '#F1E7DC', use: 'Background' },
      { hex: '#941212', use: 'Button' },
      { hex: '#CB4F42', use: 'Button' },
      { hex: '#F5918F', use: 'Button, accent' },
      { hex: '#F27BAA', use: 'Accent' },
    ],
    groups: [
      {
        title: 'Getting Started',
        screens: [
          { image: 'login-1', alt: 'Welcome screen: find a community you’ll love' },
          { image: 'login-2', alt: 'Welcome screen for clubs: reach more people' },
          { image: 'login-4', alt: 'Choosing between a personal and a club account' },
          { image: 'onboarding-2', alt: 'Student onboarding: profile style, bio, and interests' },
          { image: 'onboarding-4', alt: 'Club onboarding: community style, website, and topics' },
        ],
        description:
          'The welcome screens speak to both students looking for a community and clubs trying to reach more people. Each creates a different kind of account. Students style a profile, write a bio, and choose at least three interests, which are used to recommend clubs. Clubs style their community, link their website, and add up to four topics to help interested students join.',
      },
      {
        title: 'Home Feed',
        screens: screens('feed', [1, 2, 3, 4], [
          'Home feed with suggested clubs and posts',
          'Home feed with club and student posts',
          'Comments on a post',
          'Sharing a post',
        ]),
        description:
          'The home feed starts with suggested clubs, followed by posts from clubs and students. A club can share a recent trip or announce that applications are open, so its updates are all in one centralized app. People can like, comment on, and share posts, or start their own with a photo or a poll.',
      },
      {
        title: 'Student Life',
        screens: screens('clubs', [1, 2], [
          'List of organizations with members, followers, and topics, highlighting shared interests',
          'Filters for size, school, and interests',
        ]),
        description: [
          'Student Life puts clubs into one list, instead of spread across several places. Each card shows what kind of club it is, its members and followers, and its topics.',
          'Topics that match your own interests are starred, so it’s easy to see where you might fit in. You can also search, or filter by size, school, and interests.',
        ],
      },
      {
        title: 'Find Users and Messaging',
        screens: [
          { image: 'find-1', alt: 'Find Users: a student with their major, clubs, and common interests' },
          { image: 'find-2', alt: 'Find Users: the same student liked' },
          { image: 'messages-1', alt: 'All messages list' },
          { image: 'messages-2', alt: 'A conversation with a shared photo' },
        ],
        description:
          'Reaching out to someone new can be daunting, so Find Users starts with what you share. It shows a student’s major, year, clubs, and the interests you have in common, and you can like them, view their profile, or message them from the same screen. Conversations are kept together in All Messages.',
      },
      {
        title: 'Club and User Profiles',
        screens: screens('profiles', [1, 2, 3, 4], [
          'Club profile: people',
          'Club profile: posts',
          'Club profile: albums',
          'User profile with a prompt, interests, and posts',
        ]),
        description:
          'A club’s profile has a description, a link to its website, and tabs for its people, posts, and albums, so students like Maya can see what a club does and who is in it before committing. User profiles show a student’s major, clubs, prompt, and interests, starring the ones you share, with options to message or follow them.',
      },
      {
        title: 'Your Profile and Club Accounts',
        screens: [
          { image: 'your-profile-1', alt: 'Your profile with a prompt and interests' },
          { image: 'your-profile-4', alt: 'A photo album on your profile' },
          { image: 'club-account-1', alt: 'Switching between your accounts' },
          { image: 'club-account-2', alt: 'Managing the members of your club' },
        ],
        description:
          'Your own profile brings together your bio, prompt, interests, posts, and photo albums. From there, you can switch to a club you run or create a new one. Here, Maya switches to Taste Buds, a food club she is president of, where she can edit its profile, add members, and remove them.',
      },
    ],
  },
  reflection: {
    title: 'Final Thoughts',
    paragraphs: [
      'The pivot taught me not to be so stuck on my original ideas. We had already designed the fam system by the time we saw its problems, so moving forward meant letting go of certain parts and adapting the rest to fit where the project was now. Much of that work still found a place in ConnectU, from our research to the profiles, prompts, photo albums, and messaging.',
      'If we did this again, we would nail down the idea before going so far into the designs, and be more intentional with our UI kit along the way.',
    ],
  },
};
